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
                color: '#0336ff' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#01b4ff' // 100% 处的颜色
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
                color: '#ef6e18' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#fcc204' // 100% 处的颜色
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
                color: '#4eff67' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#089109' // 100% 处的颜色
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
                color: '#bb2bac' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#ff4cc6' // 100% 处的颜色
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
                color: '#00c6ff' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#01a3fd' // 100% 处的颜色
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
                color: '#6054ff' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#6054ff' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    }
]
var data = [{
    total: 21,
    legendName: ["新闻类", "体育类", "娱乐类", "游戏类", "'财经类'", '其他'],
    list: [{
        name: "新闻类",
        value: 2
    }, {
        name: "体育类",
        value: 3
    }, {
        name: "娱乐类",
        value: 4
    }, {
        name: "游戏类",
        value: 5
    }, {
        name: "财经类",
        value: 3
    }, {
        name: "其他",
        value: 4
    }]

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
        left: '43%',
        top: '48%',
        textStyle: {
            color: '#2e95f3',
            fontSize: 12,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 16,
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
        orient: 'vertical',
        x: 'right',
        y: 'top',
        data: data[0].legendName
    },
    calculable: true,
    series: [{
        name: '故障类型',
        type: 'pie',
        label: {
            //悬浮提示文字
            normal: {
                formatter: '{b} \n  {c} ({d}%)',
                textStyle: {
                    fontSize: 14,
                    color: '#2e95f3'
                }
            }
        },
        radius: [100, 280],
        center: ['45%', '50%'],
        roseType: 'area',
        data: data[0].list
    }]
};