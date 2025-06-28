const categorias = [
    {
        titulo: "Plegaderas de Metal",
        contenido: `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Plegadera Acero">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Acero Inoxidable AX-01</h3>
            <p class="card-text">Herramienta artesanal fabricada en acero inoxidable de alta calidad.</p>
            <ul class="text-start ps-3">
              <li>120 x 25mm x 2mm</li>
              <li>Doble punta</li>
              <li>Ideal para trazar papel, cartulina, cartones finos</li>
              <li>Su lado más fino es ideal para trabajar cantos, esquinas, cartonaje</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Plegadera Acero">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Laton Grande LT-01</h3>
            <p class="card-text">Ideal para trabajos delicados y detalles finos gracias a su punta resistente.</p>
            <ul class="text-start ps-3">
              <li>120 x 20mm x 2mm</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Plegadera Acero">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Laton Chica LT-02</h3>
            <p class="card-text">Herramienta artesanal fabricada en acero inoxidable, ideal para trabajos precisos en encuadernación.</p>
            <ul class="text-start ps-3">
              <li>95 x 20mm x 2mm</li>
            </ul>
          </div>
        </div>
      </div>
    `
    },
    {
        titulo: "Plegaderas de Teflon",
        contenido: `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 1">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Modelo Abanico TF-02</h3>
            <p class="card-text">Ideal para tallados y acabados finos en madera.</p>
            <ul class="text-start ps-3">
              <li>70 x 50mm x 3mm</li>
              <li>Angulo  en 90º </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 2">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Modelo Clasico TF-03</h3>
            <p class="card-text">Perfecta para escultura y trabajos de precisión.</p>
            <ul class="text-start ps-3">
              <li> 150 x 25 mm x6mm </li>
              <li>Una punta en triángulo y otra plana con corte  en ángulo de un solo lado</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 1">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Modelo Lapiz TL-04</h3>
            <p class="card-text">Ideal para tallados y acabados finos en madera.</p>
            <ul class="text-start ps-3">
              <li>110 x 10mm</li>
              <li>Una punta redondeada y otra en ángulo
                de ambos lados</li>
            </ul>
          </div>
        </div>
      </div>
    `
    },
    {
        titulo: "Punzones",
        contenido: `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 1">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Micro Punzon MP-01</h3>
            <p class="card-text">Para perforar cuadernillos de varias hojas, te invitamos sentir la resistencia de la herramienta para evitar el quiebre de su punta.</p>
            <ul class="text-start ps-3">
              <li>Mango en madera de algarrobo</li>
              <li>Punta fina de 0.7 mm</li>
              <li>Punta esmerilada para no desgarrar el papel mm</li>
              <li>Capuchón en madera  de Cedro para asegurar la vida de la punta ante posibles caídas</li>
              <li>Marca engarzada en bronce</li>
              <li>Para quienes bordan en papel y para quienes buscan un perforado mínimo en sus cuadernillos</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 2">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Punzon Pomo PP-02</h3>
            <p class="card-text">Recomendamos perforar cuadernillos de hasta 6 hojas de 80gr cada uno.</p>
            <ul class="text-start ps-3">
              <li>Mango con diseño en pomo para mayor comodidad de agarre</li>
              <li>Elección de  madera hasta agotar stock (Algarrobo, Guatambú)</li>
              <li>Punta a elección en 1.2 mm o 0.7 mm</li>
              <li>Punta esmerilada para no desgarrar el papel</li>
              <li>Capuchón en madera  de Cedro para asegurar la vida de la punta ante posibles caídas</li>
              <li>Marca engarzada en bronce</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 1">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Punzon Largo PL-03</h3>
            <p class="card-text">Ideal para .</p>
            <ul class="text-start ps-3">
              <li>Mango con diseño alargado </li>
              <li>Punta a elección en 1.2 mm o 0.7 mm</li>
              <li>Punta esmerilada para no desgarrar el papel </li>
              <li> Capuchón en madera  de Cedro para asegurar la vida de la punta ante posibles caídas</li>
              <li>Marca engarzada en bronce</li>
            </ul>
          </div>
        </div>
      </div>
    `
    },
    {
        titulo: "Otros",
        contenido: `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 1">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Cortante de Presicion</h3>
            <p class="card-text">Cutter Bisturi.</p>
            <ul class="text-start ps-3">
              <li>Cuerpo y capuchón en madera de algarrobo</li>
              <li>Diseño ergonómico, cómo al agarre de la mano</li>
              <li>Entre el filo del bisturí y el cuerpo el diseño cuenta con un cuello
 para evitar que el dedo se deslice hacía el filo, minimizando posibles lastimaduras.</li>
              <li>Sistema de ajuste que permite intercambiar filos</li>
              <li>Admite cualquier filo que su dorso mida 6mm </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm cta-inner bg-faded">
          <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('assets/img/plegadora_acero.jpg')">
            <div class="img-hover-zoom">
              <img src="assets/img/plegadora_acero.jpg" class="img-fluid rounded img-producto" alt="Herramienta Madera 2">
              <div class="zoom-icon"><i class="bi bi-search"></i></div>
            </div>
          </a>
          <div class="card-body" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Rodillo para Grabado</h3>
            <p class="card-text">Presentamos una nueva línea de herramientas  dirigida a grabadores, y artistas gráficos que se inaugura con estos rodillos.

Vas a poder elegir cilindros engomados nuevos de la medida que necesites o cilindros recuperados y restaurados a nuevo de 5 , 10 o 20 CM

Todo el cuerpo tiene un diseño original nacido del corazón y la creatividad de Jeremías, para que sea cómodo,  práctico  y aporte durabilidad a la herramienta.

Trabajado en hierro y madera de cedro. La estructura cuenta con un pie de apoyo para evitar el contacto del rodillo con la superficie de entintado cuando se encuentra en reposo.</p>
            
            </ul>
          </div>
        </div>
      </div>
      
    `
    }


];

let indiceActual = 0;

const contenidoDiv = document.getElementById('contenido-herramientas');
const tituloSeccion = document.getElementById('titulo-seccion');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const modalImage = document.getElementById('modal-image');

function setModalImage(src) {
    modalImage.src = src;
}

function actualizarContenido() {
    // Iniciar fade out simultáneo
    contenidoDiv.classList.add('fade-out');
    tituloSeccion.classList.add('fade-out');

    // Después del fade out, actualizar contenido y título
    setTimeout(() => {
        const categoria = categorias[indiceActual];
        contenidoDiv.innerHTML = categoria.contenido;
        tituloSeccion.innerHTML = `<span class="section-heading-lower titulo-lora">${categoria.titulo}</span>`;

        // Iniciar fade in
        contenidoDiv.classList.remove('fade-out');
        contenidoDiv.classList.add('fade-in');

        tituloSeccion.classList.remove('fade-out');
        tituloSeccion.classList.add('fade-in');
    }, 800);

    // Limpiar clases fade-in para permitir futuras animaciones
    setTimeout(() => {
        contenidoDiv.classList.remove('fade-in');
        tituloSeccion.classList.remove('fade-in');
    }, 1600);
}

actualizarContenido();

btnPrev.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + categorias.length) % categorias.length;
    actualizarContenido();
});

btnNext.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % categorias.length;
    actualizarContenido();
});
function irACategoria(indice) {
  indiceActual = indice;
  actualizarContenido();

  setTimeout(() => {
    const element = document.getElementById('contenido-herramientas');
    const navbar = document.querySelector('nav'); // o el selector de tu navbar
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight - 10; // 10px extra de margen

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, 150); // espera un poco más para que el contenido se actualice
}