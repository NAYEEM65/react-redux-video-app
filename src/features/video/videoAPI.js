import axios from '../../utils/axios';

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);
    return response.data;
};

export const updateLike = async (id, likes, unlikes) => {
    const response = await axios.patch(`/videos/${id}`, { likes, unlikes });
    return response.data;
};
