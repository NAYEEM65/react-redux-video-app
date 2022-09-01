import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../features/filter/filterSlice';
import { fetchTags } from '../../features/tags/tagsSlice';
import Tag from './Tag';

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const { search } = useSelector((state) => state.filter);

    const dispatch = useDispatch();
    const handleReset = () => {
        dispatch(resetFilter());
    };

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    return tags?.length > 0 ? (
        <section>
            <div className="max-w-full flex justify-around items-center border-b ">
                <div className="px-5 py-6 lg:px-0 flex justify-between gap-2 overflow-y-auto">
                    {tags.map((tag) => (
                        <Tag key={tag.id} title={tag.title} />
                    ))}
                </div>

                <div
                    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                    onClick={handleReset}
                >
                    Reset Filter
                </div>
            </div>
            {search && (
                <div className="max-w-full flex justify-between ml-64  cursor-pointer">
                    you have searched {search}
                </div>
            )}
        </section>
    ) : null;
}
