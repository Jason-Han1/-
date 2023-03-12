var cellSize = [70, 40];
var pieRadius = 15;//圆环半径设置

function getVirtulData() {
    var date = +echarts.number.parseDate('2017-02-01');
    var end = +echarts.number.parseDate('2017-03-01');
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
    return echarts.util.map(scatterData, function (item, index) {
        //确认饼图中心
        var center = chart.convertToPixel('calendar', item);
        //步骤一：通过scatterData获取到realValue数组
        //----此处省略与后端接口连接的代码----
        var thisDate=echarts.format.formatTime('d', item[0]);
        //thisDate为当前item对应的日期
        var realType=[0,0,1,2,3,4,5,5,4,3,2,1,0,0,0,1,2,3,4,5,5,4,3,4,5,5,4,3];
        var realvalue=[100,100,101,102,103,104,5,5,4,3,2,1,0,0,0,1,2,3,4,5,5,4,3,4,5,5,4,3];
        //realValue为获取的存放真实数值的数组
        //realType为获取的存放真实数值对应的类别的数组
        //realType与realValue长度应与scatterData的长度相同。
        //步骤二：根据realValue数组来输入值
        var inputData=[{name: '优', value: 100}];//设置一个初始值以防出错
        
        var matchIndex=thisDate-1;//当前日期对应的当前类别索引
        console.log()
switch (realType[matchIndex]) {
case 0:inputData=[{name: '优',value: realvalue[matchIndex]}];break;
case 1:inputData=[{name: '良',value: realvalue[matchIndex]}];break;
case 2:inputData=[{name: '轻度',value: realvalue[matchIndex]}];break;
case 3:inputData=[{name: '中度',value: realvalue[matchIndex]}];break;
case 4:inputData=[{name: '重度',value: realvalue[matchIndex]}];break;
case 5:inputData=[{name: ' 严重',value: realvalue[matchIndex]}];break;
default :break;
}
        return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '',
                    position: 'inside'
                }
            },
            radius: pieRadius,
            data: inputData
        };
    });
}

function getPieSeriesUpdate(scatterData, chart) {
    return echarts.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            center: center
        };
    });
}

var scatterData = getVirtulData();

option = {
    tooltip : {},
    legend: {
        data: [{
    name: '优',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'white'
    }
},{
    name: '良',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'white'
    }
},{
    name: '轻度',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'white'
    }
},{
    name: '中度',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'white'
    }
},{
    name: '重度',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'white'
    }
},{
    name: '严重',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'white'
    }
},],
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
        range: ['2017-02']
    },
    series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('dd', params.value[0]);
                },
                // offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                    color: '#000',
                    fontSize: 14
                }
            }
        },
        data: scatterData
    }]
};

var pieInitialized;
setTimeout(function () {
    pieInitialized = true;
    myChart.setOption({
        series: getPieSeries(scatterData, myChart)
    });
}, 10);

app.onresize = function () {
    if (pieInitialized) {
        myChart.setOption({
            series: getPieSeriesUpdate(scatterData, myChart)
        });
    }
};
