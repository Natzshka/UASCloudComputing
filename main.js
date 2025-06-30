function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  // Fungsi toggle musik latar belakang
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const button = document.querySelector(".music-toggle");

  if (audio.paused) {
    audio.play();
    button.textContent = "🔊 Musik Aktif";
  } else {
    audio.pause();
    button.textContent = "🔇 Musik Mati";
  }
}

// Putar otomatis saat halaman dimuat (opsional, tergantung browser)
window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");

  // Cek jika user sudah pernah mengaktifkan sebelumnya
  const musikAktif = localStorage.getItem("musikAktif");

  if (musikAktif === "true") {
    audio.play().catch(() => {
      // autoplay might be blocked, handle silently
    });
    document.querySelector(".music-toggle").textContent = "🔊 Musik Aktif";
  }

  // Simpan status musik jika tombol ditekan
  document.querySelector(".music-toggle").addEventListener("click", () => {
    localStorage.setItem("musikAktif", audio.paused ? "false" : "true");
  });
});
