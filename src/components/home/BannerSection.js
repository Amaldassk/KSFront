import Banner from '../../assets/banner.jpg';

const BannerSection = () => {
    return(
        <div className='relative'>
            <div className='before:bg-black before:opacity-40 before:absolute before:top-0 before:left-0 before:w-full before:h-full'>
                <img src={Banner} alt="KS Industries"/>
            </div>
            <div className='intro-layer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center'>
                <h3 className='tracking-wider text-white m-0 text-2xl uppercase font-ksN'>K S Industries is the leader in</h3>
                <h2 className='capitalize tracking-wider text-white m-0 text-6xl font-ksA leading-relaxed'>Short Run & Prototype Metal Stampings, Sheet Metal Fabrications & Laser Cutting</h2>
            </div>
        </div>
    )
}

export default BannerSection;