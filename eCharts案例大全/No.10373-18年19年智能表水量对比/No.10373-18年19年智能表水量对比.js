option = {
    backgroundColor:"#EEEEEE",
    title:{
         "text": "18年19年智能表水量对比",
        textStyle:{
            color: '#fff',
        }
    },
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
        data:['2018年','2019年','增长率'],
        textStyle: {
            color: "#fff"
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 600,
            max: 1000,
            interval: 50,
            axisLabel: {
                formatter: '{value} 万m3'
            }
        },
        {
            type: 'value',
            name: '比率',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'2018年',
            type:'bar',
            data:[730,720,740,760,790,820,880,890,880,870,820,780]
        },
        {
            name:'2019年',
            type:'bar',
            data:[820,830,840,860,880,930,920,920,900,880,850,860]
        },
        {
            name:'增长率',
            type:'line',
            yAxisIndex: 1,
            data:[3.5, 4.2, 3.7, 4.1, 3.3, 3.2, 4.3, 3.4, 5.0, 4.5, 5.0, 5.2]
        }
    ]
};
