// Mengambil Nilai dari form.html
const form = document.getElementById("articleForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const judul = document.getElementById("judul").value;
        const isi = document.getElementById("isi").value;
        const kategori = document.querySelector("input[name='kategori']:checked").value;
        const tag = document.getElementById("tag").value;
        const tampil = document.getElementById("tampil").checked;
        const gambar = document.getElementById("gambar").value;

        const artikel = {
            judul,
            isi,
            kategori,
            tag,
            tampil,
            gambar, // tambahin ini
        };


        // Simpan ke localStorage
        localStorage.setItem("artikelBaru", JSON.stringify(artikel));

        // Arahkan ke aksi.html
        window.location.href = "aksi.html";
    });
}

// Halaman aksi.html
if (window.location.pathname.includes("aksi.html")) {
    const artikel = JSON.parse(localStorage.getItem("artikelBaru"));
    if (artikel) {
        document.getElementById("pesanTerimaKasih").textContent =
        `Terima kasih, artikel "${artikel.judul}" sudah berhasil dikirim 🎉`;
    }
}

// Halaman index.html
if (window.location.pathname.includes("index.html")) {
    const artikel = JSON.parse(localStorage.getItem("artikelBaru"));
    if (artikel && artikel.tampil) {
        const container = document.getElementById("extra-articles");
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${artikel.judul}</h5>
            <p class="card-text">${artikel.isi}</p>
            <p><span class="badge bg-info">${artikel.kategori}</span>
            <span class="badge bg-secondary">${artikel.tag}</span></p>
        </div>
        `;
        container.appendChild(card);
    }
}
