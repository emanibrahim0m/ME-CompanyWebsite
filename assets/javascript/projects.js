// Data Structure
const projects = [{
    image: './assets/images/projects/مشروع أبراج سموحة (أبناء حسن علام - كوميب).jpg',
    name: 'Smouha Towers',
    info1: 'HVAC insulation, glass wool & Armaflex for residential towers.',
}, {
    image: './assets/images/projects/) مشروع المركز الطبي بسموحة (سكاي تكنولوجي)..jpg',
    name: 'Smouha Medical Center',
    info1: 'Sound insulation for operating rooms, rock wool boards.',
}, {
    image: './assets/images/projects/سلسلة متاجر لوفلي (موور جروب)..png',
    name: 'Lovely shops chain',
    info1: 'Acoustic ceilings & duct insulation for retail spaces.',
}, {
    image: './assets/images/projects/مطار النزهة (مجموعة بن لادن ا-يج ي اير)..jpg',
    name: 'Nuzha Airport',
    info1: 'Thermal insulation for terminal HVAC, flexible ducts.',
}, {
    image: './assets/images/projects/الجامعه اليابانيه.png',
    name: 'Egypt-Japan University',
    info1: 'Industrial insulation for pipework & vessels, rock wool.',
}, {
    image: './assets/images/projects/مصنع فاركو للأدوية.jpg',
    name: 'Farco Pharmaceutical',
    info1: 'Cleanroom insulation, aluminium cladding & sealants.',
}, {
    image: './assets/images/projects/فندق شيراتون المنتزة ( شركة هاي دام).jpg',
    name: 'Sheraton Montazah Hotel',
    info1: 'Acoustic insulation for guest rooms & meeting halls.',
}, {
    image: './assets/images/projects/سيتي لايت مول (مجموعة سيتي لايت).jpg',
    name: 'City Light Mall',
    info1: 'Duct insulation & flexible connectors for central AC.',
}];

// Rendering 
let project_card_html = ''

projects.forEach((project) => {
    project_card_html += `
    <article class="card">
        <img src="${project.image}" alt="${project.name}" class="card-img" />
        <h5>${project.name}</h5>
        <div class="project-details">
            <p class="product">${project.info1}</p>
        </div>
    </article>`
})

const projects_html = document.querySelector('.card-container');
projects_html.innerHTML += project_card_html;