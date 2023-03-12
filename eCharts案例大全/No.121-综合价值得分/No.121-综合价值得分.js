var value = 5.6;
var pointerColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
        offset: 0,
        color: '#2EE5E3',
    },
    {
        offset: 1,
        color: '#385CF7',
    },
]);
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#2EE5E3',
    },
    {
        offset: 1,
        color: '#385CF7',
    },
]);

option = {
    title:{
       show: true,
       text:"综合价值得分",
       left:'50%',
       bottom:40,
       textAlign:'center',
       textStyle: {
           color: 'rgba(0,0,0,0.65)',
           fontSize: 30,
           fontFamily: '"Microsoft Yahei","微软雅黑"',
       },
    },
    backgroundColor: '#fff',
    series: [
        {
            name: '已到人数',
            type: 'gauge',
            radius: '70%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 10,

            title: {
                show: false,
            },
            detail: {
                color:'#1890FF',
                show: true,
                fontFamily: '"Microsoft Yahei","微软雅黑"',
                fontWeight:900,
                fontSize:100,
                offsetCenter:[0,'80%']
            },
            axisLine: {
                roundCap: true,
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            value / 10, color
                        ],
                        [
                            1, 'rgba(225,225,225,0.4)'
                        ]
                    ],
                    // shadowColor: 'rgba(0,138,255,0.35)',
                    // shadowBlur: 5,
                },
            },
            axisTick: {
                distance: -20,
                length: 7,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                itemStyle:{
                    color:pointerColor,
                },
        
                // show:false,
                width: 20,
                length: 120,
            },
            itemStyle: {
                color: color,
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 10,
                
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
            },
            splitLine: {
                show: true,
                length: 20,
                distance: -20,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                },
            },
            data: [
                {
                    value: value,
                    name: '综合价值得分',
                },
            ],
        },
    ],
};
