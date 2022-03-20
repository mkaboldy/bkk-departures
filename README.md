# BKK Departures

(M)EAN app to implement a handheld departure board for BKK stops.

WIP

## dev config

### prerequisites

- install git <https://tortoisegit.org/download/>
- install nodejs <https://nodejs.org/en/download/>

### clone and build the server

```bash
your-folder> git clone https://github.com/mkaboldy/bkk-departures.git
your-folder/bkk-departures> npm install
```

### configure your local environment

define an enviromnet var:

```bash
your-folder/bkk-departures> $env:NODE_ENV="your-env"
```

create a config file based on your-folder/config/example.js

```bash
vi your-folder/bkk-departures/config/your-env.js
```

### run the server with the compiled client

```bash
your-folder/bkk-departures> npm install -g nodemon
your-folder/bkk-departures> nodemon index.js
```

open your browser <https://your-IP:your-port>

### build and run the Angular client only

```bash
your-folder/bkk-departures/angular10> npm install
your-folder/bkk-departures/angular10> npm install -g @angular/cli
your-folder/bkk-departures/angular10> ng serve --host your-ip --ssl
```

open your browser <https://your-IP:4200>

## more doc

<https://bkkfutar.docs.apiary.io/#>

## Live demo

<https://pure-journey-18770.herokuapp.com/> (allow the browser to detect your geoposition)

or:

<https://pure-journey-18770.herokuapp.com/departures/BKK_F02163,BKK_F02164,BKK_F02165,BKK_F02166,BKK_F02167,BKK_F02168,BKK_F02169,BKK_F02112> (busy departure board in BAH-csomópont, Budapest)

or:

<https://pure-journey-18770.herokuapp.com/location/47.48745996119156,19.024219999997428> available stops in downtown XII. disctrict of Budapest

or: 
<https://pure-journey-18770.herokuapp.com/departures/BKK_F04816,BKK_F04769> multiple departure boards in near Diósd
