const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const keys = require("../services/keys");

const userSchema = new mongoose.Schema({
  summonerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  region: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false,
    required: true
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, keys.JWTPrivateKey, {
    expiresIn: "1h"
  });
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    summonerName: Joi.string()
      .max(255)
      .required(),
    region: Joi.string()
      .min(3)
      .max(3)
      .required(),
    active: Joi.boolean().required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
