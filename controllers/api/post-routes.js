const router = require('express').Router();
const { post } = require('.');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {
    console.log('===============');
    Post.findAll({
        attributes: [

        ]
    })
})