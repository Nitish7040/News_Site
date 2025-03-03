import React, { useEffect, useState } from 'react'
import Card from './Card'
const NewsApp = () => {

const [search , setsearch] = useState('Software');
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
 <div className="min-h-full bg-gradient-to-r from-blue-900 to-gray-900 text-white p-4">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400">Trendy News</h1>
        {/* <ul className="flex space-x-4 mt-2 md:mt-0">
          <li className="text-gray-300 hover:text-yellow-400 cursor-pointer">abc</li>
          <li className="text-gray-300 hover:text-yellow-400 cursor-pointer">abjhg</li>
        </ul> */}
         <div className="flex items-center space-x-2 mt-2 md:mt-0 bg-gray-700 p-2 rounded-lg">
          <input
            type="text"
            placeholder="🔍 Search news..."
            className="p-2 rounded-lg text-black border-none focus:ring-2 focus:ring-yellow-400 bg-gray-100 w-60 md:w-80"
            onChange={handleInput}
            value={search}
          />
          <button 
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-all"
            onClick={Getdata}
          >
            Search
          </button>
        </div>
      </nav>

      {/* Headline */}
      <p className="text-center text-lg font-semibold mt-4 text-yellow-300">
        Stay updated with trendy news
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {['sports', 'politics', 'entertainment', 'health', 'fitness'].map((category) => (
          <button 
            key={category}
            onClick={UserInput} 
            value={category} 
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all shadow-md"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NewsData ? <Card data={NewsData} /> : null}
      </div>
    </div>
    <footer 
    className='bg-gradient-to-r from-blue-900 to-gray-900 text-white p-4 text-center '
   >
      <p>&copy; {new Date().getFullYear()} All rights reserved. Developed by Nitish Pandey.</p>
    </footer>
   </>
  )
}

export default NewsApp