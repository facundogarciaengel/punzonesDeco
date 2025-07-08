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
        <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
          <h3 class="card-title">Acero Inoxidable AX-01</h3>
          <p class="card-text">Herramienta artesanal fabricada en acero inoxidable de alta calidad.</p>
          <ul class="text-start ps-3">
            <li>120 x 25mm x 2mm</li>
            <li>Doble punta</li>
            <li>Ideal para trazar papel, cartulina, cartones finos</li>
            <li>Su lado más fino es ideal para trabajar cantos, esquinas, cartonaje</li>
          </ul>
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Acero Inoxidable"
            data-nombre="Acero Inoxidable AX-01"
            data-precio="1000">
            <img src="assets/carrito.png" alt="Carrito" style="height: 50px;">
          </div>
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
        <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
          <h3 class="card-title">Laton Grande LT-01</h3>
          <p class="card-text">Ideal para trabajos delicados y detalles finos gracias a su punta resistente.</p>
          <ul class="text-start ps-3">
            <li>120 x 20mm x 2mm</li>
          </ul>
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Laton Grande"
            data-nombre="Laton Grande LT-01"
            data-precio="1000">
            <img src="assets/carrito.png" alt="Carrito" style="height: 50px;">
          </div>
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
        <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
          <h3 class="card-title">Laton Chica LT-02</h3>
          <p class="card-text">Herramienta artesanal fabricada en acero inoxidable, ideal para trabajos precisos en encuadernación.</p>
          <ul class="text-start ps-3">
            <li>95 x 20mm x 2mm</li>
          </ul>
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Laton Chica"
            data-nombre="Laton Chica LT-02"
            data-precio="1000">
            <img src="assets/carrito.png" alt="Carrito" style="height: 50px;">
          </div>
        </div>
      </div>
    </div>
  `
}
,
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Modelo Abanico TF-02</h3>
            <p class="card-text">Ideal para tallados y acabados finos en madera.</p>
            <ul class="text-start ps-3">
              <li>70 x 50mm x 3mm</li>
              <li>Angulo  en 90º </li>
            </ul>
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Modelo Abanico" 
            data-nombre="Modelo Abanico TF-02"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Modelo Clasico TF-03</h3>
            <p class="card-text">Perfecta para escultura y trabajos de precisión.</p>
            <ul class="text-start ps-3">
              <li> 150 x 25 mm x6mm </li>
              <li>Una punta en triángulo y otra plana con corte  en ángulo de un solo lado</li>
            </ul>
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Modelo Clasico" 
            data-nombre="Modelo Clasico TF-03"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Modelo Lapiz TL-04</h3>
            <p class="card-text">Ideal para tallados y acabados finos en madera.</p>
            <ul class="text-start ps-3">
              <li>110 x 10mm</li>
              <li>Una punta redondeada y otra en ángulo
                de ambos lados</li>
            </ul>
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Modelo Lapiz" 
            data-nombre="Modelo Lapiz TL-04"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
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
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto " onclick="sumarAlCarrito(event)"
            data-id="Micro Punzon" 
            data-nombre="Micro Punzon MP-01"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
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
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Punzon Pomo" 
            data-nombre="Punzon Pomo PP-02"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Punzon Largo PL-03</h3>
            <p class="card-text">Ideal para .</p>
            <ul class="text-start ps-3">
              <li>Mango con diseño alargado </li>
              <li>Punta a elección en 1.2 mm o 0.7 mm</li>
              <li>Punta esmerilada para no desgarrar el papel </li>
              <li> Capuchón en madera  de Cedro para asegurar la vida de la punta ante posibles caídas</li>
              <li>Marca engarzada en bronce</li>
            </ul>
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Punzon Largo" 
            data-nombre="Punzon Largo PL-03"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
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
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Cutter Bisturi" 
            data-nombre="Cutter Bisturi"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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
          <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
            <h3 class="card-title">Rodillo para Grabado</h3>
            <p class="card-text">Presentamos una nueva línea de herramientas  dirigida a grabadores, y artistas gráficos que se inaugura con estos rodillos.

              Vas a poder elegir cilindros engomados nuevos de la medida que necesites o cilindros recuperados y restaurados a nuevo de 5 , 10 o 20 CM

              Todo el cuerpo tiene un diseño original nacido del corazón y la creatividad de Jeremías, para que sea cómodo,  práctico  y aporte durabilidad a la herramienta.

              Trabajado en hierro y madera de cedro. La estructura cuenta con un pie de apoyo para evitar el contacto del rodillo con la superficie de entintado cuando se encuentra en reposo.</p>
            
            </ul>
            <!-- Botón de carrito funcional -->
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="Rodillo para Grabado" 
            data-nombre="Rodillo para Grabado"
            data-precio="1000"><img src="assets/carrito.png" alt="Carrito" style="height: 50px;"></div>
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

let carrito = {};

function sumarAlCarrito(event) {
  const boton = event.currentTarget; // el div.cart-btn
  const id = boton.getAttribute('data-id');
  const nombre = boton.getAttribute('data-nombre');
  const precio = parseFloat(boton.getAttribute('data-precio')) || 0;

  if (carrito[id]) {
    carrito[id].cantidad++;
  } else {
    carrito[id] = { nombre, cantidad: 1, precio };
  }

  actualizarContadorCarrito();
  actualizarModalCarrito(); // función que muestra los productos en el modal (la tenés que crear)
}

function actualizarContadorCarrito() {
  const cantidadTotal = Object.values(carrito).reduce((acc, prod) => acc + prod.cantidad, 0);
  document.getElementById('contador-carrito').innerText = cantidadTotal;
}

function actualizarModalCarrito() {
  const modalBody = document.getElementById('carrito-contenido');
  modalBody.innerHTML = ''; // Limpiar contenido

  if (Object.keys(carrito).length === 0) {
    modalBody.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  const lista = document.createElement('ul');
  lista.classList.add('list-group');

  for (const id in carrito) {
    const prod = carrito[id];
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.innerHTML = `
      <div>
        <strong>${prod.nombre}</strong><br>
        Cantidad: ${prod.cantidad}
      </div>
      <div>
        <span class="me-3">$${(prod.precio * prod.cantidad).toFixed(2)}</span>
        <button class="btn btn-sm btn-warning" onclick="restarDelCarrito('${id}')">-1</button>
      </div>
    `;
    lista.appendChild(item);
  }

  modalBody.appendChild(lista);
}

function restarDelCarrito(id) {
  if (!carrito[id]) return; // Si no existe no hacer nada

  carrito[id].cantidad--;

  if (carrito[id].cantidad <= 0) {
    delete carrito[id]; // Quitar producto si cantidad 0 o menor
  }

  actualizarContadorCarrito();
  actualizarModalCarrito();
}

document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();

      const submenu = toggle.nextElementSibling;
      if (!submenu) return;

      // Solo alternar el submenu sin cerrar otros
      submenu.classList.toggle('show');
    });
  });

  // Opcional: cerrar submenus cuando se cierra el menú principal (hamburguesa)
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu.show').forEach(submenu => {
        submenu.classList.remove('show');
      });
    });
  }