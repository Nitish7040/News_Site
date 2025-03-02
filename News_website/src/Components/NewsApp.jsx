import React, { useEffect, useState } from 'react'
import Card from './Card'
const NewsApp = () => {

const [search , setsearch] = useState('india');
const [NewsData , setNewsData] = useState(null);

  
const API_KEY='bfe53c28-bd9a-4ae6-b33d-c1ab37b7ce63';

const Getdata = async () => {

  const response = await fetch(`https://content.guardianapis.com/search?q=${search}&api-key=${API_KEY}&show-fields=thumbnail`);
  const data = await response.json();
  // console.log(data);
  // console.log(data.response.results);
  setNewsData(data.response.results);

};

  const handleInput = (e) => { 
    // console.log(e.target.value);
    setsearch(e.target.value);
  
  }

const LoadData = useEffect(()=>{
 Getdata()
},[])
  
  const UserInput = (e) => {
    // console.log(e.target.value);
    setsearch(e.target.value);
    Getdata()
  }
  //


  return (
   <>
   
  <nav>
    <div><h1>
        Trendy News</h1>
        </div>
        <ul>
            <li>abc</li>
            <li>abjhg</li>
        </ul>
        <div>
            <input type="text"
            placeholder='search news'
            onChange={handleInput}
            value={search}
             />
             <button 
             className='bvtn'
             onClick={Getdata}>Search</button>
        </div>
  </nav>  
<p 
className='head '>Stay updaste with trendy news </p>
  <div className='categorybtn'>
    <button onClick={UserInput} value='sports' >Sports</button>
    <button onClick={UserInput} value='politcs' >Politics</button>
    <button onClick={UserInput} value='entertainment' >Entertainment</button>
    <button onClick={UserInput} value='health' >Health</button>
    <button onClick={UserInput} value='fitness' >Fitness</button>
  </div>

  <div>
    {/* cards */}
    {NewsData ?  <Card data={NewsData}/> : null}
   
  </div>
   
   </>
  )
}

export default NewsApp