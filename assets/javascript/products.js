// Data Structure
const products = [{
    image: './assets/images/products/Glass Wool Blanket.jpg',
    name: 'Glass Wool Blankets',
    info1: 'Facing: Alu-foil / BGF / BGT / Unfaced',
    info2: 'Thickness: 25–50 mm',
    info3: 'Density: 10–24 kg/m³',
    info4: 'Use: Thermal, sound dampening, fire safety'
}, {
    image: './assets/images/products/glass wool board.jpg',
    name: 'Glass Wool Boards',
    info1: 'Facing: Alu-foil / BGT / BGF / Unfaced',
    info2: 'Thickness: 15–50 mm',
    info3: 'Density: 32–96 kg/m³',
    info4: 'Use: AC duct lining, sound absorption'
}, {
    image: './assets/images/products/Rock Wool Blanket.webp',
    name: 'Rock Wool Blankets',
    info1: 'Facing: Wire mesh / Alu-foil / Unfaced',
    info2: 'Thickness: 30–100 mm',
    info3: 'Density: 50–100 kg/m³',
    info4: 'Use: Boilers, pipelines, steel structures'
}, {
    image: './assets/images/products/Rock Wool Board.png',
    name: 'Rock Wool Boards',
    info1: 'Facing: Unfaced / Alufoil',
    info2: 'Thickness: 25–50 mm',
    info3: 'Density: 50–115 kg/m³',
    info4: 'Use: Cavity walls, roofs, sandwich panels'
}, {
    image: './assets/images/products/Aluminium Cladding.webp',
    name: 'Aluminium Cladding',
    info1: 'Alloy: AA 1050 / 3003, H14/H16',
    info2: 'Thickness: 0.4–3 mm, Width: 1000 mm',
    info3: 'Density: ~2710 kg/m³',
    info4: 'Use: Mechanical protection for insulation'
},  {
    image: './assets/images/products/Duct Connectors.webp',
    name: 'Duct Connectors',
    info1: 'Material: PVC/Galvanized sheet',
    info2: 'Sheet Thickness: 0.5–1.0 mm (20-26ga)',
    info3: 'Sizes: 45×75×45 mm / 70×100×70 mm',
    info4: 'Use: Vibration isolation & noise reduction'
},  {
    image: './assets/images/products/Aluminium Duct Tapes.jpg',
    name: 'Aluminium Duct Tapes',
    info1: 'Width: 50–75 mm, Synthetic adhesive',
    info2: 'Thickness: 30–50 microns',
    info3: 'Temp: -20°C to +120°C',
    info4: 'Use: Sealing FSK boards, vapor sealing'
}, {
    image: './assets/images/products/Ceramic Fiber Blankets.webp',
    name: 'Ceramic Fiber Blankets',
    info1: 'Max Temp: 1260°C (2300°F)',
    info2: 'Density: 64–160 kg/m³',
    info3: 'Thickness: 13–50 mm',
    info4: 'Use: Furnaces, kilns, power plants'
}, {
    image: './assets/images/products/Duct Sealant.avif',
    name: 'Duct Sealant',
    info1: 'Material: Water-based Latex emulsion',
    info2: 'Color: Grey, VOC compliant',
    info3: 'Skin Time: ~6-10 minutes',
    info4: 'Use: Sealing duct joints and penetrations'
}, {
    image: './assets/images/products/ArmaFlex (elastomeric).jpg',
    name: 'ArmaFlex (elastomeric)',
    info1: 'Rolls: 3–25 mm / Sheets: 40–50 mm',
    info2: 'Density: 48–96 kg/m³',
    info3: 'Temp: -50°C to +105°C',
    info4: 'Use: Condensation control, vapor barrier'
}, {
    image: './assets/images/products/Self‑adhesive pins.webp',
    name: 'Self‑adhesive pins',
    info1: 'Base: 50×50 mm, 0.4 mm Galvanized Steel',
    info2: 'Pin: 12ga (2.7mm) Zinc-plated steel',
    info3: 'Temp: -40°C to +80°C',
    info4: 'Use: Fixing insulation to smooth ducts'
}, {
    image: './assets/images/products/Flexible Air Ducts.jpg',
    name: 'Flexible Air Ducts',
    info1: 'Insulation: 25 mm Glass Wool',
    info2: 'Density: 16–24 kg/m³',
    info3: 'Diameter: 52–800 mm',
    info4: 'Temp: -30°C to +150°C'
}];

// Rendering 
let product_card_html = ''

products.forEach((product) => {
    product_card_html += `
    <article class="card">
        <img src="${product.image}" alt="${product.name}" class="card-img" />
        <h5>${product.name}</h5>
        <div class="product-details">
            <p class="product">${product.info1}</p>
            <p class="product">${product.info2}</p>
            <p class="product">${product.info3}</p>
            <p class="product">${product.info4}</p>
        </div>
        <button class="button-y">Order</button>
    </article>`
})

const products_html = document.querySelector('.card-container');
products_html.innerHTML += product_card_html;