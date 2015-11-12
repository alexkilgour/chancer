'use strict';

var chancer = module.exports = {
    random: random,
    randomFloat: randomFloat,
    randomInt: randomInt,
    coinToss: coinToss,
    fromArray: fromArray,
    shuffleArray: shuffleArray,
    randomArray: randomArray,
    unsigned8: unsigned8,
    signed8: signed8,
    unsigned16: unsigned16,
    signed16: signed16,
    unsigned32: unsigned32,
    signed32: signed32,
    cryptoSupports: cryptoSupports
};

// Returns a floating-point number between 0 and 1
function random () {
    return Math.random();
}

// Returns a random number between <min> (inclusive) and <max> (exclusive)
function randomFloat (min, max) {
    if (!isNaN(min) && !isNaN(max)) {
        return Math.random() * (max - min) + min;
    }
    else {
        return undefined;
    }
}

// Returns a random integer between <min> (inclusive) and <max> (inclusive)
function randomInt (min, max) {
    if (!isNaN(min) && !isNaN(max)) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
        return undefined;
    }
}

// Returns a 0 or 1 to represent a coin toss
// Optionally associate any other values for the coin sides (true/false, yes/no, heads/tails, etc)
function coinToss (heads, tails) {
    var first = (typeof heads !== 'undefined') ? heads : 0;
    var second = (typeof tails !== 'undefined') ? tails : 1;
    return (Math.floor(Math.random() * 2) === 0) ? first : second;
}

// Returns a random item from an array
function fromArray (obj) {
    if (typeof obj !== 'undefined' && obj && obj.constructor === Array) {
        return obj[Math.floor(Math.random() * obj.length)];
    }
    else {
        return undefined;
    }
}

// Returns an array shuffled into a random order
function shuffleArray (obj) {
    if (typeof obj !== 'undefined' && obj && obj.constructor === Array) {
        return shuffle(obj);
    }
    else {
        return undefined;
    }
}
function shuffle (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var j = chancer.randomInt(0, i);
        if (j !== i) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    return arr;
}

// Returns an array of integers between <min> (inclusive) and <max> (inclusive)
// If no <total> specified return all possible values between <min> and <max>
function randomArray (min, max, total) {
    if (!isNaN(min) && !isNaN(max)) {
        var num = (total) ? total : (max - min) + 1;
        var arr;
        if (!isNaN(num) && (((max - min) + 1) >= num)) {
            arr = generateArray(min, max, num);
        }
        return arr;
    }
    else {
        return undefined;
    }
}
function generateArray (min, max, total) {
    var arr = [];
    while (arr.length < total) {
        var randomNumber = chancer.randomInt(min, max);
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === randomNumber) {
                found = true;
                break;
            }
        }
        if (!found) {
            arr[arr.length] = randomNumber;
        }
    }
    return arr;
}

/* Cryptographic Randomness */

// Are the cryptographic methods supported
function cryptoSupports (method) {
    var cryptoObj = window.crypto || window.msCrypto || null;
    if (cryptoObj && 'getRandomValues' in cryptoObj && method in window) {
        return cryptoObj;
    }
    return undefined;
}

// Returns and array containing unsigned 8-bit integers
function unsigned8 (total) {
    var cryptoObj = chancer.cryptoSupports('Uint8Array');
    if (cryptoObj) {
        var num = (total) ? total : 1;
        var cryptoStore = new Uint8Array(num);
        return cryptoObj.getRandomValues(cryptoStore);
    }
    else {
        return undefined;
    }
}

// Returns and array containing signed 8-bit integers
function signed8 (total) {
    var cryptoObj = chancer.cryptoSupports('Int8Array');
    if (cryptoObj) {
        var num = (total) ? total : 1;
        var cryptoStore = new Int8Array(num);
        return cryptoObj.getRandomValues(cryptoStore);
    }
    else {
        return undefined;
    }
}

// Returns and array containing unsigned 16-bit integers
function unsigned16 (total) {
    var cryptoObj = chancer.cryptoSupports('Uint16Array');
    if (cryptoObj) {
        var num = (total) ? total : 1;
        var cryptoStore = new Uint16Array(num);
        return cryptoObj.getRandomValues(cryptoStore);
    }
    else {
        return undefined;
    }
}

// Returns and array containing signed 16-bit integers
function signed16 (total) {
    var cryptoObj = chancer.cryptoSupports('Int16Array');
    if (cryptoObj) {
        var num = (total) ? total : 1;
        var cryptoStore = new Int16Array(num);
        return cryptoObj.getRandomValues(cryptoStore);
    }
    else {
        return undefined;
    }
}

// Returns and array containing unsigned 32-bit integers
function unsigned32 (total) {
    var cryptoObj = chancer.cryptoSupports('Uint32Array');
    if (cryptoObj) {
        var num = (total) ? total : 1;
        var cryptoStore = new Uint32Array(num);
        return cryptoObj.getRandomValues(cryptoStore);
    }
    else {
        return undefined;
    }
}

// Returns and array containing signed 32-bit integers
function signed32 (total) {
    var cryptoObj = chancer.cryptoSupports('Int32Array');
    if (cryptoObj) {
        var num = (total) ? total : 1;
        var cryptoStore = new Int32Array(num);
        return cryptoObj.getRandomValues(cryptoStore);
    }
    else {
        return undefined;
    }
}
