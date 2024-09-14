// Yeni Cari Hesap Ekleme
document.getElementById('newAccountBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const spouseName = document.getElementById('spouse_name').value;
    const spousePhone = document.getElementById('spouse_phone').value;
    const job = document.getElementById('job').value;
    const spouseJob = document.getElementById('spouse_job').value;
    const note = document.getElementById('note').value;
    const debt = document.getElementById('debt').value;
    const balance = document.getElementById('balance').value;

    // Veritabanı kaydı (backend gerekli)
    // Burada bir AJAX isteği yapılabilir

    // Dinamik olarak tabloya ekleme
    const table = document.getElementById('accountTable');
    const row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = phone;
    row.insertCell(2).innerText = address;
    row.insertCell(3).innerText = spouseName;
    row.insertCell(4).innerText = spousePhone;
    row.insertCell(5).innerText = balance;
    row.insertCell(6).innerText = job;
    row.insertCell(7).innerText = spouseJob;
    row.insertCell(8).innerText = note;

    // Alanları temizleme
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('spouse_name').value = '';
    document.getElementById('spouse_phone').value = '';
    document.getElementById('job').value = '';
    document.getElementById('spouse_job').value = '';
    document.getElementById('note').value = '';
    document.getElementById('debt').value = '';
    document.getElementById('balance').value = '';
});

// Ara Butonu İşlevi
document.getElementById('searchBtn').addEventListener('click', function() {
    // Burada arama işlemi yapılabilir (backend gerekli)
    alert('Arama işlemi yapılacak');
});

// Tahsilat Kaydetme
document.getElementById('collectionBtn').addEventListener('click', function() {
    // Tahsilat kaydetme işlemi (backend gerekli)
    alert('Tahsilat kaydedildi');
});

// Seç ve Vazgeç Butonları
document.getElementById('selectBtn').addEventListener('click', function() {
    alert('Seçildi');
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    alert('İşlem iptal edildi');
});
