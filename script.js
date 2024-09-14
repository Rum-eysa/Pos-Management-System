const splitter = document.getElementById('splitter');
const left = document.querySelector('.left');
const middle = document.querySelector('.middle');
//const favoriteProducts = document.querySelector('.favorite-products');

let isDragging = false;

splitter.addEventListener('mousedown', function(e) {
    isDragging = true;
    document.body.style.cursor = 'ew-resize';
    product
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    let offset = e.clientX;

    if (offset < 100) offset = 100; // Minimum genişlik
    if (offset > window.innerWidth - 650) offset = window.innerWidth - 650; // Maksimum genişlik

    left.style.width = `${offset}px`;
    middle.style.width = `calc(100% - ${offset + splitter.offsetWidth + document.querySelector('.right').offsetWidth}px)`;
});

document.addEventListener('mouseup', function(e) {
    isDragging = false;
    document.body.style.cursor = 'default';
});





let editingProduct = null;

function addProduct() {
    const productBarcode = document.getElementById('product-barcode').value;
    const productName = document.getElementById('product-name').value;
    const productImage = document.getElementById('product-image').value;

    if (productBarcode && productName && productImage) {
        if (editingProduct) {
            updateProduct(editingProduct, productBarcode, productName, productImage);
            editingProduct = null;
        } else {
            const productButtons = document.getElementById('product-buttons');
            const button = document.createElement('button');

            const img = document.createElement('img');
            img.src = productImage;
            button.appendChild(img);

            const textNode = document.createTextNode(productName);
            button.appendChild(textNode);

            const dropdownMenu = document.createElement('div');
            dropdownMenu.classList.add('dropdown-menu');
            dropdownMenu.onclick = () => toggleDropdown(dropdownMenu);
            dropdownMenu.innerHTML = `
                &#x22EE;
                <div class="dropdown-content">
                    <a href="#" onclick="editProduct(this, '${productBarcode}', '${productName}', '${productImage}')">Düzenle</a>
                    <a href="#" onclick="deleteProduct(this)">Sil</a>
                </div>
            `;
            button.appendChild(dropdownMenu);

            productButtons.appendChild(button);
        }

        document.getElementById('product-barcode').value = '';
        document.getElementById('product-name').value = '';
        document.getElementById('product-image').value = '';
    } else {
        alert('Lütfen tüm bilgileri doldurun.');
    }
}

function toggleDropdown(element) {
    const dropdownContent = element.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}

function editProduct(element, productBarcode, productName, productImage) {
    editingProduct = element.closest("button");
    document.getElementById('product-barcode').value = productBarcode;
    document.getElementById('product-name').value = productName;
    document.getElementById('product-image').value = productImage;
}

function updateProduct(button, newBarcode, newName, newImage) {
    button.querySelector('img').src = newImage;
    button.childNodes[1].textContent = newName;

    const dropdownMenu = button.querySelector('.dropdown-menu');
    dropdownMenu.innerHTML = `
        &#x22EE;
        <div class="dropdown-content">
            <a href="#" onclick="editProduct(this, '${newBarcode}', '${newName}', '${newImage}')">Düzenle</a>
            <a href="#" onclick="deleteProduct(this)">Sil</a>
        </div>
    `;
}

function deleteProduct(element) {
    const button = element.closest("button");
    button.remove();
}




//fonksiyon olarak navbardaki linklere tıklanınca pencere açılır.
function openNewWindow(link) {
    // Linkin data-target özelliğinden dosya adını al
    let target = link.getAttribute('data-target');
  
    let width = 900;
    let height = 500;
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;

    window.open(target, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  }
  
  // Tüm linkleri seç
  let links = document.querySelectorAll('.nav-links a');
  
  // Her bir linke tıklama eventi ekle
  links.forEach(link => {
    link.addEventListener('click', () => {
      openNewWindow(link);
    });
  });



  