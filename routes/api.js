const express = require('express');
//const Posts = require('../../../React-Tutorials-master/React-Tutorials-master/React and HTTP/react-http/models/posts');

const router = express.Router();

const Posts = require('../models/posts');


// Routes
router.get('/posts', (req, res) => {

    Posts.find({  })
        .then((data) => {
            //console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newBlogPost = new Posts(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;