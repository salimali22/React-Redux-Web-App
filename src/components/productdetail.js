import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { selectedproducts } from "../redux/actions/actions";
import { removeproducts } from './../redux/actions/actions';

const Productdetail = () => {
  const item = useSelector((state) => state.selectedReducer);
  console.log(item);
//   console.log(Object.keys(item).length);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const getallproducts = async () => {
    console.log("Executing All Products")
    const result = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    console.log(result.data);
    dispatch(selectedproducts(result.data));

  };
  useEffect(() => {
    console.log("Executing Dispatch");
        dispatch(removeproducts());
    if(productId && productId !== ""){
        console.log("In the useEffect");
    getallproducts();
    }
        
    
  }, [productId]);
  return (
    <>

      {Object.keys(item).length === 0 ? console.log("No item Selected") : (Object.keys(item.selected).length === 0 ? (
        <div>Content Loading</div>
      ) : (
        
        <>
        {console.log("Inside Return")}
          <div className="ui two column centered grid">
            <div className="column">
            <div class="item">
              <div class="image">
                <img className="ui image centered medium" src={item.selected.image} alt={item.selected.title} />
              </div>
              <div class="content">
                <a class="header">{item.selected.title}</a>
                <div class="meta">
                  <span>{item.selected.price} $</span>
                </div>
                <div class="description">
                  <p>{item.selected.description}</p>
                </div>
                <div class="extra">{item.selected.category}</div>
              </div>
            </div>
            </div>
          </div>
        </>
      ))}
      ;
    </>
  );
};

export default Productdetail;
