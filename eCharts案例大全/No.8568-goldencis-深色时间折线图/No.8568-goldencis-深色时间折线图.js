// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData1 = [];
var barData2 = [];
//更改for循环次数改变数据量
for (var i = 0; i < 100; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getMonth() + 1,
        date.getDate()
    ].join('-') + '\n' + [
        date.getHours(),
        date.getMinutes()
    ].join(':'));
    var b = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    barData1.push(b);
}

option = {
    backgroundColor: "#18283d",
    grid: {
        top: 10,
        right: 30,
        left: 60,
        bottom: 50
    },
    dataZoom: [{
        bottom: 0,
        type: 'slider',
        height: '16px',
        show: true,
        zoomLock: true,
        start: 60,
        end: 100,
        backgroundColor: 'rgba(24,42,64)',
        borderColor: 'rgba(0,0,0,0)',
        handleIcon: 'image:///asset-hub/images/1.png',
        handleStyle: {
            borderWidth: 0,
        },
        textStyle: {
            color: 'rgba(0,0,0,0)',
            height: '10px'
        },
        fillerColor: 'rgba(119,212,245,0.4)',
        dataBackground: {
            // 填充阴影
            areaStyle: {
                color: 'rgba(0,0,0,0)'
            },
            // 填充线条
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    }],
    tooltip: {
        trigger: 'axis',

        formatter: function(params, ticket, callback) {
            var htmlStr = '';
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                var xName = param.name; //x轴的名称
                var seriesName = param.seriesName; //图例名称
                var value = param.value; //y轴值
                var color = param.color; //图例颜色
                if (i === 0) {
                    htmlStr += "时间：" + xName + '<br/>'; //x轴的名称
                }
                htmlStr += '<div>';
                htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';
                htmlStr += seriesName + '：' + value + '%';
                htmlStr += '</div>';
            }
            return htmlStr;
        }
    },
    xAxis: {
        type: 'category',
        data: category,
        axisTick: {
            alignWithLabel: true
        },

        splitLine: {
            show: false,

        },
        axisLabel: {
            fontsize: 2,
            align: 'center',
            color: 'rgba(200,231,242,1)'
        }
    },
    yAxis: [{
        type: 'value',
        maxInterval: 20,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(119,212,245,0.2)'
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            fontWeight: 10,
            fontsize: 5,
            color: 'rgba(200,231,242,0.6)',
            formatter: '{value}%'
        },
        max: 100

    }],
    series: [{
        name: '湿度',
        type: 'line',
        data: barData1,
        symbolSize: 1,
        emphasis: {
            itemStyle: {
                color: "rgba(119,212,245,1)"
            }
        },
        lineStyle: {
            color: "rgba(119,212,245,1)"
        },
        areaStyle: {
            color: "rgba(119,212,245,0.3)"
        },
        itemStyle: {
            color: "rgba(119,212,245,1)",
        }
    }]
};