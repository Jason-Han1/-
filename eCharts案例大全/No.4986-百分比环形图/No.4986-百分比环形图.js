// var  getvalue=[88];
var getvalue = ['55'];
option = {
    backgroundColor:'#000',
    angleAxis: {
        max: '100',
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
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
    polar: {
        center: ['50%', '50%'],
        radius: '180%' //图形大小
    },
    series: [{
            type: 'pie',
            name: '内层细圆环',
            radius: ['90%', '90%'],
            startAngle: 0,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                borderWidth: 0.5,

                borderColor: "#fff"
            },
            label: {
                show: false
            },
            data: [0],
            z: 99,
        },
        {
            type: 'bar',
            data: getvalue,
            showBackground: false,
            backgroundStyle: {
                color: '#BDEBFF',
            },
            coordinateSystem: 'polar',
            roundCap: false,
            barWidth: 10,
            z: 999,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: "#35DBF6",
                    shadowBlur: 5,
                    shadowColor: '#2A95F9',

                }
            },
        },

    ]
};