const libros = [
  { 
    nombre: 'Introducción a la Economía',
    categoria: 'economia', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Econom%C3%ADa/Introduccion%20a%20la%20Economia.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/3.jpg' 
  },
  { 
    nombre: 'Introducción a la Informática',
    categoria: 'tecnologia', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Tecnolog%C3%ADa/introduccion%20a%20la%20informatica.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/2.jpg' 
  },
  { 
    nombre: 'Informática Básica',
    categoria: 'tecnologia', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Tecnolog%C3%ADa/Inform%C3%A1tica%20B%C3%A1sica.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/4.jpg' 
  },
  { 
    nombre: 'Teorias de la Personalidad',
    categoria: 'psicologia', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Psicolog%C3%ADa/Schultz_Teorias20la_20Personalidad.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/9.jpg' 
  },
  { 
    nombre: 'Pensar Rápido, Pensar Despacio',
    categoria: 'psicologia', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Psicología/pensar%20rápido%2C%20pensar%20despacio.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/7.jpg' 
  },
  { 
    nombre: 'psicologia',
    categoria: 'psicologia', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Psicolog%C3%ADa/psicologia.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/5.jpg' 
  },
  { 
    nombre: 'No Sonrías que me Enamoro',
    categoria: 'novela', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Novela/2.%20No%20Sonrias%20que%20me%20Enamoro%20-%20Blue%20Jeans.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/12.jpg' 
  },
  { 
    nombre: 'Blue Jeans',
    categoria: 'novela', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Novela/5.Conociendo%20a%20Raul%20-%20Blue%20Jeans.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/13.jpg' 
  },
  { 
    nombre: 'Crescendo',
    categoria: 'novela', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Novela/H-2.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/14.jpg' 
  },
  { 
    nombre: 'Por trece razones',
    categoria: 'novela', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Novela/Por%20trece%20razones%20-%20Jay%20Asher.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/15.jpg' 
  },
  { 
    nombre: 'Yo, Simon, Homo Sapiens',
    categoria: 'novela', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Novela/Yo%20Simon%20Homo%20Sapiens%20-%20Becky%20Albertalli.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/16.jpg' 
  },
  { 
    nombre: 'Introduccion a La Literatura',
    categoria: 'literatura', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Literatura/Introduccion%20a%20La%20Literatura.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/1.jpg' 
  },
  { 
    nombre: '',
    categoria: '', 
    pdf: 'https://cbslp01.000webhostapp.com/Titulos/Econom%C3%ADa/Introduccion%20a%20la%20Economia.pdf',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/3.jpg' 
  },
  { 
    nombre: '',
    categoria: '', 
    pdf: 'https://cbslp01.000webhostapp.com/',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/.jpg' 
  },
  { 
    nombre: '',
    categoria: '', 
    pdf: 'https://cbslp01.000webhostapp.com/',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/.jpg' 
  },
  { 
    nombre: '',
    categoria: '', 
    pdf: 'https://cbslp01.000webhostapp.com/',
    imagen: 'https://cbslp01.000webhostapp.com/portadas/.jpg' 
  },
  // Puedes agregar más libros aquí.
];


function abrirPDF(rutaPDF) {
    // Verifica si es un dispositivo móvil
    var isMobile = window.innerWidth <= 768; // Puedes ajustar este valor según tus necesidades

    if (isMobile) {
        // Si es un dispositivo móvil, abre el PDF en una nueva ventana
        window.open(rutaPDF, '_blank');
    } else {
        // Si no es un dispositivo móvil, descarga el PDF
        var link = document.createElement('a');
        link.href = rutaPDF;
        link.target = '_blank';
        link.click();
    }
}



function mostrarLibros(librosAMostrar) {
    var container = document.querySelector('.container');

    // Verifica si el contenedor se encontró correctamente
    if (container) {
        container.innerHTML = ''; // Limpia el contenido actual

        librosAMostrar.forEach(function (libro) {
            var bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            var h3 = document.createElement('h3');
            h3.textContent = libro.nombre;

            var img = document.createElement('img');
            img.src = libro.imagen;
            img.alt = 'Portada del libro';

            img.addEventListener('click', function () {
                abrirPDF(libro.pdf);
            });

            bookDiv.appendChild(h3);
            bookDiv.appendChild(img);
            container.appendChild(bookDiv);
        });
    } else {
        console.error("No se encontró el contenedor con la clase 'container'.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const categorySelect = document.getElementById('category');
    const searchInput = document.getElementById('search');

    // Filtrar libros por categoría
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value.toLowerCase();
        const filteredLibros = selectedCategory === 'todos' ? libros : libros.filter((libro) => libro.categoria === selectedCategory);
        mostrarLibros(filteredLibros);
    });

    // Buscar libros por título o categoría
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredLibros = libros.filter((libro) => libro.nombre.toLowerCase().includes(searchTerm) || libro.categoria.toLowerCase().includes(searchTerm));
        mostrarLibros(filteredLibros);
    });

    // Mostrar todos los libros al inicio
    mostrarLibros(libros);
});
