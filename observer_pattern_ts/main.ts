"use strict";

import WeatherStation from "./observables/weather_station";
import MobileDisplay from "./observers/mobile_display";
import TVDisplay from "./observers/tv_display";

let ws = new WeatherStation()

let tvDisplay = new TVDisplay()
let mobileDisplay = new MobileDisplay()

ws.addObserver(tvDisplay)
ws.addObserver(mobileDisplay)
ws.temperature = 10