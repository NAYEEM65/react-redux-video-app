import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paginate } from '../../features/pagination/paginationSlice';

export default function PaginationItem({ number, setActivePage }) {
    const dispatch = useDispatch();
    const activePage = useSelector((state) => state.pagination.pageNumber);

    let bgColor = 'bg-gray-500';
    if (number === activePage) {
        bgColor = 'bg-blue-600';
    }

    const paginateHandler = (e) => {
        let allElement = [...e.target.parentElement.children];
        allElement.forEach((element) => {
            element.classList.remove('bg-blue-600');
        });
        dispatch(paginate(number));
        e.target.classList.add('bg-blue-600');
    };

    return (
        <div
            className={`text-white px-4 py-1 rounded-full cursor-pointer ${bgColor}`}
            onClick={paginateHandler}
        >
            {number}
        </div>
    );
}
