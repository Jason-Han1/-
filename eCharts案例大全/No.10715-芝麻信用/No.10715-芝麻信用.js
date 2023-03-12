option = {
    backgroundColor: 'skyblue',
    title:{
        text:"798",
        x:"center",
        y:"40%",
       textStyle:{
           color:"#fff",
           fontSize:60
       }
    },

    series: [{
            type: 'gauge',
            radius: "60%",
            startAngle: '215',
            endAngle: '-35',
            splitNumber: 20,
            detail: {
                offsetCenter: [0,100],
                color:"#fff",
                fontSize:18,
                formatter: '信用极好 \n\n2019-07-17'
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#fff'],
                        [52 / 100, '#fff'],
                        [1, '#999999']
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
                    color: 'skyblue',
                    width: 20,
                    
                }
            },
            axisLabel: {
                show: false
            }
        }
    ]
};