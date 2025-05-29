import {calculate_solar_angle, integrate_solar_angle} from "../sun_calculations/solar_altitude.js";
import {array_power_coefficient} from "../../constants/array.js"

function array_power(time) {
    console.log(integrate_solar_angle(new Date("2025-05-29T10:00:00"), new Date("2025-05-29T18:00:00")))
    return array_power_coefficient * Math.cos(calculate_solar_angle(time));
}

window.array_power = array_power;
