import profile from '../../assets/images/profile.png'

const Header = () => {

    return (
        <div className='flex justify-between border-b p-4 items-center'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe abal</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;