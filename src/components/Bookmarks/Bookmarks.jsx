import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readTime }) => {
    return (
        <div className="lg:w-1/3 space-y-4">
            <h2 className="bg-[#6047EC1A] p-4 rounded-2xl text-xl text-[#6047EC] font-semibold">Spent time on read : {readTime} min</h2>
            <div className="bg-[#1111110D] p-4 rounded-2xl">
                <h2 className="text-2xl font-bold mb-3">Bookmarked Blogs: {bookmarks.length}</h2>
                <div className="space-y-3">
                    {
                        bookmarks.map((bookmark, idx) =>
                            <Bookmark
                                key={idx}
                                bookmark={bookmark}>
                            </Bookmark>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}

export default Bookmarks;