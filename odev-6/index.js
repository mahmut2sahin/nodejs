/*
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa');
const app = new Koa();

// response
app.use((ctx,) => {
  ctx.body = 'Hello Koa';
  const url = ctx.request.url
  if (url === "/index") {
    ctx.type = ".html" 
    ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ!</h1>" 
  } else if (url === "/about") {
    ctx.type = ".html" 
    ctx.body = "<h1>ABOUT SAYFASINA HOSGELDINIZ!</h1>" 
  } else if (url === "/contact") {
    ctx.type = ".html" 
    ctx.body = "<h1>CONTACT SAYFASINA HOSGELDINIZ!</h1>" 
  } else if (url === "/") {
    ctx.type = ".html" 
    ctx.body = "<h1>HELLO KOA!</h1>" 
  } else {
    ctx.type = ".html" 
    ctx.body = "<h1>404 SAYFA BULUNAMADI!</h1>" 
  }
});

app.listen(3000);