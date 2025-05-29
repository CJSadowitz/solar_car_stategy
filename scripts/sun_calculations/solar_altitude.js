import { latitude, longitude } from "../../constants/location.js";

export function calculate_solar_angle(time=new Date()) {
    return SunCalc.getPosition(time, latitude, longitude);
}

export function calculate_high_noon_angle() {
    return 14;
}
