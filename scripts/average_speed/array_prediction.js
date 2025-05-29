import {calculate_solar_angle} from "../sun_calculations/solar_altitude.js";
import {array_power_coefficient} from "../../constants/array.js"

function array_power(time) {
    return array_power_coefficient * Math.cos(calculate_solar_angle(time).altitude);
}

window.array_power = array_power;
