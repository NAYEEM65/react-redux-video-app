import { useDispatch } from 'react-redux';
import likeImage from '../../assets/like.svg';
import unlikeImage from '../../assets/unlike.svg';
import {
    fetchLikeCount,
    inrementLikeCount,
    incrementUnLikeCount,
} from '../../features/video/videoSlice';

export default function LikeUnlike({ video }) {
    const { id, likes, unlikes } = video;
    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(inrementLikeCount());
        dispatch(fetchLikeCount(id));
    };
    const handleUnLike = () => {
        dispatch(incrementUnLikeCount());
        dispatch(fetchLikeCount(id));
    };
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer">
                    <img className="w-5 block" src={likeImage} alt="Like" onClick={handleLike} />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer">
                    <img
                        className="w-5 block"
                        src={unlikeImage}
                        alt="Unlike"
                        onClick={handleUnLike}
                    />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
            </div>
        </div>
    );
}
