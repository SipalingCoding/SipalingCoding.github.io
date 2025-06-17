const musik = "Littleroot Town.mp3";
const background = "Background.png";
const ucapanSurat = "Halo Sinta Aryani,\n\nMaaf ya, mungkin ini saja yang bisa aku berikan untukmu—sebuah ucapan sederhana. Sebenarnya aku ingin memberikan sesuatu yang lebih dari ini, sesuatu yang lebih indah dan berkesan. Tapi aku yakin, kamu tidak akan mau menerimanya. Tadinya aku juga ingin membuat ucapan ini lebih menarik dan istimewa, tapi karena keterbatasan waktu dan situasi, akhirnya hanya sesederhana ini. Meski begitu, aku harap maknanya tetap bisa sampai ke hati kamu.\n\nPertama-tama, selamat atas wisudamu!\nSelamat karena kini namamu telah bertambah tiga huruf di belakang—sebuah pencapaian luar biasa yang patut kamu banggakan. Semoga, insyaAllah, suatu saat nanti bisa bertambah lagi... Aamiin.\n\nDan tentu saja, selamat telah resmi menjadi seorang Sarjana Pendidikan.\nMungkin gelar ini bukan yang kamu impikan sejak awal, mungkin juga kampus tempatmu menempuh pendidikan bukan tempat yang dulu kamu harapkan. Tapi aku percaya, seperti kata Ustaz Adi Hidayat:\n\"Allah tidak selalu memberikan apa yang kita inginkan, tetapi Dia memberikan apa yang kita butuhkan.\"\n\nMungkin UMKO adalah tempat terbaik untukmu—tempat di mana kamu mendapatkan pelajaran, bukan hanya dari kelas, tapi juga dari kehidupan.\nDi sana kamu punya teman-teman yang selalu baik dan mendukungmu, yang memiliki minat yang sama denganmu, yang bisa diajak berbagi cerita, tawa, dan semangat. Bahkan mungkin, ada juga teman yang diam-diam selalu memperhatikanmu dan peduli padamu.\n\nSelama di sana, kamu juga belajar banyak tentang kehidupan—tentang perjuangan, keteguhan hati, dan bersyukur. Kamu bisa melihat bahwa setiap orang punya ujian hidup masing-masing. Dan mungkin dari situlah kamu jadi lebih kuat, lebih sabar, dan lebih optimis menjalani hari-harimu.\n\nEmpat tahun bukan waktu yang singkat. Pasti ada banyak rasa yang kamu lewati—susah, senang, kecewa, bahagia, jatuh, bangkit. Dan kamu berhasil melewati semuanya dengan baik, bahkan dengan predikat cumlaude. Itu bukan hal sepele. Itu hasil dari kerja keras, doa, air mata, dan ketekunanmu yang luar biasa.\n\nAku yakin, di balik gelar yang kamu raih, ada cerita-cerita menarik yang belum sempat kamu bagi. Semoga suatu saat aku bisa mendengarnya langsung darimu—cerita tentang perjalananmu, prosesmu, perjuanganmu. Dan lebih dari itu, aku juga berharap ilmu yang kamu dapat selama kuliah akan benar-benar bermanfaat, tidak hanya untuk dirimu sendiri, tapi juga untuk orang lain di sekitarmu.\n\nAkhir kata, aku hanya ingin bilang:\nAku bangga padamu. Teruslah jadi pribadi yang kuat, rendah hati, dan penuh semangat. Jalanmu masih panjang, tapi kamu sudah melangkah dengan sangat baik.\n\nSelamat atas pencapaianmu, Sinta Aryani.\nSemoga langkah-langkahmu ke depan selalu diberkahi dan dimudahkan oleh Allah SWT.";
const PesanWhatsapp = "Pesan Whatapp";

const audio = document.querySelector(".audio");
const bg = document.querySelector(".bg");
const isiSurat = document.querySelector(".pesan");

audio.src = musik;
bg.style = "background-image: url('" + background + "')";

function tampil() {
    document.querySelector(".container3").style =
        "transition: .5s all ease; transform: scale(0); opacity:0;";
    audio.play();
    setTimeout(typeWriter, 1000);
    setTimeout(function () {
        document.querySelector(".content2").style.display = "block"
    }, 400);
    let i = 0;
    const speed = 100;
    isiSurat.value = "";
    function typeWriter() {
        if (i < ucapanSurat.length) {
            isiSurat.value += ucapanSurat.charAt(i);
            isiSurat.scrollTop = isiSurat.scrollHeight;
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.querySelector(".wa").style.display = "block";
        }
    }

}

if (performance.getEntriesByType("navigation")[0].type === "reload") {
    window.location.href = "index.html";
}

const typed = new Typed('.animated-text', {
    strings: [
        "Selamat Wisuda 🎓",
        "Sinta Aryani 🌸",
        "Kini Kamu Resmi Menjadi Sarjana Pendidikan 📚",
        "Gelar Baru, Harapan Baru 🌟",
        "Kamu Hebat! 🏆",
        "Selamat Menyambut Babak Baru Hidupmu ✨"
    ],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 800,
    showCursor: false,
    loop: false,
    onComplete: () => {
        const button = document.querySelector('.click-button');
        button.classList.add('show-button');
    }
});


function balasWa() {
    const nomorTujuan = "6289625500105"; // ganti dengan nomor tujuan (gunakan format internasional tanpa +)
    const pesan = encodeURIComponent("Hai, aku baru saja menerima pesannya. Terima kasih ya!");
    const url = `https://wa.me/${nomorTujuan}?text=${pesan}`;

    window.open(url, "_blank"); // buka di tab baru
}
