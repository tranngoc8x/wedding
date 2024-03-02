'use client'
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';

export default function () {
    return <ParallaxProvider scrollAxis='vertical'>
        <ParallaxBanner
            layers={[{
                image: '/images/footer-bg.jpg',
                speed: -15
            }]}
            className="aspect-[2/1] py-[15%]"  style={{ aspectRatio: '2 / 1', paddingTop: '15%', paddingBottom: '15%' }}/>
    </ParallaxProvider>
}