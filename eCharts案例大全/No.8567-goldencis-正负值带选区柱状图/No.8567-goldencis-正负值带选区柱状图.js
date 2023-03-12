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
    var b = Math.floor(Math.random() * (60 + 20 + 1)) + -20;
    if (b < 0) {
        barData1.push(b);
        barData2.push(0)
    } else {
        barData1.push(0);
        barData2.push(b)
    }
}

option = {
    backgroundColor: "#18283d",
    grid: {
        top: 10,
        right: 40,
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
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(119,212,245,0.1)'
            },
        },
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

                // 具体显示的数据【字段名称：seriesName，值：value】
                // 这里判断一下name，如果是我们需要特殊处理的，就处理
                // 正常显示的数据，走默认
                if (value !== 0) {
                    htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';
                    htmlStr += seriesName + '：' + value + '℃';
                }
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
            //fontWeight:10,
            //interval:2,
            fontsize: 2,
            align: 'center',
            color: 'rgba(200,231,242,1)'
        }
    },
    yAxis: [{
        type: 'value',
        maxInterval: 10,
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
            formatter: '{value}℃'
        },
        max: 60

    }],
    series: [{
        name: '温度',
        type: 'bar',
        stack: '℃',
        barMinWidth: 10,
        barCategoryGap: '10%',
        itemStyle: {
            normal: {
                barBorderRadius: 50,
                color: "rgba(119,212,245,1)"
            }
        },
        data: barData1
    }, {
        name: '温度',
        type: 'bar',
        stack: '℃',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 50,
                color: "rgba(245,166,35,1)"
            }
        },
        data: barData2,

        markLine: {
            symbol: 'none',
            silent: true,

            data: [{
                name: 'Y 轴值为 40 的水平线',
                yAxis: 40,

            }, {
                name: 'Y 轴值为 0 的水平线',
                yAxis: 0,

            }],
            lineStyle: {
                color: "rgba(119,212,245,1)",
                width: 1
            }

        },
        markArea: {
            zlevel: 100,
            silent: true,
            data: [
                [{
                        yAxis: 0,


                    },
                    {
                        yAxis: 40
                    }
                ],
            ],
            itemStyle: {
                color: "rgba(119,212,245,0.3)",
                borderColor: "rgba(119,212,245,1)",
                borderType: "dashed"
            }
        },
    }]
};