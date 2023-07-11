const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for user'],
        },
        
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        
        password: {
            type: String,
            required: [true, 'Set password for user'],
        },
        
        subscription: {
            type: Boolean,
            required: false,
            default: false,            
        },

        token: {
            type: String,
            default: null,
        },
        
        verify: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
        },

        shoppingList: {
            type: Array,
            of: {
                ingredientId: {
                    // type: mongoose.Types.ObjectId,
                    // ref: 'Ingredient',
                },
                measure: {
                    type: String,
                },
                recipeId: {
                    type: String,
                    default: ''
                }
            },
            require: [true, 'Add at least one ingredient'],
            default: [],            
        }
    },
    { versionKey: false, timestamps: true }
);

const User = model("users", usersSchema);

module.exports =  User ;