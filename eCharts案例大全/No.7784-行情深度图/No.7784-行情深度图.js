var asks = [
    [
        0.02247371,
        2789.357
    ],
    [
        0.02250001,
        2786.6045
    ],
    [
        0.02293319,
        2777.489
    ],
    [
        0.02321,
        2774.7905
    ],
    [
        0.02340185,
        2771.2329
    ],
    [
        0.02387989,
        2768.5873
    ],
    [
        0.02436749,
        2765.9936
    ],
    [
        0.0245,
        2763.4508
    ],
    [
        0.02450001,
        2657.9508
    ],
    [
        0.02451,
        2653.4508
    ],

    [
        0.02486484,
        2650.0008
    ],
    [
        0.02537213,
        2647.5078
    ],
    [
        0.02588958,
        2645.0637
    ],

    [
        0.02611,
        2642.6675
    ],
    [
        0.02641737,
        2639.2175
    ],
    [
        0.0265,
        2636.8683
    ],
    [
        0.02695571,
        2596.3683
    ],
    [
        0.027,
        2594.0652
    ],
    [
        0.02737,
        2048.5092
    ],
    [
        0.02737268,
        2034.1364
    ],
    [
        0.02751001,
        1352.6364
    ],
    [
        0.02751002,
        1334.7921
    ],
    [
        0.02771253,
        1284.915
    ],
    [
        0.0277567,
        1249.2092
    ],
    [
        0.02778522,
        567.7092
    ],
    [
        0.02780501,
        499.5592
    ],
    [
        0.02780502,
        493.5106
    ],
    [
        0.02780505,
        346.4356
    ],
    [
        0.02780506,
        209.1656
    ],
    [
        0.02780507,
        197.6656
    ]
];
var bids = [
    [
        0.02901264,
        13.3326
    ],
    [
        0.02906492,
        13.6267
    ],
    [
        0.02913668,
        25.1267
    ],
    [
        0.02917356,
        28.9267
    ],
    [
        0.02917898,
        97.0767
    ],
    [
        0.02917899,
        99.4656
    ],
    [
        0.02926295,
        780.9656
    ],
    [
        0.02926296,
        816.6714
    ],
    [
        0.02958494,
        1125.0639
    ],
    [
        0.02963622,
        1127.0715
    ],
    [
        0.02990769,
        1133.4377
    ],
    [
        0.0305,
        1151.6043
    ],
    [
        0.03127848,
        1201.6043
    ],
    [
        0.0315,
        1205.2098
    ],
    [
        0.03176393,
        1207.6077
    ],
    [
        0.0321,
        1227.5777
    ],
    [
        0.03268563,
        1230.5149
    ],
    [
        0.03588,
        1508.1539
    ]
];
option = {
    "backgroundColor": "#19232d",
    "animation": true,
    "grid": [
        {
            "top":"0%",
            "left": "0%",
            "right": "0%",
            "height": "100%",
        },
    ],
    "tooltip": {
        "trigger": 'axis',
        "formatter":function(params) {
            if(params.length > 0){
                if (params[0].seriesName == "买单"){
                    return `价格:${params[0].name}<br> ${params[0].marker}${params[0].seriesName}:${params[0].value[1].toFixed(4)}<br>`;
                } else if (params[0].seriesName == "卖单"){
                    return `价格:${params[0].name}<br> ${params[0].marker}${params[0].seriesName}:${params[0].value[1].toFixed(4)}<br>`;
                }
            }
        },
        "position": function (pos, params, el, elRect, size) {  //浮动标签定位
            var obj = {top: 10};
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            return obj;
        },
    },
    "xAxis": {
        "type": 'category',
        "boundaryGap": false,
        "axisLabel": {
            "showMinLabel": false,
            "formatter": function(val) {
                return val
            }
        },
    },
    "yAxis": [{
        "show": false,
    }],
    "series": [{
            "name": "买单",
            "data": asks,
            "type": 'line',
            "symbol": 'circle',
            "showSymbol": false,
            "symbolSize": 10,
            "lineStyle": {
                "color": '#008c00',
            },
            "itemStyle": {
                "normal": {
                    "color": '#008c00',
                }
            },
            "areaStyle": {
                "normal": {
                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        "offset": 0,
                        "color": '#008c00'
                    }, {
                        "offset": 1,
                        "color": '#19232d'
                    }])
                }
            },
        },
        {
            "name": "卖单",
            "data": bids,
            "type": 'line',
            "symbol": 'circle',
            "showSymbol": false,
            "symbolSize": 10,
            "lineStyle": {
                "color": '#ee3523',
            },
            "itemStyle": {
                "normal": {
                    "color": '#ee3523'
                }
            },
            "areaStyle": {
                "normal": {
                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        "offset": 0,
                        "color": '#ee3523'
                    }, {
                        "offset": 1,
                        "color": '#19232d'
                    }])
                }
            },
        },
    ]
};