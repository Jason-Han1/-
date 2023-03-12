var option = {
    backgroundColor: '#223C8B',
    title: {
        show: true,
        text: '.分环节损耗分析',
        x: 'left',
        textStyle: {
            fontSize: '120%',
            color: '#BCC5E3'
        }
    },
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle: {
            color: '#BCC5E3',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '6%',
        top: '10%',
        containLabel: true,
    },
    legend: { //图例组件，颜色和名字
        right: '5%',
        top: 0,
        // 		itemGap: 16,
        // 		itemWidth: 18,
        // 		itemHeight: 10,
        data: [{
            name: '油站入库量',
            //icon:'image://../wwwroot/js/url2.png', //路径
        }, {
            name: '油站保管量',
        }],
        textStyle: {
            color: '#a8aab0',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: '70%',
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true, //坐标轴两边留白
        data: ['武汉', '襄阳', '宜昌', '荆州', '黄冈', '孝感', '江汉', '咸宁', '黄石', '荆门', '十堰', '恩施'],
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            // margin:15,
            textStyle: {
                color: '#078ceb',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: '70%',
            }
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#BCC5E3',
                opacity: 0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 5,
        axisLabel: {
            textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#BCC5E3',
                opacity: 0.2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#BCC5E3'],
                opacity: 0.06
            }
        }

    }],
    series: [{
        name: '油站入库量',
        type: 'bar',
        data: [160, 100, 30, 20, 30, 10, 35, 40, 90, 20, 15, 10],
        barMaxWidth: '20px',
        barGap: 0, //柱间距离
        label: { //图形上的文本标签
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
            },
        },
        itemStyle: { //图形样式
            normal: {
                // barBorderRadius: 88,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(162, 239, 110, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(162, 239, 110, 0.3)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
            },
        },
    }, {
        name: '油站保管量',
        type: 'bar',
        data: [70, 180, 200, 50, 20, 15, 20, 48, 30, 35, 85, 200],
        // barWidth: 20,
        barMaxWidth: '20px',
        barGap: 0.2, //柱间距离
        label: { //图形上的文本标签
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
            },
        },
        itemStyle: { //图形样式
            normal: {
                // barBorderRadius: 88,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(71, 137, 247, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(71, 137, 247, 0.3)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
            },
        },
    }]
};