export default function HeroBanner({data}) {
    return  <section className="wpo-hero-slider wpo-hero-slider-s2">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slide-inner slide-bg-image" data-background="images/slider/slide-4.jpg">

                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>{data.GROOM.name} & {data.BRIDE.name}</h2>
                                </div>
                                <div data-swiper-parallax="400" className="mt-3 slide-text">
                                    <p>{data.weddingDate}</p>
                                </div>
                                <div className="border-1"></div>
                                <div className="border-2"></div>
                                <div className="border-3"></div>
                                <div className="border-4"></div>
                                <div className="s-img-1"><img src="/images/slider/shape3.png" alt="" /></div>
                                <div className="s-img-2"><img src="/images/slider/shape4.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="slide-inner slide-bg-image" data-background="images/slider/slide-5.jpg">

                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>{data.GROOM.name} & {data.BRIDE.name}</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                     <p>{data.weddingDate}</p>
                                </div>
                                <div className="border-1"></div>
                                <div className="border-2"></div>
                                <div className="border-3"></div>
                                <div className="border-4"></div>
                                <div className="s-img-1"><img src="/images/slider/shape3.png" alt="" /></div>
                                <div className="s-img-2"><img src="/images/slider/shape4.png" alt="" /></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="swiper-slide">
                    <div className="slide-inner slide-bg-image" data-background="images/slider/slide-6.jpg">

                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>{data.GROOM.name} & {data.BRIDE.name}</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                     <p>{data.weddingDate}</p>
                                </div>
                                <div className="border-1"></div>
                                <div className="border-2"></div>
                                <div className="border-3"></div>
                                <div className="border-4"></div>
                                <div className="s-img-1"><img src="/images/slider/shape3.png" alt="" /></div>
                                <div className="s-img-2"><img src="/images/slider/shape4.png" alt="" /></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    </section>
}