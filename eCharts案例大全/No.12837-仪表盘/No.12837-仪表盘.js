option = {
    series: [{
        name: '彩虹仪表盘',
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        radius: "90%",
        center: ["50%", "50%"],
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true //小刻度
        },
        axisLabel: {
            show: false,
            textStyle:{
                color:'#fff'
            }
        },
        splitLine: {
            show: true
        },
        pointer: {
            show: true,
            width: "2%",
            length: '90%',
            color: "red"
        },
        detail: {
            show:false,
            formatter: '{value}%',
            offsetCenter: ['0', '-30%'],
            textStyle: {
                fontSize: 24
            }
        },
        data: [{
            value: 88,
            name: '6868686'
        }]
    }]
};