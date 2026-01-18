import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description:{
            type:String,
            required:true
        },

        techStack:{
            type:[String],
            required:true
        },

        githubLink:{
            type:String,
            required:true
        },

        projectimage:{
            type:String,
            required:true
        }

    },
    {
        timestamps:true,
    }
)


export const projectmodel = mongoose.model("project", projectSchema)