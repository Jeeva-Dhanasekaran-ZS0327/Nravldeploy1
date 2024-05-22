"use client";
export const getFromSessionStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const storedData = window.sessionStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }
};

export const saveToSessionStorage = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(key, JSON.stringify(data));
  }
}
