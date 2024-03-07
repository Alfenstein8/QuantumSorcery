const { Server } = require("socket.io");
const { createServer } = require("http");
const express = require("express");
const { join } = require("path");
const app = express();

const { action } = require("./gameControllers/game.js");

const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});
const PORT = 3000;

app.use(express.json());
app.use(express.static(join(__dirname, "../client")));

io.on("connection", (socket) => {
  console.log("User connected:" + socket.id);
});

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

module.exports = { app, express, server, io };
