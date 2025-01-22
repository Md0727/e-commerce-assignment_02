import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setFilterByCategory } from '../../../store/slice/filterByCategorySlice';
import { useDebonus12 } from '../../../hooks/useDebonus';
import SkeletonCategory from '../../SkeletonLoader/SkeletonCategory';

const CategorySidebar = () => {
    const dispatch = useDispatch();
    const [filterData, setFilterData] = useState([]);
    const [searhkey, setSearchKey] = useState('');
    const useDebonus = useDebonus12(searhkey, 500);
    const [checked, setChecked] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = (event) => {
        const { value } = event.target;
        setSearchKey(value)
    }

    const getCategoryHandler = (category_value, index) => {
        if (checked === index) {
            setChecked("");
            dispatch(setFilterByCategory({ key: "categoryKey", value: "" }))
        } else {
            setChecked(index);
            dispatch(setFilterByCategory({ key: "categoryKey", value: category_value }))
        }
    }

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const response = fetch(`https://fakestoreapi.com/products/categories`);
                await response?.then((res) => res?.json()).then((data) => {
                    const filterRecord = data?.filter((item) => item?.toLowerCase()?.includes(useDebonus.toLowerCase()));
                    setFilterData(filterRecord);
                    setIsLoading(false)
                }).catch((err) => {
                    console.log(err);
                    setIsLoading(false)
                })
            } catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        fetchData();
    }, [useDebonus]);

    return (

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
            <div className="px-4 py-2">
                <h1 className="text-gray-800 font-bold text-lg uppercase">Search Category</h1>
            </div>

            {/* Add Task Form */}
            <form className="w-full max-w-sm mx-auto px-4 py-2">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search category..."
                        onChange={searchHandler}
                        value={searhkey ?? ''}
                    />

                </div>
            </form>

            <ul className="divide-y divide-gray-200 px-4">
                {
                    isLoading && <SkeletonCategory />
                }
                {
                    filterData.length === 0 && "Record not found."
                }
                {
                    filterData?.map((category, index) => (
                        <li className="py-2" key={index + 1}>
                            <div className="flex items-center">
                                <input
                                    id={`todo${index + 1}`}
                                    name="todo1"
                                    type="checkbox"
                                    checked={checked === (index + 1) ? true : false}
                                    onChange={() => getCategoryHandler(category, index + 1)}
                                    className="h-3 w-3 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label htmlFor={`todo${index + 1}`} className="ml-3 block text-gray-900">
                                    <span className="text-sm font-medium">{category ?? ''}</span>
                                </label>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategorySidebar;