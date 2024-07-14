import { useState, useEffect } from "react";
 
function getStorageValue(key:string, defaultValue:string) {
  const saved = localStorage.getItem(key);
  if(saved) {
    return saved
 }
  return defaultValue
}
 
export const useLocalStorage = (key: string, defaultValue: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
 
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
 
  return [value, setValue];
};