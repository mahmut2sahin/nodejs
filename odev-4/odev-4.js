/* 
! employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
? Bu veriyi okuyalım. (READ)
* Bu veriyi güncelleyelim.
todo Dosyayı silelim. 
*/

// Fonksiyonlar "Sync" yapıldı çünkü asenkronda her zaman aynı sonucu vermiyor

const fs = require("fs");

// CREATE
fs.writeFileSync("employees.json", `{\r\n"name": "Employee 1 Name",\r\n"salary": 2000,\r\n`)

// READ
let data = fs.readFileSync("employees.json", "utf8")
console.log(data);

// UPDATE
fs.appendFileSync("employees.json", `"Age": 24\r\n}`)

// READ NEW FILE
data = fs.readFileSync("employees.json", "utf8")
console.log(data);

// DELETE
fs.unlinkSync("employees.json");