export function formatString(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export const getInitials = (item) => {
  const words = item.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0);
  } else {
    return words[0].charAt(0) + words[1].charAt(0);
  }
};
