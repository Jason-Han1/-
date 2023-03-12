var data =[
    ['2021-12-01', '廿七', ''],
    ['2021-12-02', '廿八', ''],
    ['2021-12-03', '廿九', ''],
    ['2021-12-04', '冬月初一', ''],
    ['2021-12-05', '初二', ''],
    ['2021-12-06', '初三', ''],
    ['2021-12-07', '初四', '大雪'],
    ['2021-12-08', '初五', ''],
    ['2021-12-09', '初六', ''],
    ['2021-12-10', '初七', ''],
    ['2021-12-11', '初八', ''],
    ['2021-12-12', '初九', ''],
    ['2021-12-13', '初', ''],
    ['2021-12-14', '十一', ''],
    ['2021-12-15', '十二', ''],
    ['2021-12-16', '十三', ''],
    ['2021-12-17', '十四', ''],
    ['2021-12-18', '十五', ''],
    ['2021-12-19', '十六', ''],
    ['2021-12-20', '十七', ''],
    ['2021-12-21', '十八', '冬至'],
    ['2021-12-22', '十九', ''],
    ['2021-12-23', '廿', ''],
    ['2021-12-24', '廿一', ''],
    ['2021-12-25', '廿二', ''],
    ['2021-12-26', '廿三', ''],
    ['2021-12-27', '廿四', ''],
    ['2021-12-28', '廿五', ''],
    ['2021-12-29', '廿六', ''],
    ['2021-12-30', '廿七', '冬二九'],
    ['2021-12-31', '廿八', ''],
    ['2022-01-01', '廿九', ''],
    ['2022-01-02', '卅', ''],
    ['2022-01-03', '腊月初一', ''],
    ['2022-01-04', '初二', ''],
    ['2022-01-05', '初三', '小寒'],
    ['2022-01-06', '初四', ''],
    ['2022-01-07', '初五', ''],
    ['2022-01-08', '初六', '冬三九'],
    ['2022-01-09', '初七', ''],
    ['2022-01-10', '初八', '腊八节'],
    ['2022-01-11', '初九', ''],
    ['2022-01-12', '初', ''],
    ['2022-01-13', '十一', ''],
    ['2022-01-14', '十二', ''],
    ['2022-01-15', '十三', ''],
    ['2022-01-16', '十四', ''],
    ['2022-01-17', '十五', ''],
    ['2022-01-18', '十六', ''],
    ['2022-01-19', '十七', ''],
    ['2022-01-20', '十八', '大寒'],
    ['2022-01-21', '十九', ''],
    ['2022-01-22', '廿', ''],
    ['2022-01-23', '廿一', ''],
    ['2022-01-24', '廿二', ''],
    ['2022-01-25', '廿三', '北小年'],
    ['2022-01-26', '廿四', '南小年'],
    ['2022-01-27', '廿五', ''],
    ['2022-01-28', '廿六', ''],
    ['2022-01-29', '廿七', ''],
    ['2022-01-30', '廿八', ''],
    ['2022-01-31', '廿九', '除夕'],
    ['2022-02-01', '正月初一', ''],
    ['2022-02-02', '初二', ''],
    ['2022-02-03', '初三', ''],
    ['2022-02-04', '初四', '立春'],
    ['2022-02-05', '初五', ''],
    ['2022-02-06', '初六', ''],
    ['2022-02-07', '初七', ''],
    ['2022-02-08', '初八', ''],
    ['2022-02-09', '初九', ''],
    ['2022-02-10', '初', ''],
    ['2022-02-11', '十一', ''],
    ['2022-02-12', '十二', ''],
    ['2022-02-13', '十三', ''],
    ['2022-02-14', '十四', ''],
    ['2022-02-15', '十五', '元宵'],
    ['2022-02-16', '十六', ''],
    ['2022-02-17', '十七', ''],
    ['2022-02-18', '十八', ''],
    ['2022-02-19', '十九', '雨水'],
    ['2022-02-20', '廿', ''],
    ['2022-02-21', '廿一', ''],
    ['2022-02-22', '廿二', ''],
    ['2022-02-23', '廿三', ''],
    ['2022-02-24', '廿四', ''],
    ['2022-02-25', '廿五', ''],
    ['2022-02-26', '廿六', ''],
    ['2022-02-27', '廿七', ''],
    ['2022-02-28', '廿八', '']
];
var myDate = new Date();
var day = myDate.getDate();
var month = myDate.getMonth();

var data1 = [];
var data2 = [];
var data3 = [];
var heatmapData = [];
var cdata = [];
for (var i = 0; i < data.length; i++) {
    heatmapData.push([
        data[i][0],
        200
    ]);
    data1.push([data[i][0], 0, 300]);
    cdata.push([data[i][0], 1, data[i][1], data[i][2]]);
}
data2=data2.concat(data1.slice(31, 34),data1.slice(61, 68));
// data3=data3.concat(data1.slice(28, 29),data1.slice(63, 65))

if (month == 11) {
    data1 = data1.slice(day - 1, day);
}
if (month == 0) {
    data1 = data1.slice(31 + day - 1, 31 + day);
}

if (month == 1) {
    data1 = data1.slice(62 + day - 1, 62 + day);
}
if (month == 2) {
    data1 = data1.slice(90 + day - 1, 90 + day);
}


option = {
/*
    visualMap: {
        show: false,
        min: 0,
        max: 300,
        calculable: true,
        orient: 'vertical',
        left: '10%',
        bottom: 20,
        inRange: {
            color: ['#ffffff', '#deab8a'],
            opacity: 0.2
        },
        controller: {
            inRange: {
                opacity: 0.5
            }
        }
    },
*/
title:{
    text:'数九',
    subtext:'从冬天的冬至逢壬日算起（冬至后逢第一个壬日开始叫“交九”，\n意思是寒冷的开始），每九天为一"九"，第一个九天叫做"一九"，\n第二个九天叫"二九"，依此类推，数到"九九"八十一天，"九尽桃\n花开"，天气就暖和了。一般“三九”时最冷，是一年中最冷的一\n段时间；到了“九九”时，便寒气尽消，春深日暖了。\n\n数九歌谣：一九二九不出手，三九四九冰上走，五九六九沿河看柳，\n七九河开，八九燕来，九九加一九，耕牛遍地走。',
    subtextStyle:{
        color:'#708090',
        
    },
    top:'10%',
    left:'56%',
},

    calendar: {
        top: '10%',
        left: '10%',
        orient: 'vertical',
        cellSize: [60, 35],
        yearLabel: {
            margin: 40,
            textStyle: {
                fontSize: 20
            }
        },
        dayLabel: {
            firstDay: 1,
            nameMap: 'cn'
        },
        monthLabel: {
            nameMap: 'cn',
            margin: 10,
            textStyle: {
                fontSize: 20,
                color: '#999'
            }
        },
        range: ['2021-12', '2022-02-28']
    },
    series: [{
            name: '公历',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        var d = echarts.number.parseDate(params.value[0]);
                        return d.getDate() + '\n\n';
                    },
                    textStyle: {
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#000'
                    }
                }
            },
            data: cdata
        }, {
            name: '农历',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return '\n' + params.value[2] + '\n';
                    },
                    textStyle: {
                        fontSize: 10,
                        fontWeight: 500,
                        color: '#00a'
                    }
                }
            },
            data: cdata
        }, {
            name: '节气',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return '\n\n' + (params.value[3] || '');
                    },
                    textStyle: {
                        fontSize: 10,
                        fontWeight: 500,
                        color: '#a00'
                    }
                }
            },
            data: cdata
        }, {
            name: '当天',
            type: 'effectScatter',
            zlevel: 2,
            coordinateSystem: 'calendar',
            symbolSize: 1,
            //symbol:'diamond',
            showEffectOn: 'render',
            rippleEffect: {
                period: 6,
                scale: 56.8,
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: '#e151d1',//e151d1
                    opacity: 0.5
                }
            },
            data: data1
        }, {
            name: '长假',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            symbol: 'rect',

            label: {
                normal: {
                    show: true,
                    formatter: '{a|休}',
                    rich: {
                        a: {
                            align: 'left',
                            verticalAlign: 'top',
                            lineHeight: 66,
                            width: 50,
                            height: 40,
                            fontSize: 10,
                            fontWeight: 800,
                            color: '#e00',
                            textBorderColor: '#eee'
                        }
                    }
                }
            },
            data: data2
        },
         {
            name: '周末上班',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            symbol: 'rect',

            label: {
                normal: {
                    show: true,
                    formatter: '{a|班}',
                    rich: {
                        a: {
                            align: 'left',
                            verticalAlign: 'top',
                            lineHeight: 66,
                            width: 50,
                            height: 40,
                            fontSize: 10,
                            fontWeight: 800,
                            color: '#11264f',
                            textBorderColor: '#eee'
                        }
                    }
                }
            },
            data: data3
        },
/*
        {
            name:'背景色',
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: heatmapData
        }
*/
    ]
};