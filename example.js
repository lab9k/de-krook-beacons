const BeaconScannerKrook = require('./scanner'); 

const scanner = new BeaconScannerKrook();

scanner.foundBeacons = (beacons) => {
    console.log(beacons);
  };
  
scanner.startScan(5000);
//scanner.stopScan();
