"use strict";

import CricketScore from "./observables/cricket_score";
import WeatherStation from "./observables/weather_station";
import MobileDisplay from "./observers/mobile_display";
import TVDisplay from "./observers/tv_display";

let ws = new WeatherStation()
let cs = new CricketScore()
let tvDisplay = new TVDisplay()
let mobileDisplay = new MobileDisplay()

ws.addObserver(tvDisplay)
ws.addObserver(mobileDisplay)
cs.addObserver(mobileDisplay)

ws.temperature = 10
ws.temperature = 20
cs.score = 50

