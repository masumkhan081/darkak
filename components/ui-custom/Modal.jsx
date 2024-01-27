import Image from "next/image";
import React from "react";
// import { imgMap } from "@/static-data/products";

 import prdImage from "@/public/products/1.jpg";
// import prdImage2 from "@/public/products/2.jpg";
// import prdImage3 from "@/public/products/3.webp";
// import prdImage4 from "@/public/products/4.webp";
// import prdImage5 from "@/public/products/5.webp";
// import prdImage6 from "@/public/products/6.webp";
// import prdImage7 from "@/public/products/7.webp";
// import prdImage8 from "@/public/products/8.jpg";
// import prdImage9 from "@/public/products/9.jpg";

// const imgArr = [
//   prdImage,
//   prdImage2,
//   prdImage3,
//   prdImage4,
//   prdImage5,
//   prdImage6,
//   prdImage7,
//   prdImage8,
//   prdImage9,
// ];
// const imgMap = {
//   1: prdImage,
//   2: prdImage2,
//   3: prdImage3,
//   4: prdImage4,
//   5: prdImage5,
//   6: prdImage6,
//   7: prdImage7,
//   8: prdImage8,
//   9: prdImage9,
// };

export default function Modal(imgId, close) {
  return (
    <div>
      <Image width={"200px"} height={"320px"} src={prdImage} />
    </div>
  );
}
