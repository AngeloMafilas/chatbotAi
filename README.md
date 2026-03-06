# 🤖 ChatBot AI

A modern AI-powered chatbot built with **Nuxt.js** and powered by **Groq AI** — delivering lightning-fast responses with a clean, intuitive interface.

🔗 **Live Demo:** [https://chatbot-ai-36vw.vercel.app/](https://chatbot-ai-36vw.vercel.app/)

---

## ✨ Features

- 💬 Real-time AI chat powered by Groq's ultra-fast inference engine
- ⚡ Built with Nuxt 4 for fast, modern performance
- 🎨 Styled with Tailwind CSS for a clean, responsive UI
- 🔒 Secure API key handling via environment variables
- 📱 Fully responsive — works seamlessly on desktop and mobile
- 🚀 Deployed on Vercel for instant global availability

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Nuxt.js 4](https://nuxt.com/) | Full-stack framework |
| [Vue 3](https://vuejs.org/) | Frontend UI |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Groq API](https://groq.com/) | Ultra-fast AI inference |
| [Vercel](https://vercel.com/) | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A [Groq API key](https://console.groq.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/AngeloMafilas/chatbotAi.git

# Navigate into the project folder
cd chatbotAi/bruno-chatbot

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the `bruno-chatbot/` directory:

```env
GROQ_API_KEY=your_groq_api_key
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Fork this repository
2. Import it into [Vercel](https://vercel.com/)
3. Set the **Root Directory** to `bruno-chatbot`
4. Add your `GROQ_API_KEY` as an environment variable
5. Deploy!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by [@AngeloMafilas](https://github.com/AngeloMafilas)
