import {useDispatch} from 'react-redux';
import {add} from '../redux/cartSlice';
export default function ProductCard({product}){const d=useDispatch();return <div className="card"><img src={product.image}/><h3>{product.title}</h3><p>${product.price}</p><button onClick={()=>d(add(product))}>Add to Cart</button></div>}
