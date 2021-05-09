let posts = [
	{ title: "Post Başlık 1", details: "Post Detay 1" },
	{ title: "Post Başlık 2", details: "Post Detay 2" },
	{ title: "Post Başlık 3", details: "Post Detay 3" },
	{ title: "Post Başlık 4", details: "Post Detay 4" },
	{ title: "Post Başlık 5", details: "Post Detay 5" },
];

function postList() {
	return new Promise((resolve, reject) => {
		posts.forEach((elem) => {
			console.log(`${elem.title}: POST: ${elem.details}`);
		});
		resolve("Database başarılı bir şekilde listelendi!");
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

async function processData() {
	try {
		const postedList = await postList();
		console.log(postedList);
		const addedList = await addList({
			title: "Post Başlık 6",
			details: "Post Detay 6",
		});
		console.log(addedList);
		postList();
	} catch (error) {
		console.log(error);
	}
}

processData();