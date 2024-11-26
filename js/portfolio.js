document.addEventListener("DOMContentLoaded", () => {
    const homeTab = document.getElementById("homeTab");
    const aboutTab = document.getElementById("aboutTab");
    const projectsTab = document.getElementById("projectsTab");
    const contactTab = document.getElementById("contactTab");

    const homeContent = document.getElementById("homeContent");
    const aboutContent = document.getElementById("aboutContent");
    const projectsContent = document.getElementById("projectsContent");
    const contactContent = document.getElementById("contactContent");

    const portfolioA = document.getElementById("portfolioA");

    const tabs = [homeTab, aboutTab, projectsTab, contactTab];
    const contents = [homeContent, aboutContent, projectsContent, contactContent];

    let gamesOpened = false;
    let sitesProgramsOpened = false;

    function showContent(index) {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        tabs[index].classList.add("active");
        contents[index].classList.add("active");
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            showContent(index);
        });
    });

    portfolioA.addEventListener("click", () => {
        portfolioA.classList.add("active");
        contents.forEach(c => c.style.display = "block");
        showContent(0);
    });

    const gameProjectButton = document.getElementById("gameProject");
    
    gameProjectButton.addEventListener("click", () => {
        if (!gamesOpened) {
            const gamesContent = document.createElement("div");
            gamesContent.classList.add("section-content", "games-content");
            gamesContent.setAttribute("id", "gamesContent");
    
            gamesContent.innerHTML = `
                <h3>Jogos:</h3>
                <button class="project-button" id="gameJam">Game Jam</button>
                <button class="project-button" id="memoryGame">Jogo da Memória</button>
                <button class="project-button" id="ballGame">Jogo da Bolinha</button>
                <button class="project-button" id="spriteGame">Jogo com Sprites</button>
            `;
    
            const projectsContent = document.getElementById("projectsContent");
            projectsContent.appendChild(gamesContent);
            gamesContent.style.display = "block";
    
            gamesOpened = true;
    
            document.getElementById("gameJam").addEventListener("click", () => {
                window.open("https://drive.google.com/drive/folders/1cd6PSeseu1Eot1ktDU2ibDl0LLrexgBD?usp=sharing", "_blank");
            });
    
            document.getElementById("memoryGame").addEventListener("click", () => {
                window.open("https://nokigamerhd.github.io/1-jod-memory-game/", "_blank");
            });
    
            document.getElementById("ballGame").addEventListener("click", () => {
                window.open("https://nokigamerhd.github.io/1-jod-jogo-ball/", "_blank");
            });
    
            document.getElementById("spriteGame").addEventListener("click", () => {
                window.open("https://nokigamerhd.github.io/1-jod-sprites/", "_blank");
            });
        }
    });
    
    
    const websiteProjectButton = document.getElementById("websiteProject");

websiteProjectButton.addEventListener("click", () => {

    let sitesContent = document.getElementById("sitesContent");
    if (!sitesContent) {
        sitesContent = document.createElement("div");
        sitesContent.classList.add("section-content");
        sitesContent.setAttribute("id", "sitesContent");

        sitesContent.innerHTML = `
            <h3>Sites/Programas:</h3>
            <button class="project-button" id="siteWithLink">Site com Link</button>
            <button class="project-button" id="siteWithScenario">Site com Cenário</button>
            <button class="project-button" id="repositoryLP">Repositório L.P.</button>
        `;

        const projectsContent = document.getElementById("projectsContent");
        projectsContent.appendChild(sitesContent);

        const siteWithLinkButton = document.getElementById("siteWithLink");
        siteWithLinkButton.addEventListener("click", () => {
            window.open("https://nokigamerhd.github.io/1-jod-site-com-link/", "_blank");
        });

        const siteWithScenarioButton = document.getElementById("siteWithScenario");
        siteWithScenarioButton.addEventListener("click", () => {
            window.open("https://nokigamerhd.github.io/1-jod-treino-de-cenario/", "_blank");
        });

        const repositoryLPButton = document.getElementById("repositoryLP");
        repositoryLPButton.addEventListener("click", () => {
            window.open("https://nokigamerhd.github.io/1-jod-lp/", "_blank");
        });
    }
});

    const pixelArtProjectButton = document.getElementById("pixelArtProject");

    pixelArtProjectButton.addEventListener("click", () => {
        window.open("https://drive.google.com/drive/folders/1YQJNe8RsQFDJml0GkNfiMpA1-iZujZtN?usp=sharing", "_blank");
    });

    const editingProjectButton = document.getElementById("editingProject");

    editingProjectButton.addEventListener("click", () => {
        window.open("https://drive.google.com/drive/folders/1dwPvbZ9gyrvikJKoeoW6fT55a_crIxJM?usp=sharing", "_blank");
    });
});
