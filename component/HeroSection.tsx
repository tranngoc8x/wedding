export default function HeroSection({data}) {
    return <section className="couple-section section-padding" id="couple">
        <div className="container">
            <div className="row align-items-center">
                <div className="col col-xs-12">
                    <div className="couple-area clearfix">
                        <div className="text-grid bride">
                            <div className="couple-img">
                                <img src="/images/couple/2.jpg" alt="" />
                            </div>
                            <h3>{data.GROOM.fullName}</h3>
                            <p>{data.GROOM.about} </p>

                        </div>
                        <div className="middle-couple-pic">
                            <img src="/images/couple/1.jpg" alt="" />
                            <div className="frame-img"><img src="/images/couple/shape.png" alt="" /></div>
                        </div>
                        <div className="text-grid groom">
                            <div className="couple-img">
                                <img src="/images/couple/3.jpg" alt="" />
                            </div>
                            <h3>{data.BRIDE.fullName}</h3>
                            <p>{data.BRIDE.about} </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}