import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Home.css';
import ProductList from '../component/ProductList';
import Categories from '../component/Categories';
import basicOps from '../utility/basicOps';
import { usePaginationContext } from '../component/context/PaginationContext';
import Navbar from '../component/Navbar';
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [sortDir,setSortDir]=useState(0);
  const [categories,setCategory] = useState([])
  const [currCategory,setCurrCategory]=useState('All Categories');

const {pageSize,pageNum,setPageNum,setPageSize}=usePaginationContext();


  useEffect(() => {
    (async () => {
      const resp = await fetch('https://fakestoreapi.com/products');
      const productData = await resp.json();
      //productData.foreach((ele)=> )
                
      setProducts(productData);
    })();
  }, []);

useEffect(()=>{
      (async function(){
        const resp=await fetch("https://fakestoreapi.com/products/categories");
        const categoriesData=await resp.json(); 
        //console.log(categoriesData)
        setCategory(categoriesData); 
      })()
},[]);
const object=basicOps(products,searchTerm,sortDir,currCategory,pageSize,pageNum);
const filteredCategory = object.filteredCategory;
const totalPages=object.totalPages; 


                  return (
                    <>
                      <header className="navbar">
                        <div className="logo">Amazon</div>
                        <div className='search_sortwrap'><input
                          type="text"
                          className="search-input"
                          value={searchTerm}
                          onChange={(e) => {setSearchTerm(e.target.value) 
                            setPageNum(1);
                           }} 
                          placeholder="Search products..."
                        />
                <div className='icons_container'>
                <AiOutlineArrowUp onClick={()=>{setSortDir(1) 
                  setPageNum(1); 
                }}/>
                <AiOutlineArrowDown onClick={()=>{setSortDir(-1) 
                  setPageNum(1); 
                }}/> 
                </div>
               
                </div>
                <div className="catagories_wrapper">
                 <Categories categories={categories} 
                 setCurrCategory={setCurrCategory} 
                 
                 ></Categories>
                </div>

                      </header>
                      <main className="product-grid">
                        <ProductList productList={filteredCategory}/>
                      </main>
                      <div className='pagination'>
                             <button className='' onClick={()=>{
                              if (pageNum>1)
                                return 
                              setPageNum(pageNum-1);
                              }}
                              disabled={pageNum ==1 ? true : false}

                             >
                              <AiOutlineArrowLeft/>
                             </button><div className='pagenum'>
                              {pageNum}
                             </div>
                             <button onClick={()=>{
                            if (pageNum < totalPages)
                              return 
                            setPageNum(pageNum+1) 
                            
                             }}
                             disabled={pageNum==totalPages? true:false}
                             >
                              <AiOutlineArrowRight />
                             </button>
                      </div>
                    </>
                  );
                };
              
                export default Home;
