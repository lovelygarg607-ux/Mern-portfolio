import Skillmodel from "../models/Skillmodel.js";
import { uploadoncloudinary } from "../utils/Cloudinary.js";





const addskillcontroller = async (req, res) => {
    try {
      const { name, level, category,  } = req.body;

        if ([name , level , category].some((field) => {
            field.trim() === ""
        }
        ))

            return res.status(200).send(
                {
                    message: "All field are required",
                    status: "not success"
                }
            )


        const existingskill = await Skillmodel.findOne({ name })

        if (existingskill) {
            return res.status(200).send({
                message: "skill added already",
                status: "notsuccess"
            })
        }






        const iconimageimagepath = req.files?.iconimage[0].path
        console.log(iconimageimagepath)



        if (!iconimageimagepath) {
            return res.status(200).send(
                {
                    message: "Skill image is required",
                    status: "not success"
                }
            )
        }

        const iconimage = await uploadoncloudinary(iconimageimagepath)

        console.log(iconimage)


        const skill = await Skillmodel.create(
            {

                name, level, category, iconimage: iconimage.url,

            }
        )


        res.status(200).send(
            {
                message: "skill create successfully",
                status: "success",
                skill
            }
        )








    } catch (error) {

        res.status(500).send(
            {
                mesasge: `skill controller error ${error}`,
                status: "failed"
            }
        )
    }


}


const getskillslist = async (req, res) => {
    try {

        const page = req.query.page
        const limit = req.query.limit || 10


        const pageskip = (page - 1) * limit


        const skills = await Skillmodel.find().skip(pageskip).limit(limit)
        const total = await Skillmodel.countDocuments()

        res.status(200).send(
            {
                status: "success",
                totalpages: Math.ceil(total / limit),
                currentPage: page,
                totalrecords: total,
                skills
            }
        )

    } catch (error) {


        res.status(500).send(
            {
                mesage: `skill list error ${error}`,
                status: "failed"
            }
        )
    }







}









export { addskillcontroller, getskillslist }