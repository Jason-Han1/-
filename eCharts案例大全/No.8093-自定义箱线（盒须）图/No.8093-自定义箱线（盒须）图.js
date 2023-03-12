var categoriesData = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10-11",
    "12-13",
    "14-15",
    "16-17",
    "18-19",
    "20-21",
    "22-23",
    "24-25",
    "26-27",
    "28-29",
    "30-31",
    "32-33",
    "34-35",
    "36-37",
    "38-39",
    "40-41",
    "42-43",
    "44-45",
    "46-47",
    "48-49",
    "50-51",
    "52-53",
    "54-55",
    "56-57",
    "58-59",
    "60-61",
    "62-63",
    "64-65",
    "66-67",
    "68-69",
    "70-71",
    "72-73",
    "74-75",
    "76-77",
    "78-79",
    "80-81",
    "82-83",
    "84-85",
    "86-87",
    "88-89",
    "90-91",
    "92-93",
    "94-95",
    "96-97",
    "98-99",
    "100"
];

var linData = [
    35.15688695,
    35.05785223,
    35.41450258,
    35.31449621,
    35.29405077,
    35.29098498,
    35.25484405,
    35.32074449,
    35.33945524,
    35.34495752,
    35.33298174,
    35.34450173,
    35.25584673,
    35.25009758,
    35.25760263,
    35.25029594,
    35.25357455,
    35.25292988,
    35.24190923,
    35.24855361,
    35.25751518,
    35.24395406,
    35.21913497,
    35.23429356,
    35.22799208,
    35.21981542,
    35.17491939,
    35.19809343,
    35.16045844,
    35.17314991,
    35.12567705,
    35.08522805,
    35.13668647,
    35.13086139,
    35.10383238,
    35.09184483,
    35.0377321,
    35.05584316,
    35.03669199,
    35.0111326,
    34.99126164,
    34.95815795,
    34.92552087,
    34.90279856,
    34.89361009,
    34.86985957,
    34.80858431,
    34.79667853,
    34.76920976,
    34.73779041,
    34.70014761,
    34.66465765,
    34.57309265,
    34.59683816,
    34.4193949

];

var plotData = [
    ["1",30, 35, 37, 37, 38],
    ["2",30, 35, 37, 37, 37],
    ["3",31, 36, 37, 37, 38],
    ["4",31, 36, 37, 37, 38],
    ["5",37, 37, 37, 37, 37],
    ["6",31, 36, 37, 37, 38],
    ["7",31, 36, 37, 37, 38],
    ["8",31, 36, 37, 37, 38],
    ["9",31, 36, 37, 37, 38],
    ["10-11",31, 36, 37, 37, 38],
    ["12-13",31, 36, 37, 37, 38],
    ["14-15",31, 36, 37, 37, 38],
    ["16-17",31, 36, 37, 37, 38],
    ["18-19",31, 36, 37, 37, 38],
    ["20-21",31, 36, 37, 37, 38],
    ["22-23",31, 36, 37, 37, 38],
    ["24-25",31, 36, 37, 37, 38],
    ["26-27",31, 36, 37, 37, 38],
    ["28-29",31, 36, 37, 37, 38],
    ["30-31",31, 36, 37, 37, 38],
    ["32-33",31, 36, 37, 37, 38],
    ["34-35",31, 36, 37, 37, 38],
    ["36-37",31, 36, 37, 37, 38],
    ["38-39",31, 36, 37, 37, 38],
    ["40-41",31, 36, 37, 37, 38],
    ["42-43",31, 36, 37, 37, 38],
    ["44-45",30, 36, 37, 37, 38],
    ["46-47",30, 36, 37, 37, 38],
    ["48-49",30, 36, 37, 37, 38],
    ["50-51",30, 36, 37, 37, 38],
    ["52-53",30, 36, 37, 37, 38],
    ["54-55",30, 35, 37, 37, 38],
    ["56-57",30, 35, 37, 37, 38],
    ["58-59",30, 35, 37, 37, 38],
    ["60-61",30, 35, 37, 37, 38],
    ["62-63",30, 35, 37, 37, 38],
    ["64-65",30, 35, 37, 37, 38],
    ["66-67",30, 35, 37, 37, 38],
    ["68-69",30, 35, 37, 37, 38],
    ["70-71",30, 35, 37, 37, 38],
    ["72-73",30, 35, 37, 37, 38],
    ["74-75",30, 35, 37, 37, 38],
    ["76-77",29.5, 35, 37, 37, 38],
    ["78-79",29, 35, 37, 37, 38],
    ["80-81",29, 35, 37, 37, 38],
    ["82-83",29, 35, 37, 37, 38],
    ["84-85",29, 35, 37, 37, 38],
    ["86-87",29, 35, 37, 37, 38],
    ["88-89",29, 35, 37, 37, 38],
    ["90-91",29, 35, 37, 37, 38],
    ["92-93",29, 35, 37, 37, 38],
    ["94-95",29, 35, 37, 37, 38],
    ["96-97",28, 35, 37, 37, 38],
    ["98-99",28, 35, 37, 37, 38],
    ["100",28, 34, 35, 37, 38]
];
option = {
    title: [{
        text: 'Per base sequence quality',
        left: 'center',
    }],
    grid: {
        top: 25
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(param) {
            if (!param || !param[0]) return "";
            var result = ["Base:" + param[0].axisValue];
            $.each(param, function(i, p) {
                if (p.seriesType == "line") {
                    result.push(getLineTips(p));
                } else {
                    result.push(getBoxplotTips(p));
                }
            });
            return result.join("<br/>");
        }
    },
    xAxis: {
        type: 'category',
        data: categoriesData,
        boundaryGap: [1, 1],
        nameGap: 30,
        splitArea: {
            show: true,
            interval: 0
        },
        axisTick: {
            show: false
        }

    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 38,
        interval: 2,
        splitLine: {
            show: false
        }
    },

    series: [{
            name: 'Mean',
            type: 'line',
            data: linData,
            animation: false,
            showSymbol: false,
            lineStyle: {
                width: 1,
                color: "blue"
            },
            z: 9,
            markArea: {
                data: [
                    [{
                        yAxis: 0,
                        itemStyle: {
                            color: 'red',
                            opacity: 0.3
                        }
                    }, {
                        yAxis: 20
                    }],
                    [{
                        yAxis: 20,
                        itemStyle: {
                            color: 'yellow',
                            opacity: 0.3
                        }
                    }, {
                        yAxis: 28
                    }],
                    [{
                        yAxis: 28,
                        itemStyle: {
                            color: '#33ff00',
                            opacity: 0.3
                        }
                    }, {
                        yAxis: 100
                    }]
                ]
            }
        },
        {
            name: 'box',
            type: 'custom',
            showSymbol: false,
            encode: {
                x: 0,
                y: [1, 2, 3, 4, 5],
                tooltip: [1, 2, 3, 4, 5]
            },
            itemStyle: {
                borderColor: "#666",
                color: "yellow"
            },
            renderItem: renderCustomBoxPlotItem,
            animation: false,
            data: plotData
        }

    ]
};
var customBoxPlotMedianColor = "red";

function renderCustomBoxPlotItem(params, api) {
    //[min,  Q1,  median (or Q2),  Q3,  max]

    var xValue = api.value(0);
    var minPoint = api.coord([xValue, api.value(1)]);
    var q1 = api.coord([xValue, api.value(2)]);
    var median = api.coord([xValue, api.value(3)]);
    var q3 = api.coord([xValue, api.value(4)]);
    var maxPoint = api.coord([xValue, api.value(5)]);
    var width = api.size([1, 0])[0] * 0.8;
    var halfWidth = width * 0.5;
    var itemStyle = api.style();
    var medianStyle = api.style({
        stroke: customBoxPlotMedianColor,
        fill: null
    });

    var x1 = maxPoint[0] - halfWidth;
    var x2 = maxPoint[0] + halfWidth;


    return {
        type: 'group',
        children: [{
                type: 'line',
                shape: {
                    x1: x1,
                    y1: maxPoint[1],
                    x2: x2,
                    y2: maxPoint[1]
                },
                style: itemStyle
            }, {
                type: 'line', //上面连接线
                shape: {
                    x1: maxPoint[0],
                    y1: maxPoint[1],
                    x2: q3[0],
                    y2: q3[1]
                },
                style: itemStyle
            },
            {
                type: 'rect', //box
                shape: {
                    x: q3[0] - halfWidth,
                    y: q3[1],
                    width: width,
                    height: q1[1] - q3[1]
                },
                style: itemStyle
            },
            {
                type: 'line', //下面连接线
                shape: {
                    x1: q1[0],
                    y1: q1[1],
                    x2: minPoint[0],
                    y2: minPoint[1]
                },
                style: itemStyle
            }, {
                type: 'line', //底部线
                shape: {
                    x1: x1,
                    y1: minPoint[1],
                    x2: x2,
                    y2: minPoint[1]
                },
                style: itemStyle
            },
            {
                type: 'line', //中间线median
                shape: {
                    x1: x1,
                    y1: median[1],
                    x2: x2,
                    y2: median[1]
                },
                style: medianStyle
            }
        ]
    };
}

function getBoxplotTips(param) {
    return [
        '90th: ' + param.data[5],
        'Upper: ' + param.data[4],
        'Median: ' + param.data[3],
        'Lower: ' + param.data[2],
        '10th: ' + param.data[1]
    ].join('<br/>');
}

function getLineTips(param) {
    return [
        'Mean: ' + param.data
    ].join('<br/>');
}