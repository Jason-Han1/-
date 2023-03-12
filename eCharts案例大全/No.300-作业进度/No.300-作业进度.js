let num = 70;
option = {
    title: [{
        text: '作业进度',
        x: 'center',
        top: '42%',
        textStyle: {
            color: '#666666',
            fontSize: 20,
            fontWeight: '100',
        }
    }, {
        text: num+'%',
        x: 'center',
        top: '48%',
        textStyle: {
            fontSize: '50',
            color: '#333333',
            fontFamily: 'Lato',
            foontWeight: '600',
        },
    }],
    polar: {
        radius: ['44%', '50%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: false,
            
            data: [num],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2da178'
                    }, {
                        offset: 1,
                        color: 'rgba(232, 248, 243, 0)'
                    }]),
                }
            }

        }, 
 
        {
            name: '',
            type: 'pie',
            startAngle: 90,
            radius: ['38%', '40%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    },
                    color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2da178'
                    }, {
                        offset: 1,
                        color: 'rgba(232, 248, 243, 0)'
                    }]),
                }
            },
            data: [100],
        },
       
    ]
};
