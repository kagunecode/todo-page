const erasePage = () => {
	const content = document.querySelector("#content");
	const childElement = content.childElementCount;

	for (let i = 0; i < childElement; i++) {
		content.removeChild(content.lastElementChild);
	}
};

export default erasePage;
