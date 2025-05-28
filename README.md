# Front End Solar Car Stategy
The following repo is a tool to be used in FPU's solar car racing competition <br>
## Installation
Simply install the repo with <br>
```sh
git clone https://github.com/CJSadowitz/solar_car_stategy.git
```
Open `index.js` in any web browser
## Running
Run on a local python server:
```sh
python -m http.server 8000
```
Navigate to a web browser and open `http://localhost:8000` <br>
There are specific api_tokens that the team has that is required to run and access this data <br>
This is saved in a txt file with the format `influx_db={token}` and `google_apps={token}` <br>
The website handles the calculations, database pulling and storing of information automatically <br>
Their is multi user support with saved config for desired calculations <br>
