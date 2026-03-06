import Groq from 'groq-sdk';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const customerName = getCookie(event, 'customer-name') || 'Customer';
    const historyRaw = getCookie(event, 'chat-history') || '[]';
    const history = JSON.parse(historyRaw);

    const userMessage = body.message;

    if (!userMessage) {
        return { error: 'No message provided' };
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const messages = [
        {
            role: 'system',
            content: `You are Bruno, a helpful customer support agent. You are currently helping a customer named ${customerName}. Be friendly, professional and concise.`,
        },
        ...history,
        {
            role: 'user',
            content: userMessage,
        },
    ];

    const completion = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages,
    });

    const response = completion.choices[0]?.message?.content ?? '';

    history.push(
        { role: 'user', content: userMessage },
        { role: 'assistant', content: response }
    );
    setCookie(event, 'chat-history', JSON.stringify(history));

    return { message: response };
});