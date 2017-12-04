const fs 					= require('fs');
const path				= require('path');
const async				= require('async');
const handlebars 	= require('handlebars');

const post				= require('../model/post');

const index	= (req, callback) => {
	const dict	= {};
	const query	= req.query;
	
	async.waterfall([
		(flowCallback) => {
			post.findAll(query, (err, data, field) => {
				if (err) { return flowCallback(err); }
				dict.result = data; 
				return flowCallback();
			});
		},
		(flowCallback) => {
			fs.readFile(path.join(__dirname, '../view/post_item.html'), { encoding: 'utf-8' }, (err, content) => {
				if (err) { return flowCallback(err); }
				dict.source	= content; 
				return flowCallback();
			});
		},
		(flowCallback) => {
			const template 		= handlebars.compile(dict.source);
			const first_item	= dict.result[0] || { title: 'dummy title', content: 'dummy content' };

			dict.retval 			= template({
				post_title: first_item.title,
				post_content: first_item.content,
			});
			return flowCallback();
		}
	], (err) => {
		if (err) { return callback(err); }
		return callback(dict.retval);
	});
};

module.exports = { index }