'use strict';

class LocStorageClass {
    constructor(name) {
        
        this.localHash = {};
        if (localStorage.getItem(name)) {
            this.localHash = JSON.parse(localStorage.getItem(name));
        }
        
        
        this.addValue = function (key, value) {
            this.localHash[key] = value;
            localStorage.setItem(name, JSON.stringify(this.localHash))
        };

        this.getValue = function(key) {
            return this.localHash[key];
        };

        this.deleteValue = function(key) {
            if (key in this.localHash) {
                delete this.localHash[key];
                localStorage.setItem(name, JSON.stringify(this.localHash));
                return true;
            }
            return false;
        };

        this.getKeys = function() {
            return Object.keys(this.localHash);
        };
    };
}






        
       