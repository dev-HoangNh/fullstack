import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");// co the dung duoc nodejs trong html
    app.set("views", "./src/views")
}

module.exports = configViewEngine;