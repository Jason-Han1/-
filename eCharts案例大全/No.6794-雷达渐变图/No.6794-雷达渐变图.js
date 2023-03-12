var data = [{
        text: '幼龄林',
        max: 100
    },
    {
        text: '中龄林',
        max: 100
    },
    {
        text: '近熟林',
        max: 100
    },
    {
        text: '成熟林',
        max: 100
    },
    {
        text: '过熟林',
        max: 100
    }
]
option = {
    backgroundColor:'#030F35',
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
         shape: 'circle',
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#8CB119'
            },
            fontSize: 20
        },
        axisLine: {
            lineStyle: {
                color: '#01F92A'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#01F92A',
                width:5
            }
        },
        splitArea:{
            areaStyle:{
                color:'#030F35'
            }
        }
    }],

    series: [{
        name: '雷达图',
        type: 'radar',
        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
        symbolSize: 10, // 拐点的大小
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        areaStyle: {
            normal: {
                color: '#017B30',
                opacity: 0.8
            }
        },
        data: [
            [54, 58, 66, 45, 50]
        ],
    }]
}