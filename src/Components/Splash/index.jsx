import './style.css'

const Splash = () => {
    return (
        <div className='splash'>
            <img src='/splash/anim.gif' className='splash-bg' alt='' />

            <div className='splash__container'>
                <p>BITS</p>
                <div className='mid'>
                    <img src='/splash/logo.png' className='w-[170px] h-[176.67px]' alt='' />
                    <p>2</p>
                    <p>K24</p>
                </div>
                <p>BYTES</p>
                <p>2K24</p>
            </div>
        </div>
    )
}

export default Splash