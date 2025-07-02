# React InScroll - Opsi Animasi Once vs Mirror

## 🎯 Kontrol Behavior Animasi

Library React InScroll menyediakan dua opsi penting untuk mengontrol bagaimana animasi berperilaku:

### 🔄 **once**: Animasi Sekali atau Berulang

#### `once={true}` (Default)
- ✅ Animasi **hanya muncul sekali** ketika pertama kali elemen terlihat
- ✅ Setelah animasi selesai, tidak akan muncul lagi meskipun user scroll ulang
- ✅ Bagus untuk konten yang ingin tetap terlihat setelah animasi (seperti header, hero section)

```tsx
<InScrollElement animation="fade-up" once={true}>
  <h1>Header yang hanya animasi sekali</h1>
</InScrollElement>
```

#### `once={false}`
- ✅ Animasi akan **muncul setiap kali** elemen masuk ke viewport
- ✅ Berguna untuk elemen yang ingin selalu menarik perhatian ketika terlihat
- ✅ Harus dikombinasikan dengan `mirror` untuk efek yang optimal

```tsx
<InScrollElement animation="fade-up" once={false}>
  <div>Muncul setiap kali terlihat</div>
</InScrollElement>
```

### 🪞 **mirror**: Animasi Keluar

#### `mirror={false}` (Default)
- ✅ Elemen tetap dalam state "animated" setelah animasi selesai
- ✅ Tidak ada animasi ketika elemen keluar dari viewport

#### `mirror={true}`
- ✅ Elemen akan **kembali ke state awal** ketika keluar dari viewport
- ✅ Menciptakan efek "masuk dan keluar" yang smooth
- ✅ Hanya bekerja jika `once={false}`

```tsx
<InScrollElement animation="fade-up" once={false} mirror={true}>
  <div>Muncul ketika masuk, hilang ketika keluar</div>
</InScrollElement>
```

## 🎨 Kombinasi Behavior

### 1. **Default Behavior** (Animasi Sekali)
```tsx
<InScrollElement animation="fade-up">
  <!-- once={true}, mirror={false} secara default -->
  <h1>Muncul sekali, tetap terlihat</h1>
</InScrollElement>
```

### 2. **Always Visible** (Selalu Terlihat Setelah Animasi)
```tsx
<InScrollElement animation="fade-up" once={false} mirror={false}>
  <div>Muncul setiap masuk viewport, tetap terlihat</div>
</InScrollElement>
```

### 3. **Dynamic In/Out** (Masuk dan Keluar)
```tsx
<InScrollElement animation="fade-up" once={false} mirror={true}>
  <div>Muncul ketika masuk, hilang ketika keluar</div>
</InScrollElement>
```

## 🔧 Konfigurasi Global

Anda bisa mengatur behavior default untuk semua elemen:

```tsx
<InScrollProvider config={{ once: false, mirror: true }}>
  {/* Semua InScrollElement akan menggunakan once=false, mirror=true */}
  <InScrollElement animation="fade-up">
    <div>Mengikuti konfigurasi global</div>
  </InScrollElement>
  
  {/* Override konfigurasi global untuk elemen spesifik */}
  <InScrollElement animation="slide-left" once={true}>
    <div>Override: hanya muncul sekali</div>
  </InScrollElement>
</InScrollProvider>
```

## 💡 Use Cases

### Header/Hero Section
```tsx
<InScrollElement animation="fade-up" once={true}>
  <header>Content penting yang hanya perlu animasi sekali</header>
</InScrollElement>
```

### Call-to-Action Buttons
```tsx
<InScrollElement animation="pulse" once={false} mirror={true}>
  <button>Tombol yang selalu menarik perhatian</button>
</InScrollElement>
```

### Content Cards
```tsx
<InScrollElement animation="fade-up" once={false} mirror={false}>
  <div>Card yang muncul setiap kali terlihat tapi tetap ada</div>
</InScrollElement>
```

### Interactive Elements
```tsx
<InScrollElement animation="zoom-in" once={false} mirror={true}>
  <div>Elemen interaktif dengan feedback visual</div>
</InScrollElement>
```

## 🎯 Tips Penggunaan

1. **Performance**: Gunakan `once={true}` untuk konten statis yang tidak perlu animasi berulang
2. **User Experience**: Gunakan `mirror={true}` untuk elemen yang memberikan feedback visual
3. **Content Hierarchy**: Animasi sekali untuk konten penting, animasi berulang untuk elemen interaktif
4. **Mobile Friendly**: Pertimbangkan menggunakan `once={true}` di mobile untuk menghemat battery

## 🚀 Demo Live

Jalankan `npm run dev` dan scroll halaman untuk melihat perbedaan behavior antara:
- Elemen dengan `once={true}` (animasi sekali)
- Elemen dengan `once={false}` dan `mirror={true}` (animasi berulang)
