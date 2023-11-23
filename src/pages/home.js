import renderCircles from "../elements/bgCircles";
import parseSvg from "../functions/svgParser";
import ftImage from "../assets/img/homepageDark.png";

const loadHome = () => {
  const general = document.querySelector("#general");

  const content = document.createElement("section");
  content.id = "content";
  content.className =
    "relative font-sans flex flex-col h-[calc(100vh-5rem)] bg-white dark:bg-slate-800 duration-500";
  general.prepend(content);

  content.prepend(renderCircles().cloneNode(true));

  const heroSection = document.createElement("div");
  heroSection.className = "flex-1 flex items-center mx-auto z-10";

  const container = document.createElement("div");
  container.className = "flex-1 flex items-center mx-auto z-10";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col items-center";

  const mainText = document.createElement("h1");
  mainText.className = "text-7xl font-bold text-center dark:text-white";
  mainText.innerText = "Create handy to-do \n lists in a simple way!";

  const descText = document.createElement("p");
  descText.className =
    "text-4xl font-bold text-gray-500 pt-3 dark:text-gray-300";
  descText.innerText =
    "Organize your activities by projects, \n keeping track of each one of them.";

  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.className =
    "bg-blue-500 mt-5 py-3 px-12 text-white font-semibold text-xl rounded-xl hover:bg-blue-700 duration-100";
  startButton.innerText = "Get Started";

  textContainer.appendChild(mainText);
  textContainer.appendChild(descText);
  textContainer.appendChild(startButton);

  heroSection.appendChild(textContainer);
  content.appendChild(heroSection);

  // FEATURES SECTION

  const featureSection = document.createElement("section");
  featureSection.id = "features";
  featureSection.className =
    "relative flex font-sans h-[calc(100vh-5rem)] bg-white dark:bg-slate-800 duration-500 items-center overflow-hidden";

  const featuresContainer = document.createElement("div");
  featuresContainer.className = "flex-1 flex flex-col pl-10 z-20";

  const ftMainText = document.createElement("h1");
  ftMainText.className = "text-6xl font-bold dark:text-white text-justify";
  ftMainText.innerText =
    "Your time is important. \n Organize your time and be more efficient.";

  featuresContainer.appendChild(ftMainText);

  const ftMainPar = document.createElement("p");
  ftMainPar.className =
    "text-3xl text-gray-500 dark:text-gray-300 pt-6 text-justify";
  ftMainPar.innerText =
    "Don’t let your projects and tasks become a mess. Todoers is the perfect tool to keep you updated on what you need to do.";

  featuresContainer.appendChild(ftMainPar);

  const ftBarSep = document.createElement("hr");
  ftBarSep.className =
    "my-12 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-50";

  featuresContainer.appendChild(ftBarSep);

  const svgDivs = document.createElement("div");
  svgDivs.className = "flex items-center mb-6";

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-gray-600 dark:text-gray-100 mr-3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>`;

  const ftTitle = document.createElement("span");
  ftTitle.className = "font-bold";
  ftTitle.innerText = "Create and manage projects. ";
  const ftDesc = document.createElement("p");
  ftDesc.className = "text-gray-500 text-2xl dark:text-gray-300 text-justify";
  ftDesc.innerText =
    "Add tasks to each one of them and keep record of your progress.";

  svgDivs.appendChild(parseSvg(svg));
  ftDesc.prepend(ftTitle.cloneNode(true));
  svgDivs.appendChild(ftDesc.cloneNode(true));
  featuresContainer.appendChild(svgDivs);

  svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-gray-600 dark:text-gray-100 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
</svg>`;

  ftTitle.innerText = "Add details to each task. ";
  ftDesc.innerText =
    "Are there any details you should remember? Multiple options will help you.";

  const svgDivsTwo = document.createElement("div");
  svgDivsTwo.className = "flex items-center mb-6";

  svgDivsTwo.appendChild(parseSvg(svg));
  ftDesc.prepend(ftTitle.cloneNode(true));
  svgDivsTwo.appendChild(ftDesc.cloneNode(true));
  featuresContainer.appendChild(svgDivsTwo);

  svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-gray-600 dark:text-gray-100 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
</svg>`;

  ftTitle.innerText = "Clear and precise inteface. ";
  ftDesc.innerText =
    "Our UI/UX was made to keep things easy for you, so relax and start now.";

  const svgDivsThree = document.createElement("div");
  svgDivsThree.className = "flex items-center mb-6";

  svgDivsThree.appendChild(parseSvg(svg));
  ftDesc.prepend(ftTitle.cloneNode(true));
  svgDivsThree.appendChild(ftDesc.cloneNode(true));
  featuresContainer.appendChild(svgDivsThree);

  const imageDiv = document.createElement("div");
  imageDiv.className = "flex-1";
  imageDiv.id = "image-holder";

  const imageCont = document.createElement("img");
  imageCont.className = "object-cover scale-150 ml-[20rem] rounded-xl";
  imageCont.src = ftImage;
  imageCont.alt = "Todoers main page snapshot";

  imageDiv.appendChild(imageCont);

  featureSection.appendChild(featuresContainer);
  featureSection.appendChild(imageDiv);
  general.appendChild(featureSection);
};

export default loadHome;
