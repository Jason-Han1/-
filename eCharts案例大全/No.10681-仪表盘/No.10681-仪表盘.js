option = {
    backgroundColor: '#0e1e44',
    tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} %'
        },
        title:{
            text:'最大变形',
            bottom:15,
            left:'center',
            textStyle:{
                color:'#09bbaf'
            }
        },
    series: [
      {
        name: '仪表盘',
        type: 'gauge',
        data: [{value: '29', name: '最大变形'}],
        radius: '80%',
        center: ['50%', '50%'],
        min: 0,
        max: 100,
        zlevel: 25,
        splitNumber: 4,
        startAngle:180,
        endAngle :0,
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                width: 15,
                color: [[0.25, '#4afd88'], [0.75, '#10fffa'], [1, '#f87a7b']]
            }
        },
        axisTick: {            // 坐标轴小标记
            length: 13,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
            }
        },
        splitLine: {           // 分隔线
            length: 30,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto',
                width: 10,
            }
        },
        axisLabel: {
            color: '#2cbcce',
            distance :10,
            fontWeight :400,
            fontSize :18
        },
        detail: {
          formatter:'{value}%',
          fontSize: 24,
          offsetCenter: [0, '60%']
        },
        title:{
           show:false
        },
        pointer: {
            width: 15,           // 指针大小
            length :'62%'
        }
      },
      {
        //背景刻度
        name: '背景刻度',
        type: 'gauge',
        splitNumber: 10, //刻度数量
        min: 0,
        max: 100,
        center: ['50%', '50%'],
        radius: '80%', //刻度尺寸略小
        endAngle: -90,
        startAngle:269.999,
        zlevel: 20,
        axisLine: {
            show: false,
            lineStyle: {
                width: 15,
                shadowBlur: 0,
                color: [
                    [1, '#114264']
                ]
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd',
                width: 1
            },
            length: 10,
            splitNumber: 3
        },
        splitLine: {
            show: false,
            length: 20,
            lineStyle: {
                color: '#aaa'
            }
        },
        axisLabel: {
            show: false,
        },
        detail: {
            show: false
        }
    }
    ]
};