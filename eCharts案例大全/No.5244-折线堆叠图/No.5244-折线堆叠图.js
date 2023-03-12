var xDataArr = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
var yDataArr = [3000, 2800, 900, 1000, 800, 700, 1400, 1300, 900, 1000, 800, 600]
var yDataArr2 = [2000, 3800, 1900, 500, 900, 1700, 2400, 300, 1900, 1500, 1800, 200]
var option = {
    xAxis: {
        type: 'category',
        data: xDataArr,
        boundaryGap: false, // 第一个值紧挨Y轴
    },
    yAxis: {
        type: 'value',
        scale: true, // 脱离0值比例

    },
    legend: {
        type: "plain",
        data: ['a', 'b'],
        icon: "circle",
    },
    series: [{
            name: "a",
            type: 'line',
            data: yDataArr,
            smooth: true, // 是否平滑
            stack: 'all', // 堆叠图的设置
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: "b",
            type: 'line',
            data: yDataArr2,
            smooth: true, // 是否平滑
            stack: 'all', // 堆叠图的设置
            areaStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'pink' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
}