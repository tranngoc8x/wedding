import HeroBanner from "@/component/HeroBanner";
import HeroSection from "@/component/HeroSection";
import LoveStory from "@/component/LoveStory";
import Albums from "@/component/Albums";
import WeddingEvent from "@/component/WeddingEvent";
import WriteLetter from "@/component/WriteLetter";
import Footer from "@/component/Footer";
import CountDown from "@/component/CountDown";


const getData = async () => {
    return {
        GROOM: {
            fullName: "Trần Ngọc Thắng",
            name: "Thắng",
            about: "À thì mình đẹp trai, học giỏi nhiều năm, nhiều kinh nghiệm, nhiều tiền, nhiều xe, nhiều nhà, nhiều đất, nhiều vàng, nhiều đồng tiền"
        },
        BRIDE: {
            fullName: "Phan Ngọc Huyền",
            name: "Huyền",
            about: "Đây cũng xinh gái, đa tài, nhiều kinh nghiệm, nhiều tiền, nhiều xe, nhiều nhà, nhiều đất, nhiều vàng, nhiều đồng tiền"
        },
        weddingDate: "We Are Getting Married Apr 28,2024",
        weddingCountdown: new Date('2024-04-28').getTime(),
        timeline: [
            {
                date: "Nov 12,2021",
                title: "First time we meet",
                description: "I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach",
                image: "images/story/1.jpg"
            },
            {
                date: "Dec 25,2021",
                title: "First Date",
                description: "I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach",
                image: "images/story/2.jpg"
            },
            {
                date: "Nov 12,2021",
                title: "Marriage Proposal",
                description: "I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach",
                image: "images/story/3.jpg"
            },
            {
                date: "Dec 25,2021",
                title: "Our Engagement",
                description: "I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach",
                image: "images/story/4.jpg"
            }
        ]
    }
}
export default async function Home() {
    const data = await getData();
    return (
        <div className="page-wrapper">

            {/*<Loading />*/}
            <HeroBanner data={data}/>
            <CountDown weddingDate={data.weddingCountdown} />
            <HeroSection data={data}/>

            <section className="wpo-video-section-s2">
                <h2 className="hidden">some</h2>
                <div className="wpo-video-item">
                    <div className="wpo-video-img">
                        <img src="/images/cta2.jpg" alt=""/>
                        <a href="https://www.youtube.com/embed/teLhLLlhfzc" className="video-btn" data-type="iframe"><i
                            className="fi flaticon-play"></i></a>
                    </div>
                </div>
            </section>
            <LoveStory timeLines={data.timeline} />
            <Albums />
            <WriteLetter />
            <WeddingEvent />
            <Footer />
        </div>
    );
}
