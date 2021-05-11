// createServer metodunu kullanacağız.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
// port numarası olarak 5000'i kullanalım.
// Kolay gelsin.

const http = require("http");

// creating server
const server = http.createServer((req, res) => {
	const url = req.url;
	console.log("İstek geldi");

	if (url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>Index sayfasina hosgeldiniz!</h2>", "utf-8");
	} else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>About sayfasina hosgeldiniz!</h2>", "utf-8");
	} else if (url === "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>Contact sayfasina hosgeldiniz!</h2>", "utf-8");
	} else {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h2>404 SAYFA BULUNAMADI!</h2>", "utf-8");
	}

	res.end();
});

const port = 5000;

// starting server
server.listen(port, () => {
	console.log(`Sunucu port ${port}'de başlatıldı.`);
});
