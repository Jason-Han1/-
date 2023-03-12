option = {
    backgroundColor: '#fff',
    color: ['#298DFF', ' #33CA66'],
    barWidth: 14,
    title: {
        // text: '世界人口总量',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        // left: '0%',
        top: '10',
        x:'right', //可设定图例在左、右、居中
        icon: 'circle',
        textStyle: { //图例文字的样式
            color: '#8C8C8C',
            fontSize: 12
        },
        data: ['项目数量', '金额（百万）']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false // 去除网格线
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#BFBFBF', // 坐标线的颜色
                width: '1'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#595959' //坐标值的颜色
            },
            formatter: function (params) {
                var newParamsName = ''
                var paramsNameNumber = params.length //总字数
                var provideNumber = 5 //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber)
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = ''
                        var start = p * provideNumber
                        var end = start + provideNumber
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber)
                        } else {
                            tempStr = params.substring(start, end) + '\n'
                        }
                        newParamsName += tempStr
                    }
                } else {
                    newParamsName = params
                }
                return newParamsName
            }
        },
        boundaryGap: [0, 0.01],
        data: ['事业部1', '事业部2', '事业部3', '事业部4', '事业部5']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            // show: false // 去除网格线
            lineStyle:{
                color: '#E8E8E8',
                type: 'dashed' //设置间隔线为虚线
            }
        },
        axisTick: {
            show: false //小横线
        },
        splitArea: {
            // show: true // 保留网格区域
        },
        axisLine: {
            show: false, // 去除纵向边框线
            lineStyle: {
                type: 'solid',
                color: '#BFBFBF', // 坐标线的颜色
                width: '1'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#595959' //坐标值的颜色
            }
        }
    },
    series: [
        {
            name: '项目数量',
            type: 'bar',
            label: {
                show: false,
                position: 'right', // 位置
                color: '#298DFF',
                fontSize: 12,
                fontWeight: 'normal', // 加粗
                distance: 5, // 距离
                offset: [0, 1] // 偏移距离[横向，纵向]
            }, // 柱子上方的数值
            data: [30, 40, 30, 22, 60]
        },
        {
            name: '金额（百万）',
            type: 'bar',
            label: {
                show: false,
                position: 'right', // 位置
                color: '#33CA66',
                fontSize: 12,
                fontWeight: 'normal', // 加粗
                distance: 5, // 距离
                offset: [0, 2] // 偏移距离[横向，纵向]
            }, // 柱子右方的数值
            data: [20, 20, 20, 20, 10]
        }
    ]
}