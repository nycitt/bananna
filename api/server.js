/* 
	Server package init 
*/
var restify = require('restify'),
		server = restify.createServer();
		server.use(restify.bodyParser({ mapParams: true }));


/* 
	DB connection 
*/
var mongoose = require('mongoose'),
		db = mongoose.connect("mongodb://localhost/banana");


/* 
	Models 
*/

// Provisions
var provisionSchema = new db.Schema({
	title: String,
	subtitle: String,
	time_started: Date,
	time_ended: Date
});
var	Provision = db.model('provisions', provisionSchema);

// Votes
var voteSchema = new db.Schema({
	metric: String,
	timestamp: {
		type: Date,
		'default': Date.now
	}
});
var	Vote = db.model('votes', voteSchema);


/*
	methods
*/
// Provision
provision = {
	get: function(req,res,next) {
		var id = req.params.id;
		Provision.findById(id, function(err,provision){
			if(err) { return err; }
			else {
				res.send(provision);
				return next();
			}
		});
	},
	post: function(req,res,next) {
		provision = new Provision(req.params);
		provision.save();
		res.send(provision);
		return next();
	},
	put:function(req,res,next){
		var id = req.params.id;
		Provision.findByIdAndUpdate(id, req.params.update, function(err, updatedItem) { if(err) { res.send(err);} else { res.send(updatedItem); return next();} });
	}
};
// Vote
vote = {
	getVotes: function(req,res,next) {
		Vote.find(function(err,votes){
			if(err) { return err; }
			else {
				res.send(votes);
				return next();
			}
		});
	},
	post: function(req,res,next) {
		vote = new Vote(req.params);
		vote.save();
		res.send(vote);
		return next();
	}
};


/*
	routes
*/
// Provision
server.get('/provision/:id', provision.get);
server.post('/provision', provision.post);
server.put('/provision/:id', provision.put);
// Vote
server.get('/votes', vote.getVotes);
server.post('/vote', vote.post);


/*
	server
*/
console.log("Server Up.");
server.listen(8080);
