option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [{
        name: '',
        type: 'gauge',
    //     startAngle: 180,
    // endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 12,
        detail: {
          formatter: '{r1|{value}}{r2|%}',
          color: 'auto',
          rich:{
              r1:{
                  fontSize:30,
                  verticalAlign: "bottom",
                  padding:[0,5,-2,0]
              },
              r2:{
                  fontSize:20,
                  verticalAlign: "bottom",
              }
          }
        },
        anchor: {
            show: true,
            showAbove: true,
            size: 10,
            itemStyle: {
                borderWidth:2,
                borderColor:"#2262E4",
            }
        },
        pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%']
        },
        progress: {
            roundCap: true,
            show: true,
            width: 18
        },
        itemStyle: {
            color: '#2262E4',
        },
        data: [{
          value: 23.33,
          name: ''
        }],
        axisLine: {
            roundCap: true,
            lineStyle: {
                width: 18
            }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel:{
            show:false
        },
        zlevel:10,
      },{
             name: '',
             type: 'gauge',
             splitNumber: 10, //刻度数量
             min: 0,
             max: 100,
             radius: '70%', //图表尺寸
             center: ['50%', '50%'],
             zlevel:1,
             axisLine: {
                 show: true,
                 lineStyle: {
                     width: 0,
                     shadowBlur: 0,
                     color: [
                      [0.2, '#23AFAF'],
                      [0.4, '#2270DA'],
                      [0.6, '#E99D02'],
                      [1, '#F45656']
                    ],
                 }
             },
             axisTick: {
                 show: true,
                 lineStyle: {
                     color: 'auto',
                     width: 2
                 },
                 length: 10,
                 splitNumber: 5
             },
             splitLine: {
                 show: true,
                 length: 12,
                 lineStyle: {
                     color: 'auto',
                     width: 2
                 }
             },
             axisLabel: {
                distance: 5,
                color: '#9BA5BC',
                fontSize: 12
            },
             pointer: { //仪表盘指针
                 show: 0,
                 length: '0%',
                 width: 1
             },
             anchor: {
                show: true,
                showAbove: true,
                size: 30,
                itemStyle: {
                    color:'#EAEBF1',
                }
            },
             detail: {
                 show:false
             },
             data: []
         }]
};