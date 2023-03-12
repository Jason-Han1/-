var data=[
    {text: '微信 58302元',max: 100},
    {text: '支付宝 69302元',max: 100},
    {text: '银联 13201元',max: 100},
    {text: '云闪付 12345元',max: 100}
    ]
option = {
    //鼠标效果
    // tooltip: {},
    radar: [{
        indicator: data,
        //大小
        radius: 220,
        //角度
        startAngle: 90,
        //层
        splitNumber: 4,
        //圆形
        // shape: 'circle',
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#52c0ee'
            },
            fontSize: 20
        },
        axisLine: {
            lineStyle: {
                color: '#52c0ee'
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#52c0ee','#52c0ee','#52c0ee'],
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']
            }
        },
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        type: 'radar',
        itemStyle: {
            normal: {
                color: 'rgba(122, 255, 201, 1)'
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                opacity: 0.4,
                color:'#fff',
            }
        },
        areaStyle: {
            normal: {
                color: '#52c0ee',
                opacity: 0.2
            }
        },
        label: {
            normal: {
                show: true,
                position: ['-20','-20'],
                color:'#fff',
                fontSize:20,
                 fontWeight: 200,
                formatter: (params) => {
                    return params.value+'次';
                },
            }
        },
        data: [[80, 50, 90, 80]],
        // data: [[80, 50, 90, 80],[20,30,40,20]],
    }]
}