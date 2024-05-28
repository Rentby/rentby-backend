const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Gantilah dengan path ke file kunci layanan Anda

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Data dummy
const dummyData = [
    {
      created_at: admin.firestore.Timestamp.now(),
      customer_name: 'Talon',
      description: 'Very Welll',
      product_id: '88777',
      star: '5'
    }
  ];

const dummyUser = [
  {
    name: "Taylor Swift",
    phone_number: "9878789",
    address: "America",
    email: "taylor@gmail.com"
  }
];

const dummySeller = [
  {
    name: "Taylor Swift",
    phone_number: "9878789",
    address: "America",
    wa_number: "08766565666",
    product_amount: "8"
  }
];

const dummyProduct = [
  {
    product_name: "Tas Gunung",
    description: "Tas bagus dan murah",
    rent_price: "90000",
    url_photo: "https://picsum.photos/200/300",
    seller_id: "pJXx3omSThRYnlSLeLGp"
  }
];

const now = new Date();
const bookingEndDate = new Date(now);
bookingEndDate.setDate(bookingEndDate.getDate() + 3);

const dummyOrder = [
  {
    order_id: "12222",
    item_id: "41321",
    booking_start: admin.firestore.Timestamp.fromDate(now),
    booking_end: admin.firestore.Timestamp.fromDate(bookingEndDate),
    total: "2321312",
    created_at: admin.firestore.Timestamp.now(),
    status: "success",
    user_id: "0qn22g7pOa6TECl2w20p"
  }
];

// Fungsi untuk menambahkan data dummy
const addDummyData = async () => {
  const batch = db.batch();

  dummyProduct.forEach((data, index) => {
    const docRef = db.collection('products').doc();
    batch.set(docRef, data);
  });

  await batch.commit();
  console.log('Data dummy berhasil ditambahkan!');
};

addDummyData().catch(console.error);