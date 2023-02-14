const exp = require('express');
const app = exp();
const port = process.env.PORT || 5010;

const options = {
    extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg', 'pdf'],
    index: ['index.html'],
}
app.use(express.static("public", options));

app.get("/", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/index.html");
});
app.get("/resume", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/resume.html");
});
app.get("/resume", function(req, res) {
    // res.send("iam cherry!!!");
    res.sendFile(__dirname + "/card.html");
});
app.listen(port, function() {
    console.log("server running on http://localhost:" + port);
});