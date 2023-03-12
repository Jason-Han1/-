var dataArr = [
    {
        value: 90,
        name: '已处理工单比率',
    },
];

var color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {
        offset: 0,
        color: '#03E4ED', // 0% 处的颜色
    },
    {
        offset: 0.3,
        color: '#03E4ED', // 100% 处的颜色
    },
    {
        offset: 0.31,
        color: '#03E4ED', // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#03E4ED', // 100% 处的颜色
    },
]);
// 0~50 绿色 51~100 黄色 101~150橙色 151~200 红色 201~300紫色 >300褐红色
var color2 = new echarts.graphic.LinearGradient(1, 1, 0, 0, [
    {
        offset: 0,
        color: '#01cc00', // 0% 处的颜色
    },
    {
        offset: 0.2,
        color: '#feff00', // 100% 处的颜色
    },
    {
        offset: 0.4,
        color: '#ff6501', // 100% 处的颜色
    },
    {
        offset: 0.6,
        color: '#fe0000', // 100% 处的颜色
    },
    
    {
        offset: 0.8,
        color: '#860085', // 100% 处的颜色
    },
    
    {
        offset: 1,
        color: '#800000', // 100% 处的颜色
    },
]);
var colorSet =
    dataArr[0].value <= 30
        ? [
              [dataArr[0].value / 100, color],
              [1, '#D8D8D8'],
          ]
        : [
              [dataArr[0].value / 100, color2],
              [1, '#D8D8D8'],
          ];
var rich = {
    //中心比率数据配置
    a: {
        fontSize: 27,
        color: '#fff',
        fontWeight: '550',
        lineHeight: 50,
    },
    b: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '550',
        lineHeight: 50,
        
    },
    c: {
       color:'#fff',
       textAlign: 'center',
       fontSize:12,
     
    },
};
option = {
    backgroundColor:'#000',
    tooltip: {
        show: false,
    },
    series: [
     
        {
            // 内容 数据指示
            type: 'gauge',
            roundCap: true, //顶端圆角
            radius: '54%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: false,
            },
            detail: {
                formatter: function (value) {
                    return '{a|' + value + ' }{b|优}\n{c|空气质量指数}';
                },
                rich: rich,
                offsetCenter: ['0%', '0%'],
            },
            data: dataArr,
            title: {
                show: false,
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 20,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 20,
                    shadowBlur: 15,
                    shadowColor: '#D8D8D8',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            //白色圈刻度
            name: '白色圈刻度',
            type: 'gauge',
            radius: '52%',
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            z: 2,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 20, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: '#fff',
                }, //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 66,
            }, //刻度节点文字颜色
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
    ],
};
