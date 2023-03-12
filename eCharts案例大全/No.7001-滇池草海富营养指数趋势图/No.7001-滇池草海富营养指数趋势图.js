option = {
    backgroundColor: '#fff',
    grid: {
        top: '25%',
        bottom: '25%',
        right: 300
    },
    color: ['#f00', '#00b050', '#0070c0', '#7030a0', '#404040'],
    legend: [{
        data: ['湖库营养指数', ' '],
        "orient": 'vertical', //垂直显示
        left: '75%',
        top: 'center',
        itemGap: 150,
        itemWidth: 30,
        itemHeight: 6,
        textStyle: {
            fontSize: 12,
            color: '#101010',
            fontFamily: 'SimSun',
           
        }
    }, {
        data: ['中营养和富营养分界线', '轻度富营养和中度富营养分界线', '中度富营养和重度富营养分界线', '线性(胡库营养指数)'],
        "orient": 'vertical', //垂直显示
        left: '75%',
        top: 'center',
        icon: 'rect',
        itemWidth: 30,
        itemHeight: 2,
        itemGap: 20,
        textStyle: {
            fontSize: 12,
            color: '#101010',
            fontFamily: 'SimSun'
        }
    }],
    xAxis: {
        type: 'category',
        data: ['2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11', '2019/12', '2020/01', '2020/02', '2020/03', '2020/04', '2020/05', ],
        "axisLabel": {
            "interval": 0,
            "rotate": 40,
            color: '#000'
        },
        boundaryGap: false
    },
    yAxis: {
        "type": 'value',
        max: 75,
        min: 45
    },
    series: [{
            name: '湖库营养指数',
            type: 'line',
            data: [54, 56, 49, 53, 50, 64, 59, 63, 64, 62, 64, 55, 55, 52, 53, 56, 63, 65],
            symbol: 'rect', //取消折点圆圈
            symbolSize: 5,
            symbolRotate: '45',
            zlevel: 10

        },
        {
            name: '中营养和富营养分界线',
            type: 'line',
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            symbol: 'none',
        },
        {
            name: '轻度富营养和中度富营养分界线',
            type: 'line',
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            symbol: 'none',
        },
        {
            name: '中度富营养和重度富营养分界线',
            type: 'line',
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            symbol: 'none',
        },

        {
            name: '线性(胡库营养指数)',
            type: 'line',
            connectNulls: true,
            data: [54, , , , , , , , , , , , , , , , , , , 61.3],
            symbol: 'none',
            lineStyle: {
                width: 1
            }
        },
        { //用于添加一个隐藏得图例来固定第一个图例得位置偏移
            name: ' ',
            itemStyle: {
                color: '#fff'
            },
            type: 'line'
        }
    ]
};