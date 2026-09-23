const elemenPertanyaan = document.getElementById("teks-pertanyaan");
const elemenPilihan = document.getElementById("pilihan-jawaban");
const tombolLanjut = document.getElementById("tombol-lanjut");

// Bank Soal
const pertanyaanKuis = [
    {
        pertanyaan: "Bahasa pemrograman apa yang digunakan untuk mengatur tampilan halaman web?",
        jawaban: [
            { teks: "HTML", benar: false },
            { teks: "Python", benar: false },
            { teks: "CSS", benar: true },
            { teks: "JavaScript", benar: false }
        ]
    },
    {
        pertanyaan: "Tag HTML mana yang digunakan untuk membuat judul paling besar?",
        jawaban: [
            { teks: "<heading>", benar: false },
            { teks: "<h1>", benar: true },
            { teks: "<title>", benar: false },
            { teks: "<h6>", benar: false }
        ]
    },
    {
        pertanyaan: "Apa kepanjangan dari JS?",
        jawaban: [
            { teks: "JavaSource", benar: false },
            { teks: "JavaScript", benar: true },
            { teks: "JustScript", benar: false },
            { teks: "JavaSuper", benar: false }
        ]
    }
];

let indeksPertanyaanSaatIni = 0;
let skor = 0;

function mulaiKuis() {
    indeksPertanyaanSaatIni = 0;
    skor = 0;
    tombolLanjut.innerHTML = "Pertanyaan Selanjutnya";
    tampilkanPertanyaan();
}

function tampilkanPertanyaan() {
    resetState();
    let soalSaatIni = pertanyaanKuis[indeksPertanyaanSaatIni];
    let nomorSoal = indeksPertanyaanSaatIni + 1;
    elemenPertanyaan.innerHTML = nomorSoal + ". " + soalSaatIni.pertanyaan;

    soalSaatIni.jawaban.forEach(jawaban => {
        const tombol = document.createElement("button");
        tombol.innerHTML = jawaban.teks;
        tombol.classList.add("tombol");
        elemenPilihan.appendChild(tombol);
        
        if (jawaban.benar) {
            tombol.dataset.benar = jawaban.benar;
        }
        tombol.addEventListener("click", pilihJawaban);
    });
}

function resetState() {
    tombolLanjut.classList.add("sembunyi");
    while (elemenPilihan.firstChild) {
        elemenPilihan.removeChild(elemenPilihan.firstChild);
    }
}

function pilihJawaban(e) {
    const tombolTerpilih = e.target;
    const apakahBenar = tombolTerpilih.dataset.benar === "true";
    
    if (apakahBenar) {
        tombolTerpilih.classList.add("benar");
        skor++;
    } else {
        tombolTerpilih.classList.add("salah");
    }
    
    Array.from(elemenPilihan.children).forEach(tombol => {
        if (tombol.dataset.benar === "true") {
            tombol.classList.add("benar");
        }
        tombol.disabled = true; // Kunci semua tombol setelah memilih
    });
    
    tombolLanjut.classList.remove("sembunyi");
}

function tampilkanSkor() {
    resetState();
    elemenPertanyaan.innerHTML = `Kuis Selesai! Skor Anda: ${skor} dari ${pertanyaanKuis.length}`;
    tombolLanjut.innerHTML = "Coba Lagi";
    tombolLanjut.classList.remove("sembunyi");
}

function tanganiTombolLanjut() {
    indeksPertanyaanSaatIni++;
    if (indeksPertanyaanSaatIni < pertanyaanKuis.length) {
        tampilkanPertanyaan();
    } else {
        tampilkanSkor();
    }
}

tombolLanjut.addEventListener("click", () => {
    if (indeksPertanyaanSaatIni < pertanyaanKuis.length) {
        tanganiTombolLanjut();
    } else {
        mulaiKuis();
    }
});

// Memulai kuis saat halaman dimuat
mulaiKuis();
