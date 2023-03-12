option = {
    backgroundColor : 'white',
    title : {
        text : '任务书签订过程分析',
        x : 'center'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#333'
        },
        axisLine: {
            show : false
        },
        splitLine: {
            show : true,
            lineStyle: {
                color: '#EEF1F5'
            }
            
        },
        axisTick: {
            show :false
        },
        data: ['未制定', '制定中', '审核中', '已签订']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#95A3B7'
        },
        axisLine: {
            lineStyle: {
                color: '#EEF1F5'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: {
        type: 'bar',
        barWidth: '20',
        itemStyle: {
            normal: {
                color: function(params){
                    var colors = ['#F14C4C', '#3B74E6', '#F18F1C', '#54A95D']
                    return colors[params.dataIndex]
                }
            }
        },
        data: [120, 200, 150, 80],
    }
};
