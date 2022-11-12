
import ProductComp from './productComp';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allproducts } from '../redux/actions/actions';

const Allproducts = ()=>{
    const dispatch = useDispatch();

    const getallproducts = async ()=>{
        const result = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error)=>{
            console.log(error);
        });
    console.log(result.data);
    dispatch(allproducts(result.data));
    }

    useEffect(()=>{
        getallproducts();
    })

    return(
        <div className="ui grid" style={{marginTop : "1em"}}>
            <ProductComp />
        </div>
    );
}

export default Allproducts;