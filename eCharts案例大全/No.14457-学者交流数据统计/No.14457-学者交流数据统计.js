option = {
     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '学者交流会数据统计',
        subtext: '总人数',
        left: 'center'
    },
    series: [{
        type: "gauge",
        startAngle: 190,
        endAngle: -10,
        min: 0,
        max: 1000,
        radius: "80%",
        center: ["50%", "65%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 100,
                shadowBlur: 10,
                color: [
                    [0, '#B5495B'],
                    [0.333333, '#D0104C'],

                    [0.666666, '#f09426'],
                    
                    [1, '#20604F']
                ]
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        pointer: {
            width: "3%",
            length: '90%',
            color: "black"
        },
        itemStyle: {
            normal: {
                color: "rgba(255, 255, 255, 0.8)",
                shadowBlur: 20
            }
        },
        
        title: {
            show: false
        },
        detail: {
            show: true
        },
        data: [{
            value:945, name:'945'
        }]
    }]
}