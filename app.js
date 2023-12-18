const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  console.log("first");
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Write a story about a magic backpack.";

  // Use streaming with text-only input
  const result = await model.generateContent(prompt);
  console.log("Here", result);

  const response = result.response;
  const text = response.text();
  console.log("last", text);
}

run();