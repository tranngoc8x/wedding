'use client'
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import {useState} from "react";
import Modal from "react-modal";
Modal.defaultStyles.overlay.backgroundColor = 'transparent';

export default function () {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const customStyles = {
        content: {
            left: 'unset',
            right: '0px',
            bottom: '-15px',
            top: 'unset',
            height: '120px',
            padding: 0,
            transform: 'translate(-50%, -50%)',
        },
    };

    return <ParallaxProvider scrollAxis='vertical'>
        <ParallaxBanner
            layers={[{
                image: '/images/footer-bg.jpg',
                speed: -15
            }]}
            className="aspect-[2/1] py-[15%]" style={{aspectRatio: '2 / 1', paddingTop: '15%', paddingBottom: '15%'}}/>
        <div className="position-fixed rounded-circle" onClick={() => setIsOpen(!isOpen)} style={{
            width: 32,
            height: 32,
            right: 16,
            bottom: 16
        }}>
            <img src={'/images/music-player.png'} alt={''} width={32} height={32}/>
        </div>
        <Modal
            style={customStyles}
            isOpen={isOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
        >
            <iframe width="100%"  height="100%"
                    scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1785592587%3Fsecret_token%3Ds-G26UUq6zEfo&color=%23ff5500&auto_play=true&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false"></iframe>

        </Modal>

    </ParallaxProvider>
}