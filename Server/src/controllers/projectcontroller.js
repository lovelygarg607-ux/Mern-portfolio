import { projectmodel } from "../models/Projectmodel.js";
import { uploadoncloudinary } from "../utils/Cloudinary.js";


const addprojectcontroller = async (req, res) => {
    try {
        const { title, description, techStack, githubLink } = req.body;

        if ([title, description, techStack, githubLink].some((field) => {
            field.trim() === ""
        }
        ))

            return res.status(200).send(
                {
                    message: "All field are required",
                    status: "not success"
                }
            )


        const existingproject = await projectmodel.findOne({ title })

        if (existingproject) {

          return  res.status(200).send({
                message: "project added already",
                status: "notsuccess"
            })
        }



        const projectimagepath = req.files?.projectimage?.[0]?.path;

        console.log(projectimagepath)



        if (!projectimagepath) {
            return res.status(200).send(
                {
                    message: "Project image is required",
                    status: "not success"
                }
            )
        }




        const projectimage = await uploadoncloudinary(projectimagepath)

        console.log(projectimage)


        const project = await projectmodel.create(
            {

                title, description, techStack, githubLink, projectimage: projectimage.url,

            }
        )


      return   res.status(200).send(
            {
                message: "project create successfully",
                status: "success",
                project
            }
        )







    } catch (error) {

        res.status(500).send(
            {
                mesasge: `project controller error ${error}`,
                status: "failed"
            }
        )
    }


}


const getprojectlist = async (req, res) => {
    try {

        const page = req.query.page
        const limit = req.query.limit || 10


        const pageskip = (page - 1) * limit


        const projects = await projectmodel.find().skip(pageskip).limit(limit)
        const total = await projectmodel.countDocuments()

        res.status(200).send(
            {
                status: "success",
                totalpages: Math.ceil(total / limit),
                currentPage: page,
                totalrecords: total,
                projects
            }
        )

    } catch (error) {


        res.status(500).send(
            {
                mesage: `project list error ${error}`,
                status: "failed"
            }
        )
    }







}







export { addprojectcontroller, getprojectlist }

