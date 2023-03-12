option = {
    xAxis: {
        type: 'value',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [{
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty'
    }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty'
    },{
        type: 'slider',
         show:false,
        xAxisIndex: 0,
        filterMode: 'empty'
    }, {
        type: 'slider',
        show:false,
        yAxisIndex: 0,
        filterMode: 'empty'
    }],
    series: [{
            "data": [
                [
                    1692,
                    8.7
                ],
                [
                    2513,
                    9
                ]
            ],
            "type": "line",
            "clip":false,
            "lineStyle":{
                 "type":"solid",
                 "opacity":0
             },
            "markLine": {
                "data": [
                    [{
                            "name": "",
                            "xAxis": 1692,
                            "yAxis": 8.7
                        },
                        {
                            "xAxis": 2513,
                            "yAxis": 9
                        }
                    ]
                ],
                  "lineStyle":{
                  "type":"solid",
             },
            }
        },
        {
            "data": [
                [
                    4319,
                    21.3
                ],
                [
                    5133,
                    21
                ]
            ],
            "clip":false,
            "type": "line",
            "lineStyle":{
                 "type":"solid",
                 "opacity":0
             },
            "markLine": {
                "data": [
                    [{
                            "name": "",
                            "xAxis": 4319,
                            "yAxis": 21.3
                        },
                        {
                            "xAxis": 5133,
                            "yAxis": 21
                        }
                    ]
                ],
                  "lineStyle":{
                  "type":"solid",
             },
            }
        },
        {
            "data": [
                [
                    1784,
                    11.7
                ],
                [
                    2378,
                    18
                ]
            ],
            "clip":false,
            "type": "line",
             "lineStyle":{
                "type":"solid",
                 "opacity":0
             },
            "markLine": {
                "data": [
                    [{
                            "name": "",
                            "xAxis": 1784,
                            "yAxis": 11.7
                        },
                        {
                            "xAxis": 2378,
                            "yAxis": 18
                        }
                    ]
                ],
                  "lineStyle":{
                  "type":"solid",
             },
            }
        },
        {
            "data": [
                [
                    1842,
                    11.2
                ],
                [
                    2489,
                    13.4
                ]
            ],
            "clip":false,
            "type": "line",
             "lineStyle":{
               "type":"solid",
                 "opacity":0
             },
            "markLine": {
                "data": [
                    [{
                            "name": "",
                            "xAxis": 1842,
                            "yAxis": 11.2
                        },
                        {
                            "xAxis": 2489,
                            "yAxis": 13.4
                        }
                    ]
                ],
                  "lineStyle":{
                  "type":"solid",
             },
            }
        },
        {
            "data": [
                [
                    1299,
                    6.5
                ],
                [
                    1671,
                    7.4
                ]
            ],
            "clip":false,
            "type": "line",
           "lineStyle":{
                 "type":"solid",
                 "opacity":0
             },
            "markLine": {
                "data": [
                    [{
                            "name": "",
                            "xAxis": 1299,
                            "yAxis": 6.5
                        },
                        {
                            "xAxis": 1671,
                            "yAxis": 7.4
                        }
                    ]
                ],
                  "lineStyle":{
                  "type":"solid",
             },
            
            }
        },
        {
            "data": [
                [
                    1033,
                    5.4
                ],
                [
                    1317,
                    6.1
                ]
            ],
            "type": "line",
            "clip":false,
             "lineStyle":{
                  "type":"solid",
                 "opacity":0
             },
            "markLine": {
                "data": [
                    [{
                            "name": "",
                            "xAxis": 1033,
                            "yAxis": 5.4
                        },
                        {
                            "xAxis": 1317,
                            "yAxis": 6.1
                        }
                    ]
                ],
                  "lineStyle":{
                  "type":"solid",
             },
            }
        }
    ]

};