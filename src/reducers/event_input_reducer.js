import resultJson from '../bax-shop.js';

export default function() {
  const inputJson = `
  {
    "timing": {
        "begin": {
            "counter": 4000.000,
            "time": 1473061730000
        },
        "duration": 10000.00000,
        "end": {
            "counter": 14000.000,
            "time": 1473061740000
        }
    },
    "transactions": [
        {
            "error": null,
            "id": "Homepage",
            "title": "01_Home",
            "timing": {
                "begin": {
                    "counter": 4000.000,
                    "time": 1473061730000
                },
                "duration": 4500.000,
                "end": {
                    "counter": 8500.000,
                    "time": 1473061734500
                }
            }
        },
        {
            "error": null,
            "id": "Awaypage",
            "title": "02_Away",
            "timing": {
                "begin": {
                    "counter": 8500.000,
                    "time": 1473061734500
                },
                "duration": 5500.000,
                "end": {
                    "counter": 13800.000,
                    "time": 1473061740000
                }
            }
        }
    ],
    "events": [
        {
            "children": [
                {
                    "children": [
                      {
                          "children": [],
                          "comment": "",
                          "metaData": {},
                          "timing": {
                              "begin": {
                                  "counter": 4000.000,
                                  "time": 1473061730000
                              },
                              "duration": 50.000,
                              "end": {
                                  "counter": 4050.00,
                                  "time": 1473061730050
                              }
                          },
                          "type": "window-event:slowFrame",
                          "id": "57cda1c6fab84ddabe000111"
                      },
                      {
                          "children": [],
                          "comment": "",
                          "metaData": {},
                          "timing": {
                              "begin": {
                                  "counter": 4050.000,
                                  "time": 1473061730050
                              },
                              "duration": 50.000,
                              "end": {
                                  "counter": 4100.000,
                                  "time": 1473061730100
                              }
                          },
                          "type": "window-event:slowFrame",
                          "id": "57cda1c6fab84ddabe000112"
                      }
                    ],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 4000.000,
                            "time": 1473061730000
                        },
                        "duration": 100.000,
                        "end": {
                            "counter": 4100.00,
                            "time": 1473061730100
                        }
                    },
                    "type": "window-event:slowFrame",
                    "id": "57cda1c6fab84ddabe000002"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 4100.000,
                            "time": 1473061730100
                        },
                        "duration": 600.000,
                        "end": {
                            "counter": 4700.000,
                            "time": 1473061730700
                        }
                    },
                    "type": "window-event:slowFrame",
                    "id": "57cda1c6fab84ddabe000003"
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
                            "counter": 4600.000,
                            "time": 1473061730600
                        },
                        "duration": 1500.000,
                        "end": {
                            "counter": 6100.000,
                            "time": 1473061732100
                        }
                    },
                    "type": "window-event:documentInteractive",
                    "id": "57cda1c6fab84ddabe000004"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 6100.000,
                            "time": 1473061732100
                        },
                        "duration": 3000,
                        "end": {
                            "counter": 9100.000,
                            "time": 1473061735100
                        }
                    },
                    "type": "window-event:slowFrame",
                    "id": "57cda1c6fab84ddabe000005"
                },
                {
                    "children": [],
                    "comment": "",
                    "metaData": {},
                    "timing": {
                        "begin": {
                            "counter": 8100.000,
                            "time": 1473061734100
                        },
                        "duration": 1000,
                        "end": {
                            "counter": 9100,
                            "time": 1473061735100
                        }
                    },
                    "type": "window-event:slowFrame",
                    "id": "57cda1c6fab84ddabe000006"
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
                            "counter": 9000,
                            "time": 1473061735000
                        },
                        "duration": 1000,
                        "end": {
                            "counter": 10000.000,
                            "time": 1473061736000
                        }
                    },
                    "type": "window-event:documentComplete",
                    "id": "57cda1c6fab84ddabe000007"
                }
            ],
            "comment": "This is the DOM-window event",
            "metaData": {
                "isTopWindow": true
            },
            "timing": {
                "begin": {
                    "counter": 4000.000,
                    "time": 1473061730000
                },
                "duration": 6000.000,
                "end": {
                    "counter": 10000.000,
                    "time": 1473061736000
                }
            },
            "type": "DOMWindow",
            "id": "57cda1c6fab84ddabe000008"
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
                  "counter": 9000.000,
                  "time": 1473061735000
              },
              "duration": 5000.00,
              "end": {
                  "counter": 14000.000,
                  "time": 1473061740000
              }
          },
          "type": "command:navigate",
          "id": "57cda1c6fab84ddabe000009"
        }
      ]
    }`;

  const listEvents = JSON.parse(inputJson);

  // return listEvents
  return resultJson
  ;
}
