var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "12",
        "ok": "0",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "27",
        "ok": "-",
        "ko": "27"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles2": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles3": {
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "percentiles4": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 12,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    }
},
contents: {
"req_vets-3616110": {
        type: "REQUEST",
        name: "vets",
path: "vets",
pathFormatted: "req_vets-3616110",
stats: {
    "name": "vets",
    "numberOfRequests": {
        "total": "6",
        "ok": "0",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "27",
        "ok": "-",
        "ko": "27"
    },
    "meanResponseTime": {
        "total": "8",
        "ok": "-",
        "ko": "8"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles1": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles2": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    },
    "percentiles3": {
        "total": "22",
        "ok": "-",
        "ko": "22"
    },
    "percentiles4": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    }
}
    },"req_owners--1003854816": {
        type: "REQUEST",
        name: "owners",
path: "owners",
pathFormatted: "req_owners--1003854816",
stats: {
    "name": "owners",
    "numberOfRequests": {
        "total": "6",
        "ok": "0",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "meanResponseTime": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles1": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles2": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles3": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles4": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}