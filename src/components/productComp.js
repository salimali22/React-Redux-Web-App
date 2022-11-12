import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComp = () => {
  const products = useSelector((state) => state);

  const comp = products.productReducer.product.map((prod) => {
    return (
      <div className="four wide column" key={prod.id}>
        <Link to={`/products/${prod.id}`}>
          <div className="column">
          <div className="ui link card">
            <div className="ui Small images">
              <img className="ui image" src={prod.image} alt={prod.title} />
            </div>
            <div className="content">
              <div className="ui">
                <div className="ui medium header">{prod.title}</div>
                <div className="meta price">{prod.price} $</div>
                <div className="meta">{prod.category}</div>
                <div className="paragraph">
                  <div className="short line"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>
  {comp}
       
  </>;
};

export default ProductComp;
