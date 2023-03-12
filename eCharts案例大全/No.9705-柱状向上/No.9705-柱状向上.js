var Name = ['发稿量'];
var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
var data = {
    //['国家目标', '海南目标', '完成情况']
    "1": [65],
    "2(㎡)": [44],
    "3(%)": [22],
    "4(%)": [11],
};

var xAxisData = [];
var data1 = []

for (var i in data) {
    xAxisData.push(i);
    data1.push(data[i][0])

}

var label = {
    normal: {
        show: false,
        position: 'right',
        distance: 10,
        formatter: function(param) {
            return param.value + '%';
        },
        textStyle: {
            color: '#ffffff',
            fontSize: '16',
        }
    }
};


var series = [];

 
var dataArr = data1


series.push({
    name: Name[0],
    type: 'bar',
    stack: 1,
    xAxisIndex: 0,
    data: dataArr,
    label: label,
    barWidth: 30,
    barGap: 5,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: color[0]
            }, {
                offset: 1,
                color: color[1]
            }]),
        }
    },
    z: 2
},   {
        name: '框',
        type: 'bar',
        xAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100],
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#ddd',
                borderWidth: 3,
                barBorderRadius: 0,
            }
        },
        animation:false
    })

var option = {
    backgroundColor: '#142058',
     
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
     
     
    xAxis: [  {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xAxisData
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xAxisData
    }],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#32346c',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#32346c ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    series: series

};