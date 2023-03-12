let list = [{
        name: '类型1',
        value: 20,
        startColor: 'rgba(242, 160, 48, 1)',
        endColor: 'rgba(242, 160, 48, .2)'
    },
    {
        name: '类型2',
        value: 20,
        startColor: 'rgba(46, 201, 163, 1)',
        endColor: 'rgba(46, 201, 163, .2)'
    },
    {
        name: '类型3',
        value: 20,
        startColor: 'rgba(72, 203, 82, 1)',
        endColor: 'rgba(72, 203, 82, .2)'
    },
    {
        name: '类型4',
        value: 20,
        startColor: 'rgba(43, 159, 254, 1)',
        endColor: 'rgba(43, 159, 254, .2)'
    },
    {
        name: '类型5',
        value: 20,
        startColor: 'rgba(109, 65, 232, 1)',
        endColor: 'rgba(109, 65, 232, .2)'
    }
]
let listData = [];
let totalValue = 0;
let listLength = list.length;

list.forEach((item, index) => {
    totalValue = totalValue + item.value;
    listData.push({
        value: item.value,
        name: item.name,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: item.startColor // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: item.endColor // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },

    })
    // totalValue就是算出来隐藏的另一半的值,把它push进数组

    if (index == listLength - 1) {
        listData.push({
            value: totalValue,
            name: '隐藏的一半',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0,0,0,0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,0,0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
        })
    }
})



option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        data: ['类型1', '类型2', '类型3', '类型4', '类型5'],
        icon: "rect",
        itemGap: 24,
        itemWidth: 10,
        itemHeight: 10,
        top:'20%',
        right: '30%',
        orient: "horizontal",
        textStyle: {
            color: "rgba(255,255,255,0.7)",
            fontSize: 18,
            padding: [0, 0, 0, 3],
            fontFamily: "SourceHanSansCN-Regular"
            // lineHeight: 30
        }
    },
    series: [{
        name: '类型分布',
        type: 'pie',
        radius: 300,
        center: ['50%', '100%'],
        startAngle: 180,
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false
            }
        },
        data: listData,

        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',


            }
        }
    }]
};