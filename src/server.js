import http from "http";
import "dotenv/config";
import { app } from "./app";

const server = http.createSerever(app);

const port = proccess.env.port;
server.listen(port, () => {
  console.log(`serever is running at ${port}`);
});
