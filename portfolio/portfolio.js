const projects = [
	{
		name: "Euler-Lagrange",
		date: "June 2026",
		clients: ["ICTP"],
		types: ["visuals"],
		topics: ["mathematics", "physics"],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/27f5d3251282965.6a32c4a647b6a.png",
		url: "https://www.behance.net/gallery/251282965/Euler-Lagrange",
	},
	{
		name: "Escape Epidemic",
		date: "June 2026",
		clients: ["QBio"],
		types: ["visuals"],
		topics: ["bioinformatics"],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/993303251132583.6a32c47a74aa1.png",
		url: "https://www.behance.net/gallery/251132583/Escape-Epidemic",
	},
	{
		name: "Principles & metrics for NBIS",
		date: "June 2026",
		clients: ["CMCC"],
		types: ["visuals"],
		topics: ["climate"],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/ba1501251132547.6a2fcb280954b.png",
		url: "https://www.behance.net/gallery/251132547/Principles-metrics-for-NBIS",
	},
	{
		name: "The shape of progression",
		date: "June 2026",
		clients: ["QBio"],
		types: ["visuals"],
		topics: ["bioinformatics"],
		description: "A data-driven thesis cover illustrating how mutations appear and interact within a tumour.",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e55a06251132541.6a32c4859a08b.png",
		url: "https://www.behance.net/gallery/251132541/The-shape-of-progression",
	},
	{
		name: "The butterfly effect",
		date: "June 2026",
		clients: ["ICTP"],
		types: ["visuals"],
		topics: ["physics", "mathematics"],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/projects/404/d6652c251282951.6a32c49821b09.gif",
		url: "https://www.behance.net/gallery/251282951/The-butterfly-effect",
	},
	{
		name: "End of year 2025",
		date: "June 2026",
		clients: ["ICTP"],
		types: ["visuals"],
		topics: ["physics", "mathematics"],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fb5443251282943.6a32c4905c4a1.png",
		url: "https://www.behance.net/gallery/251282943/End-of-year-2025",
	},
	{
		name: "eBioMedicine cover",
		date: "September 2026",
		clients: ["QBio"],
		types: ["visuals"],
		topics: ["bioinformatics"],
		description: "Cover illustration for a study on gut microbiome profiling and multiple sclerosis, selected for an eBioMedicine issue.",
		image: "https://simoneramello.it/ebm.jpg",
		url: "https://simoneramello.it/#research",
	},
	{
		name: "ON-AIR in a nutshell",
		date: "July 2026",
		clients: ["QBio"],
		types: ["video"],
		topics: ["AI", "bioinformatics"],
		description: "Short video interviews with researchers introducing ON-AIR, a project on artificial intelligence and integrated omics for precision oncology.",
		image: "https://simoneramello.it/Animazione%20video.gif",
		url: "https://onair.di.unito.it",
	},
	{
		name: "On A Tangent",
		date: "June 2024",
		clients: ["MMünster"],
		types: ["podcasts"],
		topics: ["mathematics"],
		description: "First-season podcast conversations with early-career researchers about the stories behind mathematics.",
		image: "https://simoneramello.it/assets/on-a-tangent-cover.jpg",
		url: "https://open.spotify.com/show/0KXZ3qf0H6t1cYifSJVEYB",
	},
	{
		name: "Le panchine non esistono",
		date: "June 2025",
		clients: ["SISSA"],
		types: ["podcasts"],
		topics: ["academia"],
		description: "An episode about psychologist Diederik Stapel, whose fabricated research undermined his studies on discrimination and stereotypes.",
		image: "https://i.scdn.co/image/ab67656300005f1fdbab16f40fae22e78ef17e8b",
		url: "https://open.spotify.com/episode/4ajPYzjpOB2jwkqMfciYGa",
	},
	{
		name: "Storytelling for the working mathematician",
		date: "October 2026",
		clients: ["MMünster"],
		types: ["training"],
		topics: ["mathematics"],
		description: "A workshop for early-career mathematicians on science communication, story structure, and applying storytelling to mathematical research.",
		image: "https://simoneramello.it/training1.jpeg",
		url: "https://simoneramello.it/#training",
	},
	{
		name: "OpenAI e la soluzione delle equazioni di Navier-Stokes",
		date: "October 2026",
		clients: ["Aula di Scienze"],
		types: ["writing"],
		topics: ["mathematics", "physics", "AI"],
		description: "Examines OpenAI’s reported solution to a Navier–Stokes problem and its implications for mathematics, fluid dynamics, and climate models.",
		image: "https://assets-zebra.zanichelli.it/7f459211-54a3-4306-805e-a8c429f38498-equazioni-ns-soluzione.jpeg",
		url: "https://aulascienze.scuola.zanichelli.it/materie-scienze/matematica-aule/openia-equazioni-navier-stokes/",
	},
	{
		name: "Combattere la violenza con la matematica",
		date: "June 2026",
		clients: ["Aula di Scienze"],
		types: ["writing"],
		topics: ["mathematics"],
		description: "Explores how mathematician Rafael Prieto-Curiel models organized crime in Mexico to understand its social impact and help limit violence.",
		image: "https://assets-zebra.zanichelli.it/f9d516f9-3048-4ee7-829f-f3dcfd8cc5d0-violenza-e-matematica-poster.jpeg",
		url: "https://aulascienze.scuola.zanichelli.it/materie-scienze/matematica-aule/combattere-violenza-matematica/",
	},
	{
		name: "Se le dimostrazioni le fanno i computer",
		date: "March 2026",
		clients: ["Aula di Scienze"],
		types: ["writing"],
		topics: ["mathematics", "AI"],
		description: "Explores how computers and AI can help test mathematical proofs, and what this means for future mathematical research.",
		image: "https://assets-zebra.zanichelli.it/d86a6811-e109-4b40-be2c-2fbb5dc41479-dimostrazioni-poster.png",
		url: "https://aulascienze.scuola.zanichelli.it/materie-scienze/matematica-aule/se-le-dimostrazioni-le-fanno-i-computer/",
	},
	{
		name: "Quando la scienza viene fermata",
		date: "September 2025",
		clients: ["Aula di Scienze"],
		types: ["writing"],
		topics: ["academia", "history"],
		description: "Tells the stories of three scientists whose research was interrupted by personal, political, or historical circumstances.",
		image: "https://assets-zebra.zanichelli.it/ac079f18-a2f0-4332-937b-8a28988c43ac-scienza-fermata-2.jpeg",
		url: "https://aulascienze.scuola.zanichelli.it/multimedia-scienze/come-te-lo-spiego-scienze/quando-la-scienza-viene-fermata/",
	},
	{
		name: "Un CERN per l'intelligenza artificiale: siamo già in ritardo?",
		date: "May 2025",
		clients: ["Scienzainrete"],
		types: ["writing"],
		topics: ["AI", "academia"],
		description: "",
		image: "https://www.scienzainrete.it/media/_web/1280/articoli/2025/cern-intelligenza-artificiale-siamo-gia-ritardo.jpg.webp",
		url: "https://www.scienzainrete.it/autori/simone-ramello/",
	},
	{
		name: "Two Diploma Students Share 2025 Shafi Prize",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["writing"],
		topics: ["mathematics", "physics", "academia"],
		description: "Profiles William Hendarto and Komal Rubab, who shared the 2025 Qaisar and Monika Shafi Prize for outstanding students in ICTP’s Diploma Programme.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/Shafi%20prize2025.jpg?itok=cZqZ5yif",
		url: "https://www.ictp.it/news/2025/8/two-diploma-students-share-2025-shafi-prize",
	},
	{
		name: "“There is nothing uninteresting in maths”",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["writing"],
		topics: ["mathematics", "academia"],
		description: "Profiles ICTP Diploma student Abdilaziz Komilov, whose path from mathematics competitions led to advanced studies in harmonic analysis.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/RBF_8929_RBf.jpg?itok=iB3VNjzu",
		url: "https://www.ictp.it/news/2025/8/there-nothing-uninteresting-maths",
	},
	{
		name: "“I wanted to learn how nature really works”",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["video"],
		topics: ["physics", "academia"],
		description: "Interviews ICTP Diploma student Komal Rubab about quantum mechanics, entanglement, spin systems, and her plans to pursue a PhD at SISSA.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/Komal_Rubab_CMSP_A09A1831_RBf.jpg?itok=Cz7051yt",
		url: "https://www.ictp.it/news/2025/8/i-wanted-learn-how-nature-really-works",
	},
	{
		name: "Extreme Experiments on Solid Foundations",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["writing"],
		topics: ["physics", "academia"],
		description: "Profiles ICTP alumnus Keshav Shrestha’s path from Diploma training to research on superconductivity and materials under extreme conditions.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/Keshav%20Shrestha_Web.jpg?itok=wDoxtaau",
		url: "https://www.ictp.it/news/2025/8/extreme-experiments-solid-foundations",
	},
	{
		name: "Uniting African Physicists",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["writing"],
		topics: ["physics", "academia"],
		description: "A report on the 2025 African School for Electronic Structure Methods and Applications, bringing African physicists together for training and collaboration.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/ASESMA_Grouppicture_web.jpg?itok=uV0y8L76",
		url: "https://www.ictp.it/news/2025/8/uniting-african-physicists",
	},
	{
		name: "Harmonic Analysis in Eastern Africa",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["writing"],
		topics: ["mathematics"],
		description: "A report on the 2025 ICTP–EAUMP summer school in real and harmonic analysis, held in Kigali, Rwanda.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/Emanuel_Carneiro.jpg?itok=ys8SyX_3",
		url: "https://www.ictp.it/news/2025/8/harmonic-analysis-eastern-africa",
	},
	{
		name: "“It wasn’t just maths or physics, it was about more”",
		date: "August 2025",
		clients: ["ICTP"],
		types: ["writing"],
		topics: ["academia", "AI"],
		description: "Profiles Solafa Fadlallah’s experience in ICTP’s Diploma Programme and her work applying statistical mechanics to artificial intelligence.",
		image: "https://www.ictp.it/sites/default/files/styles/news/public/images/Solafa.jpg?itok=rjjdMlFW",
		url: "https://www.ictp.it/news/2025/8/it-wasnt-just-maths-or-physics-it-was-about-more",
	},
	{
		name: "We don't talk about the integers",
		date: "May 2024",
		clients: ["Chalkdust Magazine"],
		types: ["writing"],
		topics: ["mathematics"],
		description: "Explores the hidden logical complexity of the integers through first-order logic and model theory.",
		image: "https://chalkdustmagazine.com/wp-content/uploads/2024/05/integers-270x116.jpg",
		url: "https://chalkdustmagazine.com/features/we-dont-talk-about-the-integers/",
	},
	{
		name: "Being Gay in Academia: Unravelling Suffocating Contradictions",
		date: "November 2023",
		clients: ["The PhD Place"],
		types: ["writing"],
		topics: ["academia"],
		description: "A personal essay on the conflict between gay identity and academic norms, and the importance of representation and care in academia.",
		image: "https://thephdplace.com/wp-content/uploads/2023/11/pride-1851892_1280-1-jpg.webp",
		url: "https://thephdplace.com/being-gay-in-academia-unravelling-suffocating-contradictions/",
	},
	{
		name: "BICERIN",
		date: "November 2026",
		clients: ["MIRRI-IT"],
		types: ["citizen science"],
		topics: ["bioinformatics", "plastics"],
		description: "Studies fungal communities found on plastic materials through a citizen-science approach. The project invites public participation to document these communities and explore how fungi interact with plastics.",
		image: "bicerin-logo.jpg",
		url: "https://www.instagram.com/bicerin_unito/",
	},
	{
		name: "Infographics for ARCADIA",
		date: "July 2026",
		clients: ["CMCC"],
		types: ["visuals"],
		topics: ["climate"],
		description: "",
		image: "arcadia.png",
		url: "",
	},
	{
		name: "Sketchnote for TRANSCEND",
		date: "October 2026",
		clients: ["CMCC"],
		types: ["visuals"],
		topics: ["climate"],
		description: "",
		image: "transcend.png",
		url: "",
	},
];

const namespace = "http://www.w3.org/2000/svg";
const constellation = document.querySelector("#constellation");
const svg = document.querySelector("#connections");
const tooltip = document.querySelector("#star-tooltip");
const projectStats = document.querySelector("#project-stats");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const themeToggle = document.querySelector("#theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const mobileCards = document.querySelector("#mobile-project-cards");
const timelineAxis = document.querySelector("#timeline-axis");
const topicTreemap = document.querySelector("#topic-treemap");
const treemapProjectStars = document.querySelector("#treemap-project-stars");
const activeView = "type";
let activeMode = "type";
let positions = [];
let hoveredProject = null;
let mainConnectionSelection = null;
const projectStars = [];
const connectionMotions = new WeakMap();
let connectionDelayTimer;
let connectionGeneration = 0;
let connectionsPending = false;
const connectionVisibility = { type: true, client: false, topic: false };
const categoryLabels = { type: "type", client: "client", topic: "topic" };
const projectMoveDuration = 1100;
const connectionDrawDuration = 750;

function renderProjectStats() {
	const counts = projects.reduce((totals, project) => {
		const year = Number(project.date.match(/\b\d{4}$/)?.[0]);
		if (year) totals[year] = (totals[year] || 0) + 1;
		return totals;
	}, {});
	const years = Object.keys(counts).map(Number).sort((left, right) => right - left);

	projectStats.replaceChildren();
	const icon = document.createElement("img");
	icon.className = "project-stats-icon";
	icon.src = "../coffee-cup-2.svg";
	icon.alt = "";
	icon.setAttribute("aria-hidden", "true");
	projectStats.append(icon);

	const line = document.createElement("p");
	for (const year of years) {
		if (line.childNodes.length) line.append(document.createTextNode(" · "));
		const count = document.createElement("span");
		count.className = "project-stats-count";
		count.textContent = String(counts[year]);
		line.append(count, document.createTextNode(` project${counts[year] === 1 ? "" : "s"} in ${year}`));
	}
	projectStats.append(line);

	projectStats.setAttribute("aria-label", years.map(year => `${counts[year]} project${counts[year] === 1 ? "" : "s"} in ${year}`).join(", "));
}

function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function updateConnectionToggles() {
	document.querySelector(".connection-toggles").hidden = activeMode !== "type";
	document.querySelectorAll(".connection-toggle").forEach(button => {
		const category = button.dataset.connectionToggle;
		button.setAttribute("aria-pressed", String(connectionVisibility[category]));
		button.setAttribute("aria-label", `${connectionVisibility[category] ? "hide" : "show"} ${categoryLabels[category]} connections`);
		button.querySelector("span").textContent = categoryLabels[category];
	});
}

function updateViewButtons() {
	document.querySelectorAll(".view-button").forEach(button => {
		button.setAttribute("aria-pressed", String(button.dataset.view === activeMode));
	});
}

function updateTheme(lightMode) {
	document.body.classList.toggle("light-mode", lightMode);
	const nextMode = lightMode ? "dark" : "light";
	themeToggle.setAttribute("aria-label", `Switch to ${nextMode} mode`);
	themeToggle.querySelector(".theme-icon--sun").hidden = lightMode;
	themeToggle.querySelector(".theme-icon--moon").hidden = !lightMode;
	themeColorMeta.content = getComputedStyle(document.body).getPropertyValue("--portfolio-background").trim();
}

function createSvgElement(tag, attributes = {}) {
	const element = document.createElementNS(namespace, tag);
	for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
	return element;
}

function createProjectStar(project, projectIndex, className = "star", showHoverDetails = true) {
	const star = document.createElement("button");
	star.className = className;
	star.type = "button";
	star.setAttribute("aria-label", `${project.name}. ${project.date}. ${project.clients.join(", ") || "No client listed"}. Topics: ${project.topics.join(", ") || "None listed"}. Type: ${project.types.join(", ") || "None listed"}.`);
	star.dataset.project = projectIndex;
	if (project.image) {
		const image = document.createElement("img");
		image.src = project.image;
		image.alt = "";
		image.loading = "lazy";
		star.append(image);
	} else {
		star.textContent = "✳";
		star.setAttribute("aria-hidden", "false");
	}
	if (showHoverDetails) {
		star.addEventListener("mouseenter", event => showTooltip(event.currentTarget, project));
		star.addEventListener("mouseenter", updateHoveredProject);
		star.addEventListener("focus", event => showTooltip(event.currentTarget, project));
		star.addEventListener("focus", updateHoveredProject);
		star.addEventListener("mouseleave", hideTooltip);
		star.addEventListener("mouseleave", updateHoveredProject);
		star.addEventListener("blur", hideTooltip);
		star.addEventListener("blur", updateHoveredProject);
	}
	star.addEventListener("click", () => openProject(project));
	return star;
}

function shared(left, right, field) {
	return left[field].some(value => right[field].includes(value));
}

function selectMainConnections() {
	const activeField = { type: "types", client: "clients", topic: "topics" }[activeView];
	const selected = new Set();
	for (let left = 0; left < projects.length; left += 1) {
		for (let right = left + 1; right < projects.length; right += 1) {
			if (groupLabel(projects[left], activeView) !== groupLabel(projects[right], activeView)
				|| !shared(projects[left], projects[right], activeField)) continue;
			selected.add(`${left}-${right}`);
		}
	}
	return selected;
}

function updateConnectionEmphasis() {
	const hideMainConnections = hoveredProject !== null
		&& (connectionVisibility.client || connectionVisibility.topic);
	svg.querySelectorAll(".connection--main").forEach(line => {
		line.classList.toggle("connection--hidden-on-hover", hideMainConnections);
	});
	svg.querySelectorAll(".connection:not(.connection--main)").forEach(line => {
		const isConnected = Number(line.dataset.projectLeft) === hoveredProject
			|| Number(line.dataset.projectRight) === hoveredProject;
		line.classList.toggle("connection--dimmed", hoveredProject !== null && !isConnected);
		line.classList.toggle("connection--highlighted", hoveredProject !== null && isConnected);
	});
}

function updateHoveredProject() {
	const activeStar = projectStars.find(star => star.matches(":hover"))
		|| projectStars.find(star => star === document.activeElement)
		|| null;
	hoveredProject = activeStar ? Number(activeStar.dataset.project) : null;
	updateConnectionEmphasis();
}

function addConnections(animate = false) {
	const activeField = { type: "types", client: "clients", topic: "topics" }[activeView];
	mainConnectionSelection ??= selectMainConnections();
	const desired = new Map();
	for (let left = 0; left < projects.length; left += 1) {
		for (let right = left + 1; right < projects.length; right += 1) {
			const pairKey = `${left}-${right}`;
			const sameCluster = groupLabel(projects[left], activeView) === groupLabel(projects[right], activeView);
			const showMainConnection = !sameCluster || mainConnectionSelection.has(pairKey);
			const connections = [["topics", "topic"], ["types", "type"], ["clients", "client"]]
				.filter(([field, category]) => shared(projects[left], projects[right], field)
					&& connectionVisibility[category]
					&& (category !== activeView || showMainConnection));
			const dx = positions[right].x - positions[left].x;
			const dy = positions[right].y - positions[left].y;
			const length = Math.hypot(dx, dy) || 1;
			connections.forEach(([field, className], index) => {
				const offset = (index - (connections.length - 1) / 2) * 3;
				const offsetX = -(dy / length) * offset;
				const offsetY = (dx / length) * offset;
				const key = `${left}-${right}-${className}`;
				desired.set(key, {
					x1: positions[left].x + offsetX,
					y1: positions[left].y + offsetY,
					x2: positions[right].x + offsetX,
					y2: positions[right].y + offsetY,
					projectLeft: left,
					projectRight: right,
					className: `connection connection--${className}${field === activeField ? " connection--main" : ""}`,
				});
			});
		}
	}

	svg.querySelectorAll(".connection").forEach(line => {
		if (desired.has(line.dataset.key)) return;
		if (!animate || prefersReducedMotion()) {
			cancelConnectionMotion(line);
			line.remove();
			return;
		}
		animateConnection(line, line.dataset.key, true);
	});

	for (const [key, connection] of desired) {
		let line = [...svg.querySelectorAll(".connection")].find(element => element.dataset.key === key);
		const isNew = !line;
		if (!line) {
			line = createSvgElement("line", { "data-key": key });
			svg.append(line);
		}
		line.setAttribute("x1", connection.x1);
		line.setAttribute("y1", connection.y1);
		line.setAttribute("x2", connection.x2);
		line.setAttribute("y2", connection.y2);
		line.setAttribute("class", connection.className);
		line.dataset.key = key;
		line.dataset.projectLeft = connection.projectLeft;
		line.dataset.projectRight = connection.projectRight;
		if (!prefersReducedMotion() && (isNew && animate || connectionMotions.get(line)?.reverse)) {
			animateConnection(line, key, false);
		}
	}
	updateConnectionEmphasis();
}

function cancelConnectionMotion(line) {
	const motion = connectionMotions.get(line);
	if (!motion) return;
	motion.animation.cancel();
	motion.mask.remove();
	line.removeAttribute("mask");
	connectionMotions.delete(line);
}

function animateConnection(line, key, reverse) {
	const previousMotion = connectionMotions.get(line);
	const currentOffset = previousMotion
		? Number.parseFloat(getComputedStyle(previousMotion.reveal).strokeDashoffset)
		: reverse ? 0 : 1;
	if (previousMotion) cancelConnectionMotion(line);

	const maskId = `connection-mask-${key}`;
	const mask = createSvgElement("mask", {
		id: maskId,
		x: 0,
		y: 0,
		width: 1000,
		height: 700,
		maskUnits: "userSpaceOnUse",
		maskContentUnits: "userSpaceOnUse",
		"mask-type": "luminance",
	});
	const reveal = createSvgElement("line", {
		x1: line.getAttribute("x1"),
		y1: line.getAttribute("y1"),
		x2: line.getAttribute("x2"),
		y2: line.getAttribute("y2"),
		stroke: "white",
		"stroke-width": 8,
		"stroke-linecap": "round",
		pathLength: 1,
		"stroke-dasharray": 1,
		"stroke-dashoffset": currentOffset,
	});
	mask.append(reveal);
	svg.insertBefore(mask, svg.firstChild);
	line.setAttribute("mask", `url(#${maskId})`);
	const animation = reveal.animate(
		[
			{ strokeDashoffset: currentOffset },
			{ strokeDashoffset: reverse ? 1 : 0 },
		],
		{ duration: connectionDrawDuration, easing: reverse ? "ease-in" : "ease-out" },
	);
	const motion = { animation, mask, reveal, reverse };
	connectionMotions.set(line, motion);
	animation.onfinish = () => {
		if (connectionMotions.get(line) !== motion) return;
		connectionMotions.delete(line);
		line.removeAttribute("mask");
		mask.remove();
		if (reverse) line.remove();
	};
}

function groupLabel(project, view) {
	if (view === "client") return project.clients[0] || "Unspecified client";
	return project[`${view}s`][0] || `Unspecified ${view}`;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function projectMonthIndex(project) {
	const [, monthName, yearString] = project.date.match(/^([A-Za-z]+) (\d{4})$/) || [];
	const month = monthNames.indexOf(monthName);
	if (month < 0 || !yearString) throw new Error(`Invalid project date for "${project.name}": ${project.date}`);
	return Number(yearString) * 12 + month;
}

function layoutTreemap(items, bounds, weightForItem) {
	if (!items.length) return [];
	if (items.length === 1) return [{ item: items[0], ...bounds }];

	const totalWeight = items.reduce((total, item) => total + weightForItem(item), 0);
	let splitIndex = 1;
	let accumulatedWeight = 0;
	let closestDifference = Infinity;
	for (let index = 1; index < items.length; index += 1) {
		accumulatedWeight += weightForItem(items[index - 1]);
		const difference = Math.abs(totalWeight / 2 - accumulatedWeight);
		if (difference < closestDifference) {
			closestDifference = difference;
			splitIndex = index;
		}
	}

	const firstItems = items.slice(0, splitIndex);
	const remainingItems = items.slice(splitIndex);
	const firstWeight = firstItems.reduce((total, item) => total + weightForItem(item), 0);
	const firstShare = firstWeight / totalWeight;
	let firstBounds;
	let remainingBounds;
	if (bounds.width >= bounds.height) {
		const firstWidth = bounds.width * firstShare;
		firstBounds = { x: bounds.x, y: bounds.y, width: firstWidth, height: bounds.height };
		remainingBounds = { x: bounds.x + firstWidth, y: bounds.y, width: bounds.width - firstWidth, height: bounds.height };
	} else {
		const firstHeight = bounds.height * firstShare;
		firstBounds = { x: bounds.x, y: bounds.y, width: bounds.width, height: firstHeight };
		remainingBounds = { x: bounds.x, y: bounds.y + firstHeight, width: bounds.width, height: bounds.height - firstHeight };
	}

	return [
		...layoutTreemap(firstItems, firstBounds, weightForItem),
		...layoutTreemap(remainingItems, remainingBounds, weightForItem),
	];
}

function renderTopicTreemap(sourcePositions = null) {
	const projectsByTopic = new Map();
	projects.forEach((project, projectIndex) => {
		const topics = project.topics.length ? project.topics : ["uncategorized"];
		for (const topic of topics) {
			if (!projectsByTopic.has(topic)) projectsByTopic.set(topic, []);
			projectsByTopic.get(topic).push(projectIndex);
		}
	});

	const topicGroups = [...projectsByTopic.entries()]
		.map(([topic, projectIndices]) => ({ topic, projectIndices }))
		.sort((left, right) => right.projectIndices.length - left.projectIndices.length
			|| left.topic.localeCompare(right.topic));
	const topicBounds = layoutTreemap(topicGroups, { x: 0, y: 0, width: 1000, height: 700 }, group => group.projectIndices.length);
	topicTreemap.replaceChildren();
	treemapProjectStars.replaceChildren();
	const shellBounds = topicTreemap.getBoundingClientRect();
	const maxStarSize = window.matchMedia("(max-width: 820px)").matches ? 34 : 40;
	const animationTargets = [];

	for (const { item: group, ...bounds } of topicBounds) {
		const groupElement = createSvgElement("g", { class: "treemap-topic-group" });
		const frame = createSvgElement("rect", {
			x: bounds.x + 2,
			y: bounds.y + 2,
			width: Math.max(0, bounds.width - 4),
			height: Math.max(0, bounds.height - 4),
			class: "treemap-topic-frame",
		});
		groupElement.append(frame);
		topicTreemap.append(groupElement);
		const topicLabel = document.createElement("span");
		topicLabel.className = "topic-group-label";
		topicLabel.textContent = `${group.topic} (${group.projectIndices.length})`;
		topicLabel.style.left = `${(bounds.x + 10) / 10}%`;
		topicLabel.style.top = `${(bounds.y + 18) / 7}%`;
		treemapProjectStars.append(topicLabel);

		const contentBounds = {
			x: bounds.x + 6,
			y: bounds.y + 27,
			width: Math.max(1, bounds.width - 12),
			height: Math.max(1, bounds.height - 33),
		};
		const contentWidth = contentBounds.width * shellBounds.width / 1000;
		const contentHeight = contentBounds.height * shellBounds.height / 700;
		let columns = 1;
		let bestAspectDifference = Infinity;
		for (let candidateColumns = 1; candidateColumns <= group.projectIndices.length; candidateColumns += 1) {
			const rows = Math.ceil(group.projectIndices.length / candidateColumns);
			const cellAspect = (contentWidth / candidateColumns) / (contentHeight / rows);
			const aspectDifference = Math.abs(Math.log(cellAspect));
			if (aspectDifference < bestAspectDifference) {
				columns = candidateColumns;
				bestAspectDifference = aspectDifference;
			}
		}

		const rowCount = Math.ceil(group.projectIndices.length / columns);
		const cellWidth = contentBounds.width / columns;
		const cellHeight = contentBounds.height / rowCount;
		const starSize = Math.min(maxStarSize, Math.min(contentWidth / columns, contentHeight / rowCount) * 0.6);
		group.projectIndices.forEach((projectIndex, memberIndex) => {
			const project = projects[projectIndex];
			const row = Math.floor(memberIndex / columns);
			const column = memberIndex % columns;
			const itemsInRow = Math.min(columns, group.projectIndices.length - row * columns);
			const rowOffset = (columns - itemsInRow) * cellWidth / 2;
			const centerX = contentBounds.x + rowOffset + (column + 0.5) * cellWidth;
			const centerY = contentBounds.y + (row + 0.5) * cellHeight;
			const targetLeft = `${centerX / 10}%`;
			const targetTop = `${centerY / 7}%`;
			const star = createProjectStar(project, projectIndex, "star treemap-star");
			star.setAttribute("aria-label", `${star.getAttribute("aria-label")} Topic group: ${group.topic}.`);
			star.style.width = `${starSize}px`;
			star.style.height = `${starSize}px`;
			const sourcePosition = sourcePositions?.[projectIndex];
			if (sourcePosition && !prefersReducedMotion()) {
				star.style.left = `${sourcePosition.x / 10}%`;
				star.style.top = `${sourcePosition.y / 7}%`;
				treemapProjectStars.append(star);
				animationTargets.push({ star, left: targetLeft, top: targetTop });
			} else {
				star.style.left = targetLeft;
				star.style.top = targetTop;
				treemapProjectStars.append(star);
			}
		});
	}

	if (animationTargets.length) {
		void treemapProjectStars.offsetHeight;
		requestAnimationFrame(() => {
			animationTargets.forEach(({ star, left, top }) => {
				star.style.left = left;
				star.style.top = top;
			});
		});
	}
}

function placeTimelineProjects() {
	const projectsByMonth = new Map();
	projects.forEach((project, index) => {
		const month = projectMonthIndex(project);
		if (!projectsByMonth.has(month)) projectsByMonth.set(month, []);
		projectsByMonth.get(month).push(index);
	});

	const months = [...projectsByMonth.keys()];
	const firstMonth = Math.min(...months);
	const lastMonth = Math.max(...months);
	const axisY = 350;
	const chartLeft = 55;
	const chartRight = 925;
	const axisEnd = 960;
	const xForMonth = month => chartLeft + (month - firstMonth) / (lastMonth - firstMonth || 1) * (chartRight - chartLeft);
	const chartBounds = timelineAxis.getBoundingClientRect();
	const scaleX = chartBounds.width / 1000;
	const scaleY = chartBounds.height / 700;
	const starSize = projectStars[0]?.getBoundingClientRect().width || 40;
	const laneStep = Math.max(1, (starSize + 6) / scaleY);
	const maxLane = Math.max(1, Math.floor((Math.min(axisY, 700 - axisY) - starSize / (2 * scaleY)) / laneStep));
	const blockedRects = [projectStats, themeToggle]
		.filter(element => getComputedStyle(element).display !== "none")
		.map(element => element.getBoundingClientRect());
	const placedPositions = [];
	positions = new Array(projects.length);
	timelineAxis.replaceChildren();
	timelineAxis.append(createSvgElement("line", {
		x1: chartLeft,
		y1: axisY,
		x2: axisEnd,
		y2: axisY,
		class: "timeline-axis-line",
	}));
	timelineAxis.append(createSvgElement("path", {
		d: `M ${axisEnd - 8} ${axisY - 5} L ${axisEnd} ${axisY} L ${axisEnd - 8} ${axisY + 5}`,
		class: "timeline-axis-arrow",
	}));

	for (let month = firstMonth; month <= lastMonth; month += 1) {
		const x = xForMonth(month);
		const isYearMark = month === firstMonth || month % 12 === 0;
		timelineAxis.append(createSvgElement("line", {
			x1: x,
			y1: axisY - (isYearMark ? 10 : 4),
			x2: x,
			y2: axisY + (isYearMark ? 10 : 4),
			class: "timeline-axis-tick",
		}));
		if (isYearMark) {
			timelineAxis.append(createSvgElement("line", {
				x1: x,
				y1: 56,
				x2: x,
				y2: axisY,
				class: "timeline-year-guide",
			}));
			const label = createSvgElement("text", { x, y: 42, class: "timeline-year-label" });
			label.textContent = String(Math.floor(month / 12));
			timelineAxis.append(label);
		}
	}

	for (const [month, indices] of [...projectsByMonth].sort(([left], [right]) => left - right)) {
		const direction = month % 2 === 0 ? -1 : 1;
		indices.forEach((projectIndex, memberIndex) => {
			const x = xForMonth(month);
			const preferredLane = Math.min(maxLane, Math.floor(memberIndex / 2) + 1);
			const preferredSign = memberIndex % 2 === 0 ? direction : -direction;
			const preferredY = axisY + preferredSign * preferredLane * laneStep;
			const candidateYs = [];
			for (let lane = 1; lane <= maxLane; lane += 1) {
				candidateYs.push(axisY + direction * lane * laneStep, axisY - direction * lane * laneStep);
			}
			candidateYs.sort((left, right) => Math.abs(left - preferredY) - Math.abs(right - preferredY));
			candidateYs.push(axisY);
			const y = candidateYs.find(candidateY => {
				const overlapsProject = placedPositions.some(position =>
					Math.abs((x - position.x) * scaleX) < starSize
					&& Math.abs((candidateY - position.y) * scaleY) < starSize);
				if (overlapsProject) return false;
				const screenX = chartBounds.left + x * scaleX;
				const screenY = chartBounds.top + candidateY * scaleY;
				return !blockedRects.some(rect =>
					screenX + starSize / 2 > rect.left
					&& screenX - starSize / 2 < rect.right
					&& screenY + starSize / 2 > rect.top
					&& screenY - starSize / 2 < rect.bottom);
			});
			if (y === undefined) throw new Error(`Unable to position ${projects[projectIndex].name} on the timeline without overlap.`);
			positions[projectIndex] = { x, y };
			placedPositions.push({ x, y });
			timelineAxis.append(createSvgElement("line", {
				x1: x,
				y1: axisY,
				x2: x,
				y2: y,
				class: "timeline-stem",
			}));
		});
	}

	projectStars.forEach((star, index) => {
		star.style.left = `${positions[index].x / 10}%`;
		star.style.top = `${positions[index].y / 7}%`;
	});
}

function clearClusterVisuals() {
	if (connectionDelayTimer) clearTimeout(connectionDelayTimer);
	connectionGeneration += 1;
	connectionsPending = false;
	svg.querySelectorAll(".connection").forEach(line => {
		cancelConnectionMotion(line);
		line.remove();
	});
	svg.querySelectorAll("mask").forEach(element => element.remove());
	constellation.querySelectorAll(".cluster-label").forEach(label => label.remove());
}

function setVisualization(mode) {
	if (mode === activeMode) return;
	activeMode = mode;
	document.body.classList.toggle("timeline-mode", activeMode === "timeline");
	document.body.classList.toggle("topic-mode", activeMode === "topic");
	constellation.setAttribute("aria-label", activeMode === "type" ? "Project constellation" : `${activeMode === "timeline" ? "Timeline" : "Topic treemap"} projects`);
	updateViewButtons();
	updateConnectionToggles();
	hideTooltip();

	if (activeMode === "timeline") {
		topicTreemap.replaceChildren();
		treemapProjectStars.replaceChildren();
		clearClusterVisuals();
		placeTimelineProjects();
		return;
	}
	if (activeMode === "topic") {
		const sourcePositions = positions.map(position => position && { ...position });
		timelineAxis.replaceChildren();
		clearClusterVisuals();
		renderTopicTreemap(sourcePositions);
		return;
	}

	topicTreemap.replaceChildren();
	treemapProjectStars.replaceChildren();
	timelineAxis.replaceChildren();
	if (connectionDelayTimer) clearTimeout(connectionDelayTimer);
	connectionGeneration += 1;
	connectionsPending = true;
	placeProjects();
	const generation = connectionGeneration;
	connectionDelayTimer = setTimeout(() => {
		if (generation !== connectionGeneration) return;
		connectionsPending = false;
		addConnections(true);
	}, prefersReducedMotion() ? 0 : projectMoveDuration);
}

function placeProjects() {
	const view = activeView;
	const groupMap = new Map();
	projects.forEach((project, index) => {
		const key = groupLabel(project, view);
		if (!groupMap.has(key)) groupMap.set(key, []);
		groupMap.get(key).push(index);
	});

	const groups = [...groupMap.entries()].sort(([a], [b]) => a.localeCompare(b));
	const verticalGutter = 80;
	const verticalShift = 18;
	const contentHeight = 700 - verticalGutter * 2;
	let columns = 1;
	let largestCellSide = 0;
	for (let candidate = 1; candidate <= groups.length; candidate += 1) {
		const candidateRows = Math.ceil(groups.length / candidate);
		const cellSide = Math.min(1000 / candidate, contentHeight / candidateRows);
		if (cellSide > largestCellSide) {
			columns = candidate;
			largestCellSide = cellSide;
		}
	}
	const rows = Math.ceil(groups.length / columns);
	positions = new Array(projects.length);
	const labels = [];

	groups.forEach(([label, indices], groupIndex) => {
		const column = groupIndex % columns;
		const row = Math.floor(groupIndex / columns);
		const cellWidth = 1000 / columns;
		const cellHeight = contentHeight / rows;
		const center = {
			x: cellWidth * (column + 0.5),
			y: verticalGutter + cellHeight * (row + 0.5) - verticalShift,
		};
		indices.forEach((projectIndex, memberIndex) => {
			const angle = memberIndex * 2.399963;
			const radius = indices.length === 1 ? 0 : 26 + Math.sqrt(memberIndex) * Math.min(40, cellWidth * 0.13, cellHeight * 0.13);
			positions[projectIndex] = {
				x: center.x + Math.cos(angle) * radius,
				y: center.y + Math.sin(angle) * radius,
			};
		});
		labels.push({
			label,
			indices,
		});
	});

	constellation.querySelectorAll(".cluster-label").forEach(label => label.remove());

	projects.forEach((project, index) => {
		let star = projectStars[index];
		if (!star) {
			star = createProjectStar(project, index);
			projectStars[index] = star;
			constellation.append(star);
		}
		star.style.left = `${positions[index].x / 10}%`;
		star.style.top = `${positions[index].y / 7}%`;
	});

	const svgBounds = svg.getBoundingClientRect();
	const scaleY = svgBounds.height ? svgBounds.height / 700 : 1;
	const nodeSize = projectStars[0].getBoundingClientRect().width;
	for (const { label, indices } of labels) {
		const text = document.createElement("span");
		text.className = "cluster-label";
		text.textContent = label.toLowerCase();
		const barycenterX = indices.reduce((sum, index) => sum + positions[index].x, 0) / indices.length;
		const highestNodeY = Math.min(...indices.map(index => positions[index].y));
		const labelBottom = highestNodeY - (nodeSize / 2 + 15) / scaleY;
		text.style.left = `${barycenterX / 10}%`;
		text.style.top = `${labelBottom / 7}%`;
		constellation.append(text);
	}
	updateViewButtons();
	updateConnectionToggles();
	if (!connectionsPending) addConnections(true);
}

function renderMobileCards() {
	mobileCards.replaceChildren();
	for (const project of projects) {
		const card = document.createElement("article");
		card.className = "project-card";
		if (project.image) {
			const image = document.createElement("img");
			image.src = project.image;
			image.alt = "";
			image.loading = "lazy";
			card.append(image);
		} else {
			const placeholder = document.createElement("div");
			placeholder.className = "project-card-placeholder";
			placeholder.setAttribute("aria-hidden", "true");
			placeholder.textContent = "✳";
			card.append(placeholder);
		}

		const content = document.createElement("div");
		const eyebrow = document.createElement("p");
		eyebrow.className = "eyebrow";
		eyebrow.textContent = [...project.types, ...project.topics].join(" · ");
		const title = document.createElement("h2");
		title.textContent = project.name;
		content.append(eyebrow, title);

		if (project.date) {
			const date = document.createElement("p");
			date.className = "project-date";
			date.textContent = project.date;
			content.append(date);
		}
		if (project.description) {
			const description = document.createElement("p");
			description.textContent = project.description;
			content.append(description);
		}
		if (project.clients.length) {
			const client = document.createElement("p");
			client.className = "project-client";
			client.textContent = `Client: ${project.clients.join(", ")}`;
			content.append(client);
		}
		if (project.url) {
			const link = document.createElement("a");
			link.href = project.url;
			link.target = "_blank";
			link.rel = "noopener noreferrer";
			link.textContent = "View project";
			content.append(link);
		}
		card.append(content);
		mobileCards.append(card);
	}
}

function showTooltip(star, project) {
	const containerBounds = constellation.getBoundingClientRect();
	const starBounds = star.getBoundingClientRect();
	const top = Math.max(8, starBounds.top - containerBounds.top - 12);
	tooltip.innerHTML = "";
	const title = document.createElement("strong");
	title.textContent = project.name;
	const details = document.createElement("span");
	const metadata = {
		client: project.clients.join(", ") || "No client listed",
		topic: project.topics.join(", ") || "No topics",
		type: project.types.join(", "),
	};
	const detailsText = Object.entries(metadata)
		.filter(([category]) => activeMode !== "type" || category !== activeView)
		.map(([, value]) => value);
	if (activeMode !== "type") detailsText.unshift(project.date);
	details.textContent = detailsText.join(" · ");
	tooltip.append(title, details);
	tooltip.hidden = false;
	const desiredLeft = starBounds.left - containerBounds.left + starBounds.width + 10;
	const maxLeft = Math.max(8, containerBounds.width - tooltip.offsetWidth - 8);
	const left = desiredLeft + tooltip.offsetWidth > containerBounds.width - 8
		? starBounds.left - containerBounds.left - tooltip.offsetWidth - 10
		: desiredLeft;
	tooltip.style.left = `${Math.max(8, Math.min(left, maxLeft))}px`;
	tooltip.style.top = `${top}px`;
}

function hideTooltip() {
	tooltip.hidden = true;
}

function addMeta(meta, label, values) {
	if (!values.length) return;
	const term = document.createElement("dt");
	term.textContent = label;
	const value = document.createElement("dd");
	value.textContent = values.join(", ");
	meta.append(term, value);
}

function openProject(project) {
	hideTooltip();
	dialogContent.replaceChildren();
	if (project.image) {
		const image = document.createElement("img");
		image.className = "dialog-image";
		image.src = project.image;
		image.alt = "";
		dialogContent.append(image);
	}
	const title = document.createElement("h2");
	title.id = "dialog-title";
	title.textContent = project.name;
	dialogContent.append(title);
	if (project.description) {
		const description = document.createElement("p");
		description.className = "dialog-description";
		description.textContent = project.description;
		dialogContent.append(description);
	}
	const meta = document.createElement("dl");
	meta.className = "dialog-meta";
	addMeta(meta, "Client(s)", project.clients);
	addMeta(meta, "Type(s)", project.types);
	addMeta(meta, "Topic(s)", project.topics);
	if (project.date) addMeta(meta, "Date", [project.date]);
	dialogContent.append(meta);
	if (project.url) {
		const link = document.createElement("a");
		link.className = "dialog-project-link";
		link.href = project.url;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		link.textContent = "View project";
		dialogContent.append(link);
	}
	dialog.showModal();
}

document.querySelectorAll(".view-button").forEach(button => {
	button.addEventListener("click", () => setVisualization(button.dataset.view));
});
document.querySelectorAll(".connection-toggle").forEach(button => {
	button.addEventListener("click", () => {
		const category = button.dataset.connectionToggle;
		connectionVisibility[category] = !connectionVisibility[category];
		updateConnectionToggles();
		if (activeMode === "type") placeProjects();
	});
});
themeToggle.addEventListener("click", () => updateTheme(!document.body.classList.contains("light-mode")));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
	if (event.target === dialog) dialog.close();
});
window.addEventListener("resize", () => {
	hideTooltip();
	if (activeMode === "topic") renderTopicTreemap();
});
renderMobileCards();
renderProjectStats();
updateViewButtons();
updateConnectionToggles();
placeProjects();
