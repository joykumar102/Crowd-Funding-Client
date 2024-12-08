import React from 'react';

const Banner = () => {
    return (
        <div className='mx-auto py-5  '>

            <div className='text-center px-20 py-10 space-y-5 pb-20'>
                <h2 className='text-5xl font-bold'>Crowd Funding</h2>
                <p className='text-xl font-semibold'>
                    Crowdfunding is a method of raising funds for a project, business, or cause by collecting small amounts of money from a large number of people, typically via online platforms. It’s a powerful way to leverage the collective support of a community, reach potential supporters globally, and bring innovative ideas to life.</p>
            </div>

            <div className='w-11/12 mx-auto border-2 p-5 rounded-xl'>


                <div className="carousel rounded-xl">


                    <div id="slide1" className="carousel-item relative w-full flex lg:flex-row ">
                        <img
                            src="https://i.ibb.co.com/chK2NkK/crowdfunding.jpg"
                            className="" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src=" https://i.ibb.co.com/jzcNFGh/online-crowdfunding-tutorial.jpg"
                            className="w-full " />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/F0H3zkG/crowd-funding.png"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/58N5XND/images.png"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;