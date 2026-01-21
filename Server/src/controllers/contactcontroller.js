import Contactmodel from "../models/Contactmodel.js";






const contactcontroller = async (req, res) => {
    try {
        const { name,email,subject,message } = req.body;

     if ([name, email, subject, message].some(field => !field || field.trim() === "")) {
  return res.status(200).send({
    message: "All fields are required",
    status: "not success"
  });
}
      

        const contact = await Contactmodel.create(
            {


              name,email,subject,message
                

            }
        )


        res.status(200).send(
            {
                message: "message send successfully",
                status: "success",
                contact
            }
        )







    } catch (error) {

        res.status(500).send(
            {
                mesasge: `contact controller error ${error}`,
                status: "failed"
            }
        )
    }


}

const getcontactlist = async (req, res) => {
    try {

        const page = req.query.page
        const limit = req.query.limit || 10


        const pageskip = (page - 1) * limit


        const contacts = await Contactmodel.find().skip(pageskip).limit(limit)
        const total = await Contactmodel.countDocuments()

        res.status(200).send(
            {
                status: "success",
                totalpages: Math.ceil(total / limit),
                currentPage: page,
                totalrecords: total,
                contacts
            
            }
        )

    } catch (error) {


        res.status(500).send(
            {
                mesage: `contact list error ${error}`,
                status: "failed"
            }
        )
    }







}









export { contactcontroller ,getcontactlist }
