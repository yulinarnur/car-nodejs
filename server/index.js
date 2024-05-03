const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.html";
        break;
      case "/cars":
        req.url = "car_search.html";
        break;
    }
    let filePath = "public/" + req.url;
    // Baca ekstensi file
    const extname = path.extname(filePath);

    // content type berdasarkan ekstensi file
    let contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".jpg":
        contentType = "image/jpeg";
        break;
      case ".svg":
        contentType = "image/svg+xml";
        break;
    }

    // Baca file dari sistem file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          // File tidak ditemukan
          res.writeHead(404);
          res.end("404 Not Found");
        } else {
          res.writeHead(500);
          res.end("Internal Server Error");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        // Kirim data file sebagai respons
        res.end(data);
      }
    });
  })
  .listen(port, "localhost", () => {
    console.log(
      "Server sudah berjalan, silahkan buka http://localhost:%d",
      port
    );
  });
