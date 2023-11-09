const parseSvg = (svgString) => {
	return new DOMParser()
		.parseFromString(svgString, "image/svg+xml")
		.querySelector("svg");
};

export default parseSvg;
