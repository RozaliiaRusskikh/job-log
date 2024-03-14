import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw Error("OPEN_API_KEY is not set");
}

const openai = new OpenAI({ apiKey });

export default openai;

export async function getEmbedding(text: string) {}
