const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// setup express app
const app = express();
app.use(express.json());

// connect to database
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to database');
})
.catch((err) => {
  console.log('Failed to connect to database', err);
});

// define matakuliah schema
const matakuliahSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, '1234CP']
  },
  nama: {
    type: String,
    required: [true, 'Computer Programming']
  },
  ruangan: {
    type: LabComputer GK 2
  },
  jam: {
    type: Senin & Rabu , 07.10 - 08.30,
  },

  const matakuliahSchema = new mongoose.Schema({
    kode: {
      type: String,
      required: [true, '5678SE']
    },
    nama: {
      type: String,
      required: [true, 'Software Engineering']
    },
    ruangan: {
      type: GK1 304,
    },
    jam: {
      type: Selasa & Kamis , 13.10 - 14.30,
    },

    const matakuliahSchema = new mongoose.Schema({
        kode: {
          type: String,
          required: [true, '91011AI']
        },
        nama: {
          type: String,
          required: [true, 'Artificial Intelligence']
        },
        ruangan: {
          type: GK1 501,
        },
        jam: {
          type: Senin & Rabu , 16.40 - 18.00,
        },

        const matakuliahSchema = new mongoose.Schema({
            kode: {
              type: String,
              required: [true, '2801PI']
            },
            nama: {
              type: String,
              required: [true, 'Pre Intermediate 1']
            },
            ruangan: {
              type: GK1 301,
            },
            jam: {
              type: Senin & Rabu , 10.10 - 11.30,
            },
});

// define matakuliah model
const Matakuliah = mongoose.model('Matakuliah', matakuliahSchema);

// define endpoint to get all matakuliah
app.get('/matakuliah', async (req, res) => {
  try {
    const matakuliah = await Matakuliah.find();
    res.json({
      status: 'success',
      message: 'Berhasil mengambil data matakuliah',
      data: matakuliah,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Gagal mengambil data matakuliah',
      data: [],
    });
  }
});

// define endpoint to get matakuliah by kode
app.get('/matakuliah/:kode', async (req, res) => {
  try {
    const matakuliah = await Matakuliah.findOne({ kode: req.params.kode });
    if (!matakuliah) {
      res.status(404).json({
        status: 'error',
        message: 'Matakuliah tidak ditemukan',
        data: null,
      });
    } else {
      res.json({
        status: 'success',
        message: 'Berhasil mengambil data matakuliah',
        data: matakuliah,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Gagal mengambil data matakuliah',
      data: null,
    });
  }
});

// define endpoint to get matakuliah by nama
app.get('/matakuliah', async (req, res) => {
  try {
    const matakuliah = await Matakuliah.find({ nama: req.query.nama });
    res.json({
      status: 'success',
      message: 'Berhasil mengambil data matakuliah',
      data: matakuliah,
    });
  } catch (err) {

//Middleware untuk error handling
app.use((err, req, res, next) => {
    res.json({
      status: "error",
      message: `terjadi kesalahan pada server: ${err}`,
    });
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });