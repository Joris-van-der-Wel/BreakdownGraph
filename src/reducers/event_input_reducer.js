export default function() {
  const inputJson = `
            [{
            "children": [
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 58463.221978999994,
                            "time": 1472596677845.45
                        },
                        "duration": 102.95205500000156,
                        "end": {
                            "counter": 58566.174033999996,
                            "time": 1472596677948.402
                        }
                    },
                    "type": "window-event:slowFrame"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 58566.174033999996,
                            "time": 1472596677948.402
                        },
                        "duration": 591.1791110000049,
                        "end": {
                            "counter": 59157.353145,
                            "time": 1472596678539.581
                        }
                    },
                    "type": "window-event:slowFrame"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {
                        "windowFrameIndex": [],
                        "location": "https://www.zalando.nl/"
                    },
                    "timing": {
                        "begin": {
                            "counter": 58163.098776,
                            "time": 1472596677545.327
                        },
                        "duration": 1263.8745479999998,
                        "end": {
                            "counter": 59426.973324,
                            "time": 1472596678809.2014
                        }
                    },
                    "type": "window-event:documentInteractive"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 59157.353145,
                            "time": 1472596678539.581
                        },
                        "duration": 341.5548689999996,
                        "end": {
                            "counter": 59498.908014,
                            "time": 1472596678881.136
                        }
                    },
                    "type": "window-event:slowFrame"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 59498.908014,
                            "time": 1472596678881.136
                        },
                        "duration": 194.88244699999632,
                        "end": {
                            "counter": 59693.790461,
                            "time": 1472596679076.0186
                        }
                    },
                    "type": "window-event:slowFrame"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {
                        "windowFrameIndex": [],
                        "location": "https://www.zalando.nl/"
                    },
                    "timing": {
                        "begin": {
                            "counter": 58163.098776,
                            "time": 1472596677545.327
                        },
                        "duration": 1922.5720940000028,
                        "end": {
                            "counter": 60085.67087,
                            "time": 1472596679467.899
                        }
                    },
                    "type": "window-event:documentComplete"
                }
            ],
            "comment": "",
            "metaData": {
                "isTopWindow": true
            },
            "timing": {
                "begin": {
                    "counter": 58163.098776,
                    "time": 1472596677545.327
                },
                "duration": 3085.322140999997,
                "end": {
                    "counter": 61248.420916999996,
                    "time": 1472596680631
                }
            },
            "type": "DOMWindow"
        },
        {
          "children": [],
          "comment": "",
          "metaData": {
              "url": "https://www.zalando.nl/",
              "error": null
          },
          "timing": {
              "begin": {
                  "counter": 57796.041699,
                  "time": 1472596677179
              },
              "duration": 369.4865839999984,
              "end": {
                  "counter": 58165.528283,
                  "time": 1472596677548
              }
          },
          "type": "command:navigate"
        }]
        `;

  const listEvents = JSON.parse(inputJson);

  return listEvents
  ;
}
