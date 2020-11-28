const express = require("express");
const mongoose = require("mongoose");

const path = require("path");

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected"));

app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/user"));
app.use("/api/item", require("./routes/item"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
