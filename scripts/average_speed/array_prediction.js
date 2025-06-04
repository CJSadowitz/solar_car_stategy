import {calculate_solar_angle, integrate_solar_angle} from "../sun_calculations/solar_altitude.js";
import {array_power_coefficient, array_efficiency, array_area} from "../../constants/array.js"
import {solar_irradiance} from "../../constants/sun.js";

function array_power(time) {
    return array_power_coefficient * Math.cos(calculate_solar_angle(time));
}

function array_power_t_to_t(start, end) {
    return solar_irradiance * integrate_solar_angle(start, end) * array_area * array_efficiency;
}

window.array_power_t_to_t = array_power_t_to_t;
window.array_power = array_power;
