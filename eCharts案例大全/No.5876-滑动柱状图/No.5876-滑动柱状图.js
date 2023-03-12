var xData = ['听长对话', '听短对话', '完型选择', '阅读选择', '书面表达', '听长对话', '听短对话', '完型选择', '阅读选择', '书面表达'];
var yData = [12, 5, 7, 20, 15, 12, 5, 7, 20, 15];
var option = {
    backgroundColor: '#fff',
    grid: {
        top: '5%',
        right: '5%',
        left: '10%',
        bottom: '12%'
    },

    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: xData,
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            lineStyle: {
                color: '#d2d2d2',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name: '人数',
        nameTextStyle: {
            color: '#999'
        },
        axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: yData,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: '#2dbcff',
                barBorderRadius: [5, 5, 0, 0],
            }
        }

    }],
    dataZoom: {
        type: 'inside',
        minValueSpan: 4,
        maxValueSpan: 4,
    }
};