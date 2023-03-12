let length = 100
    , i = 0
    , data1 = []
    , data2 = []
    , xAxisData = []

while(i < length) {
    xAxisData.push(`${1949 + i}年`)
    data1.push(Math.ceil(Math.random() * 1000))
    data2.push((Math.random() * 10).toFixed(3))
    i++
}

option = {
    title: {
        text: '类似倒影线图'
    },
    color: ['#ffc62e', '#3bb8ff'],
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: [
        {
            left: 50,
            right: 50,
            height: '42%'
        },
        {
            left: 50,
            right: 50,
            top: '50%',
            height: '42%'
        }
    ],
    dataZoom: [
        {
            type: 'slider',
            show: false,
            realtime: true,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            show: true,
            xAxisIndex: [0, 1]
        }
    ],
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: xAxisData,
            axisTick: {
                alignWithLabel: true,
                // show: false
            },
            axisLabel: {
                normal: {
                    color: '#333'
                }
            },
        },
        {
            type: 'category',
            boundaryGap: true,
            data: xAxisData,
            axisTick: {
                alignWithLabel: true,
                // show: false
            },
            axisLabel: {
                show: false
                // normal: {
                //     color: 'transparent'
                // }
            },
            gridIndex: 1,
            position: 'top'
        },
    ],
    yAxis: [
        {
            type: "value",
            splitLine: {
                lineStyle: {
                    color: '#f5f5f5'
                }
            }
        },
        {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#f5f5f5'
                }
            },
            gridIndex: 1,
            inverse: true
        }
    ],
    series: [
        {
            type: 'line',
            data: data1
        },
        {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data2
        }
    ]
};