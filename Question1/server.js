import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3050;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const Categories = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Pendrive",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

const data = [
  {
    productName: "Laptop 1",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes",
  },
  {
    productName: "Laptop 13",
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: "out-of-stock",
  },
  {
    productName: "Laptop 3",
    price: 9102,
    rating: 4.44,
    discount: 98,
    availability: "out-of-stock",
  },
  {
    productName: "Laptop 11",
    price: 2652,
    rating: 4.12,
    discount: 70,
    availability: "yes",
  },
  {
    productName: "Laptop 4",
    price: 1258,
    rating: 3.8,
    discount: 33,
    availability: "yes",
  },
  {
    productName: "Laptop 13",
    price: 8686,
    rating: 3.22,
    discount: 24,
    availability: "out-of-stock",
  },
  {
    productName: "Laptop 14",
    price: 9254,
    rating: 3,
    discount: 56.7,
    availability: "yes",
  },
  {
    productName: "Laptop 1",
    price: 1059,
    rating: 2.77,
    discount: 21,
    availability: "yes",
  },
  {
    productName: "Laptop 10",
    price: 7145,
    rating: 2.74,
    discount: 15,
    availability: "yes",
  }
];

app.get(
  "/companies/:companyname/categories/:categoryname/products",
  (req, res) => {
    const companyname = req.params.companyname;
    const categoryname = req.params.categoryname;
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || Number.MAX_SAFE_INTEGER;

    const n = req.query.top;

    if (n > 10) {
      const page = n % 10;
    }
  }
);

app.listen(port, () => {
  try {
    console.log(`server is running on '${port}'`);
  } catch (error) {
    console.log(error);
  }
});
