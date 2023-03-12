option = {
      title: {
        text: '各区数据',
        subtext: '纯属虚构',
        left: 'center'
    },
      grid: {
        left: 0
    },
    legend: {
        right: '0%',
        top: '35%',
        left: '60%',
        bottom: '80%',
    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['30%', '50%'],
            clockwise: false,
            avoidLabelOverlap: false,
            hoverOffset: 10,
            legendHoverLink: true,
            label:{
                show:true,
                formatter:'{d}%'
            },
            itemStyle : {
                normal : {
                    labelLine : {
                        show : false   //隐藏标示线
                    }
                }
            },
        data: [
                {value: 1048, name: '进出口区'},
                {value: 735, name: '国内区'},
                {value: 580, name: '国际区'},
                {value: 484, name: '快件区'},
                {value: 580, name: '保税区'},
                {value: 484, name: '非保税区'},
                {value: 300, name: '综合商务'}
            ]
    },
    {
               
                type: 'gauge',
                splitNumber: 15,
                radius: '45%',
                center: ['30%', '50%'],
                startAngle: 90,
                endAngle: -269.9999,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: [
                            [1, '#1f59a7']
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: 'auto',
                        width: 4.5
                    }
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                }
            }, {
             
                type: 'gauge',
                splitNumber: 15,
                radius: '45%',
                center: ['30%', '50%'],
                startAngle: 90,
                endAngle: -269.9999,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#1f59a7',
                        width: 3
                    },
                    length: 20,
                    splitNumber: 5
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                }
            },]
};
