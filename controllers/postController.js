var express = require('express');
var router = express.Router();
const { body, validationResult } = require("express-validator");

const Post = require("../models/post");