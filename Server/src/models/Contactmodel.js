import mongoose from "mongoose"

const contactschema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
           
            required: true,
        },

        subject: {
            type: String,
             required: true,

          
        },
        message: {
            type: String,
            required:true,


        },

      

    },

    {
        timestamps: true
    }



)


export default mongoose.model("contact", contactschema);




