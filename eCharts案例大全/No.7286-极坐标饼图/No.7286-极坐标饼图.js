option = {
    tooltip: {
        trigger: 'item',
           formatter: (p) => {
          return p.name + '：' + p.value + '%';
        },
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0B4A6B',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16,
        },
    },
    radiusAxis: {
        // min: 0,
        // max: 100,
        // interval: 20,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1379de',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: true,
            padding: [0, 0, 20, 0],
            color: '#094e92',
            fontSize: 16,
        },
        splitLine: {
            lineStyle: {
                color: '#094e92',
                width: 2,
                type: 'solid',
            },
        },
    },
    calculable: true,
 
     series: [{
        coordinateSystem: 'polar',
        type: 'bar',
        // radius: '75%',
        // roseType: 'area',
        zlevel: 10,
        label: {
            normal: {
                show: false,
                formatter: '{c}',
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside',
            },
            emphasis: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55,
            },
            emphasis: {
                show: false,
            },
        },
        data: [{
                value: 30,
                name: '大型综合体',
                itemStyle: {
                    color: '#027fff'
                }
            },
            {
                value: 25,
                name: '九小场所',
                itemStyle: {
                    color: '#029dff'
                }
            },
            {
                value: 15,
                name: '工矿企业',
                itemStyle: {
                    color: '#02deff'
                }
            },
            {
                value: 15,
                name: '商场',
                itemStyle: {
                    color: '#00ffde'
                }
            },
            {
                value: 10,
                name: '医院',
                itemStyle: {
                    color: '#0dab97'
                }
            },
            {
                value: 5,
                name: '其他',
                itemStyle: {
                    color: '#1e6abc'
                }
            },
        ]
    }, ],
};