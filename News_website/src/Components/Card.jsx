import React from 'react';

const Card = ({ data }) => {
  const Readmore = (webUrl) => {
    window.open(webUrl, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 max-w-7xl mx-auto lg:w-6xl md:w-4xl sm:w-3xl">
      {data.map((news, index) => {
        if (!news.fields?.thumbnail) {
          return null;
        }
        return (
          <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full w-full border border-gray-700">
            <img src={news.fields.thumbnail} alt="news" className="w-full h-52 object-cover rounded-lg" />
            <div className="flex-grow flex flex-col justify-between mt-3">
              <a href={news.webUrl} target="_blank" rel="noopener noreferrer" className="block text-lg font-bold text-yellow-400 hover:text-yellow-500 transition-colors">
                {news.webTitle}
              </a>
              <p className="text-gray-400 mt-2 text-sm">{news.sectionName}</p>
              <button onClick={() => Readmore(news.webUrl)} className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors w-full">
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;