import bcrypt from "bcrypt";

const password = "1234"

const createHash = async () => {
  const hash = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hash);
};

createHash();
