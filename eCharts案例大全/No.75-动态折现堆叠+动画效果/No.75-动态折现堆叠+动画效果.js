function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
function getFormatDate(type) {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = '';
    const seperator1 = '-'; // 连接年月日
    const seperator2 = ':'; // 连接时分秒
    let currentdate = '';
    strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    switch (type) {
        case 'date':
            currentdate = year + seperator1 + month + seperator1 + strDate;
            break;
        case 'time':
            currentdate = date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
            break;
        case 'year':
            currentdate = parseInt(year);
            break;
        default:
            return false;
    }
    return currentdate;
}
let xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
// 统计百分比
let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const base = +new Date(new Date().getTime() - 1 * 15 * 60 * 1000);
const oneMin = 60 * 1000;
const date = [];
const xData = [Math.random() * 150];
let now = new Date(base);
let now2 = '';

//console.info(now, new Date(+new Date(now)+(60*1000)));

function addData(shift) {
    now2 = [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
    //now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    //console.info(now, now2)

    xAxisData.push(now2);
    //console.info(now2, (Math.random() - 0.4) * 10 + xData[xData.length - 1]);
    // xData.push((Math.random() - 0.4) * 10 + xData[xData.length - 1]);
    if (shift) {
        xAxisData.shift();
        //xData.shift();
    }
    now = new Date(+new Date(now) + oneMin);
}

for (let i = 1; i <= 15; i++) {
    data1.push(getRandomInt(1, 99));
    data2.push(getRandomInt(1, 99));
    addData(true);
}

let json = {
    chart0: {
        xcategory: xAxisData,
        low: data1,
        lowLine: [],
    },
};
let json2 = {
    chart0: {
        xcategory: xAxisData,
        low: data2,
        lowLine: [],
    },
};
let zrUtil = echarts.util;
zrUtil.each(json.chart0.xcategory, function (item, index) {
    json.chart0.lowLine.push([
        {
            coord: [index, json.chart0.low[index]],
        },
        {
            coord: [index + 1, json.chart0.low[index + 1]],
        },
    ]);
});
zrUtil.each(json.chart0.xcategory, function (item, index) {
    json2.chart0.lowLine.push([
        {
            coord: [index, json2.chart0.low[index]],
        },
        {
            coord: [index + 1, json2.chart0.low[index + 1]],
        },
    ]);
});

var option = {
    backgroundColor: '#03060F',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#15ecf4',
            },
        },
        backgroundColor: 'rgba(0,0,0,.8)',
        extraCssText: 'box-shadow: 4px 4px 10px rgba(21, 250, 255,.6);',
        formatter: function (params) {
            var result = params[0].name + '<br>';
            params.forEach(function (item) {
                result +=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    item.color +
                    '"></span>';
                // 判断设置增长还是降低
                if (parseFloat(item.data) >= 50) {
                    result += item.seriesName + ': ' + '<span class="growth">增长' + item.data + '%</span><br>';
                } else if (parseFloat(item.data) < 50) {
                    result += item.seriesName + ': ' + '<span class="reduce">降低' + item.data + '%</span><br>';
                }
            });
            return result;
        },
    },
    legend: {
        data: ['同比', '环比'],
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)',
        },
        top: '5%',
        right: '5%',
    },
    grid: {
        bottom: 50,
        left: 70,
        right: 50,
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: 'red',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
        data: xAxisData,
    },
    yAxis: {
        max: 100,
        splitNumber: 4,
        interval: 25,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#4b4d64',
            },
        },
        axisLabel: {
            formatter: '{value} %',
            textStyle: {
                //改变刻度字体样式
                color: '#ffffff',
            },
        },
    },
    series: [
        {
            name: '环比',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(255, 204,1, .9)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(6, 8, 41,.1)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                },
            },
            itemStyle: {
                normal: {
                    color: '#ffcb00',
                },
            },
            data: data1,
        },
        {
            name: '环比',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 1,
            smooth: true,
            symbol: 'circle',
            effect: {
                show: true,
                smooth: true,
                period: 2,
                symbolSize: 8,
            },
            lineStyle: {
                normal: {
                    color: '#ffcb00',
                    width: 0,
                    opacity: 0,
                    curveness: 0,
                },
            },
            data: json.chart0.lowLine,
        },
        {
            name: '同比',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(21, 250, 255,.9)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(6, 8, 41,.1)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                },
            },
            itemStyle: {
                normal: {
                    color: '#15faff',
                },
            },
            data: data2,
        },
        {
            name: '同比',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 1,
            smooth: true,
            symbol: 'circle',
            effect: {
                show: true,
                smooth: true,
                period: 2,
                symbolSize: 8,
            },
            lineStyle: {
                normal: {
                    color: '#15faff',
                    width: 0,
                    opacity: 0,
                    curveness: 0,
                },
            },
            data: json2.chart0.lowLine,
        },
    ],
};
setInterval(function () {
    for (var i = 0; i < 1; i++) {
        data1.shift();
        data1.push(getRandomInt(1, 99));
        data2.shift();
        data2.push(getRandomInt(1, 99));

        json = {
            chart0: {
                xcategory: xAxisData,
                low: data1,
                lowLine: [],
            },
        };
        json2 = {
            chart0: {
                xcategory: xAxisData,
                low: data2,
                lowLine: [],
            },
        };

        zrUtil.each(json.chart0.xcategory, function (item, index) {
            json.chart0.lowLine.push([
                {
                    coord: [index, json.chart0.low[index]],
                },
                {
                    coord: [index + 1, json.chart0.low[index + 1]],
                },
            ]);
        });
        zrUtil.each(json.chart0.xcategory, function (item, index) {
            json2.chart0.lowLine.push([
                {
                    coord: [index, json2.chart0.low[index]],
                },
                {
                    coord: [index + 1, json2.chart0.low[index + 1]],
                },
            ]);
        });
    }
    addData(true);
    myChart.setOption({
        xAxis: {
            data: xAxisData,
        },
        series: [
            {
                data: data1,
            },
            {
                data: json.chart0.lowLine,
            },
            {
                data: data2,
            },
            {
                data: json2.chart0.lowLine,
            },
        ],
    });
}, 5000);
