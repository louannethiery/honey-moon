var unirest = require("unirest");

var req = unirest("GET", "https://love-calculator5.p.rapidapi.com/api/love-calculator.php");

req.query({
	"yourname": "Romeo",
	"theirname": "Juliet"
});
console.log(yourname);
console.log(theirname);

req.headers({
	"x-rapidapi-key": "2825444912msh860fd3c75e79e06p1fb70ejsn604c80514e71",
	"x-rapidapi-host": "love-calculator5.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});