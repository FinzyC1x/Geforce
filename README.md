# Geforce Bot

Geforce adalah sebuah bot berbasis JavaScript yang dapat digunakan untuk berbagai macam keperluan otomatisasi, seperti percakapan atau integrasi dengan berbagai API. Bot ini menggunakan Node.js dan module *@whiskeysockets/baileys* sebagai platform untuk menjalankannya.

## Struktur Script

- **index.js**  
  Merupakan file utama untuk menjalankan bot seperti fitur, dll.

- **connections.js**  
  File untuk mengatur koneksi untuk connect ke bot

### Folder: `geforceset`
Di dalam folder `geforceset`, kamu akan menemukan beberapa file config bot, salah satunya adalah `config.js` yang digunakan untuk mengatur pengaturan bot.

#### File: `geforceset/config.js`
Pada file ini, Anda perlu mengganti nomor pemilik bot. Berikut adalah bagian yang perlu Anda perhatikan:

```javascript
global.owner = [
  "6288804148639", // Ganti dengan nomor pemilik bot
  "" // Nomor pemilik kedua jika ada
]
