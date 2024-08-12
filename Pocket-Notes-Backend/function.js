export function formatString(str) {
  const newString = str.toLowerCase().replace(/\s+/g, "-");
  return newString + Math.ceil(Math.random() * 1000);
}

export function formatDateAndTime() {
  const date = new Date();
  const optionsDate = { day: "2-digit", month: "short" };
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };

  const formattedDate = date.toLocaleDateString("en-US", optionsDate);
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

  return { formattedDate, formattedTime };
}
