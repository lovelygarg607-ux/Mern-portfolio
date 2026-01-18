import mongoose from "mongoose"

const skillschema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            enum: ["Frontend", "Backend", "Database", "Tools"],
            required: true,
        },

        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            default: "Intermediate"
        },
        iconimage: {
            type: String,
            required:true


        },

      

    },

    {
        timestamps: true
    }



)


export default mongoose.model("Skill", skillschema);