/* jslint -W033, -W097, -W117, -W083, -W104 */
'use strict';

const bs = require('nodestalker'),
    client = bs.Client('pushqueue:11300');

let ttr = (60 * 30);

let jobs = [
    {
        "job": {
            "link": "https://m.nps.skybet.com",
            "headers": {
                  "X-Betweb":"true", 
                  "X-ID":"npsbetweb10"
            },
            "targets": "",
            "worker": "images",
            "max_links": 250
        },
        "priority": 1,
        "ttr": ttr
    },
    {   
        "job": {
            "link": "https://m.nps.skybet.com",
            "headers": {
                  "X-Betweb":"true", 
                  "X-ID":"npsbetweb10"
            },
            "targets": "", 
            "worker": "images",
            "max_links": 250 
        },
        "priority": 1,
        "ttr": ttr 
    },
    {   
        "job": {
            "link": "https://m.nps.skybet.com",
            "headers": {
                  "X-Betweb":"true", 
                  "X-ID":"npsbetweb10"
            },
            "targets": "", 
            "worker": "images",
            "max_links": 250 
        },
        "priority": 1,
        "ttr": ttr 
    },
    {   
        "job": {
            "link": "https://m.nps.skybet.com",
            "headers": {
                  "X-Betweb":"true", 
                  "X-ID":"npsbetweb10"
            },
            "targets": "", 
            "worker": "images",
            "max_links": 250 
        },
        "priority": 1,
        "ttr": ttr 
    },
    {   
        "job": {
            "link": "https://m.nps.skybet.com",
            "headers": {
                  "X-Betweb":"true", 
                  "X-ID":"npsbetweb10"
            },
            "targets": "", 
            "worker": "images",
            "max_links": 250 
        },
        "priority": 1,
        "ttr": ttr 
    },
    {   
        "job": {
            "link": "https://m.nps.skybet.com",
            "headers": {
                  "X-Betweb":"true", 
                  "X-ID":"npsbetweb10"
            },
            "targets": "", 
            "worker": "images",
            "max_links": 250 
        },
        "priority": 1,
        "ttr": ttr 
    }
];

client.use('links').onSuccess(function (data) {
    let i = 0;
    for (i in jobs) {
        client.put(JSON.stringify(jobs[i].job), jobs[i].priority).onSuccess(function (data) {
            console.log(data);
        });
    }
});

setTimeout(function () {
    client.disconnect();
}, 2000);


