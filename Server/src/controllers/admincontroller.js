import Adminmodel from "../models/Adminmodel.js";
import bcrypt from "bcrypt"


const admincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;


    if ([email, password].some(field => !field || field.trim() === "")) {
      return res.status(200).send({
        message: "All fields are required",
        status: "not success"
      });
    }


    const admin = await Adminmodel.findOne({ email })
    console.log(admin)
    if (!admin) {
      return res.status(200).send({
        message: "Invalid email or password",
        status: "not success"
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      admin.password
    );
    console.log("Plain password:", password);
    console.log("Hashed password:", admin.password);
    console.log("Password match:", isPasswordCorrect);
    if (!isPasswordCorrect) {
      return res.status(200).send({
        message: "Invalid email or password",
        status: "not success"
      });
    }






    const token = admin.generateAccessToken();


    return res.status(200).send({
      message: "Admin login successfully",
      status: "success",
      token
    });

  } catch (error) {
    return res.status(500).send({
      message: "Login controller error",
      error: error.message,
      status: "failed"
    });
  }
};

export { admincontroller }
