let colorList =Array(20).fill({
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
        {
            offset: 0,
            color: '#73fcff' // 最左边
        }, {
            offset: 0.5,
            color: '#86eef1' // 左边的右边 颜色
        }, {
            offset: 0.5,
            color: '#5ad6d9' // 右边的左边 颜色
        }, {
            offset: 1,
            color: '#3dc8ca'
        }]
})
option = {
    backgroundColor:'#003a82',
    //提示框
    tooltip: {
        trigger: 'axis',
        formatter: "{b} : {c}",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    //X轴
    xAxis: {
        type: 'category',
        data:  ["a","b","c","d","e"],
        axisLabel: {
            margin: 10,
            color: '#3699e0',
            interval: 0,
            rotate:25
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3699e0',
                // opacity:0.2
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        axisLabel: {
            color: '#3699e0',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3699e0',
                // opacity:0.2
            }
        },
        minInterval:1,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            type: 'bar',
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: (params)=> {
                        return colorList[params.dataIndex % 7];
                    }
                }
            },
            label: {
                show: false,
                position: [10, -40],
                color: '#ffffff',
                fontSize: 14,
                fontStyle: 'bold',
                align: 'center',
            },
            data: [1,2,3,4,5]
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: [],
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 10],
            itemStyle: {
                normal: {
                    color: (params)=> {
                        return colorList[params.dataIndex % 7];
                    },
                }
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: [1,2,3,4,5],
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [20, 10],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: (params)=> {
                        return colorList[params.dataIndex % 7].colorStops[0].color;
                    },

                }
            },
        },
    ],
}
