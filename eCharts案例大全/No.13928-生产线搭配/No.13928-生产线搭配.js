option = {
    backgroundColor: "#fff",
    color: ['#24d285', '#ffda1f', '#ec4863','#ecff13','#aca163','#edaaa3'],

    title: [{
        text: '生产线搭配',
        left: '1%',
        top: '6%',
        textStyle: {
            color: 'rgb(111,160,79)'
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        x: 300,
        top: '7%',
        textStyle: {
            color: 'rgb(111,160,79)',
        },
        data: ['手工生产线1', '手工生产线2', '全自动生产线1','全自动生产线2','全自动生产线3','全自动生产线4']
    },
    grid: {
        left: '1%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#FF4500'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: 'rgb(111,160,79)'
            }
        },
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: 'rgb(111,160,79)'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(111,160,79)'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: 'rgb(111,160,79)'
            }
        },
        type: 'value'
    },
    series: [
    //     {
    //     name: '柔性生产线',
    //     type: 'line',
    //     symbolSize: 8,
    //   	symbol: 'circle',
    //     data: [-280800,-280800,-280800,-280800, -288800,-93160, 102480, 306120, 509760, 713400,905040,1096680],
    //     areaStyle: {normal: {}},
    // },  
    {
        name: '全自动生产线4',
        type: 'line',
        symbolSize: 8,
        stack: 1,
      	symbol: 'circle',
        data: [-210600, -210600,-210600,-210600,-219600,-75870,67860, 217590, 357320, 517050, 657780,798510],
        areaStyle: {normal: {}},
    } ,
    {
        name: '全自动生产线3',
        type: 'line',
        stack: 1,
        symbolSize: 8,
      	symbol: 'circle',
        data: [-210600, -210600,-210600,-210600,-219600,-75870,67860, 217590, 357320, 517050, 657780,798510],
        areaStyle: {normal: {}},
    } ,
    {
        name: '全自动生产线2',
        type: 'line',
        symbolSize: 8,
        stack: 1,
      	symbol: 'circle',
        data: [-210600, -210600,-210600,-210600,-219600,-75870,67860, 217590, 357320, 517050, 657780,798510],
        areaStyle: {normal: {}},
    } ,
    {
        name: '全自动生产线1',
        type: 'line',
        symbolSize: 8,
        stack: 1,
      	symbol: 'circle',
        data: [-210600, -210600,-210600,-210600,-219600,-75870,67860, 217590, 357320, 517050, 657780,798510],
        areaStyle: {normal: {}},
    } ,
    // {
    //     name: '半自动生产线',
    //     type: 'line',
    //     symbolSize: 8,
    //   	symbol: 'circle',
    //     data: [-140400,-140400,-150400,-113600,-21780,70040, 161860, 257680, 353500, 449320, 539140, 628960],
    //     areaStyle: {normal: {}},
        
    // },
    {
        name: '手工生产线2',
        type: 'line',
        symbolSize: 8,
        stack: 1,
      	symbol: 'circle',
        data: [-85200, -82320, -73920, -65520, -29610, 6300, 42210,80120,118030,155940,190850,225760],
        
        areaStyle: {normal: {}},
        
    },
    {
        name: '手工生产线1',
        type: 'line',
        symbolSize: 8,
        stack: 1,
      	symbol: 'circle',
        data: [-85200, -82320, -73920, -65520, -29610, 6300, 42210,80120,118030,155940,190850,225760],
        
        areaStyle: {normal: {}},
        
    }
    ]
}