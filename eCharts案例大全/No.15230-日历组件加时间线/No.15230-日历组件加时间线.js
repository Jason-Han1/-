function getVirtulData(year, month) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-' + month + '-01');
    var end = +echarts.number.parseDate(year + '-' + (month + 1) + '-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    console.log(data[data.length - 1]);
    return data;
}

option = {
    baseOption: {
        title: {
            top: '5px',
            subtext: '用电电量'
        },

        tooltip: {
            position: 'top'
        },

        visualMap: [{
            min: 0,
            max: 1000,
            calculable: true,
            orient: "vertical",
            left: '0.3%',
            bottom: 50,
            textStyle: {
                color: '#fff'
            }
        }],

        calendar: [{
            orient: 'vertical',
            yearLabel: {
                margin: 40,
                show: false
            },
            monthLabel: {
                margin: 20,
                show: false
            },
            dayLabel: {
                firstDay: 1,
                nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                textStyle: {
                    color: '#fff'
                }
            },
            cellSize: 60,
        }],

        series: [{
            type: 'effectScatter',
            coordinateSystem: 'calendar'
        }],
        timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            label: {
                formatter: function(s) {
                    return (new Date(s)).getMonth() + 1 + '月';
                },
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#99CC99',
                    },
                }
            },
            controlStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#fff'
                },
                emphasis: {
                    color: '#99CC99',
                    borderColor: '#99CC99'
                } //高亮时显示颜色
            },
            lineStyle: {
                color: '#fff',
                borderColor: '#fff'
            },
            data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05']
        }
    },

    options: [{
        series: {
            symbolSize: function(val) {
                return val[1] / 40;
            },
            data: getVirtulData(2017, 01)
        },
        calendar: [{
            range: '2017-01'
        }]
    }, {
        series: {
            symbolSize: function(val) {
                return val[1] / 40;
            },
            data: getVirtulData(2017, 02)
        },
        calendar: [{
            range: '2017-02'
        }]
    }, {
        series: {
            symbolSize: function(val) {
                return val[1] / 40;
            },
            data: getVirtulData(2017, 03)
        },
        calendar: [{
            range: '2017-03'
        }]
    }, {
        series: {
            symbolSize: function(val) {
                return val[1] / 40;
            },
            data: getVirtulData(2017, 04)
        },
        calendar: [{
            range: '2017-04'
        }]
    }, {
        series: {
            symbolSize: function(val) {
                return val[1] / 40;
            },
            data: getVirtulData(2017, 05)
        },
        calendar: [{
            range: '2017-05'
        }]
    }]


};