// BANCO DE DADOS DE PETS
const petsDatabase = [
  {
    id: "golden",
    name: "Golden Retriever",
    species: "dog",
    speciesName: "Cachorro",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    energy: "Alta",
    sociability: "Alta",
    maintenance: "Média",
    noise: "Médio",
    cost: "$$$",     costNumeric: 3,     spaceNeeded: "house_yard", // apartment, house_small, house_yard     timeNeeded: "high", // low, medium, high     kidFriendly: true,     petFriendly: true,     idealFor: "Famílias ativas e pessoas com tempo livre",     description: "Extremamente dócil, carinhoso e inteligente. Um companheiro fiel para todas as horas.",     tips: "Necessita de rotina de exercícios diários para gastar energia e escovação frequente da pelagem."   },   {     id: "french_bulldog",     name: "Bulldog Francês",     species: "dog",     speciesName: "Cachorro",     image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",     energy: "Baixa",     sociability: "Alta",     maintenance: "Média",     noise: "Baixo",     cost: "$$$",     costNumeric: 3,     spaceNeeded: "apartment",     timeNeeded: "medium",     kidFriendly: true,     petFriendly: true,     idealFor: "Mora em apartamento e busca um pet calmo",     description: "Adaptável, brincalhão e bastante apegado aos donos. Ótimo companheiro para espaços menores.",     tips: "Cuidado com dias muito quentes (tendência a problemas respiratórios) e controle o peso do pet."   },   {     id: "srd_dog",     name: "Cão Vira-Lata (SRD)",     species: "dog",     speciesName: "Cachorro",     image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",     energy: "Média",     sociability: "Alta",     maintenance: "Baixa",     noise: "Médio",     cost: "$$",     costNumeric: 2,     spaceNeeded: "apartment",     timeNeeded: "medium",     kidFriendly: true,     petFriendly: true,     idealFor: "Quem procura afeto, lealdade e alta resistência",     description: "Único e resistente, adapta-se com facilidade a diferentes ambientes e ama demonstrações de carinho.",     tips: "Adoção responsável traz gratidão eterna. Garanta vacinação e consultas preventivas ao veterinário."   },   {     id: "shihtzu",     name: "Shih Tzu",     species: "dog",     speciesName: "Cachorro",     image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",     energy: "Baixa",     sociability: "Alta",     maintenance: "Alta",     noise: "Baixo",     cost: "$$",     costNumeric: 2,     spaceNeeded: "apartment",     timeNeeded: "medium",     kidFriendly: true,     petFriendly: true,     idealFor: "Apartamentos e famílias calmas",     description: "Amável e companheiro de colo. Adora estar perto dos donos e exige poucos exercícios físicos.",     tips: "Requer escovação diária dos pelos ou tosa regular para evitar nós."   },   {     id: "border_collie",     name: "Border Collie",     species: "dog",     speciesName: "Cachorro",     image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=800&q=80",     energy: "Muito Alta",     sociability: "Média",     maintenance: "Média",     noise: "Médio",     cost: "$$$",     costNumeric: 3,     spaceNeeded: "house_yard",     timeNeeded: "high",     kidFriendly: true,     petFriendly: true,     idealFor: "Pessoas muito ativas e praticantes de esportes",     description: "A raça mais inteligente do mundo. Possui energia quase inesgotável e precisa de estímulos mentais.",     tips: "Precisa de atividades intensas diárias e brinquedos interativos do tipo quebra-cabeça."   },   {     id: "persian_cat",     name: "Gato Persa",     species: "cat",     speciesName: "Gato",     image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",     energy: "Baixa",     sociability: "Média",     maintenance: "Alta",     noise: "Baixo",     cost: "$$",
    costNumeric: 2,
    spaceNeeded: "apartment",
    timeNeeded: "low",
    kidFriendly: true,
    petFriendly: true,
    idealFor: "Ambientes tranquilos e pessoas que passam parte do dia fora",
    description: "Tranquilo, silencioso e muito gracioso. Adora relaxar em locais macios da casa.",
    tips: "A pelagem longa exige escovação diária e atenção constante aos olhos."
  },
  {
    id: "srd_cat",
    name: "Gato Vira-Lata (SRD)",
    species: "cat",
    speciesName: "Gato",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    energy: "Média",
    sociability: "Alta",
    maintenance: "Baixa",
    noise: "Baixo",
    cost: "$",
    costNumeric: 1,
    spaceNeeded: "apartment",
    timeNeeded: "low",
    kidFriendly: true,
    petFriendly: true,
    idealFor: "Qualquer tipo de lar, especialmente com rotina corrida",
    description: "Esperto, independente e carinhoso na medida certa. Muito adaptável.",
    tips: "Mantenha o ambiente enriquecido com prateleiras e arranhadores para evitar o tédio."
  },
  {
    id: "cockatiel",
    name: "Calopsita",
    species: "bird",
    speciesName: "Ave",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
    energy: "Média",
    sociability: "Alta",
    maintenance: "Baixa",
    noise: "Médio",
    cost: "$",
    costNumeric: 1,
    spaceNeeded: "apartment",
    timeNeeded: "medium",
    kidFriendly: true,
    petFriendly: false,
    idealFor: "Quem quer um pet interativo que ocupa pouco espaço",
    description: "Muito sociável e inteligente, capaz de aprender a assobiar músicas e interagir com a família.",
    tips: "Deixe-a fora da gaiola sob supervisão e mantenha uma rotina diária de interações."
  },
  {
    id: "guinea_pig",
    name: "Porquinho da Índia",
    species: "rodent",
    speciesName: "Roedor",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    energy: "Baixa",
    sociability: "Alta",
    maintenance: "Baixa",
    noise: "Baixo",
    cost: "$",
    costNumeric: 1,
    spaceNeeded: "apartment",
    timeNeeded: "low",
    kidFriendly: true,
    petFriendly: false,
    idealFor: "Crianças e espaços pequenos",
    description: "Dócil, manso e muito fofo. Emite pequenos barulhinhos para demonstrar alegria.",
    tips: "Como são animais gregários, recomenda-se ter pelo menos dois do mesmo sexo juntos."
  },
  {
    id: "betta",
    name: "Peixe Betta",
    species: "exotic",
    speciesName: "Peixe",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    energy: "Baixa",
    sociability: "Baixa",
    maintenance: "Baixa",
    noise: "Silencioso",
    cost: "$",
    costNumeric: 1,
    spaceNeeded: "apartment",
    timeNeeded: "low",
    kidFriendly: true,
    petFriendly: true,
    idealFor: "Pessoas sem tempo e que buscam efeito relaxante",
    description: "Exótico e exuberante com suas nadadeiras coloridas. Traz paz e beleza ao ambiente.",
    tips: "Requer aquário com filtragem suave e água em temperatura adequada. Deve viver sozinho no aquário."
  }
];

// ESTADO DA APLICAÇÃO
let currentTopMatches = [];
let currentMatchIndex = 0;
let favorites = JSON.parse(localStorage.getItem('petmatch_favorites')) || [];

// ELEMENTOS DO DOM
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');
const petForm = document.getElementById('pet-form');
const favCountBadge = document.getElementById('fav-count');

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  updateFavBadge();
  setupNavigation();
  setupForm();
  setupCatalog();
  setupFavoritesView();
  setupModal();
});

// NAVEGAÇÃO ENTRE ABAS
function setupNavigation() {
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      navBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.add('hidden'));

      btn.classList.add('active');
      document.getElementById(targetId).classList.remove('hidden');

      if (targetId === 'catalog-section') renderCatalog();
      if (targetId === 'favorites-section') renderFavorites();
    });
  });

  document.getElementById('btn-recalculate')?.addEventListener('click', () => {
    switchTab('quiz-section');
  });

  document.getElementById('btn-next-match')?.addEventListener('click', () => {
    if (currentTopMatches.length > 1) {
      currentMatchIndex = (currentMatchIndex + 1) % currentTopMatches.length;
      renderMatchResult(currentTopMatches[currentMatchIndex]);
    }
  });
}

function switchTab(tabId) {
  navBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-target') === tabId);
  });
  tabContents.forEach(c => {
    c.classList.toggle('hidden', c.id !== tabId);
  });
}

// LÓGICA DO ALGORITMO DE MATCH
function setupForm() {
  petForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(petForm);
    const userPrefs = {
      housing: formData.get('housing'),
      kids: formData.get('kids') === 'yes',
      otherPets: formData.get('otherPets') === 'yes',
      time: formData.get('time'),
      budget: parseInt(formData.get('budget')),
      species: formData.get('species')
    };

    // Calcular pontuação de compatibilidade para cada pet
    const scoredPets = petsDatabase.map(pet => {
      let score = 0;
      let maxScore = 0;

      // 1. Espécie (Filtro determinante)
      maxScore += 30;
      if (userPrefs.species === 'any' || userPrefs.species === pet.species) {
        score += 30;
      }

      // 2. Espaço de Moradia
      maxScore += 20;
      if (userPrefs.housing === 'apartment') {
        if (pet.spaceNeeded === 'apartment') score += 20;
        else if (pet.spaceNeeded === 'house_small') score += 10;
      } else if (userPrefs.housing === 'house_small') {
        if (pet.spaceNeeded !== 'house_yard') score += 20;
        else score += 10;
      } else { // house_yard
        score += 20;
      }

      // 3. Tempo Disponível
      maxScore += 20;
      if (userPrefs.time === 'low') {
        if (pet.timeNeeded === 'low') score += 20;
        else if (pet.timeNeeded === 'medium') score += 5;
      } else if (userPrefs.time === 'medium') {
        if (pet.timeNeeded !== 'high') score += 20;
        else score += 10;
      } else { // high
        score += 20;
      }

      // 4. Orçamento
      maxScore += 15;
      if (pet.costNumeric <= userPrefs.budget) {
        score += 15;
      } else if (pet.costNumeric === userPrefs.budget + 1) {
        score += 5;
      }

      // 5. Crianças & Outros Pets
      maxScore += 15;
      if (userPrefs.kids && pet.kidFriendly) score += 7.5;
      if (!userPrefs.kids) score += 7.5;

      if (userPrefs.otherPets && pet.petFriendly) score += 7.5;
      if (!userPrefs.otherPets) score += 7.5;

      // Porcentagem Final (0 - 100%)
      const matchPercentage = Math.round((score / maxScore) * 100);

      return {
        ...pet,
        matchScore: Math.min(matchPercentage, 98) // Teto estético de 98%
      };
    });

    // Ordenar do maior para o menor score
    scoredPets.sort((a, b) => b.matchScore - a.matchScore);

    currentTopMatches = scoredPets;
    currentMatchIndex = 0;

    renderMatchResult(currentTopMatches[0]);
    switchTab('result-section');
  });
}

// EXIBIR RESULTADO PRINCIPAL
function renderMatchResult(pet) {
  const resultCard = document.getElementById('result-card-content');
  const isFav = favorites.includes(pet.id);

  resultCard.innerHTML = `
    <div class="result-banner">
      <div class="result-img-container">
        <img src="${pet.image}" alt="${pet.name}">
        <div class="compatibility-badge">
          <i class="fa-solid fa-bolt"></i> ${pet.matchScore}% Match
        </div>
      </div>
      <div class="result-info">
        <div>
          <div class="result-title-row">
            <div>
              <h2>${pet.name}</h2>
              <span class="tag">${pet.speciesName}</span>
            </div>
            <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${pet.id}')">
              <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
            </button>
          </div>

          <div class="ideal-for-box">
            <strong><i class="fa-solid fa-check-circle"></i> Ideal para:</strong> ${pet.idealFor}
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-item">
            <span class="label">Energia</span>
            <span class="val">${pet.energy}</span>
          </div>
          <div class="stat-item">
            <span class="label">Sociabilidade</span>
            <span class="val">${pet.sociability}</span>
          </div>
          <div class="stat-item">
            <span class="label">Custo</span>
            <span class="val">${pet.cost}</span>
          </div>
          <div class="stat-item">
            <span class="label">Barulho</span>
            <span class="val">${pet.noise}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="result-details">
      <div class="detail-block">
        <h4><i class="fa-solid fa-circle-info"></i> Por que combina com você?</h4>
        <p>${pet.description}</p>
      </div>
      <div class="detail-block">
        <h4><i class="fa-solid fa-lightbulb"></i> Dicas e Cuidados Especializados</h4>
        <p>${pet.tips}</p>
      </div>
    </div>
  `;

  renderAlternatives();
}

// EXIBIR OPCIONALMENTE OUTRAS 3 ALTERNATIVAS
function renderAlternatives() {
  const container = document.getElementById('alternatives-grid');
  const alternatives = currentTopMatches.slice(1, 4);

  container.innerHTML = alternatives.map(pet => `
    <div class="pet-card">
      <img src="${pet.image}" alt="${pet.name}" class="pet-card-img">
      <div class="pet-card-body">
        <div class="pet-card-header">
          <h4 class="pet-card-title">${pet.name}</h4>
          <span class="tag">${pet.matchScore}%</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${pet.description.substring(0, 75)}...</p>
        <button class="btn-card-action" onclick="openPetModal('${pet.id}')">Ver Detalhes</button>
      </div>
    </div>
  `).join('');
}

// CONFIGURAÇÃO DO CATÁLOGO
function setupCatalog() {
  const searchInput = document.getElementById('catalog-search');
  const speciesSelect = document.getElementById('catalog-filter-species');
  const energySelect = document.getElementById('catalog-filter-energy');

  const filterHandler = () => {
    const searchVal = searchInput.value.toLowerCase();
    const speciesVal = speciesSelect.value;
    const energyVal = energySelect.value;

    const filtered = petsDatabase.filter(pet => {
      const matchesSearch = pet.name.toLowerCase().includes(searchVal);
      const matchesSpecies = speciesVal === 'all' || pet.species === speciesVal;
      const matchesEnergy = energyVal === 'all' || pet.energy === energyVal;
      return matchesSearch && matchesSpecies && matchesEnergy;
    });

    renderCatalogGrid(filtered);
  };

  searchInput.addEventListener('input', filterHandler);
  speciesSelect.addEventListener('change', filterHandler);
  energySelect.addEventListener('change', filterHandler);
}

function renderCatalog() {
  renderCatalogGrid(petsDatabase);
}

function renderCatalogGrid(list) {
  const container = document.getElementById('catalog-grid');
  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum pet encontrado com os filtros selecionados.</p>`;
    return;
  }

  container.innerHTML = list.map(pet => {
    const isFav = favorites.includes(pet.id);
    return `
      <div class="pet-card">
        <img src="${pet.image}" alt="${pet.name}" class="pet-card-img">
        <div class="pet-card-body">
          <div>
            <div class="pet-card-header">
              <h3 class="pet-card-title">${pet.name}</h3>
              <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${pet.id}')">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
              </button>
            </div>
            <div class="pet-card-tags">
              <span class="tag">${pet.speciesName}</span>
              <span class="tag">Energia: ${pet.energy}</span>
              <span class="tag">Custo: ${pet.cost}</span>
            </div>
          </div>
          <button class="btn-card-action" onclick="openPetModal('${pet.id}')">Ver Detalhes</button>
        </div>
      </div>
    `;
  }).join('');
}

// GERENCIAMENTO DE FAVORITOS
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('petmatch_favorites', JSON.stringify(favorites));
  updateFavBadge();

  // Re-renderizar estado visual caso esteja na tela atual
  if (currentTopMatches.length > 0 && currentTopMatches[currentMatchIndex]?.id === id) {
    renderMatchResult(currentTopMatches[currentMatchIndex]);
  }

  const activeTab = document.querySelector('.nav-btn.active').getAttribute('data-target');
  if (activeTab === 'catalog-section') renderCatalog();
  if (activeTab === 'favorites-section') renderFavorites();
}

function updateFavBadge() {
  favCountBadge.textContent = favorites.length;
}

function renderFavorites() {
  const container = document.getElementById('favorites-grid');
  const emptyState = document.getElementById('favorites-empty');

  const favPets = petsDatabase.filter(pet => favorites.includes(pet.id));

  if (favPets.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    container.innerHTML = favPets.map(pet => `
      <div class="pet-card">
        <img src="${pet.image}" alt="${pet.name}" class="pet-card-img">
        <div class="pet-card-body">
          <div>
            <div class="pet-card-header">
              <h3 class="pet-card-title">${pet.name}</h3>
              <button class="btn-fav active" onclick="toggleFavorite('${pet.id}')">
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <div class="pet-card-tags">
              <span class="tag">${pet.speciesName}</span>
              <span class="tag">${pet.cost}</span>
            </div>
          </div>
          <button class="btn-card-action" onclick="openPetModal('${pet.id}')">Ver Detalhes</button>
        </div>
      </div>
    `).join('');
  }
}

// MODAL DE DETALHES DO PET
function setupModal() {
  const modal = document.getElementById('pet-modal');
  const closeBtn = document.getElementById('modal-close');
  const overlay = modal.querySelector('.modal-overlay');

  const closeModal = () => modal.classList.add('hidden');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

function openPetModal(id) {
  const pet = petsDatabase.find(p => p.id === id);
  if (!pet) return;

  const modal = document.getElementById('pet-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="${pet.image}" alt="${pet.name}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
      <h2>${pet.name}</h2>
      <span class="tag">${pet.speciesName}</span>
    </div>

    <div class="stats-grid" style="margin-bottom: 20px;">
      <div class="stat-item"><span class="label">Energia</span><span class="val">${pet.energy}</span></div>
      <div class="stat-item"><span class="label">Sociabilidade</span><span class="val">${pet.sociability}</span></div>
      <div class="stat-item"><span class="label">Custo</span><span class="val">${pet.cost}</span></div>
      <div class="stat-item"><span class="label">Barulho</span><span class="val">${pet.noise}</span></div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div>
        <strong><i class="fa-solid fa-check"></i> Ideal para:</strong>
        <p style="color: var(--text-muted);">${pet.idealFor}</p>
      </div>
      <div>
        <strong><i class="fa-solid fa-info-circle"></i> Descrição:</strong>
        <p style="color: var(--text-muted);">${pet.description}</p>
      </div>
      <div>
        <strong><i class="fa-solid fa-lightbulb"></i> Cuidados Recomendados:</strong>
        <p style="color: var(--text-muted);">${pet.tips}</p>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}
