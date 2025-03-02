import React from 'react';

const Card = ({ data }) => {

//   console.log(data);
  
  const Readmore = (webUrl) => {
    console.log('Readmore');
    window.open(webUrl);
  }

  return (
    <div className="card-container">
      {/* {data.length > 0 ? (
        data.map((news, index) => ( */}
        {data.map((news, index) => {
            if(!news.fields.thumbnail){
                return null;
            }
            else{

            
            return(
        <div className='cardcontainer'>
             <div key={index} className="card">
            {news.fields?.thumbnail && <img src={news.fields.thumbnail} alt="news" />}
            <a href={news.webUrl} target="_blank" rel="noopener noreferrer">
                 <h3>{news.webTitle}</h3> 
            </a>

            <p>{news.sectionName}</p>
            
            <button onClick={() => Readmore(news.webUrl)}> Read More </button>

           
          </div>

        </div>
            )
        }
        })}
         
    </div>
  );
};

export default Card;
