const express	= require('express');

const router			= express.Router();
const controller	= require('../controller/post');

router.get('/', (req, res) => {
	controller.index(req, (view) => res.send(view));
});
router.get('/add', (req, res) => {
	res.send('LIST POST YG TERSEDIA');
});
router.get('/:post_id', (req, res) => {
	res.send('SHOW POST WITH ID = ' + req.params.post_id);
});
router.get('/:post_id/edit', (req, res) => {
	res.send('Edit Post ' + req.params.post_id);
});
router.get('/:post_id/delete', (req, res) => {
	res.send('Delete Post' + req.params.post_id);
});

module.exports	= router;