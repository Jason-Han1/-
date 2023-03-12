let data = ['4号', '5号', '6号', '10号', '11号', '14号', '15号', '19号', '20号', '22号', '33号', '35号', '54号', '58号', '60号']
let dataLine = [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122, 89, 112, 34]
option = {
    text: 'xxxx季度营业',
    backgroundColor: '#2958a9',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        width: 14,
        itemGap: 13,
        height: 5,
        right: '4%',
        data: [{
            icon: 'rect',
            name: '增长数'
        }],
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true // 显示刻度标签
    },
    xAxis: [{
        type: 'category', // 类目轴
        boundaryGap: false, // 坐标轴两遍留白
        axisLine: {
            lineStyle: { // 坐标轴线颜色设置
                color: '#00c7ff'
            }
        },
        data: data
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '增长数',
        type: 'line',
        smooth: true, // 平滑曲线
        symbol: 'circle', // 标记图形
        symbolSize: 5,
        showSymbol: false, // false-悬浮时展示
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#5ff6e9' // 0% 处的颜色
                }, {
                    offset: 0.8,
                    color: '#7370fd' // 100% 处的颜色
                }],
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
                globalCoord: false // 缺省为 false
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: dataLine
    }]
}