export const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler: (req, res) => {
      return res.writeHead(201).end();
    },
  },
];
