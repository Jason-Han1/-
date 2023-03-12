var legendList = ['单项选择', '听长对话', '听短对话', '英译中', '作文'];
var serList = [{
    value: '0.5',
    type: 'a'
}, {
    value: '0.4',
    type: 'b'
}, {
    value: '0.8',
    type: 'a'
}, {
    value: '0.1',
    type: 'b'
}, {
    value: '0.9',
    type: 'a'
}];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        name:'题型',
        type: 'category',
        data: legendList,
        axisLabel: {
            interval: 0,
            rotate: 45,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontFamily: "微软雅黑",
                fontSize: 12,
                color: '#999999'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#999999'
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name: '失分率（%）',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#999999'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                type:'dashed',
                color:'#e8e8e8'
            }
        },
    }],
    series: [{
        name: '各个题型失分率',
        type: 'bar',
        barWidth: '40%',
        data: serList,
        itemStyle: {
            normal: {
                barBorderRadius: [4, 4, 0, 0],
                color: function(params) {
                    if (params.data.type == 'a') {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 205,151, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 205,151, 0.3)'
                        }])
                    }else{
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(67, 226,161, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(67, 226,161, 0.3)'
                        }])
                    }
                },
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }
    }]
};