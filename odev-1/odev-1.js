// ! yarıçap konsol argumenti olarak girilecek
console.log(`Yarıçapı ${process.argv[2]} olan dairenin alanı: ${(((process.argv[2]) ** 2) * Math.PI).toFixed(2)}`);