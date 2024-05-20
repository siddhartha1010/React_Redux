import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/shop/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      // .then((response) => setProducts(response))//yo mattra garda mildaina kina ki actual data is nsested inside the data property
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);
  const addCart = (product) => {
    //dispatch the addToCart function
    dispatch(addToCart(product));
  };
  // const cards = products.map((product) => product.id);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mt-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="m-2 w-96 max-w-md bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 &p:delay-200 &p:transition-all"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
            />

            <p className="cardtxt font-semibold text-black-800 tracking-wider group-hover:text-black-700 text-xl mx-2">
              {product.title}
            </p>
            <p className="blueberry font-semibold text-gray-600 text-xs mx-2">
              {product.description}
            </p>
            <div className="ordernow flex flex-row justify-between items-center w-full">
              <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800 mx-2 mb-4">
                ${product.price}
              </p>
              <button
                onClick={() => addCart(product)}
                className="btun4 lg:inline-flex items-center gap-3 hover:bg-blue-900 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn mr-4 mt-4"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

//       {/* <h1>Product dashbord</h1>
//       {products.map((product) => (
//         <h1 key={product.id}>{product.title}</h1>
//       ))} */}
//     </>
//   );
// };

export default Product;
