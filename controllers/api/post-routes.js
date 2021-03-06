const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {
    console.log('===============');
    Post.findAll({
        attributes: [
            'id',
            'title',
            'contents',
            'create_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: [''],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post("/",withAuth, (req,res) => {
    console.log(req.body)
     Post.create({
         ...req.body,
         user_id: req.session.user_id
     })
     .then(dbPostData => res.json(dbPostData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;