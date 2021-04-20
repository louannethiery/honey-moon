var unirest = require("unirest");

var req = unirest("GET", "https://love-calculator.p.rapidapi.com/getPercentage");

req.query({
	"fname": "John",
	"sname": "Alice"
});

req.headers({
	"x-rapidapi-key": "2825444912msh860fd3c75e79e06p1fb70ejsn604c80514e71",
	"x-rapidapi-host": "love-calculator.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});