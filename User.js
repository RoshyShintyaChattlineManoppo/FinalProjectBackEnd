use mydb
db.createCollection("matakuliah", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["kode", "nama", "ruangan", "jam"],
      properties: {
        kode: {
          bsonType: "string",
          description: "1234CP"
        },
        nama: {
          bsonType: "string",
          description: "Computer Programming"
        },
        ruangan: {
          bsonType: "string",
          description: "LabComputer GK 2"
        },
        jam: {
          bsonType: "string",
          description: "Senin & Rabu , 07.10 - 08.30"
        }
      }

      {
        kode: {
          bsonType: "string",
          description: "5678SE"
        },
        nama: {
          bsonType: "string",
          description: "Software Engineering"
        },
        ruangan: {
          bsonType: "string",
          description: "GK1 304"
        },
        jam: {
          bsonType: "string",
          description: "Selasa & Kamis , 13.10 - 14.30"
        }
      }

      {
        kode: {
          bsonType: "string",
          description: "91011AI"
        },
        nama: {
          bsonType: "string",
          description: "Artificial Intelligence"
        },
        ruangan: {
          bsonType: "string",
          description: "GK1 501"
        },
        jam: {
          bsonType: "string",
          description: "Senin & Rabu , 16.40 - 18.00"
        }
      }

      {
        kode: {
          bsonType: "string",
          description: "2801PI"
        },
        nama: {
          bsonType: "string",
          description: "Pre Intermediate 1"
        },
        ruangan: {
          bsonType: "string",
          description: "GK1 301"
        },
        jam: {
          bsonType: "string",
          description: "Senin & Rabu , 10.10 - 11.30"
        }
      }
    }
  }
})
