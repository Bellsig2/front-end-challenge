export const randomString = (min, max) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = min; i < max; i++) {
    randomString += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomString;
};
