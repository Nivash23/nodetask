const fs = require("fs");
const app = require("./App");
const { PORT } = require("./config");

const content = new Date().toISOString();
const path = new Date();

fs.writeFile("./date-time.txt", content, { flag: "w+" }, (err) => {
  if (err) console.log(err);
  else {
    console.log("content written sucess");
  }
});
app.get("/api/fstext", (req, res) => {
  fs.readFile("./date-time.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    else res.status(200);
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening..`);
});
