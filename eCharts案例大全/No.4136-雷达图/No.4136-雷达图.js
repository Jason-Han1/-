option = {
    backgroundColor : '#040D36',
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        nameGap:10,
        splitNumber:3,
        splitArea: {
            areaStyle: {
                color: ['rgba(25,110,200,0.4)',
                    'rgba(25,110,200,0.6)',
                ]
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(33,129,218,0.5)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(71,133,220,1)'
            }
        },
        indicator: [
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
            { name: '华润无锡医药有限公司', max: 1000},
        ]
    },
    series: [
        {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data : [
                {
                    value : [400, 500, 800, 700, 500, 900,500,300,800,500],
                    name : '预算分配（Allocated Budget）',
                    areaStyle: {
                        normal: {
                            color: 'rgba(45,197,255,0.9)'
                        }
                    },
                    lineStyle:{
                        width:0,
                        color: 'rgba(45,197,255,0.9)'
                    },
                    itemStyle:{
                        color:"rgba(45,197,255,0.9)"
                    }
                }
            ]
        }
    ]
};