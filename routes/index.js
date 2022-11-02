var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* USER ROUTES ********************************************************************************************** USER ROUTES */ 

//sign-up
router.post('/sign-up', userController.sign_up);

//log in
router.get('/log-in', userController.log_in);

//GET log out
router.get('/log-out', userController.log_out);




/* POST ROUTES ********************************************************************************************** POST ROUTES */ 

//GET all posts
router.get('/all-posts', postController.get_posts);

//GET individual post
router.get('/post/:id', postController.get_post);

//POST add post
router.post('/add-post', postController.create_post)

//PUT update individual post
router.put('/post/:id', postController.update_post);

//DELETE individual post
router.delete('/post/:id', postController.delete_post)

/* COMMENT ROUTES ********************************************************************************************** COMMENT ROUTES */ 

//GET all of a post's comments
router.get('/post/:postid/all-comments', commentController.get_comments);

//GET single comment of a post
router.get('/post/:postid/comments/:commentid', commentController.get_comment);

//PUT edit single comment
router.get('/post/:postid/comments/:commentid', commentController.update_comment);

//DELETE single comment
router.get('/post/:postid/comments/:commentid', commentController.delete_comment);


module.exports = router;
