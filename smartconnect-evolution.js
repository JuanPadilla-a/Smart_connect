const modules = [
  {
    id: 1,
    title: 'Partes del celular',
    description: 'Descubre los componentes principales que hacen funcionar tu teléfono.',
    summary: 'Explora la pantalla, batería, cámara, antena y procesador con un diagrama interactivo.',
    steps: [
      { label: 'Pantalla', detail: 'La pantalla muestra la información y responde a tus dedos.' },
      { label: 'Batería', detail: 'Proporciona energía para que el celular funcione durante horas.' },
      { label: 'Cámara', detail: 'Captura fotos y videos que compartes en redes sociales.' },
      { label: 'Antena', detail: 'Envía y recibe señales de red para llamadas y datos.' },
      { label: 'Procesador', detail: 'Es el cerebro que coordina todas las funciones del teléfono.' }
    ],
    simulation: 'Haz clic en cada parte del teléfono para conocer su función.',
    evaluation: [
      {
        question: '¿Qué parte convierte tu toque en acciones dentro del teléfono?',
        options: ['Batería', 'Pantalla táctil', 'Cámara'],
        answer: 1,
        feedback: ['No es la batería.', 'Correcto: la pantalla táctil detecta tu toque.', 'La cámara no se encarga de eso.']
      },
      {
        question: '¿Cuál componente recibe señal móvil y wifi?',
        options: ['Antena', 'Procesador', 'Pantalla'],
        answer: 0,
        feedback: ['Correcto: la antena se comunica con la red.', 'El procesador procesa datos, no recibe señal.', 'La pantalla no recibe señal.']
      },
      {
        question: '¿Qué parte almacena energía para el celular?',
        options: ['Memoria', 'Altavoz', 'Batería'],
        answer: 2,
        feedback: ['La memoria guarda datos, no energía.', 'El altavoz reproduce sonido.', 'Correcto: la batería almacena energía.']
      }
    ]
  },
  {
    id: 2,
    title: 'Redes móviles e internet',
    description: 'Aprende cómo tu celular se conecta a la red y a internet.',
    summary: 'Un viaje desde la torre celular hasta la nube, con un diagrama animado.',
    steps: [
      { label: 'Torre móvil', detail: 'Recibe y envía señales hacia tu celular.' },
      { label: 'Red de internet', detail: 'Permite que tu teléfono acceda a páginas y apps online.' },
      { label: 'Proveedor', detail: 'Es la empresa que ofrece servicio de llamadas y datos.' }
    ],
    simulation: 'Haz clic en cada nodo de la red para ver cómo viaja tu señal.',
    evaluation: [
      {
        question: '¿Qué conecta tu teléfono con internet?',
        options: ['Torre celular', 'Cargador', 'Control remoto'],
        answer: 0,
        feedback: ['Correcto: la torre celular lleva tu señal.', 'El cargador brinda energía.', 'Un control remoto no conecta redes.']
      },
      {
        question: 'El internet permite:',
        options: ['Hablar sin sonido', 'Enviar mensajes y navegar', 'Aumentar la batería'],
        answer: 1,
        feedback: ['Eso no es correcto.', 'Correcto: internet permite comunicación y navegación.', 'No, internet no carga la batería.']
      },
      {
        question: 'La nube es:',
        options: ['Una antena física', 'Un servicio en línea', 'Un tipo de batería'],
        answer: 1,
        feedback: ['No es una antena física.', 'Correcto: es un servicio en línea donde se guardan datos.', 'No es batería.']
      }
    ]
  },
  {
    id: 3,
    title: 'Transmisión de datos',
    description: 'Descubre cómo se envían los mensajes y archivos en tu teléfono.',
    summary: 'Activa la simulación de paquetes de datos desde tu celular hasta el servidor.',
    steps: [
      { label: 'Paquete de datos', detail: 'Cada mensaje viaja en pequeños paquetes por la red.' },
      { label: 'Cifrado', detail: 'Protege tus datos para que solo el destinatario los lea.' },
      { label: 'Señal', detail: 'La información viaja con ondas a través del aire.' }
    ],
    simulation: 'Envía datos con el botón y observa cómo llegan en la animación.',
    evaluation: [
      {
        question: 'Los datos viajan en:',
        options: ['Paquetes', 'Baterías', 'Luces'],
        answer: 0,
        feedback: ['Correcto: los datos se dividen en paquetes.', 'La batería no transporta datos.', 'No viajan en luces.']
      },
      {
        question: 'El cifrado sirve para:',
        options: ['Hacer más lento el internet', 'Proteger los datos', 'Aumentar el volumen'],
        answer: 1,
        feedback: ['No, ese no es su objetivo.', 'Correcto: protege los datos.', 'No cambia el volumen.']
      },
      {
        question: '¿Dónde viajan los datos antes de llegar al servidor?',
        options: ['Por la antena', 'Por la pantalla', 'Por el cargador'],
        answer: 0,
        feedback: ['Correcto: el primer tramo es por la antena.', 'La pantalla solo muestra datos.', 'El cargador no transporta datos.']
      }
    ]
  },
  {
    id: 4,
    title: 'Factores que afectan la señal',
    description: 'Entiende qué puede debilitar o interrumpir tu conexión.',
    summary: 'Explora cómo obstáculos, distancia y congestionamientos afectan la señal.',
    steps: [
      { label: 'Distancia', detail: 'Mientras más lejos estés de la torre, más débil será la señal.' },
      { label: 'Obstáculos', detail: 'Edificios y paredes reducen la calidad de la señal.' },
      { label: 'Congestión', detail: 'Muchos usuarios conectados al mismo tiempo pueden bajar la velocidad.' }
    ],
    simulation: 'Toca los factores y observa cómo cambia la señal en el medidor.',
    evaluation: [
      {
        question: 'Un túnel puede causar:',
        options: ['Mejor señal', 'Señal débil', 'Carga más rápida'],
        answer: 1,
        feedback: ['No mejora la señal.', 'Correcto: los obstáculos debilitan la señal.', 'No afecta la carga de batería.']
      },
      {
        question: 'Al alejarse de la torre, la intensidad de señal:',
        options: ['Aumenta', 'Disminuye', 'Se mantiene igual siempre'],
        answer: 1,
        feedback: ['No, no aumenta.', 'Correcto: disminuye con la distancia.', 'No siempre se mantiene igual.']
      },
      {
        question: 'Muchos usuarios en un mismo lugar pueden:',
        options: ['Saturar la red', 'Hacer más liviano el celular', 'Cambiar el color de la pantalla'],
        answer: 0,
        feedback: ['Correcto: saturar la red reduce velocidad.', 'No afecta el peso del celular.', 'No cambia la pantalla.']
      }
    ]
  }
];

const state = {
  currentModule: null,
  completed: [],
  score: 0,
  username: 'Invitado'
};

const elements = {
  playerName: document.getElementById('playerName'),
  progressCount: document.getElementById('progressCount'),
  progressBar: document.getElementById('progressBar'),
  moduleList: document.getElementById('moduleList'),
  contentArea: document.getElementById('contentArea'),
  landingSection: document.getElementById('landingSection'),
  startBtn: document.getElementById('startBtn'),
  openRegister: document.getElementById('openRegister'),
  closeRegister: document.getElementById('closeRegister'),
  registerPanel: document.getElementById('registerPanel'),
  saveUser: document.getElementById('saveUser'),
  usernameInput: document.getElementById('usernameInput'),
  restartBtn: document.getElementById('restartBtn'),
  continueBtn: document.getElementById('continueBtn')
};

function init() {
  renderModules();
  updateProgress();
  elements.startBtn.addEventListener('click', () => {
    elements.landingSection.classList.add('hide');
    openModule(modules[0].id);
  });
  elements.openRegister.addEventListener('click', () => openRegisterPanel(true));
  elements.closeRegister.addEventListener('click', () => openRegisterPanel(false));
  elements.saveUser.addEventListener('click', saveUsername);
  elements.restartBtn.addEventListener('click', restartCourse);
  elements.continueBtn.addEventListener('click', continueCourse);
  document.body.addEventListener('click', event => {
    if (event.target.matches('.module-card')) {
      const moduleId = Number(event.target.dataset.moduleId);
      openModule(moduleId);
    }
  });
  openRegisterPanel(false);
  elements.usernameInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') saveUsername();
  });
}

function openRegisterPanel(show) {
  elements.registerPanel.style.display = show ? 'block' : 'none';
  if (show) elements.usernameInput.focus();
}

function saveUsername() {
  const value = elements.usernameInput.value.trim();
  if (value) {
    state.username = value;
    elements.playerName.textContent = value;
    openRegisterPanel(false);
  }
}

function renderModules() {
  elements.moduleList.innerHTML = '';
  modules.forEach(module => {
    const active = state.currentModule === module.id;
    const completed = state.completed.includes(module.id);
    const card = document.createElement('article');
    card.className = 'module-card';
    card.dataset.moduleId = module.id;
    card.innerHTML = `
      <h3>${module.title}</h3>
      <p>${module.description}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;font-size:0.92rem;color:${completed ? '#4ce49a' : '#a7b2cf'};">
        <span>${completed ? 'Completado' : 'Disponible'}</span>
        <strong>${completed ? '✔' : '•'}</strong>
      </div>
    `;
    if (active) card.style.boxShadow = '0 0 0 2px rgba(50, 180, 255, 0.35)';
    elements.moduleList.appendChild(card);
  });
}

function updateProgress() {
  const count = state.completed.length;
  elements.progressCount.textContent = `${count} / ${modules.length}`;
  elements.progressBar.style.width = `${(count / modules.length) * 100}%`;
  renderModules();
}

function openModule(moduleId) {
  const module = modules.find(m => m.id === moduleId);
  if (!module) return;
  state.currentModule = moduleId;
  elements.contentArea.classList.remove('hide');
  renderModuleContent(module);
  renderModules();
}

function renderModuleContent(module) {
  const completed = state.completed.includes(module.id);
  elements.contentArea.innerHTML = `
    <div class="section-headline">
      <div>
        <h2>${module.title}</h2>
        <p style="color:var(--text-muted);">${module.summary}</p>
      </div>
      <span class="badge">Módulo ${module.id}</span>
    </div>
    <div class="flex-grid">
      <div>
        <div class="card-grid">
          ${module.steps.map(step => `
            <div class="card">
              <strong>${step.label}</strong>
              <p>${step.detail}</p>
            </div>
          `).join('')}
        </div>
        <div class="info-box">
          <p>${module.simulation}</p>
        </div>
      </div>
      <div class="diagram" id="diagramArea"></div>
    </div>
    <div class="panel" style="margin-top:24px;">
      <h3>Evaluación rápida</h3>
      <p>Responde las 3 preguntas y recibe retroalimentación inmediata.</p>
      <form id="quizForm">
        ${module.evaluation.map((item, index) => `
          <div class="question-block">
            <h4>Pregunta ${index + 1}</h4>
            <p>${item.question}</p>
            <div class="radio-group">
              ${item.options.map((option, subIndex) => `
                <label>
                  <input type="radio" name="q${index}" value="${subIndex}" />
                  ${option}
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
        <div class="actions" style="justify-content:flex-end; margin-top:10px;">
          <button type="submit" class="btn btn-primary">Enviar respuestas</button>
        </div>
      </form>
      <div id="quizFeedback"></div>
    </div>
  `;

  renderDiagram(module.id);
  document.getElementById('quizForm').addEventListener('submit', event => {
    event.preventDefault();
    checkQuiz(module);
  });

  if (completed) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback success';
    feedback.textContent = 'Ya completaste este módulo. Puedes volver a repasar el contenido o continuar con el siguiente módulo.';
    document.getElementById('quizFeedback').appendChild(feedback);
  }
}

function renderDiagram(moduleId) {
  const diagramArea = document.getElementById('diagramArea');
  diagramArea.innerHTML = '';
  if (moduleId === 1) {
    diagramArea.innerHTML = `
      <svg viewBox="0 0 480 320" role="img" aria-label="Diagrama interactivo de un celular con partes clicables">
        <defs>
          <linearGradient id="phoneGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0f1634" />
            <stop offset="100%" stop-color="#12223f" />
          </linearGradient>
        </defs>
        <rect x="120" y="30" width="240" height="260" rx="34" fill="url(#phoneGrad)" stroke="#2a9cff" stroke-width="2" />
        <rect x="176" y="48" width="128" height="22" rx="10" fill="#0c1222" />
        <rect x="204" y="280" width="72" height="10" rx="5" fill="#0c1222" />
        <rect x="156" y="90" width="168" height="120" rx="20" fill="#071124" stroke="#3c8eff" stroke-width="1.8" />
        <circle class="node pulse" data-part="Pantalla" cx="240" cy="150" r="24" fill="#32b4ff" opacity="0.85" />
        <circle class="node pulse" data-part="Cámara" cx="320" cy="70" r="16" fill="#7afcff" opacity="0.95" />
        <circle class="node pulse" data-part="Batería" cx="188" cy="200" r="18" fill="#0485ff" opacity="0.92" />
        <circle class="node pulse" data-part="Procesador" cx="240" cy="240" r="18" fill="#56c8ff" opacity="0.92" />
        <circle class="node pulse" data-part="Antena" cx="355" cy="215" r="16" fill="#8cf0ff" opacity="0.88" />
      </svg>
    `;
  } else if (moduleId === 2) {
    diagramArea.innerHTML = `
      <svg viewBox="0 0 480 320" role="img" aria-label="Diagrama de redes móviles con torre, celular e internet">
        <defs>
          <linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3dd2ff" />
            <stop offset="100%" stop-color="#0c6dff" />
          </linearGradient>
        </defs>
        <circle cx="90" cy="240" r="32" fill="#0f1a32" stroke="#2caaff" stroke-width="2" />
        <path d="M90 192 C110 170 130 170 150 192" fill="none" stroke="#45b9ff" stroke-width="3" opacity="0.7" />
        <rect x="70" y="230" width="40" height="50" rx="12" fill="#0a1326" stroke="#2a9cff" stroke-width="2" />
        <circle class="node pulse" data-part="Torre celular" cx="90" cy="240" r="12" fill="#81e7ff" />
        <rect x="330" y="50" width="100" height="80" rx="20" fill="#0b1221" stroke="#46ccff" stroke-width="2" />
        <text x="380" y="95" text-anchor="middle" fill="#caf3ff" font-size="14">Nube</text>
        <path d="M132 230 C200 190 280 190 330 130" fill="none" stroke="url(#wireGrad)" stroke-width="4" stroke-linecap="round" opacity="0.8" />
        <circle cx="375" cy="120" r="10" fill="#90efff" />
        <rect x="190" y="170" width="80" height="120" rx="20" fill="#081123" stroke="#3c8eff" stroke-width="2" />
        <circle class="node pulse" data-part="Mi celular" cx="230" cy="220" r="16" fill="#32b4ff" />
        <circle class="node pulse" data-part="Proveedor" cx="385" cy="80" r="14" fill="#6cd9ff" />
      </svg>
    `;
  } else if (moduleId === 3) {
    diagramArea.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:18px; width:100%;">
        <div style="width:100%; height:180px; position:relative; background:rgba(255,255,255,0.04); border-radius:22px; overflow:hidden; border:1px solid rgba(50,180,255,0.18);">
          <div id="packetLine" style="position:absolute; left:0; top:50%; width:40px; height:24px; background:#32c8ff; border-radius:14px; box-shadow:0 0 18px rgba(50,200,255,0.55);"></div>
          <div style="position:absolute; left:18%; top:18%; width:60px; height:60px; border-radius:18px; background:rgba(50,180,255,0.12); border:1px solid rgba(50,180,255,0.3); display:flex; align-items:center; justify-content:center; color:#88e9ff; font-weight:700;">Cel</div>
          <div style="position:absolute; right:18%; top:18%; width:60px; height:60px; border-radius:18px; background:rgba(76,228,154,0.12); border:1px solid rgba(76,228,154,0.3); display:flex; align-items:center; justify-content:center; color:#9ef4bf; font-weight:700;">Srv</div>
        </div>
        <button id="sendPacketBtn" class="btn btn-primary" style="width:220px;">Enviar datos</button>
      </div>
    `;
    setTimeout(() => animatePacket(), 100);
  } else if (moduleId === 4) {
    diagramArea.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr;gap:14px; width:100%;">
        <div style="padding:18px;border-radius:22px;background:rgba(255,255,255,0.04);border:1px solid rgba(50,180,255,0.18);">
          <div style="display:flex;align-items:center;justify-content:space-between; color:var(--accent); font-weight:700;">Señal</div>
          <div style="height:18px; width:100%; background:rgba(255,255,255,0.08); border-radius:999px; margin-top:12px; overflow:hidden;">
            <div id="signalMeter" style="width:80%; height:100%; background:linear-gradient(90deg, #4ce49a, #32b4ff); border-radius:999px;"></div>
          </div>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
          <button class="btn btn-secondary" data-factor="Distancia">Distancia</button>
          <button class="btn btn-secondary" data-factor="Obstáculos">Obstáculos</button>
          <button class="btn btn-secondary" data-factor="Congestión">Congestión</button>
        </div>
        <div id="factorInfo" class="info-box">Toca un factor para ver cómo cambia la señal.</div>
      </div>
    `;
    diagramArea.querySelectorAll('button[data-factor]').forEach(button => {
      button.addEventListener('click', () => handleFactor(button.dataset.factor));
    });
  }

  diagramArea.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', () => showNodeInfo(node.dataset.part));
  });
}

function showNodeInfo(part) {
  const infoBox = document.querySelector('#contentArea .info-box');
  if (!infoBox) return;
  const details = {
    'Pantalla': 'La pantalla muestra todo el contenido y responde a tus toques con tecnología táctil.',
    'Cámara': 'La cámara captura imágenes y permite hacer videollamadas en tiempo real.',
    'Batería': 'La batería almacena energía para que el teléfono funcione sin estar conectado.',
    'Procesador': 'El procesador es el cerebro que ejecuta apps y controla el sistema.',
    'Antena': 'La antena envía y recibe la señal móvil que conecta con la red.',
    'Torre celular': 'La torre recibe tus datos del celular y los transmite hacia internet.',
    'Mi celular': 'Tu celular se conecta a la torre para enviar mensajes, llamadas o datos.',
    'Proveedor': 'El proveedor administra la red y el acceso a internet en tu zona.'
  };
  infoBox.innerHTML = `<strong>${part}</strong><p>${details[part] || 'Información de esta parte.'}</p>`;
}

function animatePacket() {
  const packet = document.getElementById('packetLine');
  if (!packet) return;
  packet.style.transition = 'left 1.4s ease-in-out';
  packet.style.left = '76%';
  setTimeout(() => {
    packet.style.transition = 'left 0.8s ease-in-out';
    packet.style.left = '4%';
  }, 1600);
}

function handleFactor(factor) {
  const meter = document.getElementById('signalMeter');
  const info = document.getElementById('factorInfo');
  let width = 80;
  let text = '';
  if (factor === 'Distancia') {
    width = 45;
    text = 'Al alejarte de la torre, la señal cae y la velocidad baja.';
  } else if (factor === 'Obstáculos') {
    width = 55;
    text = 'Paredes y edificios bloquean las ondas y reducen la calidad de la conexión.';
  } else if (factor === 'Congestión') {
    width = 35;
    text = 'Cuando muchas personas usan la misma red, la señal puede estar saturada.';
  }
  meter.style.width = width + '%';
  info.innerHTML = `<strong>${factor}</strong><p>${text}</p>`;
}

function checkQuiz(module) {
  const form = document.getElementById('quizForm');
  const feedbackArea = document.getElementById('quizFeedback');
  const answers = module.evaluation.map((item, index) => {
    const checked = form.querySelector(`input[name=q${index}]:checked`);
    return checked ? Number(checked.value) : null;
  });

  feedbackArea.innerHTML = '';
  let correct = 0;
  answers.forEach((answer, index) => {
    if (answer === null) {
      const missing = document.createElement('div');
      missing.className = 'feedback error';
      missing.textContent = `Selecciona una opción para la pregunta ${index + 1}.`;
      feedbackArea.appendChild(missing);
    } else {
      const item = module.evaluation[index];
      const result = document.createElement('div');
      result.className = `feedback ${answer === item.answer ? 'success' : 'error'}`;
      result.textContent = item.feedback[answer] || 'Respuesta incorrecta.';
      feedbackArea.appendChild(result);
      if (answer === item.answer) correct += 1;
    }
  });

  if (answers.every(a => a !== null)) {
    const summary = document.createElement('div');
    summary.className = 'feedback';
    summary.style.marginTop = '12px';
    summary.innerHTML = `<strong>Puntaje:</strong> ${correct} de ${module.evaluation.length}.`;
    feedbackArea.appendChild(summary);
    if (!state.completed.includes(module.id)) {
      if (correct >= 2) {
        state.completed.push(module.id);
        state.score += correct;
        updateProgress();
        const success = document.createElement('div');
        success.className = 'feedback success';
        success.textContent = '¡Genial! Módulo completado. Puedes continuar al siguiente módulo.';
        feedbackArea.appendChild(success);
      } else {
        const hint = document.createElement('div');
        hint.className = 'feedback error';
        hint.textContent = 'Revisa la explicación y vuelve a intentarlo. ¡Puedes hacerlo!';
        feedbackArea.appendChild(hint);
      }
    }
  }
}

function continueCourse() {
  const next = modules.find(m => !state.completed.includes(m.id));
  if (next) {
    openModule(next.id);
  } else {
    alert('¡Has completado todos los módulos! Puedes revisar nuevamente cualquier tema o reiniciar el curso.');
  }
}

function restartCourse() {
  state.currentModule = null;
  state.completed = [];
  state.score = 0;
  updateProgress();
  elements.contentArea.classList.add('hide');
  elements.landingSection.classList.remove('hide');
  renderModules();
  const feedbackArea = document.getElementById('quizFeedback');
  if (feedbackArea) feedbackArea.innerHTML = '';
}

init();
