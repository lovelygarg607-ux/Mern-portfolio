import { Profilemodel } from "../models/Profilemodel.js"
import { uploadoncloudinary } from "../utils/Cloudinary.js"

const addProfileController = async (req, res) => {
  try {
    const { personname, gender, alternateNo} = req.body;

   
  
    if ([personname, gender, alternateNo, email].some(field => field?.trim() === "")) {
      return res.status(400).send({
        message: "All fields are required",
        status: "notsuccess"
      })
    }


    const profileimagelocalpath = req.files?.profileImage?.[0]?.path

    if (!profileimagelocalpath) {
      return res.status(400).send({
        message: "Profile image is required",
        status: "notsuccess"
      })
    }

   
    const profileimage = await uploadoncloudinary(profileimagelocalpath)

    if (!profileimage?.url) {
      return res.status(500).send({
        message: "Image upload failed",
        status: "notsuccess"
      })
    }

  
    // 🔹 Create profile
    const person = await Profilemodel.create({
      personname,
      gender,
      alternateNo,
      email,
      profileImage: profileimage.url
    })

    return res.status(201).send({
      message: "Profile created successfully",
      status: "success",
      person
    })

  } catch (error) {
    return res.status(500).send({
      message: `Profile controller error: ${error.message}`,
      status: "notsuccess"
    })
  }
}

export { addProfileController }

