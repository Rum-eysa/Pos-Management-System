// Yeni ürün stoğu Ekleme
document.getElementById('saveBtn').addEventListener('click', function() {
    const Barkod = document.getElementById('Barkod').value;
    const ÜrünAdi = document.getElementById('ÜrünAdi').value;
    const AlinanMiktar = document.getElementById('AlinanMiktar').value;
    const AlinanFiyat = document.getElementById('AlinanFiyat').value;
    const SatişFiyat = document.getElementById('SatişFiyat').value;
    const AsgariSeviye = document.getElementById('AsgariSeviye').value;
   

    // Veritabanı kaydı (backend gerekli)
    // Burada bir AJAX isteği yapılabilir

    // Dinamik olarak tabloya ekleme
    const table = document.getElementById('product-table-body');
    const row = table.insertRow();
    row.insertCell(0).innerText = Barkod;
    row.insertCell(1).innerText = ÜrünAdi;
    row.insertCell(2).innerText = AlinanMiktar;
    row.insertCell(3).innerText = AlinanFiyat;
    row.insertCell(4).innerText = SatişFiyat;
    row.insertCell(5).innerText = AsgariSeviye;
    

    // Alanları temizleme
    document.getElementById('Barkod').value = '';
    document.getElementById('ÜrünAdi').value = '';
    document.getElementById('AlinanMiktar').value = '';
    document.getElementById('AlinanFiyat').value = '';
    document.getElementById('SatişFiyat').value = '';
    document.getElementById('AsgariSeviye').value = '';
   
});

// Ara Butonu İşlevi
document.getElementById('searchProduct').addEventListener('click', function() {
    // Burada arama işlemi yapılabilir (backend gerekli)
    alert('Arama işlemi yapılacak');
});

// Stok Girişi Kaydetme
document.getElementById('previewBtn').addEventListener('click', function() {
    // Stok Giriş işlemi (backend gerekli)
    alert('Stok Girişi kaydedildi');
});