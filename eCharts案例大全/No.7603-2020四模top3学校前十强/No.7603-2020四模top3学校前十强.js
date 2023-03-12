var dataBJ = [
    [1, 670, 104.5, 142.5, 141.5, 281.5],
    [2, 664, 112, 124, 139.5, 288.5],
    [3, 658.5, 108, 136.5, 134, 280, ],
    [4, 655, 104.5, 133.5, 143.5, 273.5],
    [5, 646, 122.5, 136.5, 136, 251],
    [6, 642, 108, 116.5, 142, 275.5, ],
    [7, 640.5, 117, 116, 140, 267.5, ],
    [8, 640.5, 109.5, 131.5, 135.5, 264],
    [9, 637.5, 109.5, 130.5, 142, 255.5],
   

];

var dataGZ = [
    [1, 663.5, 115, 126, 135.5, 287],
    [2, 639.5, 112.5, 120.5, 139, 267.5],
    [3, 638.5, 114, 126.5, 137.5, 260.5],
    [4, 637.5, 113, 120.5, 137.5, 266.5],
    [5, 623, 106.5, 139.5, 141, 236],
    [6, 618.5, 100, 120.5, 136, 262],
    [7, 617, 102.5, 118.5, 138.5, 257.5],
    [8, 605.5, 106, 127, 135, 237.5],
    [9, 600,	119,	113.5,	139,	228.5
],

];

var dataSH = [
     [1, 692,	119,	144.5,	140.5,	105.5
],
    [2, 667.5,	120,	127.5,	144,	107.5
],
    [3, 658,	116,	144,	129.5,	105
],
    [4, 652.5,	119,	125,	140,	100
],
    [5, 651.5,	125,	133,	143.5,	83
],
    [6, 651,	125,125,	140,	97
],
    [7, 650,	115.5,	143,	136,	99
],
    [8, 643,	117.5,	139,	132.5,	93.5
],
    [9, 642,	116,	134,	144.5,	91

],
];

var schema = [{
        name: 'date',
        index: 0,
        text: '日'
    },
    {
        name: '总分',
        index: 1,
        text: '总分'
    },
    {
        name: '语文',
        index: 2,
        text: '语文'
    },
    {
        name: '数学',
        index: 3,
        text: '数学'
    },
    {
        name: '英语',
        index: 4,
        text: '英语'
    },
    {
        name: '理综',
        index: 5,
        text: '理综'
    },

];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    backgroundColor: '#404a59',
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['北中', '国际学校', '廉州中学'],
        textStyle: {
            color: '#fff',
            fontSize: 36
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 8,
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                obj.seriesName + ' ' + value[0] + '名：' +

                '</div>' +
                schema[1].text + '：' + value[1] + '<br>' +
                schema[2].text + '：' + value[2] + '<br>' +
                schema[3].text + '：' + value[3] + '<br>' +
                schema[4].text + '：' + value[4] + '<br>' +
                schema[5].text + '：' + value[5] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 11,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '总分',
        nameLocation: 'end',
        nameGap: 40,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },

    series: [{
            name: '北中',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
        },
        {
            name: '廉州中学',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataSH
        },
        {
            name: '国际学校',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
        }
    ]
};