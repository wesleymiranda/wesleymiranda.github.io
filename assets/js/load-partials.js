
async function loadSection(sectionId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(sectionId).innerHTML = html;
    } catch (error) {
        console.error(`Erro ao carregar ${sectionId}:`, error);
    }
}

// Carrega todas as seções de uma vez
async function loadAllSections() {
    await loadSection('header-container', 'assets/partials/header.html');
    await loadSection('hero-container', 'assets/partials/hero.html');
    await loadSection('about-container', 'assets/partials/about.html');
    // Adicione outras seções aqui
}

// Executa quando a página carregar
window.addEventListener('DOMContentLoaded', loadAllSections);