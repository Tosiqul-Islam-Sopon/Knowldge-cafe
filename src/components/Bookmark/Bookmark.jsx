import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-white p-4 rounded-xl'>
            <h2 className='text-xl font-semibold'>{bookmark}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.element
}
export default Bookmark;