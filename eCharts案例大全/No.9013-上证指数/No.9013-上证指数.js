var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
    // ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
    // ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
    // ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
    // ['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
    // ['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
    // ['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
    // ['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
    // ['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
    // ['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
    // ['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
    // ['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
    ['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
    ['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
    ['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
    ['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
    ['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
    ['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
    ['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
    ['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
    ['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
    ['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
    ['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
    ['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
    ['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
    ['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
    ['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
    ['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
    ['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
    ['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
    ['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
    ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
]);


function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}


option = {
    title: {
        text: '上证指数',
        left: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
    },
    grid:{
        left:0
    },
    xAxis: [{
        type: 'category',
        data: data0.categoryData,
        // scale: true,
        axisLine: {
            onZero: false
        },
        // splitArea: {
        //     show: false
        // },
        // axisLine: {
        //     show: true
        // },
        // axisTick: {
        //     show: true,
        //     interval:8,
        // },
        // axisLabel:{
        //     show: true,
        //     interval: 8,
        // },
        // min: 'dataMin',
        // max: 'dataMax'
    },{
        type: 'category',
        position: 'bottom',
        offset: 0,
        data: [1,2,3,4],
        // scale: true,
        axisLine: {
            onZero: true
        },
        splitLine: {
            show: true
        },  
    }],
    yAxis: {
        interval:300,
        scale: true,
        axisLabel:{
            show: true,
            inside:true
        }
    },
    series: [{
        name: '日K',
        type: 'candlestick',
        data: data0.values,
        itemStyle: {
            normal: {
                color: upColor,
                color0: downColor,
                borderColor: upColor,
                borderColor0: downColor
            }
        },
        markArea: {
            itemStyle:{
                color: 'rgba(25,189,122,0.1)'
            },
            data: [
                [{
                    name: '上升',
                    xAxis: '2013/5/16'
                }, {
                    xAxis: '2013/5/21'
                }],
                // [{
                //     name: '下降',
                //     xAxis: '2013/5/31'
                // }, {
                //     xAxis: '2013/6/7'
                // }],
                // [{
                //     name: '两个屏幕坐标之间的标域',
                //     x:500,
                //     y:500
                // }, {
                //     x:700,
                //     y:700
                // }]
            ]
        },
        markPoint: {
            symbol: 'circle',
            symbolSize: function(value, param) {
                let size = 15
                if (param.name === 'highest' || param.name === 'lowest') {
                    size = 0.1
                }
                return size
            },
            symbolOffset: [0, '60%'],
            label: {
                show: true,
                fontSize: 12,
                color: '#fff',
                formatter: function(param) {
                    let val = ''
                    if (param.name === 'XX标点') {
                        val = param.value
                    } else if (param.name === 'lowest') {
                        val = param.value + ' →'
                    } else if (param.name === 'highest') {
                        val = '← ' + param.value
                    }
                    return val
                }
            },
            itemStyle: {
                color: 'rgb(41,60,85)'
            },
            data: [{
                    symbol: "path://m50.2525,95.975389l21.00828,0l6.49172,-19.862287l6.491724,19.862287l21.008277,0l-16.996025,12.275428l6.492056,19.862287l-16.996032,-12.275762l-16.996028,12.275762l6.492058,-19.862287l-16.99603,-12.275428z",
                    name: '五角星',
                    coord: ['2013/5/16', 2210]
                },
                {
                    symbol: "path://m50.2525,95.975389l21.00828,0l6.49172,-19.862287l6.491724,19.862287l21.008277,0l-16.996025,12.275428l6.492056,19.862287l-16.996032,-12.275762l-16.996028,12.275762l6.492058,-19.862287l-16.99603,-12.275428z",
                    name: '五角星',
                    coord: ['2013/5/17', 2248]
                },
                {
                    symbol: "path://m50.2525,95.975389l21.00828,0l6.49172,-19.862287l6.491724,19.862287l21.008277,0l-16.996025,12.275428l6.492056,19.862287l-16.996032,-12.275762l-16.996028,12.275762l6.492058,-19.862287l-16.99603,-12.275428z",
                    name: '五角星',
                    coord: ['2013/5/20', 2281]
                },
                {
                    symbol: "path://m50.2525,95.975389l21.00828,0l6.49172,-19.862287l6.491724,19.862287l21.008277,0l-16.996025,12.275428l6.492056,19.862287l-16.996032,-12.275762l-16.996028,12.275762l6.492058,-19.862287l-16.99603,-12.275428z",
                    name: '五角星',
                    coord: ['2013/5/21', 2290]
                },
                {
                    name: 'XX标点',
                    value: 1,
                    coord: ['2013/5/31', 2299]
                },
                {
                    name: 'XX标点',
                    value: 2,
                    coord: ['2013/6/3', 2294]
                },
                {
                    name: 'XX标点',
                    value: 3,
                    coord: ['2013/6/4', 2264]
                },
                {
                    name: 'XX标点',
                    value: 4,
                    coord: ['2013/6/5', 2260]
                },
                {
                    name: 'XX标点',
                    value: 5,
                    coord: ['2013/6/6', 2240]
                },
                {
                    name: 'XX标点',
                    value: 6,
                    coord: ['2013/6/7', 2205]
                },
                {
                    name: 'highest',
                    type: 'max',
                    valueDim: 'highest',
                    symbolOffset: [0, -10],
                    label: {
                        color: '#000'
                    }
                },
                {
                    name: 'lowest',
                    type: 'min',
                    valueDim: 'lowest',
                    symbolOffset: [0, 10],
                    label: {
                        color: '#000'
                    }
                },
                // {
                //     name: 'average value on close',
                //     type: 'average',
                //     valueDim: 'close'
                // }
            ],
            tooltip: {
                formatter: function(param) {
                    return param.name + '<br>' + (param.data.coord || '');
                }
            }
        },
        markLine: {
            symbol: ['none', 'none'],
            data: [
                // [
                //     {
                //         name: 'from lowest to highest',
                //         type: 'min',
                //         valueDim: 'lowest',
                //         symbol: 'circle',
                //         symbolSize: 10,
                //         label: {
                //             normal: {show: false},
                //             emphasis: {show: false}
                //         }
                //     },
                //     {
                //         type: 'max',
                //         valueDim: 'highest',
                //         symbol: 'circle',
                //         symbolSize: 10,
                //         label: {
                //             normal: {show: false},
                //             emphasis: {show: false}
                //         }
                //     }
                // ],
                {
                    name: 'min line on close',
                    type: 'min',
                    valueDim: 'close'
                },
                {
                    name: 'max line on close',
                    type: 'max',
                    valueDim: 'close'
                }
            ]
        }
    }]
};