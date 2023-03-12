 let colors = ['#35d964', '#d9bc39', '#da5660'],
     color;
 let data = 1; //数值大小
 let max = 3; //满刻度大小
 let title = {
     text: data,
     subtext: 'PUE',
     x: 'center',
     y: 'center',
     textStyle: {
         color: '#fff',
         fontSize: 30
     },
     subtextStyle: {
         color: '#fff',
         fontSize: 12
     }
 };

 if (data < 1.5) {
     color = colors[0];
 } else if (data > 1.5 && data < 2.5) {
     color = colors[1];
 } else if (data > 2.5 || data == 2.5) {
     color = colors[2];
 }
 option = {
     backgroundColor: '#000f1e',
     title: title,
     series: [
         {
            name: "",
            type: 'gauge',
            splitNumber: 40, //刻度数量
            min: 0,
            max: 100,
            radius: '85%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#0dc2fe']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 20,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                show: 0,
            },
        },
         {
             type: "pie",
             center: ["50%", "50%"],
             radius: ["80%", "85%"],
             hoverAnimation: false,

             data: [
                 {
                     name: "",
                     value: data * 0.8,
                     itemStyle: {
                         borderColor: color,
                         borderRadius: 10,
                         borderWidth: 5,
                         color: color,
                     },
                     labelLine: {
                         show: false,
                         lineStyle: {
                             color: 'rgba(0,0,0,0)',
                             width: 2
                         }
                     }

                 },
                 { //画中间的图标
                     name: "",
                     value: 0,
                     label: {
                         position: 'inside',
                         backgroundColor: color,
                         borderRadius: 30,
                         borderWidth: 15,
                         borderColor: 'rgba(0,0,0,0.9)',
                         padding: 30,
                     },

                 },
                 {
                     name: "",
                     value: data * 0.2,
                     itemStyle: {
                         borderColor: color,
                         borderWidth: 5,
                         color: color,
                     },
                     labelLine: {
                         show: false,
                         lineStyle: {
                             color: 'rgba(0,0,0,0)',
                             width: 2
                         }
                     }

                 },
                 { //画剩余的刻度圆环
                     name: "",
                     value: max - data,
                     label: {
                         show: false
                     },
                     itemStyle: {
                         borderType: 'dashed',
                         borderRadius: 10,
                         borderColor: '#919192',
                         borderWidth: 0,
                         color: 'rgba(0,0,0,0)',
                     },
                     labelLine: {
                         show: true,
                         lineStyle: {
                             color: 'rgba(0,0,0,0)',
                             width: 2
                         }
                     },

                 }
             ]
         },


     ]
 };