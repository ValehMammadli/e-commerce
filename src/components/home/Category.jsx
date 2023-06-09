import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

export const Category = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector (state=> state.categories)

    console.log(categories,"categories");

    useEffect(()=>{
dispatch(getCategories())
    },[dispatch])

  return (
    <div className='w-1/6 bg-gray-100'>

        <div> {
            categories.map((category,index) => (
                 <div className='text-lg cursor-pointer hover:bg-gray-200 p-2' key={index}>{category}</div> 
              ) ) }
        </div>

       
    </div>
  )
}
