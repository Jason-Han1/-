var dataArr = [
    {
        value: 91,
        name: '订单响应占比',
    },
];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#5CF9FE', // 0% 处的颜色
    },
    {
        offset: 0.17,
        color: '#468EFD', // 100% 处的颜色
    },
    {
        offset: 0.9,
        color: '#468EFD', // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#5CF9FE', // 100% 处的颜色
    },
]);
var colorSet = [
    [0.91, color],
    [1, '#15337C'],
];
var rich = {
    white: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '500',
        padding: [-150, 0, 0, 0],
    },
    bule: {
        fontSize: 120,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0],
    },
};
option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },

    series: [
      
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '74%',
            startAngle: '360',
            endAngle: '0',
            min: 0,
            max: 100,
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
         
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#00FFFF']],
                    width: 2,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: -44,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false,
            },
        },
      
       
       
        {
            //内圆
            type: 'pie',
            radius: '56%',
            center: ['50%', '50%'],
            z: 1,
            animation:false,

            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(
                        0.5,
                        0.5,
                        0.8,
                        [
                            {
                                offset: 0,
                                color: '#4978EC',
                            },
                            {
                                offset: 0.5,
                                color: '#1E2B57',
                            },
                            {
                                offset: 1,
                                color: '#141F3D',
                            },
                        ],
                        false
                    ),
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [100],
        },
    ],
};
