var aqiData = 120;
option = {
    backgroundColor: "rgb(11,27,52)",
    title: {
        text: aqiData,
        textStyle: {
            fontSize: 80,
            fontWeight: 'normal',
            color: 'rgb(124,190,255)'
        },
        x: 'center',
        y: 'center'
    },
    graphic: [{
        type: 'group',
        left: 'center',
        top: '80%',
        children: [{
            type: 'text',
            style: {
                fill: '#fff',
                text: '流量统计',
                fontSize: 40
            }
        }]
    }],
    series: [{
        type: 'liquidFill',
        waveAnimation: 10,
        data: [0.35, 0.3],
        color: ["rgb(77,95,202)", "rgba(79,71,183,.8)"],
        amplitude: 35,
        radius: '50%',
        backgroundStyle: {
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.55,
                colorStops: [{
                    offset: 0.5,
                    color: 'rgb(11,27,52)' // 0% 处的颜色
                }, {
                    offset: 0.75,
                    color: 'rgb(27,41,83)' // 100% 处的颜色
                }, {
                    offset: 0.95,
                    color: 'rgb(53,63,135)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        outline: {
            show: false
        },
        label: {
            normal: {
                formatter: ""
            }
        }
    }]
};