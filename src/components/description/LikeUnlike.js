import { useDispatch } from 'react-redux';
import likeImage from '../../assets/like.svg';
import unlikeImage from '../../assets/unlike.svg';
import { incrementLikes, incrementUnlikes } from '../../features/video/videoSlice';
import { updateLikeUnlike } from '../../features/likeUnlike/likeUnlikeSlice';
import liked from '../../assets/liked.png';
import disliked from '../../assets/disLiked.png';
import { useState } from 'react';

export default function LikeUnlike({ id, likes, unlikes }) {
    const dispatch = useDispatch();
    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);
    const handleLike = () => {
        dispatch(incrementLikes());
        dispatch(updateLikeUnlike(id));
        setIsLike(true);
    };
    const handleUnlike = () => {
        dispatch(incrementUnlikes());
        dispatch(updateLikeUnlike(id));
        setIsDislike(true);
    };
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer" onClick={handleLike}>
                    {isLike ? (
                        <img className="w-5 block" src={liked} alt="Like" />
                    ) : (
                        <img className="w-5 block" src={likeImage} alt="Like" />
                    )}
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0 cursor-pointer" onClick={handleUnlike}>
                    {isDislike ? (
                        <img className="w-5 block" src={disliked} alt="Unlike" />
                    ) : (
                        <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                    )}
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
            </div>
        </div>
    );
}
