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

function renderProjects(filter="todos"){const grid=document.getElementById("proj-grid");if(!grid)return;grid.innerHTML="";projects.filter(p=>filter==="todos"||p.cat===filter).forEach((p,i)=>{let host="";try{host=new URL(p.url).hostname.replace(/^www\./,"")}catch{}const preview=p.preview?`<img class="fit-${p.previewFit||"cover"}" src="${p.preview}" alt="Prévia de ${p.name}" loading="lazy">`:`<div class="placeholder"><span class="glyph">${p.glyph}</span><span class="hint">prévia em breve</span></div>`;const el=document.createElement("article");el.className="proj-card reveal";el.style.transitionDelay=`${Math.min(i*60,240)}ms`;el.innerHTML=`<div class="proj-preview"><div class="browser-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="url">${host}</span></div><div class="preview-shot"><span class="status-tag">${p.status}</span>${preview}</div></div><div class="proj-body"><h3>${p.name}</h3><p class="desc">${p.desc}</p><div class="tag-row">${p.tags.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div><div class="proj-actions"><a href="${p.url}" target="_blank" rel="noopener noreferrer">Ver site ↗</a></div></div>`;grid.appendChild(el)});observeReveals()}

function renderMedia(){
  const pGrid=document.getElementById("photo-grid");
  if(pGrid){
    pGrid.innerHTML="";
    if(photos.length===0){
      for(let i=0;i<6;i++){
        const tile=document.createElement("div");
        tile.className="media-tile media-empty reveal";
        tile.style.transitionDelay=`${Math.min(i*50,200)}ms`;
        tile.innerHTML=`<span class="material-symbols-outlined">add_photo_alternate</span><span class="hint">adicionar foto</span>`;
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
        tile.innerHTML=`<span class="material-symbols-outlined">videocam</span><span class="hint">adicionar vídeo</span>`;
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

function setActiveView(view){const target=document.getElementById(`view-${view}`);if(!target)return;document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));target.classList.add("active");document.querySelectorAll("[data-view]").forEach(btn=>{btn.classList.toggle("active",btn.dataset.view===view);if(btn.tagName==="BUTTON")btn.setAttribute("aria-current",btn.dataset.view===view?"page":"false")});window.scrollTo({top:0,behavior:"smooth"});observeReveals()}
function goTo(view){setActiveView(view)}
function scrollToGrid(){document.getElementById("grid-anchor")?.scrollIntoView({behavior:"smooth",block:"start"})}
const revealObserver="IntersectionObserver"in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in");revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:"0px 0px -8% 0px"}):null;
function observeReveals(){document.querySelectorAll(".reveal:not(.in)").forEach(el=>revealObserver?revealObserver.observe(el):el.classList.add("in"))}
function init(){renderProjects();renderMedia();document.querySelectorAll("[data-view]").forEach(btn=>btn.addEventListener("click",e=>{if(btn.tagName==="A")e.preventDefault();setActiveView(btn.dataset.view)}));document.getElementById("filters")?.addEventListener("click",e=>{const btn=e.target.closest(".filter-chip");if(!btn)return;document.querySelectorAll(".filter-chip").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderProjects(btn.dataset.filter)});document.querySelectorAll('[data-action="projects"]').forEach(btn=>btn.addEventListener("click",scrollToGrid));document.querySelectorAll('[data-action="contact"]').forEach(btn=>btn.addEventListener("click",()=>setActiveView("contato")));document.querySelectorAll(".pill-select button").forEach(btn=>btn.addEventListener("click",()=>{btn.parentElement.querySelectorAll("button").forEach(b=>{b.classList.remove("active");b.setAttribute("aria-pressed","false")});btn.classList.add("active");btn.setAttribute("aria-pressed","true")}));const form=document.getElementById("contact-form");form?.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("f-name")?.value.trim()||"",email=document.getElementById("f-email")?.value.trim()||"",type=document.querySelector("#f-type button.active")?.textContent.trim()||"",msg=document.getElementById("f-msg")?.value.trim()||"";if(!name||!email||!msg){alert("Preencha nome, e-mail e mensagem antes de enviar.");return}const subject=`Proposta de projeto — ${type}`,body=`Nome: ${name}\nE-mail: ${email}\nTipo de projeto: ${type}\n\nMensagem:\n${msg}`;window.location.href=`mailto:abneroliveira19072004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});observeReveals()}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",init):init();
