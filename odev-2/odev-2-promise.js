let posts = [
	{ title: "Post Başlık 1", details: "Post Detay 1" },
	{ title: "Post Başlık 2", details: "Post Detay 2" },
	{ title: "Post Başlık 3", details: "Post Detay 3" },
	{ title: "Post Başlık 4", details: "Post Detay 4" },
	{ title: "Post Başlık 5", details: "Post Detay 5" },
];

function postList() {
	posts.forEach((elem) => {
		console.log(`${elem.title}: POST: ${elem.details}`);
	});
}

function addList(listElem) {
	return new Promise((resolve, reject) => {
		console.log("Listeye ekleniyor...");
		let len0 = posts.length;
		if (len0 < posts.push(listElem)) {
			resolve("Yeni post başarılı bir şekilde listeye eklendi!");
		} else {
			reject("Yeni post listeye eklenemedi...");
		}
	});
}

postList();
addList({title: "Post Başlık 6", details: "Post Detay 6"})
	.then((result) => {
		console.log(result);
		postList();
	})
	.catch((err) => {
		console.log(err);
	});