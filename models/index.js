const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect('mongodb+srv://JamesClarke:password1234@advwdb.hqrcm.mongodb.net/warbler?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
    useUnifiedTopology: true,
    keepAlive: true
    // useMongoClient: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err =>{
	console.log('Error', err.message);
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
