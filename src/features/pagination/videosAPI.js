import axios from '../../utils/axios';

export const getVideoPagination = async (limit) => {
    const response = await axios.get(`/videos?_limit=${limit}`);

    return response.data;
};
//?_page=7&_limit=20
