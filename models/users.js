const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
        },
        
        password: {
            type: String,
            required: true,
        },
        
        subscription: {
            type: Boolean,
            required: false,
            default: false,            
        },

        subscriptionToken: {
            type: String,
            enum: subscriptionList,
            default: "",
        },
        
        token: String,

    },
    { timestamps: true }
);

const User = model("users", usersSchema);

module.exports =  User ;