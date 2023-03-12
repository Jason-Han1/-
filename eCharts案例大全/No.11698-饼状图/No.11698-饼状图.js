var data = [{
        value: 2800,
        name: '1'
    },
    {
        value: 335,
        name: '2'
    },
    {
        value: 315,
        name: '3'
    },
    {
        value: 200,
        name: '4'
    },
    {
        value: 140,
        name: '5'
    },
    {
        value: 335,
        name: '6'
    },
    {
        value: 335,
        name: '7'
    },
    {
        value: 315,
        name: '8'
    },
    {
        value: 200,
        name: '9'
    },
    {
        value: 140,
        name: '10'
    },
    {
        value: 140,
        name: '11'
    },
];
option = {
    backgroundColor: '#333',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}",
        confine: true,
    },
    color: ['#ff9f7e', '#5f71d2', '#f36f8a', '#5fd27b', '#6173d6', '#47dfae',
        '#4ac7f5', '#f36f8a', '#42a4eb', '#426eeb', '#5f71d2', '#f36f8a'
    ],
    legend: { //图例组件，颜色和名字
        left: 'center',
        bottom: '6%',
        itemGap: 6, //图例每项之间的间隔
        itemWidth: 9,
        itemHeight: 9,
        icon: 'circle',
        data: ['1', '2', '3', '4', '5',
            '6', '7', '8', '9',
            '10', '11'
        ],
        textStyle: {
            color: [],
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 10,
        }
    },
    series: [{
        name: '违规次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '45%'], //饼图的中心（圆心）坐标
        radius: ['40%', '80%'], //饼图的半径
        avoidLabelOverlap: true, ////是否启用防止标签重叠
        itemStyle: { //图形样式
            normal: {
                borderColor: '#1e2239',
                borderWidth: 1.5,
            },
        },
        label: { //标签的位置
            normal: {
                show: true,
                position: 'inside', //标签的位置
                formatter: "{d}%",
                textStyle: {
                    color: '#fff',
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontWeight: 'bold'
                }
            }
        },
        data: data
    }, {
        name: '',
        type: 'pie',
        clockwise: false,
        silent: true,
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['50%', '45%'], //饼图的中心（圆心）坐标
        radius: [0, '38%'], //饼图的半径
        itemStyle: { //图形样式
            normal: {
                borderColor: '#1e2239',
                borderWidth: 1.5,
                opacity: 0.21,
            }
        },
        label: { //标签的位置
            normal: {
                show: false,
            }
        },
        data: data
    }]
};