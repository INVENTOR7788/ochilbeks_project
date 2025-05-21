const express = require("express")
const mysql = require("mysql")
const app = express()
var cors = require("cors")
app.use(cors())


var connection  = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "movies"
});
app.post("/api/movies", (req, res) => {
    connection.query("SELECT * FROM `movies`", (err, result) => {
        if(!err) {
            var result1 = JSON.stringify(result);
            res.json(result1);
        }
    })
})

app.get("/api/movies/create", (req, res) => {
    connection.query(`INSERT INTO movies(movie_id, movie_title, movie_views)VALUES(NULL, '${req.query.title}', ${req.query.views})"`, (err, result) => {
        if(!err) {
            res.json({"status": "successfully inserted!", "errors": err});
        setTimeout(() => {
            window.location.href = "file:///home/hzkl/Documents/ochilbeks_project/index.html"
        }, 1000)
        }
    });
})

app.get("/api/movies/delete/:id", (req, res) => {
    connection.query(`DELETE FROM movies WHERE movie_id = '${req.params.id}'`, (err, result) => {
        res.json({"status": "successfully deleted!", "errors": err});
        setTimeout(() => {
            window.location.href = "file:///home/hzkl/Documents/ochilbeks_project/index.html"
        }, 1000)
    })
})

app.listen(3031, () => {
    console.log("server is running in http://localhost:3031/");
})