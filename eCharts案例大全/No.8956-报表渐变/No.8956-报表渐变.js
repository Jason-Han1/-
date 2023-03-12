var option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },
    legend: {
        data: ['邮件营销', '搜索引擎'],
        x: 'left'
    },
    color: ["#0080ff", "#4cd5ce"],
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [

        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            smooth: true,
            itemStyle: {
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#d7f4f8' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#eefcfd' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: '#fff' // 100% 处的颜色
                    }]), //背景渐变色 
                    lineStyle: { // 系列级个性化折线样式  
                        width: 4,
                        type: 'solid',
                        color: "#4fd6d2"
                    }
                },
                emphasis: {
                    color: '#4fd6d2',
                    lineStyle: { // 系列级个性化折线样式  
                        width: 2,
                        type: 'dotted',
                        color: "#4fd6d2" //折线的颜色
                    }
                }
            }, //线条样式  
            symbolSize: 5, //折线点的大小
            areaStyle: {
                normal: {}
            },
            data: [320, 332, 601, 134, 120, 230, 210]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            smooth: true,
            itemStyle: {
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#81befd' // 0% 处的颜色
                    }, {
                        offset: 0.4,
                        color: '#e4f2ff' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: '#fff' // 100% 处的颜色
                    }]), //背景渐变色    
                    lineStyle: { // 系列级个性化折线样式  
                        width: 4,
                        type: 'solid',
                        color: "#0180ff" //折线的颜色
                    }
                },
                emphasis: {
                    color: '#0180ff',
                    lineStyle: { // 系列级个性化折线样式  
                        width: 2,
                        type: 'dotted',
                        color: "0180ff"
                    }
                }
            }, //线条样式
            symbolSize: 5, //折线点的大小
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {
                normal: {}
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};