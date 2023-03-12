 var startColor = ['#eb3600', '#FC982E', '#FFD121', '#36CFC9'];
 var endColor = ['#eb2100', '#EA761E', '#EBA953', '#028E91'];
 var value = Math.floor(0.68 * 100);
 var colorRegionRate = (value / 100).toFixed(2);
 option = {
      backgroundColor: "#fff",
     series: [{
             type: 'gauge',
             name: '外层半透明边框圈',
             radius: '95%',
             startAngle: '225',
             endAngle: '-45',
             splitNumber: 6,
             pointer: {
                 show: false
             },
             detail: {
                 show: false,
             },
             data: [{
                 value: value,
                 name: ''
             }],
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: [
                         // 有数值的部分
                         [colorRegionRate, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: startColor[0] // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: endColor[0] // 100% 处的颜色
                             }
                         ])],
                         // 底色
                         [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#B5CFE6' // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: '#B5CFE6' // 100% 处的颜色
                             }
                         ])]
                     ],
                     width: 30,
                     opacity: 1
                 }
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false,
             },
             axisLabel: {
                 show: false
             }
         },
         {
             name: "白色圈刻度",
             type: "gauge",
             splitNumber: 6,
             radius: '80%',
             startAngle: '225',
             endAngle: '-45',
             z: 4,
             axisTick: {
                 show: false
             },
             splitLine: {
                 length: 150, //刻度节点线长度
                 lineStyle: {
                     width: 3,
                     color: "#fff"
                 } //刻度节点线
             },
             axisLabel: {
                 show: false,
                 color: "#000",
                 fontSize: 12
             }, //刻度节点文字颜色
             pointer: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     opacity: 0
                 }
             },
             detail: {
                 show: false
             },
             data: [{
                 value: 0,
                 name: ""
             }]
         },
         {
             type: 'gauge',
             name: '第二层',
             radius: '80%',
             startAngle: '225',
             endAngle: '-45',
             splitNumber: 4,

             pointer: {
                 show: false,
                 length: '53%'
             },
             // 仪表盘指针样式。
             itemStyle: {
                 color: '#f6fefe'
             },
             data: [{
                 value: value,
                 name: ''
             }],
             title: {
                 show: false,
             },
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: [
                         // 有数值的部分
                         [colorRegionRate, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: startColor[0] // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: endColor[0] // 100% 处的颜色
                             }
                         ])],
                         // 底色
                         [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                 offset: 0,
                                 color: '#B5CFE6' // 0% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: '#B5CFE6' // 100% 处的颜色
                             }
                         ])]
                     ],
                     width: 150,
                     shadowOffsetX: 0,
                     shadowOffsetY: 0,
                     opacity: 1
                 }
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             detail: {
                 show: true,
                 offsetCenter: [0, '90%'],
                 textStyle: {
                     fontSize: 16,
                     color: '#676767'
                 }
             },
             axisLabel: {
                 color: '#676767',
                  distance: 130,
                 fontSize: 12,
                 
             },
             animationDuration: 2000,
         },
     ]
 };