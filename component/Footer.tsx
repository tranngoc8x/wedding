'use client'
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import {useEffect} from "react";

// Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default function () {
	useEffect(() => {
		const audio = new Audio('/aloha.mp3');
		audio.load();
		audio.volume = 0.3;
		audio.play();
		audio.addEventListener('ended', () => {
			audio.play();
		});
	}, []);

	return <ParallaxProvider scrollAxis='vertical'>
		<ParallaxBanner
			layers={[{
				image: '/images/footer-bg.jpg',
				speed: -15
			}]}
			className="aspect-[2/1] py-[15%]" style={{aspectRatio: '2 / 1', paddingTop: '15%', paddingBottom: '15%'}}/>

	</ParallaxProvider>
}