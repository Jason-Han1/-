option = {
    backgroundColor:'#1C3165',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.data.name) {
                    return params.data.name + ': ' + params.data.value
                }
            }
        },
        series: [{
            name: 'pie4',
            type: 'pie',
            radius: ['0', '170'],
            startAngle:110,
            center: ['50%', '40%'],
            label: { //标签的位置
                normal: {
                    show: true,
                    position: 'inside', //标签的位置
                    formatter: "{b}\n{d}%",
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 15
                    }
                }
            },
            labelLine: {
                show: false,
                emphasis: {
                    show: false
                }
            },
            data: [
                {
                    value: '1078',
                    name: '50万以下',
                    itemStyle:{
                        color:'#713F11',
                        borderColor:'#713F11',
                        borderWidth: 3,
                        
                    },
                    
                },
                {
                    value: '800',
                    name: '50万以上',
                    itemStyle: {
                        color: 'transparent',
                        borderColor:'#713F11',
                        borderWidth: 3,
                        shadowColor: 'rgba(113, 63, 17, 0.5)',
                        shadowBlur:5
                    },
                }
            ]
        },
        ]
    };