import mongoose from "mongoose";


const profileschema = new mongoose.Schema(
    {

        profileImage: {
            type: String,
            required: true


        },


        personname: {
            type: String,
            required: true,
        },



        gender: {
            type: String,
            required: true

        },

        alternateNo: {
            type: String,
            required: true

        },

    





    },
    {
        timestamps: true
    }

)

export const Profilemodel = mongoose.model("profile", profileschema);