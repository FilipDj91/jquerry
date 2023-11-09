const path = require("path");

module.exports = {
    entry: "./main.js",
    output: {
        filename: "scripts.js",
        path: path.join(__dirname, "dist")
    }
}