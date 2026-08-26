import {useEffect,useState} from 'react';
import ProductCard from '../components/ProductCard';
export default function Products(){const [products,setProducts]=useState([]); const [search,setSearch]=useState(''); useEffect(()=>{fetch('https://fakestoreapi.com/products').then(r=>r.json()).then(setProducts)},[]); return <main><input onChange={e=>setSearch(e.target.value)} placeholder="Search"/>{products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase())).map(p=><ProductCard key={p.id} product={p}/>)}</main>}
