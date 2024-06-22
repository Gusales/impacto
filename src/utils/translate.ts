// src/utils/translate.js
import axios from 'axios';

const API_KEY = 'AIzaSyDiH4hfndg-ZtPMZoadmX2OFg7BhbEirsU';
const URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

export const translateText = async (text: string, targetLanguage: string) => {
  try {
    const response = await axios.post(URL, {
      q: text,
      target: targetLanguage
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text;
  }
};
