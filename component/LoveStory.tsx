export default function ({timeLines}) {
    return <section className="story-section section-padding" id="story">
        <div className="container">
            <div className="row">
                <div className="wpo-section-title-s2">
                    <div className="section-title-simg">
                        <img src="/images/section-title2.png" alt=""/>
                    </div>
                    <h2>Our Love Story</h2>
                    <div className="section-title-img">
                        <div className="round-ball"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col col-xs-12">
                    <div className="story-timeline">
                        <div className="round-shape"></div>
                        {timeLines.map((timeLine, index) => (

                            index % 2 === 0 ?
                                <div className="row">
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text right-align-text">
                                            <h3>{timeLine.title}</h3>
                                            <span className="date">{timeLine.date}</span>
                                            <p>{timeLine.description}</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder">
                                            <img src={timeLine.image} alt className="img img-responsive"/>
                                            <div className="story-shape-img">
                                                <img src="/images/story/shape.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                <div className="row">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text left-site">
                                            <img src={timeLine.image} alt className="img img-responsive"/>
                                            <div className="story-shape-img">
                                                <img src="/images/story/shape.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                        <div className="story-text">
                                            <h3>{timeLine.title}</h3>
                                            <span className="date">{timeLine.date}</span>
                                            <p>{timeLine.description}</p>
                                        </div>
                                    </div>
                                </div>

                        ))}

                        <div className="row">
                            <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-wedding-rings"></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
}