// Importing the async.js package
const async = require('async');

// Simulated API functions
function fetchDataFromAPI1(callback) {
    setTimeout(() => {
        const data = 'Data from API 1';
        callback(null, data);
    }, 2000);
}

function fetchDataFromAPI2(callback) {
    setTimeout(() => {
        const data = 'Data from API 2';
        callback(null, data);
    }, 3000);
}

// Using async.parallel to fetch data from multiple APIs
async.parallel({
        api1Data: fetchDataFromAPI1,
        api2Data: fetchDataFromAPI2,
    },
    (error, results) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('API 1 data:', results.api1Data);
            console.log('API 2 data:', results.api2Data);
        }
    }
);