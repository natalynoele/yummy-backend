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
            default: "",
        },
        
        token: String,
        shoppingList: {
            type: Schema.Types.ObjectId,
            ref: "ShoppingList",
        },

    },
    { versionKey: false, timestamps: true }
);

usersSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("Email already exists"));
  } else {
    next(error);
  }
});

const User = model("users", usersSchema);

module.exports =  User ;