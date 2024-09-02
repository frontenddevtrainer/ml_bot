import { createContext, useState } from "react";
import en_gb from "../../messages/en-gb.json";
import hi_in from "../../messages/hi-in.json";
import { useContext } from "react";

export const LANGAUGES = {
  HINDI: "hi_in",
  ENGLISH: "en_gb",
};

const LANGAUGE_MESSAGES = {
  hi_in: hi_in,
  en_gb: en_gb,
};

const Translate = createContext({
  messages: LANGAUGE_MESSAGES.en_gb,
  change: () => {},
  language: LANGAUGES.ENGLISH,
});

const { Provider } = Translate;

Translate.displayName = "Translate";

export const TranslateProvider = ({ children }) => {
  const [messages, setMessages] = useState(LANGAUGE_MESSAGES.en_gb);
  const [langauge, setLangauge] = useState(LANGAUGES.ENGLISH);

  const change = (langauge = LANGAUGES.ENGLISH) => {
    setLangauge(langauge);
    setMessages(LANGAUGE_MESSAGES[langauge]);
  };

  return <Provider value={{ messages, langauge, change }}>{children}</Provider>;
};

export const useTranslate = () => {
  const { messages, change } = useContext(Translate);
  return {
    translate: (message) => {
      return messages[message] || null;
    },
    change,
  };
};
