require('dotenv').config() // I added this line after installing the dotenv package
const { GoogleGenerativeAI } = require("@google/generative-ai");



 const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
 
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a story about a magic backpack.";

  // Use streaming with text-only input
  const result = await model.generateContent(prompt);
  console.log("Here", result);

  const response = result.response;
  const text = response.text();
  console.log("last", text);
}

run();