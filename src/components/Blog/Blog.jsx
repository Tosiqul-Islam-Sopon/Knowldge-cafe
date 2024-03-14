import PropTypes from 'prop-types';
import bookMarkBtn from '../../assets/images/bookmark.png'

const Blog = ({ blog, handleBookmarks, handleReadTime }) => {
    const { cover: cover_img, title, author, author_img, posted_date,
        reading_time, hashtags } = blog;
    return (
        <div className='p-4 space-y-4'>
            <img className='rounded-3xl' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img className='h-12 rounded-[50%]' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p><span>{reading_time}</span> min read</p>
                    <button onClick={() => handleBookmarks(title)}><img src={bookMarkBtn} alt="" /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='space-x-3'>
                {
                    hashtags.map((tag, idx) => <span key={idx}><a href="">#{tag}</a></span> )
                }
            </p>
            <button onClick={() => handleReadTime(reading_time,title)} className='text-[#6047EC] underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.number
}

export default Blog;