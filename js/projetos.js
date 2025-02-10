const projetos = [
    {
        nome: "Projeto 1",
        pasta: "projetos/projeto1",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        descricao: "Este é o primeiro projeto.",
    },
    {
        nome: "Projeto 2",
        pasta: "projetos/projeto2",
        tecnologias: ["React", "Node.js"],
        descricao: "Este é o segundo projeto.",
    },
    {
        nome: "Projeto 3",
        pasta: "projetos/projeto3",
        tecnologias: ["Python", "Django"],
        descricao: "Este é o terceiro projeto.",
    }
];

const container = document.getElementById('projects-container');

function renderProjects() {
    projetos.forEach(projeto => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        let imagesHtml = '';
        for (let i = 1; i <= 3; i++) {
            imagesHtml += `<img src="${projeto.pasta}/image${i}.jpg" alt="${projeto.nome} Image ${i}" class="project-image" />`;
        }

        const techTags = projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join(' ');

        projectElement.innerHTML = `
                    <h2>${projeto.nome}</h2>
                    <div class="project-images">${imagesHtml}</div>
                    <p class="project-description">${projeto.descricao}</p>
                    <div class="tech-tags">${techTags}</div>
                `;

        container.appendChild(projectElement);
    });
}

renderProjects();