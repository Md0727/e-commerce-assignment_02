import React from 'react'
import { Link } from 'react-router-dom';

const GridCards = ({ data = [] }) => {
  function rating() {
    let dataRating = [];
    const itemRating = Math.floor(data?.rating?.rate);
    for (let i = 0; i < itemRating; i++) {
      dataRating.push(i + 1);
    }
    return dataRating;
  }

  return (
    <>
      <article key={data?.id} className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
        <div>
          <img
            className="object-contain h-64 w-full"
            src={data?.image}
            alt={data?.title}
          />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{data?.title?.slice(0, 25)}{data?.title?.length > 25 ? '...' : ''}</h2>
          <span className="font-normal text-gray-600 dark:text-gray-300">{data?.description?.slice(0, 50)}{data?.description?.length > 50 ? '...' : ''}</span>
          <span className="font-semibold text-gray-800 dark:text-gray-50">₹{data?.price}</span>
        </div>

        <div className="flex gap-2 mt-4 px-4">
          {rating()?.map((index) => {
            return <i key={index + 1} className="fa fa-star text-yellow-300" style={{ fontSize: '14px' }}></i>
          })}

        </div>

        <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
          <Link
            to="/cart"
            className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
            <span className="text-base">Add to Cart</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </Link>
        </div>
      </article>
    </>
  )
}

export default GridCards;