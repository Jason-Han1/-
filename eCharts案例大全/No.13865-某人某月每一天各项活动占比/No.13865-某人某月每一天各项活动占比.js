var cellSize = [80, 80];
var pieRadius = 30;
var mydata = [
    [10, 2, 0, 12],
    [0, 1, 0, 23],
    [0, 2, 0, 22],
    [0, 2, 1.5, 20.5],
    [0, 3, 1.5, 19.5],
    [10, 1, 1.5, 11.5],
    [0, 2, 1.5, 20.5],
    [10, 2, 0, 12],
    [0, 1, 0, 23],
    [0, 4, 0, 20],
    [0, 2, 1.5, 20.5],
    [0, 1, 1.5, 21.5],
    [9, 2, 1.5, 11.5],
    [0, 5, 1.5, 17.5],
    [10, 1, 0, 13],
    [0, 5, 0, 19],
    [0, 1, 0, 23],
    [0, 1, 1.5, 21.5],
    [0, 5, 1.5, 17.5],
    [9, 2, 1.5, 11.5],
    [0, 1, 1.5, 21.5],
    [9, 1, 0, 14],
    [0, 1, 0, 23],
    [0, 3, 0, 21],
    [0, 1, 1.5, 21.5],
    [0, 4, 1.5, 18.5],
    [10, 2, 1.5, 10.5],
    [0, 4, 1.5, 18.5],
    [10, 1, 0, 11],
    [0, 4, 0, 20],
    [0, 12, 0, 12]
]

function getVirtulData() {
    var date = +echarts.number.parseDate('2017-12-01');
    var end = +echarts.number.parseDate('2018-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

function getPieSeries(scatterData, chart) {
    return echarts.util.map(scatterData, function(item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            radius: pieRadius,
            data: [{
                    name: '实习',
                    value: mydata[index][0]
                },
                {
                    name: '其余外出',
                    value: mydata[index][1]
                },
                {
                    name: '上课',
                    value: mydata[index][2]
                },
                {
                    name: '寝室',
                    value: mydata[index][3]
                }
            ]
        };
    });
}

function getPieSeriesUpdate(scatterData, chart) {
    return echarts.util.map(scatterData, function(item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            center: center
        };
    });
}

var scatterData = getVirtulData();

option = {
    tooltip: {},
    title:{
        text:'2017年12月每天各项活动占比',
        left:'center'
    },
    legend: {
        data: ['实习', '其余外出', '上课', '寝室'],
        bottom: 20
    },
    calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
            show: false,
            textStyle: {
                fontSize: 30
            }
        },
        dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        monthLabel: {
            show: false
        },
        range: ['2017-12']
    },
    series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function(params) {
                    return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                    color: '#000',
                    fontSize: 14
                }
            }
        },
        data: scatterData
    }]
};

if (!app.inNode) {
    var pieInitialized;
    setTimeout(function() {
        pieInitialized = true;
        myChart.setOption({
            series: getPieSeries(scatterData, myChart)
        });
    }, 10);

    app.onresize = function() {
        if (pieInitialized) {
            myChart.setOption({
                series: getPieSeriesUpdate(scatterData, myChart)
            });
        }
    };
}