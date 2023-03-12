//获取scatter的data,用于左上角,日的显示
var scatterData = getScatterDate();

function getScatterDate() {
    //时间戳
    var startTime = +echarts.number.parseDate('2020-08-01');
    var endTime = +echarts.number.parseDate('2020-09-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = startTime; time < endTime; time += dayTime) {
        //['2020-08-01','01']
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            echarts.format.formatTime('dd', time)
        ]);
    }
    return data;
}
//series的数据初始设置scatter
let seriesData = [{ //日期
    id: 'label',
    type: 'scatter',
    coordinateSystem: 'calendar',
    symbolSize: 1,
    label: {
        normal: {
            show: true,
            formatter: function(params) {
                return params.value[1]
            },
            offset: [-30, -30],
            textStyle: {
                color: color2,
                fontSize: 14
            }
        }
    },
    data: scatterData
}, ]
//series后续设置pie
function getPieSeries() {
    scatterData.map(function(item, index) {
        //转换坐标系上的点到像素坐标值,转换的结果为像素坐标值
        var center = myChart.convertToPixel('calendar', item);
        let seriesItem = {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            radius: 30,
            data: [{
                    name: '未通行',
                    value: Math.round(Math.random() * 100),
                    itemStyle: {
                        color: '#8c8c8c'
                    },
                },
                {
                    name: '正常',
                    value: Math.round(Math.random() * 100),

                    itemStyle: {
                        color: '#9bca63'
                    },
                },
                {
                    name: '异常',
                    value: Math.round(Math.random() * 100),
                    itemStyle: {
                        color: '#c23531'
                    },
                },
                {
                    name: '稽查处异常',
                    value: Math.round(Math.random() * 100),
                    itemStyle: {
                        color: '#fd7903'
                    },
                }
            ]
        };
        seriesData.push(seriesItem)
    })
}
var color1 = '#0a0b58';
var color2 = '#edebf3';
option = {
    backgroundColor: color1,
    legend: {
        data: ['未通行', '正常', '异常', '稽查处异常'],
        bottom: 20,
        textStyle: {
            color: color2,
        }
    },
    calendar: { //日历坐标
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: [80, 80],
        splitLine: {
            show: true,
            lineStyle: {
                color: color1
            }
        },
        yearLabel: {
            show: false,
            textStyle: {
                fontSize: 30
            }
        },
        dayLabel: {
            margin: 20,
            firstDay: 1,
            color: color2,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        monthLabel: {
            show: false
        },
        range: ['2020-08'],
        itemStyle: {
            color: color1,
            borderColor: '#2b2e6c'
        }
    },
    series: seriesData
};
setTimeout(function() {
    getPieSeries()
    myChart.setOption(option)
}, 10);