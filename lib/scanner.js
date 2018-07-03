"use strict";
const BeaconScanner = require('node-beacon-scanner');

/* ------------------------------------------------------------------
* Constructor: BeaconScanner()
* ---------------------------------------------------------------- */
const BeaconScannerKrook = function(){
    this._beaconsKrook = [];
    for(var i = 0; i < 238; i++){
        var hex = i.toString(16);
        if(i < 16){
            hex = "0" + hex;
        }
        this._beaconsKrook.push({krookid: i, uuid: 'E2C56DB5-DFFB-48D2-B060-D04F435441' + hex.toUpperCase(), rssi: 0})
    }
    this.foundBeacons = null;
    this._scanner = new BeaconScanner();
    this._loop = true;
    this._counter = 0;
}
/* ------------------------------------------------------------------
* Method: startScan()
* - params:
*     time  : Scan time in milliseconds. Scanned beacons for given time, 
*            returns found beacons to listener and repeats.
*             This parameter is optional, default value is 5000 milliseconds.
* ---------------------------------------------------------------- */
BeaconScannerKrook.prototype.startScan = function(time) {
    this._scanner.startScan().then(() => {
        if(!time){
            time = 5000
        }
        this._scanner.onadvertisement = (ad) => {
            if(this._loop){
                var beacon = this._beaconsKrook.find(b => b.uuid === ad.iBeacon.uuid)
                if(beacon){
                    beacon.rssi = ad.rssi;
                }
            }
        };        
        //stop scan after scan.
        setTimeout(function(){ 
            // filter found beacons from array: 
            var filteredBeacons = this._beaconsKrook.filter(b => b.rssi != 0);
            // send found beacons to listener
            if(this.foundBeacons && typeof(this.foundBeacons) === 'function') {
                this.foundBeacons(filteredBeacons);
            }
            //reset beacons
            this._beaconsKrook.forEach(function (beacon) {
               beacon.rssi = 0;
             });
             if(this._loop){
             this.startScan();
             }
         }.bind(this), time)
      }).catch((error) => {
        console.error('Error check if your bluetooth is on.');
      });
}
/* ------------------------------------------------------------------
* Method: stopScan()
* ---------------------------------------------------------------- */
BeaconScannerKrook.prototype.stopScan = function(time) {
    this._loop = false;
    this._scanner.stopScan();
}
module.exports = BeaconScannerKrook;