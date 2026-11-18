const projects=[{name:"Simula",cat:"educacao",catLabel:"Educação",status:"Em produção",preview:"assets/proj/simula.jpg",previewFit:"contain",glyph:"S",desc:"Plataforma de simulados cronometrados, com correção na hora e relatório de desempenho por matéria, para o candidato saber exatamente onde focar o estudo.",tags:["FastAPI","Firebase","Gemini AI"],url:"https://simulado-nine.vercel.app/pages/login.html"},{name:"Mr.Fotografia",cat:"fotografia",catLabel:"Fotografia",status:"Em produção",preview:"assets/proj/mrfotos.jpg",previewFit:"contain",glyph:"F",desc:"Site autoral para o fotógrafo Matheus, com portfólio editorial, contato direto e galeria privada para entrega de ensaios aos clientes.",tags:["Front-end","Galeria privada","Design editorial"],url:"https://portf-lio-theta-liard.vercel.app/"},{name:"OBSCURA",cat:"fotografia",catLabel:"Fotografia",status:"Em produção",preview:"assets/proj/obscura.jpg",previewFit:"contain",glyph:"O",desc:"Plataforma de galeria para fotógrafos publicarem e organizarem seu acervo visual, com área de login exclusiva para quem sobe as fotos.",tags:["FastAPI","Supabase","Cloudinary"],url:"https://galeria-de-fotos-psi-sandy.vercel.app/"},{name:"Comissão CFO PMDF 2025",cat:"institucional",catLabel:"Institucional",status:"No ar",preview:"assets/proj/cfo.jpg",previewFit:"contain",glyph:"P",desc:"Site institucional de uma comissão de candidatos do concurso CFO PMDF, reunindo dados técnicos e argumentos pela ampliação do número de redações corrigidas.",tags:["HTML/CSS/JS","Data viz","Institucional"],url:"https://abnerdev19.github.io/Pmdf-Cfo/"},{name:"MyLife",cat:"educacao",catLabel:"Produtividade",status:"Em produção",preview:"assets/proj/mylife.jpg",previewFit:"contain",glyph:"M",desc:"Dashboard pessoal gamificado para estudos: missões, hábitos, atributos e uma sala de estudos com cronômetro que gera XP automaticamente.",tags:["JavaScript","Gamificação","Produtividade"],url:"https://abnerdev19.github.io/MyLife/"}];

// ===== Fotografia & Vídeo =====
// Para adicionar uma foto: coloque o arquivo em assets/media/ e adicione um item aqui.
// Ex: {src:"assets/media/ensaio-01.jpg", alt:"Retrato em luz natural"}
const photos=[
  {src:"assets/media/calcada-eixo.jpg",alt:"Calçada arborizada no Eixo Monumental",caption:"Eixo Monumental"},
  {src:"assets/media/fachada-vidro.jpg",alt:"Fachada de vidro refletindo o entardecer",caption:"Fachada ao entardecer"},
  {src:"assets/media/bandeira-por-do-sol.jpg",alt:"Bandeira do Brasil contra o céu ao pôr do sol",caption:"Pôr do sol"},
  {src:"assets/media/predio-luz-verde.jpg",alt:"Prédio governamental iluminado ao entardecer",caption:"Luz de fim de tarde"},
  {src:"assets/media/parque-da-cidade-placa.jpg",alt:"Placa do Parque da Cidade",caption:"Parque da Cidade"},
  {src:"assets/media/camara-deputados.jpg",alt:"Espelho d'água em frente à Câmara dos Deputados ao entardecer",caption:"Câmara dos Deputados"},
  {src:"assets/media/anac-sede.jpg",alt:"Totem de sinalização da ANAC",caption:"Sede da ANAC"},
  {src:"assets/media/predio-noite.jpg",alt:"Prédio governamental iluminado à noite",caption:"Brasília à noite"},
  {src:"assets/media/ponte-parque.jpg",alt:"Ponte de concreto sobre o lago do Parque da Cidade",caption:"Parque da Cidade"},
  {src:"assets/media/predio-arcos.jpg",alt:"Arquitetura modernista com arcos",caption:"Arquitetura modernista"},
  {src:"assets/media/fachada-modernista.jpg",alt:"Fachada modernista em concreto",caption:"Fachada modernista"},
  {src:"assets/media/patio-brasil-shopping.jpg",alt:"Fachada do Pátio Brasil Shopping",caption:"Pátio Brasil"},
  {src:"assets/media/violao-bw.jpg",alt:"Registro em preto e branco de um grupo tocando violão",caption:"Preto e branco"},
  {src:"assets/media/violao-detalhe.jpg",alt:"Detalhe da cabeça de um violão, com fundo desfocado",caption:"Detalhe"}
];
// Para adicionar um vídeo: use um link de embed do YouTube/Vimeo, ou um .mp4 em assets/media/.
// Ex: {title:"Making of ensaio X", embed:"https://www.youtube.com/embed/XXXXXXXXXXX"}
const videos=[];

function renderProjects(filter = "todos") {
  const grid = document.getElementById("proj-grid");
  const visibleProjects = projects.filter(project => filter === "todos" || project.cat === filter);

  grid.replaceChildren();
  visibleProjects.forEach((project, index) => {
    const card = document.createElement("article");
    const preview = project.preview
      ? `<img class="fit-${project.previewFit || "cover"}" src="${project.preview}" alt="Prévia de ${project.name}" loading="lazy">`
      : `<div class="placeholder"><span class="glyph">${project.glyph}</span><span class="hint">Prévia em breve</span></div>`;

    card.className = "proj-card";
    card.style.setProperty("--card-delay", `${Math.min(index, 3) * 45}ms`);
    card.innerHTML = `
      <div class="preview-shot">
        <span class="status-tag">${project.status}</span>
        ${preview}
      </div>
      <div class="proj-body">
        <p class="proj-category">${project.catLabel}</p>
        <h3>${project.name}</h3>
        <p class="desc">${project.desc}</p>
        <div class="tag-row">${project.tags.map(tag => `<span class="tech-chip">${tag}</span>`).join("")}</div>
        <div class="proj-actions">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver site de ${project.name}">Ver site <span class="arrow" aria-hidden="true"></span></a>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

const skills = {
  python: ["Python", "Backend", "Uso Python para desenvolver APIs, tratar dados e implementar projetos acadêmicos, como uma rede neural com NumPy."],
  fastapi: ["FastAPI", "APIs", "Construo APIs em FastAPI para sistemas web, como o Simula e a galeria OBSCURA."],
  javascript: ["JavaScript", "Front-end", "Uso JavaScript para criar interfaces e interações. Os filtros de projetos e este painel são exemplos no próprio portfólio."],
  postgresql: ["PostgreSQL", "Banco de dados", "Trabalho com PostgreSQL via Supabase. Na OBSCURA, o Supabase faz parte da infraestrutura da galeria."],
  firebase: ["Firebase", "Dados e nuvem", "O Firebase faz parte da infraestrutura do Simula, minha plataforma de simulados com correção e relatórios de desempenho."],
  gemini: ["Gemini", "IA e automação", "Integro a API Gemini para apoiar automações e extração de dados. Ela também faz parte da stack do Simula."]
};

function initSkillBoard() {
  const keys = document.querySelector(".stack-keys");
  const area = document.getElementById("stack-area");
  const name = document.getElementById("stack-name");
  const description = document.getElementById("stack-description");

  function selectSkill(button) {
    const [skillName, skillArea, skillDescription] = skills[button.dataset.skill];
    keys.querySelectorAll("button").forEach(key => {
      key.setAttribute("aria-pressed", String(key === button));
    });
    area.textContent = skillArea;
    name.textContent = skillName;
    description.textContent = skillDescription;
  }

  keys.addEventListener("click", event => {
    const button = event.target.closest("button[data-skill]");
    if (button) selectSkill(button);
  });
  selectSkill(keys.querySelector('[aria-pressed="true"]'));
}

function renderMedia(){
  const pGrid=document.getElementById("photo-grid");
  if(pGrid){
    pGrid.innerHTML="";
    if(photos.length===0){
      for(let i=0;i<6;i++){
        const tile=document.createElement("div");
        tile.className="media-tile media-empty reveal";
        tile.style.transitionDelay=`${Math.min(i*50,200)}ms`;
        tile.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">add_photo_alternate</span><span class="hint">adicionar foto</span>`;
        pGrid.appendChild(tile);
      }
    }else{
      photos.forEach((ph,i)=>{
        const tile=document.createElement("figure");
        tile.className="media-tile reveal";
        tile.style.transitionDelay=`${Math.min(i*50,200)}ms`;
        tile.innerHTML=`<img src="${ph.src}" alt="${ph.alt||"Foto de Abner"}" loading="lazy">${ph.caption?`<figcaption>${ph.caption}</figcaption>`:""}`;
        pGrid.appendChild(tile);
      });
    }
  }
  const vGrid=document.getElementById("video-grid");
  if(vGrid){
    vGrid.innerHTML="";
    if(videos.length===0){
      for(let i=0;i<2;i++){
        const tile=document.createElement("div");
        tile.className="video-tile video-empty reveal";
        tile.style.transitionDelay=`${Math.min(i*60,200)}ms`;
        tile.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">videocam</span><span class="hint">adicionar vídeo</span>`;
        vGrid.appendChild(tile);
      }
    }else{
      videos.forEach((v,i)=>{
        const tile=document.createElement("figure");
        tile.className="video-tile reveal";
        tile.style.transitionDelay=`${Math.min(i*60,200)}ms`;
        tile.innerHTML=v.embed?`<iframe src="${v.embed}" title="${v.title||"Vídeo"}" loading="lazy" allowfullscreen></iframe>`:`<video src="${v.src}" controls preload="metadata"></video>`;
        if(v.title){const cap=document.createElement("figcaption");cap.textContent=v.title;tile.appendChild(cap);}
        vGrid.appendChild(tile);
      });
    }
  }
  observeReveals();
}

function setActiveView(view, focusHeading = false) {
  const target = document.getElementById(`view-${view}`);
  if (!target) return;

  document.querySelectorAll(".view").forEach(section => {
    section.classList.toggle("active", section === target);
  });
  document.querySelectorAll(".desktop-nav-btn, .tab-btn").forEach(button => {
    const isCurrent = button.dataset.view === view;
    button.classList.toggle("active", isCurrent);
    if (isCurrent) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  if (focusHeading) {
    const heading = target.querySelector("h1");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
  observeReveals();
}

function scrollToGrid() {
  const heading = document.getElementById("projects-heading");
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
  document.getElementById("grid-anchor").scrollIntoView({ block: "start" });
}

const revealObserver="IntersectionObserver"in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in");revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:"0px 0px -8% 0px"}):null;
function observeReveals(){document.querySelectorAll(".reveal:not(.in)").forEach(el=>revealObserver?revealObserver.observe(el):el.classList.add("in"))}
function init() {
  renderProjects();
  renderMedia();
  initSkillBoard();

  document.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", event => {
      if (button.tagName === "A") event.preventDefault();
      setActiveView(button.dataset.view, Boolean(button.closest(".view")));
    });
  });

  const filters = document.getElementById("filters");
  filters.addEventListener("click", event => {
    const button = event.target.closest(".filter-chip");
    if (!button || button.getAttribute("aria-pressed") === "true") return;

    filters.querySelectorAll(".filter-chip").forEach(chip => {
      const isActive = chip === button;
      chip.classList.toggle("active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });
    renderProjects(button.dataset.filter);
  });

  document.querySelector('[data-action="projects"]').addEventListener("click", scrollToGrid);
  document.querySelector('[data-action="contact"]').addEventListener("click", () => setActiveView("contato", true));

  document.querySelectorAll(".pill-select button").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.querySelectorAll("button").forEach(pill => {
        pill.classList.toggle("active", pill === button);
        pill.setAttribute("aria-pressed", String(pill === button));
      });
    });
  });

  document.getElementById("contact-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("f-name")?.value.trim() || "";
    const email = document.getElementById("f-email")?.value.trim() || "";
    const type = document.querySelector("#f-type button.active")?.textContent.trim() || "";
    const message = document.getElementById("f-msg")?.value.trim() || "";

    if (!name || !email || !message) {
      alert("Preencha nome, e-mail e mensagem antes de enviar.");
      return;
    }

    const subject = `Proposta de projeto — ${type}`;
    const body = `Nome: ${name}\nE-mail: ${email}\nTipo de projeto: ${type}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:abneroliveira19072004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  observeReveals();
}

document.readyState==="loading"?document.addEventListener("DOMContentLoaded",init):init();

if (matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) {
  document.addEventListener("pointermove", event => {
    const card = event.target.closest(".proj-card, .channel, .tl-item");
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  }, { passive: true });
}
