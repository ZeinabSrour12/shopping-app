import {useSelector,useDispatch} from 'react-redux';import {remove} from '../redux/cartSlice';
export default function Cart(){const items=useSelector(s=>s.cart);const d=useDispatch();return <div>{items.length===0?'Your cart is empty':items.map(i=><p key={i.id}>{i.title}<button onClick={()=>d(remove(i.id))}>Remove</button></p>)}</div>}
