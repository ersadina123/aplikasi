// Logika Kalkulator BMI
function hitungBMI() {
    const beratInput = document.getElementById("berat").value;
    const tinggiInput = document.getElementById("tinggi").value;
    const hasilDiv = document.getElementById("hasil-bmi");

    if (!beratInput || !tinggiInput || beratInput <= 0 || tinggiInput <= 0) {
        hasilDiv.innerHTML = "⚠️ Masukkan angka berat dan tinggi badan yang valid!";
        hasilDiv.style.color = "#ef4444";
        return;
    }

    const tinggiMeter = tinggiInput / 100;
    const bmi = (beratInput / (tinggiMeter * tinggiMeter)).toFixed(1);
    let status = "";
    let warna = "";

    if (bmi < 18.5) {
        status = "Kekurangan berat badan (Underweight)";
        warna = "#3b82f6";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal / Ideal ✨";
        warna = "#10b981";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan berat badan (Overweight)";
        warna = "#f59e0b";
    } else {
        status = "Obesitas";
        warna = "#ef4444";
    }

    hasilDiv.innerHTML = `Skor BMI kamu: ${bmi} (${status})`;
    hasilDiv.style.color = warna;
}

// Kumpulan Tips Kesehatan Harian
const daftarTips = [
    "Minumlah segelas air putih sesaat setelah bangun tidur untuk mengaktifkan kembali organ tubuh.",
    "Sempatkan melakukan peregangan otot selama 5 menit setiap duduk bekerja atau belajar selama 1 jam.",
    "Ganti camilan manis kemasan dengan buah segar seperti pisang, apel, atau pepaya.",
    "Terapkan aturan 20-20-20 untuk kesehatan mata: setiap 20 menit menatap layar, lihat objek sejauh 20 kaki selama 20 detik.",
    "Kurangi konsumsi minuman bersoda dan beralihlah ke teh hijau tanpa gula.",
    "Sempatkan berjemur di bawah sinar matahari pagi selama 10-15 menit untuk mendapatkan vitamin D alami."
];

function tampilkanTipsBaru() {
    const indeksAcak = Math.floor(Math.random() * daftarTips.length);
    const elemenTips = document.getElementById("teks-tips");
    elemenTips.innerHTML = `"${daftarTips[indeksAcak]}"`;
}
