import React, { useEffect, useState } from 'react'
import CategorySidebar from './CategorySidebar';
import GridCards from './GridCards';
import { useSelector } from 'react-redux';
import { useDebonus12 } from '../../hooks/useDebonus';
import SkeletonCard from '../SkeletonLoader/SkeletonCard';

const CategoryLayout = () => {
    const { categoryKey, searchbyHeader } = useSelector((state) => state?.filterByCategory);
    const useDebonus = useDebonus12(searchbyHeader, 500);
    const [response, setResponse] = useState([]);
    const [moreResult, setMoreResult] = useState(6)
    const [isLoading, setIsLoading] = useState(false);

    const loadMorehandler = () => {
        setMoreResult(moreResult + 6)
    }

    useEffect(() => {
        let url = "";
        if (categoryKey) {
            url = `products/category/${categoryKey}`
        } else {
            url = `products/${categoryKey}`
        }
        async function fetchData() {
            setIsLoading(true)
            try {
                const response = fetch(`https://fakestoreapi.com/${url}`);
                await response?.then((res) => res?.json()).then((data) => {
                    const filterRecord = data?.filter((item) => item?.title?.toLowerCase()?.includes(useDebonus.toLowerCase()));
                    setResponse(filterRecord);
                    setIsLoading(false)
                }).catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                })
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchData();
    }, [categoryKey, useDebonus]);

    return (
        <>
            <div className="container mx-auto px-4 my-5">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-3/12">
                        <CategorySidebar />
                    </div>

                    <div className="w-full md:w-9/12">
                        <div className='mb-3'>
                            <select name="cars" id="cars" className='border w-48'>
                                <option value="">default</option>
                                <option value="high">Price : Low to High</option>
                                <option value="low">Price : High to Low</option>
                            </select>
                            <span className='ml-3'>Showing : {response?.length} </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {
                                isLoading && [1,2,3]?.map((_) => {
                                    return <SkeletonCard />
                                })
                            }
                            {
                                response.length === 0 && "Record not found."
                            }
                            {
                                response?.slice(0, moreResult)?.map((data) => {
                                    return (
                                        <GridCards
                                            data={data}
                                            key={data?.id}
                                        />
                                    )
                                })
                            }
                        </div>
                        {
                            moreResult >= response?.length ? '' : (
                                <div class="flex justify-center mt-5 gap-4">
                                    <button
                                        onClick={loadMorehandler}
                                        className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default CategoryLayout;