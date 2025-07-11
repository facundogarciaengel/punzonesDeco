

const categorias = [
  {
    titulo: "Plegaderas de Metal",
    productos: [
      {
        id: "Acero Inoxidable",
        nombre: "Acero Inoxidable AX-01",
        imagen: "assets/img/plegadora_acero.jpg",
        alt: "Plegadera Acero",
        descripcion: "Herramienta artesanal fabricada en acero inoxidable de alta calidad.",
        detalles: [
          "120 x 25mm x 2mm",
          "Doble punta",
          "Ideal para trazar papel, cartulina, cartones finos",
          "Su lado más fino es ideal para trabajar cantos, esquinas, cartonaje"
        ],
        precio: 1000
      },
      {
        id: "Laton Grande",
        nombre: "Laton Grande LT-01",
        imagen: "assets/img/plegadora_acero.jpg",
        alt: "Plegadera Laton",
        descripcion: "Ideal para trabajos delicados y detalles finos gracias a su punta resistente.",
        detalles: ["120 x 20mm x 2mm"],
        precio: 1000
      },
      //... otros productos
    ]
  },
  //... otras categorias
];

// Función para generar HTML de productos de forma dinámica
function generarHTMLProductos(productos) {
  return productos.map(producto => `
    <div class="col-12 col-sm-6 col-md-4 mb-4">
      <div class="card h-100 shadow-sm cta-inner bg-faded">
        <a data-bs-toggle="modal" data-bs-target="#imgModal" onclick="setModalImage('${producto.imagen}')">
          <div class="img-hover-zoom">
            <img src="${producto.imagen}" class="img-fluid rounded img-producto" alt="${producto.alt}">
            <div class="zoom-icon"><i class="bi bi-search"></i></div>
          </div>
        </a>
        <div class="card-body d-flex flex-column" style="font-family: 'Lora', serif;">
          <h3 class="card-title">${producto.nombre}</h3>
          <p class="card-text">${producto.descripcion}</p>
          <ul class="text-start ps-3">
            ${producto.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
          </ul>
          <div class="cart-btn mt-auto" onclick="sumarAlCarrito(event)"
            data-id="${producto.id}"
            data-nombre="${producto.nombre}"
            data-precio="${producto.precio}">
            <img src="assets/carrito.png" alt="Carrito" style="height: 50px;">
          </div>
        </div>
      </div>
    </div>
  `).join('');
}


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
    contenidoDiv.innerHTML = generarHTMLProductos(categoria.productos);
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