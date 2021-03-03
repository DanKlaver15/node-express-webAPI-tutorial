const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://dklaver15:@cluster1.ho7mw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));