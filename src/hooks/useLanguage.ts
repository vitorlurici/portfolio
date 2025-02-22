import { useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"en" | "pt-br">("en");
  return { language, setLanguage };
};
