export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event);

    // Store customer name in cookie to use in conversation
    setCookie(event, 'customer-name', String(queryParams.customer || 'Customer'));
    setCookie(event, 'chat-history', JSON.stringify([]));

    return { success: true };
});