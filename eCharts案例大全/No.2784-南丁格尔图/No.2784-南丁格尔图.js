option = {
    backgroundColor:'#031d33',
    color: ['#92E1FF', '#0097FB', '#FF4848', '#FFC227', '#30ECA6'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        textStyle: {
            fontSize: 15,
             color: "#BCE9FC",
        },
        backgroundColor: "RGBA(0, 49, 85, 1)",
        borderColor: "rgba(0, 151, 251, 1)",
        borderWidth: 1,
        borderRadius: 0,
    },
    series: [{
        name: '车位数',
        type: 'pie',
        clockwise: false,
        startAngle: 90,
        radius: '35%',
        center: ['44%', '50%'],
        hoverAnimation: false,
        roseType: 'radius', //area
       
        data: [{
                value: 335,
                name: '00:00-02:00'
            },
            {
                value: 310,
                name: '02:00-04:00'
            },
            {
                value: 234,
                name: '10:00-12:00'
            },
            {
                value: 135,
                name: '14:00-16:00'
            },
            {
                value: 148,
                name: '其他时间段'
            }
        ],
        label: {
            show: false,
          
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1,
                }
            }
        },
         itemStyle: {
                shadowColor: 'rgba(0, 34, 66, 0.3)',
                shadowBlur: 20,
                shadowOffsetY: 5
            },
        
       
       
    }],
}