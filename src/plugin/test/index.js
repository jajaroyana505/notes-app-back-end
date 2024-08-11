const myPlugin = {
  name: "myPlugin",
  version: "1.0.0",
  register: async function (server, options) {
    // Tambahkan beberapa routes
    server.route([
      {
        method: "GET",
        path: "/hello",
        handler: (request, h) => {
          return "Hello, World!";
        },
      },
      {
        method: "GET",
        path: "/greet/{name}",
        handler: (request, h) => {
          const name = request.params.name;
          return `Hello, ${name}!`;
        },
      },
    ]);
  },
};

exports.plugin = myPlugin;
