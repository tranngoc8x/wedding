import React, {useEffect, useState} from "react";
import Snowfall from "react-snowfall";

export default function SnowFall() {

	return <Snowfall
		snowflakeCount={350}
		color={'#f7879a'}
		rotationSpeed={[-1,1]}
		wind={[-10,10]}
	/>;
}