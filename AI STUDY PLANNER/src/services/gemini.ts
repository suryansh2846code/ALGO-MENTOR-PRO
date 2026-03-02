import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const generateStudyPlan = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash", // Using flash for speed
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
