const BeaconScannerKrook = require('./lib/scanner'); 

// make a new scanner
const scanner = new BeaconScannerKrook();

// create a listener, the scanner returns a list of found beacons with their RSSI. 
scanner.foundBeacons = (beacons) => {
    // do whatever you want with the list.
    console.log(beacons);
  };

//start the scanner. This scans for 3000 milliseconds or 3 seconds, 
//Then it returns a list to the listener, and repeats the process. 
//(Parameter is not required, default scantime is 5000s
scanner.startScan(3000);

//stops the scanner.
//scanner.stopScan();
