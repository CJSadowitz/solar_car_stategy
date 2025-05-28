function calculate_current_solar_angle() {
    const date = new Date();
    const latitude = 28.0;
    const longitude = -81.9;

    const position = SunCalc.getPosition(date, latitude, longitude);
    console.log("Solar Altitude:", position.altitude * (180 / Math.PI));
}
