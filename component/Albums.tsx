'use client';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
export default function () {
    const [index, setIndex] = useState(-1);
    const slides = [
        {
            src:'/images/portfolio/7.jpg',
        },
        {
            src:'/images/portfolio/8.jpg',
        }
        ,{
            src:'/images/portfolio/9.jpg',
        },
        {
            src:'/images/portfolio/10.jpg',
        },
        {
            src:'/images/portfolio/11.jpg',
        },
        {
            src:'/images/portfolio/12.jpg',
        }
      ];

    return <section className="wpo-portfolio-section-s2 section-padding" id="gallery">
        <div className="container-fluid">
            <div className="row">
                <div className="wpo-section-title-s2">
                    <div className="section-title-simg">
                        <img src="/images/section-title2.png" alt=""/>
                    </div>
                    <h2>Sweet Moments</h2>
                    <div className="section-title-img">
                        <div className="round-ball"></div>
                    </div>
                </div>
            </div>
            <div className="sortable-gallery">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-grids gallery-container clearfix">
                            <div className="grid">
                                <div className="img-holder" onClick={() => setIndex(1)}>
                                    <a href="/images/portfolio/7.jpg" className="fancybox"
                                       data-fancybox-group="gall-1">
                                        <img src="/images/portfolio/7.jpg" alt='' className="img img-responsive"/>
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <a href="images/portfolio/8.jpg" className="fancybox"
                                       data-fancybox-group="gall-1">
                                        <img src="images/portfolio/8.jpg" alt='' className="img img-responsive"/>
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <a href="images/portfolio/9.jpg" className="fancybox"
                                       data-fancybox-group="gall-1">
                                        <img src="images/portfolio/9.jpg" alt='' className="img img-responsive"/>
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <a href="images/portfolio/10.jpg" className="fancybox"
                                       data-fancybox-group="gall-1">
                                        <img src="images/portfolio/10.jpg" alt='' className="img img-responsive"/>
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <a href="images/portfolio/11.jpg" className="fancybox"
                                       data-fancybox-group="gall-1">
                                        <img src="images/portfolio/11.jpg" alt='' className="img img-responsive"/>
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <a href="images/portfolio/12.jpg" className="fancybox"
                                       data-fancybox-group="gall-1">
                                        <img src="images/portfolio/12.jpg" alt='' className="img img-responsive"/>
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <Lightbox
                              styles={{ root: { "--yarl__color_backdrop": "rgba(2, 2, 2, .8)" } }}
                              index={index}
                              slides={slides}
                              open={index >= 0}
                              close={() => setIndex(-1)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>

}