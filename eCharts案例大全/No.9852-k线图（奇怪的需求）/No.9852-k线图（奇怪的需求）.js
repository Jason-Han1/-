var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
    ['2013/1/24', 2320.26, 2420.26, 2320.26, 2420.26],
    ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
    ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
    ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
    ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
    ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
    ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
    ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
    ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
    ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
    ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
    ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
    ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
    ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
    ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
    ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
    ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
    ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
    ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
    ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
    ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
    ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
    ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
    ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
    ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
    ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
    ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
    ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
    ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
    ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
    ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
    ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
    ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
    ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
    ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
    ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
    ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
    ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
    ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
    ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
    ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
    ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
    ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
    ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
    ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
    ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
    ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
    ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
    ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
    ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
    ['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
    ['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
    ['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
    ['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
    ['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
    ['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
    ['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
    ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
    ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
    ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58]
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

function getCloseData() {
    return data0.values.map(item => item[1])
}

/*
   令2350及以上变红色，2200及一下变绿色
*/

function getData(data, high, low) {
    // 开盘(open)，收盘(close)，最低(lowest)，最高(highest)

    return data.map((item) => {
        let colorStop = getColorStop(item[3], item[2], high, low)
        console.log(colorStop, item[3], item[2])
        return {
            value: item,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: colorStop
                },
                color0: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: colorStop
                },
                borderColor: '',
                borderColor0: ''
            }
        }
    })
}

function getColorStop(dataHigh, dataLow, high, low) {
    let delta = dataHigh - dataLow
    // console.log(dataHigh, dataLow, high, low)
    switch (true) {
        case dataLow > high:
            return [{
                offset: 0,
                color: 'red'
            }];
        case dataHigh < low:
            return [{
                offset: 0,
                color: 'green'
            }];
        case high > dataHigh && low < dataLow:
            return [{
                offset: 0,
                color: '#eee'
            }];
        case dataHigh > high && dataLow < low:
            return [{
                    offset: 0,
                    color: 'red'
                },
                {
                    offset: (dataHigh - high) / delta,
                    color: 'red'
                },
                {
                    offset: (dataHigh - high) / delta,
                    color: '#eee'
                },
                {
                    offset: (dataLow - low) / delta,
                    color: 'green'
                },
                {
                    offset: 1,
                    color: 'green'
                }
            ];
        case dataHigh > high:
            return [{
                    offset: 0,
                    color: 'red'
                },
                {
                    offset: (dataHigh - high) / delta,
                    color: 'red'
                },
                {
                    offset: (dataHigh - high) / delta,
                    color: '#eee'
                },
                {
                    offset: 1,
                    color: '#eee'
                }
            ];
        case dataHigh < high:
            return [{
                    offset: 0,
                    color: '#eee'
                },
                {
                    offset: (dataHigh - low) / delta,
                    color: '#eee'
                },
                {
                    offset: (dataHigh - low) / delta,
                    color: 'green'
                },
                {
                    offset: 1,
                    color: 'green'
                }
            ];
    }
}

option = {
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    backgroundColor: '#ddd',
    xAxis: {
        show: false,
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap: true,
        axisLine: {
            onZero: false
        },
        splitLine: {
            show: false
        },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: false
        }
    },
    visualMap: {
        show: false,
        dimension: 1,
        seriesIndex: 1,
        pieces: [{
                gte: 0,
                lte: 2200,
                color: 'yellow'
            },
            {
                gte: 2200,
                lte: 2350,
                color: '#666'
            },
            {
                gte: 2350,
                lte: 2500,
                color: 'rgba(255,72,74,0.5)'
            }
        ]
    },
    series: [{
            name: '日K',
            type: 'candlestick',
            animation: false,
            hoverAnimation: false,
            data: getData(data0.values, 2350, 2200),
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upBorderColor,
                    borderColor0: downBorderColor
                }
            }
        },
        {
            type: 'line',
            animation: false,
            hoverAnimation: false,
            smooth: true,
            data: getCloseData(),
            z: 4,
            itemStyle: {

            },
            lineStyle: {
                width: 1
            },
            markArea: {
                data: [
                    [
                        {
                            yAxis: 2350
                        },
                        {
                            type: 'Max',
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ddd' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#FFD1D1' // 100% 处的颜色
                                    }]
                                }
                            }
                        }
                    ],
                    [
                    
                        {
                            type: 'Min'
                        },
                        {
                            yAxis: 2200,
                             itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#3AD235' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#ddd' // 100% 处的颜色
                                    }]
                                }
                            }
                        }
                    ]
                ]
            }
        }

    ]
};