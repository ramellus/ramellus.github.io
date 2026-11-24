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
		types: ["videos"],
		topics: [],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/projects/404/d6652c251282951.6a32c49821b09.gif",
		url: "https://www.behance.net/gallery/251282951/The-butterfly-effect",
	},
	{
		name: "End of year 2025",
		date: "June 2026",
		clients: ["ICTP"],
		types: ["visuals"],
		topics: [],
		description: "",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fb5443251282943.6a32c4905c4a1.png",
		url: "https://www.behance.net/gallery/251282943/End-of-year-2025",
	},
	{
		name: "eBioMedicine cover",
		date: "",
		clients: ["QBio"],
		types: ["visuals"],
		topics: ["bioinformatics"],
		description: "Cover illustration for a study on gut microbiome profiling and multiple sclerosis, selected for an eBioMedicine issue.",
		image: "https://simoneramello.it/ebm.jpg",
		url: "https://simoneramello.it/#research",
	},
	{
		name: "ON-AIR in a nutshell",
		date: "",
		clients: ["QBio"],
		types: ["videos"],
		topics: ["AI", "bioinformatics"],
		description: "Short video interviews with researchers introducing ON-AIR, a project on artificial intelligence and integrated omics for precision oncology.",
		image: "https://simoneramello.it/Animazione%20video.gif",
		url: "https://onair.di.unito.it",
	},
	{
		name: "On A Tangent",
		date: "",
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
		date: "",
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
const mobileCards = document.querySelector("#mobile-project-cards");
let activeView = "type";
let positions = [];
let hoveredProject = null;
let mainConnectionSelection = null;
const projectStars = [];
const connectionMotions = new WeakMap();
let connectionDelayTimer;
let connectionGeneration = 0;
let connectionsPending = false;
const connectionVisibility = { type: false, client: false, topic: false };
const categoryLabels = { type: "type", client: "client", topic: "topic" };
const projectMoveDuration = 1100;
const connectionDrawDuration = 750;

function renderProjectStats() {
	const years = [2026, 2025, 2024];
	const counts = projects.reduce((totals, project) => {
		const year = Number(project.date.match(/\b\d{4}$/)?.[0]);
		if (years.includes(year)) totals[year] += 1;
		return totals;
	}, Object.fromEntries(years.map(year => [year, 0])));

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
	document.querySelectorAll(".connection-toggle").forEach(button => {
		const category = button.dataset.connectionToggle;
		const isSecondary = category !== activeView;
		button.hidden = !isSecondary;
		button.setAttribute("aria-pressed", String(connectionVisibility[category]));
		button.setAttribute("aria-label", `${connectionVisibility[category] ? "hide" : "show"} ${categoryLabels[category]} connections`);
		button.querySelector("span").textContent = categoryLabels[category];
	});
}

function createSvgElement(tag, attributes = {}) {
	const element = document.createElementNS(namespace, tag);
	for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
	return element;
}

function shared(left, right, field) {
	return left[field].some(value => right[field].includes(value));
}

function selectMainConnections() {
	const activeField = { type: "types", client: "clients", topic: "topics" }[activeView];
	const candidates = [];
	for (let left = 0; left < projects.length; left += 1) {
		for (let right = left + 1; right < projects.length; right += 1) {
			if (groupLabel(projects[left], activeView) !== groupLabel(projects[right], activeView)
				|| !shared(projects[left], projects[right], activeField)) continue;
			candidates.push([left, right]);
		}
	}

	for (let index = candidates.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[candidates[index], candidates[randomIndex]] = [candidates[randomIndex], candidates[index]];
	}

	const degrees = new Array(projects.length).fill(0);
	const selected = new Set();
	for (const [left, right] of candidates) {
		if (degrees[left] >= 2 || degrees[right] >= 2) continue;
		selected.add(`${left}-${right}`);
		degrees[left] += 1;
		degrees[right] += 1;
	}
	return selected;
}

function updateConnectionEmphasis() {
	svg.querySelectorAll(".connection--main").forEach(line => {
		line.classList.toggle("connection--hidden-on-hover", hoveredProject !== null);
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
					&& (category === activeView ? showMainConnection : connectionVisibility[category]));
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

function placeProjects(view) {
	const viewChanged = view !== activeView;
	if (viewChanged && connectionDelayTimer) clearTimeout(connectionDelayTimer);
	if (viewChanged) {
		Object.keys(connectionVisibility).forEach(category => {
			connectionVisibility[category] = false;
		});
	}
	activeView = view;
	const groupMap = new Map();
	projects.forEach((project, index) => {
		const key = groupLabel(project, view);
		if (!groupMap.has(key)) groupMap.set(key, []);
		groupMap.get(key).push(index);
	});

	const groups = [...groupMap.entries()].sort(([a], [b]) => a.localeCompare(b));
	const verticalGutter = 80;
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
			y: verticalGutter + cellHeight * (row + 0.5),
		};
		indices.forEach((projectIndex, memberIndex) => {
			const angle = memberIndex * 2.399963;
			const radius = indices.length === 1 ? 0 : 26 + Math.sqrt(memberIndex) * Math.min(40, cellWidth * 0.11, cellHeight * 0.11);
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

	svg.querySelectorAll(".cluster-label").forEach(label => label.remove());
	if (viewChanged) {
		connectionGeneration += 1;
		connectionsPending = true;
		mainConnectionSelection = null;
		svg.querySelectorAll(".connection, mask").forEach(connection => connection.remove());
	}

	projects.forEach((project, index) => {
		let star = projectStars[index];
		if (!star) {
			star = document.createElement("button");
			star.className = "star";
			star.type = "button";
			star.style.left = `${positions[index].x / 10}%`;
			star.style.top = `${positions[index].y / 7}%`;
			star.setAttribute("aria-label", `${project.name}. ${project.clients.join(", ") || "No client listed"}. Topics: ${project.topics.join(", ") || "None listed"}. Type: ${project.types.join(", ") || "None listed"}.`);
			star.dataset.project = index;
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
			star.addEventListener("mouseenter", event => showTooltip(event.currentTarget, project));
			star.addEventListener("mouseenter", updateHoveredProject);
			star.addEventListener("focus", event => showTooltip(event.currentTarget, project));
			star.addEventListener("focus", updateHoveredProject);
			star.addEventListener("mouseleave", hideTooltip);
			star.addEventListener("mouseleave", updateHoveredProject);
			star.addEventListener("blur", hideTooltip);
			star.addEventListener("blur", updateHoveredProject);
			star.addEventListener("click", () => openProject(project));
			projectStars[index] = star;
			constellation.append(star);
		}
		star.style.left = `${positions[index].x / 10}%`;
		star.style.top = `${positions[index].y / 7}%`;
	});

	const svgBounds = svg.getBoundingClientRect();
	const scaleY = svgBounds.height / 700;
	const nodeSize = projectStars[0].getBoundingClientRect().width;
	for (const { label, indices } of labels) {
		const initialBaseline = 20;
		const text = createSvgElement("text", { x: 0, y: initialBaseline, class: "cluster-label" });
		text.textContent = label.toLowerCase();
		svg.append(text);
		const labelBounds = text.getBBox();
		const barycenterX = indices.reduce((sum, index) => sum + positions[index].x, 0) / indices.length;
		const highestNodeY = Math.min(...indices.map(index => positions[index].y));
		const labelTop = highestNodeY - (nodeSize / 2 + 15) / scaleY;
		text.setAttribute("x", barycenterX);
		text.setAttribute("y", labelTop + initialBaseline - labelBounds.y - labelBounds.height);
	}
	document.querySelectorAll(".view-button").forEach(button => {
		button.setAttribute("aria-pressed", String(button.dataset.view === view));
	});
	updateConnectionToggles();
	if (viewChanged) {
		const generation = connectionGeneration;
		connectionDelayTimer = setTimeout(() => {
			if (generation !== connectionGeneration) return;
			connectionsPending = false;
			addConnections(true);
		}, prefersReducedMotion() ? 0 : projectMoveDuration);
	} else if (!connectionsPending) {
		addConnections(true);
	}
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
	details.textContent = Object.entries(metadata)
		.filter(([category]) => category !== activeView)
		.map(([, value]) => value)
		.join(" · ");
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
	button.addEventListener("click", () => placeProjects(button.dataset.view));
});
document.querySelectorAll(".connection-toggle").forEach(button => {
	button.addEventListener("click", () => {
		const category = button.dataset.connectionToggle;
		connectionVisibility[category] = !connectionVisibility[category];
		placeProjects(activeView);
	});
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
	if (event.target === dialog) dialog.close();
});
window.addEventListener("resize", hideTooltip);
renderMobileCards();
renderProjectStats();
placeProjects(activeView);
