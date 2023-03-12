app.title = '折柱混合';

option = {
    backgroundColor:'#FFFFFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        top: 30,
        data:['计划数','完成数','完成率']
    },
    grid: {
      top: '10%',
      backgroundColor: '#ffffff'
    },
    xAxis: [
        {
            type: 'category',
            data: ['管线','关键点', '设备维保', '工商户安检'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '个数',
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        {
            type: 'value',
            name: '完成率',
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'计划数',
            type:'bar',
            data:[20958, 97408, 105516, 33414],
            itemStyle: {
                color: '#FFAE00'
            }
        },
        {
            name:'完成数',
            type:'bar',
            data:[13967, 72329, 83259, 22215],
            itemStyle: {
                color: '#28E45B'
            }
        },
        {
            name:'完成率',
            type:'line',
            yAxisIndex: 1,
            data:[67, 74, 79, 66],
            itemStyle: {
                color: '#007CFF'
            }
        }
    ]
};