# Sanctuary - Ruang Puisi Digital

> *"Setiap puisi adalah surat yang dikirim tanpa alamat, berharap menemukan hati yang tepat"*

Sanctuary adalah ruang digital yang sederhana namun penuh makna, tempat orang-orang bisa menitipkan kata-kata mereka dalam bentuk puisi. Sebuah website yang tidak sekadar menyajikan teks, tetapi menjadi medium hening untuk menyampaikan pesan dari hati ke hati.

## ✨ Filosofi

Website ini dibangun dengan keyakinan bahwa puisi adalah jembatan antara hati yang satu dengan yang lain. Di sini, tidak ada sistem login yang rumit, tidak ada profil yang harus dibuat - hanya ada hubungan langsung antara si pengirim, si penerima, dan puisi di antara mereka.

## 🎨 Fitur Utama

- **Kirim Puisi Tanpa Registrasi**: Cukup isi nama pengirim dan penerima, lalu tuliskan puisi
- **Desain Minimalis**: Dominasi putih dan hitam yang berpadu harmonis
- **Galeri Puisi**: Tempat semua puisi yang telah dikirim dapat dibaca dan dirasakan
- **Responsive Design**: Dapat diakses dengan nyaman di berbagai perangkat
- **Real-time Updates**: Puisi baru langsung muncul di galeri

## 🛠 Teknologi

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Firebase Firestore
- **Icons**: Lucide React
- **Fonts**: Crimson Text (untuk puisi), Inter (untuk UI)

## 🚀 Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/username/poetry-sanctuary.git
   cd poetry-sanctuary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi Firebase**
   - Buat project baru di [Firebase Console](https://console.firebase.google.com)
   - Aktifkan Firestore Database
   - Salin konfigurasi Firebase ke file `src/services/firebase.js`
   - Ganti bagian `firebaseConfig` dengan konfigurasi Anda:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Atur Firestore Rules**
   Pastikan Firestore rules mengizinkan read/write untuk collection 'poems':
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /poems/{document} {
         allow read, write: if true;
       }
     }
   }
   ```

5. **Jalankan development server**
   ```bash
   npm run dev
   ```

6. **Build untuk production**
   ```bash
   npm run build
   ```

## 📁 Struktur Proyek

```
poetry-sanctuary/
├── public/
│   ├── index.html          # HTML template utama
│   └── favicon.ico         # Icon website
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Komponen header dengan branding
│   │   ├── PoetryForm.jsx  # Form untuk mengirim puisi
│   │   ├── PoetryCard.jsx  # Kartu untuk menampilkan puisi
│   │   └── PoetryGallery.jsx # Galeri semua puisi
│   ├── services/
│   │   └── firebase.js     # Konfigurasi dan service Firebase
│   ├── styles/
│   │   └── globals.css     # Style global dan custom CSS
│   ├── App.jsx            # Komponen utama aplikasi
│   └── main.jsx           # Entry point React
├── package.json           # Dependencies dan scripts
├── tailwind.config.js     # Konfigurasi Tailwind CSS
├── vite.config.js         # Konfigurasi Vite
├── postcss.config.js      # Konfigurasi PostCSS
└── README.md             # Dokumentasi proyek
```

## 🎯 Konfigurasi Penting

### Firebase Setup
1. Buat project Firebase baru
2. Aktifkan Firestore Database
3. Buat collection bernama `poems`
4. Set rules untuk public access (sesuaikan dengan kebutuhan keamanan)

### Environment Variables (Opsional)
Untuk keamanan yang lebih baik, Anda bisa menggunakan environment variables:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## 🌟 Fitur Tambahan yang Direkomendasikan

### 1. **Mood-based Categories**
- Tambahkan kategori berdasarkan mood: rindu, bahagia, sedih, harapan
- Filter puisi berdasarkan kategori

### 2. **Anonymous Heart Reactions**
- Tombol hati untuk mengapresiasi puisi tanpa komentar
- Counter sederhana untuk menunjukkan appreciation

### 3. **Daily Poetry Highlights**
- Sistem untuk menampilkan "Puisi Hari Ini"
- Rotasi otomatis setiap 24 jam

### 4. **Gentle Notifications**
- Notifikasi halus ketika ada puisi baru
- Toast notifications yang tidak mengganggu

### 5. **Export & Share**
- Tombol untuk menyimpan puisi sebagai image
- Share ke media sosial dengan design yang cantik

### 6. **Poetry Themes**
- Tema visual berdasarkan waktu (pagi, sore, malam)
- Pergantian warna yang halus sesuai waktu

### 7. **Reading Mode**
- Mode baca khusus dengan background yang lebih gelap
- Font size adjustment untuk kenyamanan

### 8. **Search & Discovery**
- Pencarian sederhana berdasarkan kata kunci
- Tag system yang minimal dan tidak mengganggu

## 💝 Kontribusi

Proyek ini terbuka untuk kontribusi yang sejalan dengan filosofi kesederhanaan dan keintiman. Setiap kontribusi harus menjaga esensi website sebagai ruang yang tenang dan penuh makna.

## 📜 Lisensi

MIT License - Bebas digunakan untuk tujuan apapun yang baik.

---

*"Dibuat dengan ♥ untuk mereka yang percaya pada kekuatan kata-kata"*
