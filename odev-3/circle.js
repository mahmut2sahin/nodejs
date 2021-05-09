function circleArea(radi) {
	let area = Math.PI * radi ** 2;
	return area;
}

function circleCircumference(radi) {
	let circum = 2 * Math.PI * radi;
	return circum;
}

module.exports = {
	circleArea,
	circleCircumference,
};
