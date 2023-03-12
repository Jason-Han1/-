let data = {
    "title": ["总访问量", "会话接入总量", "未接入会话量", "排队放弃量", "会话接入人数"],
    "xData": ["20190312", "20190313", "20190314", "20190315", "20190316", "20190317", "20190318", "20190319", "20190320", "20190321", "20190322", "20190323", "20190324", "20190325"],
    "yData": [{
            "data": [0, 0, 4, 0, 0, 0, 0, 0, 63, 51, 27, 0, 0, 0],
            "name": "总访问量",
            "type": "line",
            "yAxisIndex": 0,
            "smooth": true,
            "symbol": "circle",
            "symbolSize": 2
        },
        {
            "data": [23, 63, 40, 83, 6, 0, 27, 14, 137, 59, 15, 0, 0, 0],
            "name": "会话接入总量",
            "type": "line",
            "yAxisIndex": 0,
            "smooth": true,
            "symbol": "circle",
            "symbolSize": 2
        },
        {
            "data": [0, 10, 6, 17, 12, 0, 3, 0, 39, 21, 0, 0, 0, 0],
            "name": "未接入会话量",
            "type": "line",
            "yAxisIndex": 0,
            "smooth": true,
            "symbol": "circle",
            "symbolSize": 2
        },
        {
            "data": [0, 10, 5, 14, 12, 0, 3, 0, 39, 21, 0, 0, 0, 0],
            "name": "排队放弃量",
            "type": "line",
            "yAxisIndex": 0,
            "smooth": true,
            "symbol": "circle",
            "symbolSize": 2
        },
        {
            "data": [3, 8, 6, 9, 3, 0, 5, 2, 15, 12, 5, 0, 0, 0],
            "name": "会话接入人数",
            "type": "line",
            "yAxisIndex": 1,
            "smooth": true,
            "symbol": "circle",
            "symbolSize": 2
        }
    ]
}

//计算最大值 
const calMax = (arr, type = 0) => {
    let max = 0;
    arr.forEach((el) => {
        el.yAxisIndex === type && el.data.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5); //不让最高的值超过最上面的刻度
    let maxval = maxint * 10; //让显示的刻度是整数
    return maxval;
}


// 绘制图表
myChart.setOption({
    grid: {
        left: 50, //距离左边的距离
        right: 50, //距离右边的距离
        bottom: '14%', //距离下边的距离
        top: '22%', //距离上边的距离
    },
    color: ['#3063FF', '#2EC7E6', '#FF5500', '#FFDD33', '#2FC25B'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    legend: {
        itemWidth: 12,  //指标线长度 
        itemGap: 24,   //指标距离
        itemHeight: 1, //指标高度，为1可去掉圆点
        data: data.title,
        right: 20,
    },
    xAxis: [{
        type: 'category',
        data: data.xData,
        axisLine: {
            lineStyle: {
                color: '#545454'
            }
        },
    }],
    yAxis: [{
            type: 'value',
            name: '次数',
            min: 0,
            max: calMax(data.yData, 0),
            interval: calMax(data.yData, 0) / 5,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    // color: '#5a6',
                    opacity: 0, //y轴显示 0 - 1
                }
            },
            axisTick: { //刻度线显示
                show: false
            },
            splitLine: {
                lineStyle: { //分割线样式
                    type: 'dashed'
                },
            },
        },
        {
            type: 'value',
            name: '人数',
            min: 0,
            max: calMax(data.yData, 1),
            interval: calMax(data.yData, 1) / 5,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    opacity: 0, //y轴显示 0 - 1
                }
            },
            axisTick: { //刻度线显示
                show: false
            },
            splitLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
        }
    ],
    series: data.yData,
});