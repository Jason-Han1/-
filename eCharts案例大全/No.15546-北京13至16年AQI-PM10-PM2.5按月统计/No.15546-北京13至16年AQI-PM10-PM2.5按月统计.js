        var dataBJ = [
    [201312, 72, 99, 82],
    [201401, 92, 118, 104],
    [201402, 130, 158, 115],
    [201403, 83, 115, 121],
    [201404, 55, 90, 89],
    [201405, 54, 85, 82],
    [201406, 48, 74, 27],
    [201407, 75, 105, 33],
    [201408, 56, 83, 31],
    [201409, 59, 84, 35],
    [201410, 103, 132, 68],
    [201411, 86, 116, 102],
    [201412, 58, 87, 81],
    [201501, 89, 118, 70],
    [201502, 83, 116, 65],
    [201503, 78, 112, 122],
    [201504, 63, 93, 83],
    [201505, 50, 80, 73],
    [201506, 52, 81, 45],
    [201507, 52, 77, 44],
    [201508, 40, 64, 47],
    [201509, 41, 63, 43],
    [201510, 60, 87, 54],
    [201511, 100, 121, 39],
    [201512, 134, 167, 68],
    [201601, 60, 88, 50],
    [201602, 46, 68, 45],
    [201603, 84, 116, 93],
    [201604, 58, 90, 87],
    [201605, 49, 80, 66],
    [201606, 53, 80, 42],
    [201607, 59, 84, 33],
    [201608, 40, 62, 37],
    [201609, 47, 69, 40],
    [201610, 70, 102, 49],
    [201611, 90, 121, 94],
    [201612, 105, 133, 66]
];


var schema = [
    {name: 'date', index: 0, text: '月'},
    {name: 'PM25', index: 1, text: 'PM2.5'},
    {name: 'AQIindex', index: 2, text: 'AQI指数'},
    {name: 'PM10', index: 3, text: 'PM10'},

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
        '#dd4444'
    ],
    legend: {
        y: 'top',
        data: ['北京'],
        textStyle: {
            color: '#fff',
            fontSize: 16
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
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + obj.name + '月：'
                + '</div>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>';
        }
    },
    xAxis: {
        type: 'category',
        name: '月份',
        data: ['201312', '201401', '201402', '201403', '201404', '201405', '201406', '201407', '201408', '201409', '201410', '201411', '201412', '201501', '201502', '201503','201504', '201505', '201506', '201507', '201508', '201509', '201510', '201511', '201512', '201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612'],
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        //max: 31,
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
        name: 'AQI指数',
        nameLocation: 'end',
        nameGap: 20,
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
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 1,
            min: 0,
            max: 140,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        },
        {
            left: 'right',
            bottom: '5%',
            dimension: 3,
            min: 0,
            max: 130,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：PM10'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                colorLightness: [1, 0.5]
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ.map(function (item, index) {
                item = item.slice();
                item[0] = index;
                return item;
            })
        },

    ]
};