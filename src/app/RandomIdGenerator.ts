function generateRandomId(length: number): string {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Available characters
  let randomId = "";

  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return randomId;
}

//   console.log(generateRandomId(8));  // Example: "derv1ws0"

function generateCustomRandomId(prefix: string, length: number): string {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomId = prefix;

  for (let i = prefix.length; i < length; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return randomId;
}

//   console.log(generateCustomRandomId('derv', 8));  // Example: "derv1ws0"

export default { generateRandomId, generateCustomRandomId };
