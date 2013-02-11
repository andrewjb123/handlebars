
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'hbs partials example' });
};

exports.testpage = function(req, res){
  res.render('testpage', { title: 'test page' });
};