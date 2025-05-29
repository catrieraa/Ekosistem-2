function tampilkan(id) {
  const sections = document.querySelectorAll('.konten');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
// KUIS DATA
const kuis = [
  {
    soal: "Apa yang termasuk komponen abiotik?",
    opsi: ["Tumbuhan", "Air", "Hewan", "Bakteri"],
    jawaban: "Air"
  },
  {
    soal: "Apa peran dekomposer dalam ekosistem?",
    opsi: ["Menghasilkan energi", "Menguraikan zat organik", "Menghirup CO2", "Menghasilkan makanan"],
    jawaban: "Menguraikan zat organik"
  },
  {
    soal: "Apa yang dapat merusak keseimbangan ekosistem?",
    opsi: ["Reboisasi", "Daur ulang", "Pencemaran", "Konservasi"],
    jawaban: "Pencemaran"
  }
];

let indeksSoal = 0;
let skor = 0;

function tampilkanKuis() {
  if (indeksSoal >= kuis.length) {
    document.getElementById('soal').innerHTML = "<h3>Kuis selesai!</h3>";
    document.getElementById('opsi').innerHTML = "<p>Skor Anda: " + skor + "/" + kuis.length + "</p>";
    return;
  }

  const q = kuis[indeksSoal];
  document.getElementById('soal').innerHTML = "<p>" + q.soal + "</p>";

  const opsiDiv = document.getElementById('opsi');
  opsiDiv.innerHTML = "";

  q.opsi.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = function () {
      if (opt === q.jawaban) skor++;
      indeksSoal++;
      tampilkanKuis();
    };
    btn.style.margin = "0.5rem";
    btn.style.padding = "0.5rem 1rem";
    opsiDiv.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkan('peta'); // tampilkan bagian awal
  tampilkanKuis();   // siapkan kuis jika dibuka
});
