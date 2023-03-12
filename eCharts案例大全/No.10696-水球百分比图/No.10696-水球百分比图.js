var chart = {
    name: 'id',
    width: '200px',
    height: '200px',
    value: 0.6,
    text: 'name',
    ip: '192.132.123.123'
};
//echarts3下测试有效
//橙色渐变
var orange = new echarts.graphic.LinearGradient(
    0, 0, 0, 1,
    [{
            offset: 0,
            color: 'rgba(255, 216, 117, 0.4)'
        },
        {
            offset: 1,
            color: '#D62525'
        }
    ]
);
//绿色渐变
var green = new echarts.graphic.LinearGradient(
    0, 0, 0, 1,
    [{
            offset: 0,
            color: 'rgba(201, 255, 158, 0.47)'
        },
        {
            offset: 1,
            color: '#18D5A7'
        }
    ]
);
option = {
    series: [{
        type: 'liquidFill',
        data: [{
            value: chart.value,
            itemStyle: {
                color: chart.value >= 0.5 ? orange : green
            }
        }, {
            value: chart.value,
            itemStyle: {
                color: chart.value >= 0.5 ? orange : green
            }
        }],
        silent: true,
        radius: '70%',
        animationDuration: 0,
        animationDurationUpdate: 0,
        itemStyle: {
            shadowBlur: 0
        },
        waveAnimation: true,
        backgroundStyle: {
            color: '#fff'
        },
        label: {
            show: true,
            color: '#392C28',
            insideColor: '#392C28',
            fontSize: 15,
            fontWeight: 'bold'
        },
        outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
                color: '#EAEAEA',
                borderColor: '#EAEAEA',
                borderWidth: 0
            }
        }
    }]
}