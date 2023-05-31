import { log } from "node:console";
import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = [];

  await json(req, res);

  const route = routes;

  return res.end();
});

server.listen(3333);
