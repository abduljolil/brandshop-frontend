import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Sliders from "./Slider";

const Products = () => {
  const params = useParams();
  const {id} = params;

  const [products, setProducts] = useState(null);

  console.log(products);

  useEffect(() => {
    fetch(`https://b8-a10-brand-shop-server-side-gold.vercel.app/brands/${id}`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div className="mt-10">
      <Sliders></Sliders>
      <div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
      {products?.length>0 ? products?.map((item) => (
        <div key={item?._id} className="mt-2">
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <div>
              <img
                src={item.photo}
                alt="coc"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {item.name}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {item?.title}
                </p>
                <div className="flex items-center gap-5">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Price: {item?.price} $
                  </p>
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Rating: {item?.rating} *
                  </p>
                  <div className="ml-auto">
                  <Link to={`/productdetails/${item?._id}`}>
                    <button className="bg-[red] hover:bg-[blue] font-avenir text-[white] rounded px-5 py-2">
                      Details
                    </button>
                    </Link>
                    <Link to={`/updateproduct/${item?._id}`}>
                      <button className="mt-3 bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )):<div><h2 className="text-center text-xl font-bold font-montserrat text-red-600">No! data found</h2></div>}
    </div>
      </div>
    </div>
    
 
  );
};

export default Products;
