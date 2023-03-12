option = {
    backgroundColor: '#fff',
    title:{
        text:"198",
        x:"center",
        y:"40%",
       textStyle:{
           color:"#415058",
           fontSize:80
       }
    },

    series: [{
            type: 'gauge',
            radius: "60%",
            startAngle: '215',
            endAngle: '-35',
            splitNumber: 20,
            detail: {
                offsetCenter: [0,60],
                color:"#5F6E76",
                fontSize:20,
                formatter: '活力指数'
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#360'],
                        [82 / 100, '#9E251F'],
                        [1, '#FFE4E3']
                    ],
                    width: 20
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: '#fff',
                    width: 20,
                    
                }
            },
            axisLabel: {
                show: false
            }
        }
    ]
};