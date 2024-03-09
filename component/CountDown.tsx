'use client'
import {useEffect, useState} from "react";

const useCountdown = (targetDate: number) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};
const getReturnValues = (countDown: number) => {
	if (countDown < 1000) {
		return [0,0,0,0];
	}
	// calculate time left
	let days: string| number = Math.floor(countDown / (1000 * 60 * 60 * 24));
	let hours: string| number = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes: string| number = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	let seconds: string| number = Math.floor((countDown % (1000 * 60)) / 1000);

	days < 10 ? (days = `0${days}`) : days;
	hours < 10 ? (hours = `0${hours}`) : hours;
	minutes < 10 ? (minutes = `0${minutes}`) : minutes;
	seconds < 10 ? (seconds = `0${seconds}`) : seconds;
	return [days, hours, minutes, seconds];
};

const CountDown = ({weddingDate}: { weddingDate: number }) => {

	const [days, hours, minutes, seconds] = useCountdown(weddingDate);

	return <section
		className="elementor-section elementor-top-section elementor-element elementor-element-2a49366 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
		data-id="2a49366" data-element_type="section">
		<div className="elementor-container elementor-column-gap-no">
			<div
				className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9cb3c4c"
				data-id="9cb3c4c" data-element_type="column">
				<div className="elementor-widget-wrap elementor-element-populated">
					<div
						className="elementor-element elementor-element-0551ede elementor-widget elementor-widget-wpo-loveme_coundown_hero"
						data-id="0551ede" data-element_type="widget">
						<div className="elementor-widget-container">
							<div className="wpo-coundown wpo-wedding-date">
								<div className="container">
									<div className="clock-grids">
											<div className="box">
												<div>
													<div className="time">{days}</div>
													<span>Days</span>
												</div>
											</div>

											<div className="box">
												<div>
													<div className="time">{hours}</div>
													<span>Hours</span>
												</div>
											</div>
											<div className="box">
												<div>
													<div className="time">{minutes}</div>
													<span>Mins</span>
												</div>
											</div>
											<div className="box">
												<div>
													<div className="time">{seconds}</div>
													<span>Secs</span>
												</div>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
}
export default CountDown;

