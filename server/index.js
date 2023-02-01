const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const job = require("./routes/Job");
const user = require("./routes/user");
const auth = require("./midlleware/auth");
const login = require("./routes/login");
const app = express();
const port = 4000;

mongoose.set("strictQuery", true);

app.use(cors());
app.use(express.json());
mongoose

  .connect("mongodb://127.0.0.1:27017/final-project") // connect to the database
  .then(() => console.log("connected to database"))
  .catch((err) =>
    console.log(`error with connecting to database: ${err.message}`)
  );

app.use("/api/jobs", auth, job);
app.use("/api/users", user);
app.use("/login", login);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
