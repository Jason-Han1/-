option = {
    backgroundColor: "#ffffff",
    tooltip: {},
    grid: {
        top: '8%',
        left: '10%',
        right: '10%',
        bottom: '8%',
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#233e64'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: function(value, index) {
                    var colorList = [
                        '#f89305', '#6b8ab6', '#789b73'
                    ];
                    var num = parseInt(index / colorList.length);
                    if (index >= colorList.length) {
                        index = index - colorList.length * num;
                    }
                    return colorList[index]
                },
                fontWeight: 'bold',
                fontSize: 14,
                margin: 0,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['英语单词', '英语词组', '其他'],
    }],
    yAxis: [{
        show: true,
        type: 'value',
name:'123',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#233e64'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#6a9cd5',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: '40',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        '#f89305', '#6b8ab6', '#789b73'
                    ];
                    var index = params.dataIndex;
                    var num = parseInt(params.dataIndex / colorList.length);
                    if (params.dataIndex >= colorList.length) {
                        index = params.dataIndex - colorList.length * num;
                    }
                    return colorList[index]
                },
                label: {
                    show: true,
                    position: 'top'
                }
            }
        },

        lineStyle: {
            normal: {
                color: "#4ea1ff" // 线条颜色
            }
        },

        data: [190, 105, 84]
    }]
};