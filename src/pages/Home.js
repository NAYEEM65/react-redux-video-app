import VideoGrid from '../components/grid/VideoGrid';
import Tags from '../components/tags/Tags';
import Pagination from '../components/ui/Pagination';

export default function Home({ setInput }) {
    return (
        <>
            <Tags setInput={setInput} />
            <VideoGrid />
            <Pagination />
        </>
    );
}
