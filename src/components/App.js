// import { useState } from "react";
import StarRating from "./StarRating";
import ProductCard from "./ProductCard";

// function Test() {
//   const [textStarsRate, setTextStarsRate] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         onSetTextStarsRate={setTextStarsRate}
//       />
//       <p>This app was rating {textStarsRate} stars</p>
//     </div>
//   );
// }

export default function App() {
  return (
    <>
      <ProductCard>
        <StarRating maxRating={10} />
      </ProductCard>
    </>
  );
}
// export default function App() {
//   return (
//     <>
//       <StarRating maxRating={10} />
//       <StarRating size={24} color="red" defaultRating={3} maxRating={5} />
//       <StarRating
//         maxRating={5}
//         messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       />
//       {/* <Test /> */}
//     </>
//   );
// }
