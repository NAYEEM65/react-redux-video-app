import { useDispatch } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { searched } from '../../features/filter/filterSlice';

export default function Search({ input, setInput }) {
    const dispatch = useDispatch();

    const match = useMatch('/');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input));
        if (!match) {
            navigate('/');
        }
    };
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                id="search-input"
                placeholder="Search"
                value={input}
                onChange={handleChange}
            />
        </form>
    );
}
