document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement ? targetElement.offsetTop - 56 : 0,
      behavior: "smooth",
    });
  });
});

// content
const about = {
  name: "Joris Lefait",
  role: "FullStack developer",
  description:
    "I'm Joris. I started my career in programming in 2019 after some years working in chemistry. I was first a front-end developer and then I started learning back-end development with Node.js, Express.js and PostgreSQL. I also play with Raspberry Pi and am learning basics of cybersecurity.",
  social: {
    linkedin: "https://www.linkedin.com/in/joris-lefait/",
    github: "https://github.com/Joris-Lft",
  },
};

const projects = [
  {
    name: "TheHive",
    description:
      "Maintain and develop new features for the product: more informations about it with the link below.",
    stack: ["React", "Antd Design", "SCSS", "Storybook", "Vitest"],
    livePreview: "https://thehive-project.org",
  },
  {
    name: "La Banque Postale",
    description:
      "Full rework of customer application, UX reflections on prototypes, creation of POCs, training of developers at the client, integration of development cycles in agile mode (SCRUM)",
    stack: ["React Native", "Gitlab", "NativeBase", "JIRA"],
  },
  {
    name: "Chatbot Improvement",
    description:
      "Create an HMI which allow data analyst to rework on some chatbot responses to make it more efficient. In pair with a data scientist, remotly.",
    stack: ["React", "Python", "Uvicorn", "FastAPI"],
  },
  {
    name: "SNCF",
    description:
      "Rework of the front-end of all ter.sncf.fr websites, in React + Next.js with accessibility constraints, and regions specifiation themes. In a team of 10 peoples sometimes in customer's office, most remotly.",
    stack: [
      "TypeScript",
      "React",
      "NextJS",
      "MaterialUI",
      "Storybook",
      "JEST",
      "Gitlab",
      "JIRA",
    ],
    livePreview: "https://m.ter.sncf.com/hauts-de-france",
  },
  {
    name: "POC Svelte x Algolia x TailwindCSS",
    description:
      "Self training in order to learn some basics of Svelte.js. Development of a quick and basic search engine based on an Algolia sample dataset with TailwindCSS for style.",
    stack: ["Svelte", "Algolia", "Tailwind"],
  },
  {
    name: "Cevoo",
    description:
      "Mobile application entirely dedicated to veterinary auxiliaries. Addition of new features, code update, performance optimization. Implementation of a points system per user according to the actions performed, addition of a duel functionality between users.",
    stack: ["React Native", "Node.JS", "PostgreSQL", "Gitlab", "Heroku"],
  },
  {
    name: "POC Shopify webhooks - headless commerce",
    description:
      "Catch part of Shopify requests via webhooks on a webservice in Node.js and Prisma in order to have a database of products, categories and customers. The purpose is to have more freedom than with classic Shopify APIs in a context of Headless project creation on the front-end.",
    stack: ["Node.JS", "Gitlab"],
  },
  {
    name: "Unsold",
    description:
      "Update back-end and API's. Migration of some PostgreSQL requests to Prisma requests for performance improvement.",
    stack: ["Node.JS", "Express", "Prisma", "PostgreSQL", "Gitlab", "Heroku"],
  },
  {
    name: "SuperCollab",
    description:
      "As part of the creation of a Start-Up, creation of a Web App allowing the connection between different law firms / notaries.",
    stack: ["React", "Docker"],
  },
  {
    name: "NewDeal",
    description:
      "During a partnership between NewDeal and La Mobilery, realization of a mobile application in React Native of an HR management solution (establishment of pay slips, leave requests ...).",
    stack: ["React Native", "Typescript"],
  },
  {
    name: "Experiencis",
    description:
      "Development of a platform aimed at connecting buyers and individuals in order to carry out remote visits to goods (real estate, automobile, high-tech). In tandem with a technical lead, reinforcement on the Front development part of a Web App in ReactJS.",
    stack: ["React", "Material Design"],
  },
  {
    name: "RapidFlyer",
    description:
      "Redesign of the front-end for the V4 of the Website in Next.js in headless commerce. In a team of 10 people directly at the customer. Development of screens and deployment of revenue phases in direct contact with the customer.",
    stack: [
      "React",
      "NextJS",
      "Azure",
      "Redux",
      "Redux Saga",
      "StyledComponent",
    ],
    livePreview: "https://www.rapid-flyer.com/",
  },
  {
    name: "Leroy Merlin",
    description:
      "Intervention as a techOps. Management of the fleet of terminals deployed in France in stores and warehouses via an MDM. Deployment of updates and fixes to terminals. Implementation of analytics feedback to monitor the status of deployments and terminals. Development of a monitoring platform for the solutions deployed by the squad. Participation in the Google Cloud Challenge for 3 days in partnership with ADEO, project to port a legacy application to a cloud infrastructure. Benchmark of the various MDMs on the market, consultation with terminal manufacturers for fleet renewal.",
    stack: [
      "Javascript",
      "Python",
      "Shell",
      "Docker",
      "Kubernetes",
      "GCP",
      "Openshift",
    ],
  },
];

const skills = [
  { name: "HTML", source: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", source: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    name: "JavaScript",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    source: "https://www.typescriptlang.org/",
  },
  { name: "React Native", source: "https://reactnative.dev/" },
  { name: "React", source: "https://reactjs.org/" },
  {
    name: "Redux",
    source: "https://redux.js.org/",
  },
  {
    name: "NextJS",
    source: "https://nextjs.org/",
  },
  {
    name: "Storybook",
    source: "https://storybook.js.org/",
  },
  { name: "SASS", source: "https://sass-lang.com/" },
  {
    name: "MaterialUI",
    source: "https://mui.com/",
  },
  {
    name: "StyledComponents",
    source: "https://styled-components.com/",
  },
  { name: "Git", source: "https://git-scm.com/" },
  { name: "CI/CD", source: "https://docs.gitlab.com/ee/ci/" },
  { name: "Jest", source: "https://jestjs.io/" },
];

const contact = {
  email: "contact@joris-lefait.com",
};

// display projects section
const projectsSection = document.getElementById("projects-grid");
if (projects.length > 0) {
  projects.forEach((project) => {
    projectsSection.innerHTML += `
          <article>
            <div>
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <p><strong>Stack:</strong> ${project.stack.join(", ")}</p>
              ${
                project.livePreview
                  ? `<a href="${project.livePreview}" target="_blank">See it live !</a>`
                  : ""
              }
            </div>
          </article>
        `;
  });

  // Agencement de type "masonry" en JavaScript classique
  const grid = document.querySelector("#projects-grid");
  const cards = document.querySelectorAll("#projects-grid article");
  const columnCount = 3; // Nombre de colonnes
  const columnWidth = grid.offsetWidth / columnCount;
  const columnHeights = new Array(columnCount).fill(0);

  cards.forEach((card) => {
    let shortestColumnIndex = 0;
    for (let i = 1; i < columnCount; i++) {
      if (columnHeights[i] < columnHeights[shortestColumnIndex]) {
        shortestColumnIndex = i;
      }
    }

    card.style.position = "absolute";
    card.style.left = shortestColumnIndex * columnWidth + "px";
    card.style.top = columnHeights[shortestColumnIndex] + 30 + "px";

    columnHeights[shortestColumnIndex] += card.offsetHeight + 15; // Ajoute la hauteur de la carte + un espacement
  });

  // Ajuste la hauteur du conteneur
  const maxHeight = Math.max(...columnHeights);
  grid.style.height = maxHeight + "px";
}

// display skills section
const skillsSection = document.getElementById("skills-list");
if (skills.length > 0) {
  skills.forEach((skill) => {
    // Determine icon based on skill name (you'll need to adjust this)
    let iconClass = "fas fa-code"; // Default icon
    if (skill.name === "HTML") iconClass = "fab fa-html5";
    if (skill.name === "CSS") iconClass = "fab fa-css3-alt";
    if (skill.name === "JavaScript") iconClass = "fab fa-js";
    if (skill.name === "React") iconClass = "fab fa-react";
    if (skill.name === "Node.JS") iconClass = "fab fa-node-js";
    //... add more icons as needed

    skillsSection.innerHTML += `
      <li>
        <i class="${iconClass}"></i>
        <a href="${skill.source}" target="_blank">${skill.name}</a>
      </li>
    `;
  });
}
