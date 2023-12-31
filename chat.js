require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "Hello, I am a software engineer interested in machine learning, AI and quantum computing.",
      },
      {
        role: "model",
        parts: "Great to meet you. What would you like to know?",
      },
    ],
    generationConfig: {
      maxOutputTokens: 600,
    },
  });

  const msg = "What's the best path to start building real world quantum computing projects?";

  const result = await chat.sendMessageStream(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();