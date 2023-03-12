option = {
    polar: {
        show:false,
        tooltip:{
            show:false
        }
    },
    angleAxis: {
        min: 0,
        max: 360,
        interval: 30,
        startAngle: 90,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
            show:false
        }
    },
    radiusAxis: {
        min: 0,
        max: 200,
        // interval: 2,
        show:false
    },
    title: {
        show:false,
        text: '南丁格尔玫瑰图',
        subtext: '南丁格尔玫瑰图',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show:false,
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: false
    },
    calculable: true,
    series: [
        {
            name:'外围圆盘',
            type: 'pie',
            radius: ['77%', '79%'],
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle:{
                color: '#383539'
            },
            data: [{
                    value: 1,
                    name: 'rose1'
                }
            ],
            animation:false,
            tooltip:{
                show:false
            },
            hoverAnimation:false,
            silent:true
        },
        {
            name:'外围圆盘',
            type: 'pie',
            radius: [0, '75%'],
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle:{
                color: '#383539'
            },
            data: [{
                    value: 1,
                    name: 'rose1'
                },
                {
                    value: 1,
                    name: 'rose2'
                },
                {
                    value: 1,
                    name: 'rose3'
                },
                {
                    value: 1,
                    name: 'rose4'
                },
                {
                    value: 1,
                    name: 'rose5'
                },
                {
                    value: 1,
                    name: 'rose6'
                },
                {
                    value: 1,
                    name: 'rose7'
                },
                {
                    value: 1,
                    name: 'rose8'
                },
                {
                    value: 1,
                    name: 'rose9'
                },{
                    value: 1,
                    name: 'rose10'
                },{
                    value: 1,
                    name: 'rose11'
                },{
                    value: 1,
                    name: 'rose12'
                }
            ],
            animation:false,
            tooltip:{
                show:false
            },
            hoverAnimation:false,
            silent:true
        },
        
        {
            stack:'a',
            type: 'pie',
            radius: ['20%', '61.8%'],
            roseType: 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle:{
                color: function(params) {
                    console.log(params,'params')
                            var colorList = [
                                "#a71a4f", "#bc1540", "#c71b1b", "#d93824", "#ce4018", "#d15122", "#e7741b", "#e58b3d", "#e59524", "#dc9e31", "#da9c2d", "#d2b130", "#bbd337", "#8cc13f", "#67b52d", "#53b440", "#48af54", "#479c7f", "#48a698", "#57868c"
                            ];
                            return colorList[params.dataIndex]
                        },
            },
            data: [{
                    value: 5156,
                    name: '一月份-10x'
                },
                {
                    value: 5233,
                    name: '二月份-10x'
                },
                {
                    value: 6984,
                    name: '三月份-10x'
                },
                {
                    value: 8221,
                    name: '四月份-10x'
                },
                {
                    value: 7730,
                    name: '五月份-10x'
                },
                {
                    value: 7847,
                    name: '六月份-10x'
                },
                {
                    value: 9028,
                    name: '七月份-10x'
                },
                {
                    value: 7167,
                    name: '八月份-10x'
                },
                {
                    value: 6630,
                    name: '九月份-10x'
                },{
                    value: 5898,
                    name: '十月份-10x'
                },{
                    value: 6073,
                    name: '十一月份-10x'
                },{
                    value: 0,
                    name: '十二月份-10x'
                }
         ]
        }, 
        {
            stack:'a',
            type: 'pie',
            radius: ['20%', '75%'],
            roseType: 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                    value: 1748,
                    name: '一月份-1_3s'
                },
                {
                    value: 1511,
                    name: '二月份-1_3s'
                },
                {
                    value: 1480,
                    name: '三月份-1_3s'
                },
                {
                    value: 1781,
                    name: '四月份-1_3s'
                },
                {
                    value: 2220,
                    name: '五月份-1_3s'
                },
                {
                    value: 2189,
                    name: '六月份-1_3s'
                },
                {
                    value: 4826,
                    name: '七月份-1_3s'
                },
                {
                    value: 11859,
                    name: '八月份-1_3s'
                },
                {
                    value: 5174,
                    name: '九月份-1_3s'
                },{
                    value: 1942,
                    name: '十月份-1_3s'
                },{
                    value: 1410,
                    name: '十一月份-1_3s'
                },{
                    value: 0,
                    name: '十二月份-1_3s'
                }
         ]
        },
        {
            stack:'a',
            type: 'pie',
            radius: ['20%', '31%'],
            roseType: 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                    value: 227,
                    name: '一月份-2_2S'
                },
                {
                    value: 270,
                    name: '二月份-2_2S'
                },
                {
                    value: 351,
                    name: '三月份-2_2S'
                },
                {
                    value: 307,
                    name: '四月份-2_2S'
                },
                {
                    value: 394,
                    name: '五月份-2_2S'
                },
                {
                    value: 554,
                    name: '六月份-2_2S'
                },
                {
                    value: 571,
                    name: '七月份-2_2S'
                },
                {
                    value: 2386,
                    name: '八月份-2_2S'
                },
                {
                    value: 859,
                    name: '九月份-2_2S'
                },{
                    value: 404,
                    name: '十月份-2_2S'
                },{
                    value: 212,
                    name: '十一月份-2_2S'
                },{
                    value: 0,
                    name: '十二月份-2_2S'
                }
         ]
        },
        {
            stack:'a',
            type: 'pie',
            radius: ['20%', '21.1%'],
            roseType: 'area',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                    value: 95,
                    name: '一月份-4_1S'
                },
                {
                    value: 102,
                    name: '二月份-4_1S'
                },
                {
                    value: 175,
                    name: '三月份-4_1S'
                },
                {
                    value: 192,
                    name: '四月份-4_1S'
                },
                {
                    value: 213,
                    name: '五月份-4_1S'
                },
                {
                    value: 254,
                    name: '六月份-4_1S'
                },
                {
                    value: 264,
                    name: '七月份-4_1S'
                },
                {
                    value: 273,
                    name: '八月份-4_1S'
                },
                {
                    value: 281,
                    name: '九月份-4_1S'
                },{
                    value: 218,
                    name: '十月份-4_1S'
                },{
                    value: 200,
                    name: '十一月份-4_1S'
                },{
                    value: 0,
                    name: '十二月份-4_1S'
                }
         ]
        },
    
        {
            name: '内圆盘底色',
            type: 'pie',
            clockWise: false,
            radius: [0, '19%'],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return '#3e588b'
                    },
                    label: {
                        show: false

                    },
                },
            },
            tooltip:{
                show:false
            },
            silent:true,
            animation:false,
            data: [
                [8221, '一月']

            ]

        }
    ]
}