var data = [{
        value: 335,
        name: '超速'
    },
    {
        value: 335,
        name: '急减速'
    },
    {
        value: 315,
        name: '飞站'
    },
    {
        value: 200,
        name: '带速开关门'
    },
    {
        value: 140,
        name: '急加速'
    }
];

option = {
    color: ['#fd9173', '#f36f8a', '#5f71d2', '#42a4eb', '#4ac7f5'],
    legend: { //图例组件，颜色和名字
        right: '5%',
        top: '43%',
        orient: 'vertical',
        itemWidth: 12,
        itemHeight: 12,
        data: ['超速', '急减速', '飞站', '带速开关门', '急加速'],
        textStyle: {
            fontStyle: 'normal',
            fontSize: 14,
        }
    },
    series: [{
        name: '违规次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['30%', '50%'], //饼图的中心（圆心）坐标
        radius: [60, 90], //饼图的半径
        avoidLabelOverlap: false,
        itemStyle: { //图形样式
            normal: {
                borderColor: '#ffffff',
                borderWidth: 3,
            },
        },
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{text|{b}}\n{value|{d}%}',
                rich: {
                    text: {
                        color: "#F2A695",
                        fontSize: 20,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 5
                    },
                    value: {
                        color: "#F2A695",
                        fontSize: 14,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '46',
                }
            }
        },
        data: data
    }]
};

myChart.setOption(option);

setTimeout(function() {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });

    myChart.on('mouseover', function(params) {
        if (params.name == data[0].name) {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        } else {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 0
            });
        }
    });

    myChart.on('mouseout', function(params) {
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    });
}, 1000);