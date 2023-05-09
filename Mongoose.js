const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/FinalProject_RoshyManoppo");
    console.log("Koneksi Berhasil");
  } catch (err) {
    console.log(err);
  }
}
main();