import prdImage from "@/public/products/1.jpg";
import prdImage2 from "@/public/products/2.jpg";
import prdImage3 from "@/public/products/3.webp";
import prdImage4 from "@/public/products/4.webp";
import prdImage5 from "@/public/products/5.webp";
import prdImage6 from "@/public/products/6.webp";
import prdImage7 from "@/public/products/7.webp";
import prdImage8 from "@/public/products/8.jpg";
import prdImage9 from "@/public/products/9.jpg";

export const imgMap = {
  1: prdImage,
  2: prdImage2,
  3: prdImage3,
  4: prdImage4,
  5: prdImage5,
  6: prdImage6,
  7: prdImage7,
  8: prdImage8,
  9: prdImage9,
};

export const products = [
  {
    id: "drty1123",
    pn: "Panjabi ",
    ln: "ln - offline",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "Offline",
    imgId: 1,
    image: imgMap[1],
    link: "@/public/products/2.jpg",
  },
  {
    id: "drty1183",
    pn: "Panjabi ",
    ln: "ln - offline",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "Offline",
    imgId: 2,
    image: imgMap[2],
    link: "@/public/products/2.jpg",
  },
  {
    id: "78DF1123",
    pn: "Cold Hat ",
    ln: "ln - offline",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "Offline",
    imgId: 5,
    image: imgMap[5],
  },
  {
    id: 3,
    pn: "Panjabi ",
    ln: "ln - In Progress",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "In Progress",
    imgId: 6,
    image: imgMap[6],
  },
  {
    id: 4,
    pn: "Panjabi ",
    ln: "ln In Progress",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "In Progress",
    imgId: 7,
    image: imgMap[7],
  },
  {
    id: 5,
    pn: "i am long name to see text overflow overflow overflow",
    ln: "ln- online",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "Online",
    imgId: 8,
    image: imgMap[8],
  },
  {
    id: 6,
    pn: "Panjabi ",
    ln: "ln- online",
    color: "black",
    size: 42,
    price: 120,
    stock: 67,
    status: "Online",
    imgId: 9,
    image: imgMap[9],
  },
];
