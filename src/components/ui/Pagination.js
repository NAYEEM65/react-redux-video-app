import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Pagination() {
    const { videos } = useSelector((state) => state.videos);
    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = useState(1);
    const [videoPerpage] = useState(5);

    const lastIndexVideos = currentPage * videoPerpage;
    const firstIndexVideos = lastIndexVideos - videoPerpage;
    const currentVideos = videos.slice(firstIndexVideos, lastIndexVideos);

    console.log(currentVideos);
    const totalVideos = videos.length;
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalVideos / videoPerpage); i++) {
        pageNumber.push(i);
    }
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {pageNumber.map((number) => (
                    <div key={number} className="bg-blue-600 text-white px-4 py-1 rounded-full">
                        {number}
                    </div>
                ))}
                {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full">1</div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">2</div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">3</div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">4</div> */}
            </div>
        </section>
    );
}
