# de-krook-beacons
The repository for the Node.js module de-krook-beacons. This module allows you to easily scan beacons in De Krook and read their RSSI value. Specialy made for [Kraak De Krook](https://kraak.dekrook.be)

## Dependencies
* [Node.js](https://nodejs.org/en/) 6 +
* [noble](https://github.com/sandeepmistry/noble)
* [node-beacon-scanner](https://github.com/futomi/node-beacon-scanner)

Details for installing noble can you find [here](https://github.com/noble/noble)

## Installation
Run following commands in your current Node.js project.
```
$ npm install noble
$ npm install node-beacon-scanner
$ npm install de-krook-beacons
```
## Example
This sample code let you easily scan beacons from De Krook.
```JavaScript
const BeaconScannerKrook = require('de-krook-beacons'); 
// make a new scanner
const scanner = new BeaconScannerKrook();

// create a listener, the scanner returns a list of found beacons with their RSSI. 
scanner.foundBeacons = (beacons) => {
    // do whatever you want with the list.
    console.log(beacons);
  };

//start the scanner. This scans for 3000 milliseconds or 3 seconds, 
//Then it returns a list to the listener, and repeats the process. 
//(Parameter is not required, default scantime is 5000 milliseconds)
scanner.startScan(3000);

//stops the scanner.
//make sure you wrap this in an interval or you get a empty list.
//scanner.stopScan();

```
Or you can find the example [here](https://github.com/lab9k/de-krook-beacons/blob/master/example.js).

## License

The MIT License (MIT)

Copyright (c) 2017 Futomi Hatano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.