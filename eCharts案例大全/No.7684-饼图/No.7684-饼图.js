var colors = [
    //渐变颜色
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#6648FF' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#6648FF' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#4346D3' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#4346D3' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#F7517F' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#F7517F' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#2D99FF' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#2D99FF' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#3F4357' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#3F4357' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#16CEB9' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#16CEB9' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    }
]
var data = [{
    total: 21,
    legendName: ["新闻类", "体育类", "娱乐类", "游戏类", "财经类", '其他6', '其他7', '其他8', '其他9', '其他10', '其他11', '其他12'],
    list: [
        {
            name: "新闻类",
            value: 12
        }, {
            name: "体育类",
            value: 11
        }, {
            name: "娱乐类",
            value: 10
        }, {
            name: "游戏类",
            value: 9
        }, {
            name: "财经类",
            value: 8
        }, {
            name: "其他6",
            value: 7
        }, {
            name: "其他7",
            value: 6
        }, {
            name: "其他8",
            value: 5
        }, {
            name: "其他9",
            value: 4
        }, {
            name: "其他10",
            value: 3
        }, {
            name: "其他11",
            value: 2
        }, {
            name: "其他12",
            value: 1
        }
    ]

}]
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: colors,
    title: {
        //中间文字定位需要自己再次调整
        text: '总数量',
        subtext: data[0].total + '个',
        left: '47%',
        top: '47%',
        textStyle: {
            color: '#2e95f3',
            fontSize: 12,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 18,
            color: ['#2e95f3']
        }
    },
    legend: {
        //图例
        show: true,
        textStyle: {
            color: '#2e95f3'
        },
        itemGap: 10,
        x: 'left',
        y: 'top',
        data: data[0].legendName
    },
    calculable: true,
    series: [
        {
            name: '接警数量',
            type: 'pie',
            label: {
                // 悬浮提示文字
                normal: {
                    show: false,
                    formatter: '{b} \n  {c} ({d}%)',
                    textStyle: {
                        fontSize: 14,
                        color: '#2e95f3'
                    }
                }
            },
            radius: [50, '90%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data: data[0].list
        }
    ]
};