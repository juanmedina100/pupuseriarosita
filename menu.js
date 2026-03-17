async function loadMenu() {
  try {
    console.log('Intentando cargar menú desde API...');
    // const response = await fetch('/api/menu');
    const response = await fetch('http://161.97.91.40:8079/menu/menues');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const menuItems = await response.json();
    console.log('Menú cargado:', menuItems);
    const menuContainer = document.getElementById('menuContainer');
    
    menuContainer.innerHTML = '';
    
    if (!Array.isArray(menuItems)) {
      throw new Error('API no retorna un array');
    }
    
    menuItems.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
      col.innerHTML = `
        <div class="card shadow">
          <img src="${item.imagen || 'https://via.placeholder.com/400'}" class="card-img-top" height="400" alt="${item.nombre}">
          <div class="card-body text-center">
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.descripcion}</p>
            ${item.precio ? `<p class="text-success fw-bold">$${item.precio}</p>` : ''}
          </div>
        </div>
      `;
      menuContainer.appendChild(col);
    });
  } catch (error) {
    console.error('Error completo:', error);
    console.error('Detalles:', error.message);
    document.getElementById('menuContainer').innerHTML = `<p class="text-center text-danger">Error al cargar el menú: ${error.message}</p>`;
  }
}

// Load menu when page loads
document.addEventListener('DOMContentLoaded', loadMenu);
