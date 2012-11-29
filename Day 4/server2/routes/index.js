
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.data = function(req, res ) {

    res.send({
        name: 'Jimmy',
        color: 'red'
    });

};