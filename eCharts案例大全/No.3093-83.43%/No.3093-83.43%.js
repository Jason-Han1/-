const handred = 1142
let point = 894
let sum = (point / handred *100).toFixed(2);

option = {
    backgroundColor: '#04101d',
    title: [{
        text: sum + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize:'75'
        }
    },
    // {
    //     text:'—',
    //     y: 'center',
    //     left: '27.1%',
    //     zlevel: 2,
    //     textStyle: {
    //         color: '#a1b3bd',
    //         fontWeight: 'lighter',
    //         fontSize: '38'
    //     }
    // }
    ],
    series: [
        //最外层圆环
        {
            name: '背景',
            type: 'pie',
            radius: '60%',
            startAngle: 179.7,
            data: [
                {value: 1, name: '背景'},
            ],
            itemStyle: {
                color: '#0e1f2e',
                borderWidth: 1,
                borderColor: '#4FADFD',
            },
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        },
        {
            name: 'circle',
            type: 'pie',
            zlevel: 1,
            radius: ['50%', '55%'],
            startAngle: 179.7,
            itemStyle: {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },  
            },
            data: [
                {
                    value: point,
                    name: '占比',
                    itemStyle: {
                        color: '#08bdff',
                    },
                },{
                    name: '剩余',
                    value: handred-point,
                    itemStyle: {
                        color: '#0d3a50',
                    },
                },
            ]
        },
        {
             name: '我是白线',
             type: 'pie',
            //   radius: ['50%', '55%'],
            radius: ['60%', '50%'],
             silent: true,
             clockwise: true,
             startAngle: 180, // 白线位置
             z: 2,
             zlevel: 2,
             label: {
                 normal: {
                     position: "center",

                 }
             },
             data: [{
                     value: 0.2,
                     name: "",
                     itemStyle: {
                         normal: {

                             color: '#fff'
                         }
                     }
                 },
                 {
                     value: 100 -  0.2,
                     name: "",
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: "transparent"
                         }
                     }
                 }
             ]
         },
    ]
}