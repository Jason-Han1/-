option = {
    backgroundColor: "#072B79",
    title:{
      text:'完成率',
      x:'center',
      y:'70%',
      textStyle:{
          color:'#fff',
          fontSize:40,
          fontWeight:'100'
          
      }
    },
    series: [{
        tooltip: {
            show: false
        },
        type: 'gauge',
        radius: '83%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        detail: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 6,
                color: [
                    [0.3, 'rgba(218, 65, 102,1)'],
                    [0.7, 'rgba(101, 181, 63,1)'],
                    [1, 'rgba(43, 161, 252,1)'],
                ]
            }
        }, 
        axisLabel: {
            show: false
        }, 
        axisTick: {
            show: false,
        }, 
        splitLine: {
            show: false,
        }, 
    }, {
        type: 'gauge',
        radius: '75%',
        min: 0,
        max: 100,
        center: ['50%', '60%'],
        data: [{
            value: 75,
        }],
        splitNumber: 10,
        startAngle: 180,
        endAngle: 0,
        title: {
            offsetCenter: ['0', '-60%'],
            fontSize: 40
        },
        detail: {
            formatter: function(value) {
                return value + '%'
            },
            fontSize: 50,
            color:'#fff',
            offsetCenter: ['0%', '-40%']
        },
        axisLine: {
            show:false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            distance: -30,
        },
        axisTick: {
            splitNumber: 10,
            show: true,
            lineStyle: {
                color: '#ccc',
                width:1
            },
            length: -15,
        },
        splitLine: {
            show: true,
            length: -25,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        pointer: {
            width: 10,
            length: '80%',
        }
    }]
};