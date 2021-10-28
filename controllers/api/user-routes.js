const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({

    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({

    })
    .then (dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST /api/users
router.post('/', (req, res) => {});
    User.create({

    })
// PUT /api/users/1
router.put('/:id', (req, res) => {});
    User.update({

    })
// DELETE /api/users/1
router.delete('/:id', (req, res) => {});
    User.destoy({

    })
    
module.exports = router;