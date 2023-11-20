import express, { response } from "express";
import cors from "cors";
import fs from "fs";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/login", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/data.json", (readError, data) => {
    let saveData = JSON.parse(data);
    const Login = saveData.map((d) => {
      if (d.username = body.UserName){
        if( d.key = body.key){
          response.json(true)
        }
      }
    });
    fs.writeFile("./data/data.json", JSON.stringify(Login), (writeError) => {
      if (writeError) {
        response.json({
          status: "error",
        });
      } else {
        response.json({
          status: "success",
          data: saveData,
        });
      }
    });
  });
});
app.post("/SignUp", (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", (readError, data) => {
    let saveData = JSON.parse(data);
    const newUser = {
      id: Date.now().toString(),
      username: body.UserName,
      password: body.key,
    };
    saveData.push(newUser);
    fs.writeFile("./data/data.json", JSON.stringify(saveData), (writeError) => {
      if (writeError) {
        response.json({
          status: "error",
        });
      } else {
        response.json({
          status: "success",
          data: saveData,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
