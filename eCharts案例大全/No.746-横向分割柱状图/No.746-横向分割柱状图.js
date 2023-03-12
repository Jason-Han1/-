let list = [
    {
        name: '农业',
        value: 60.83,
    },
    {
        name: '采矿业',
        value: 21.83,
    },
    {
        name: '制造业',
        value: 12.83,
    },
    {
        name: '建筑业',
        value: 10.83,
    },
    {
        name: '金融业',
        value: 10.83,
    },
    {
        name: '教育',
        value: 8.83,
    },
];

let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 14;

let colorList = [
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 1,
            color: '#bbfbff',
        },
        {
            offset: 0,
            color: '#45c2c9',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 1,
            color: '#f58ac7',
        },
        {
            offset: 0,
            color: '#cf3bae',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 1,
            color: '#dc7815',
        },
        {
            offset: 0,
            color: '#ef4600',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 1,
            color: '#64f9ac',
        },
        {
            offset: 0,
            color: '#68ee8d',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 1,
            color: '#ddff5e',
        },
        {
            offset: 0,
            color: '#f2f349',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 1,
            color: '#45c9fe',
        },
        {
            offset: 0,
            color: '#2c6ff2',
        },
    ]),
];
option = {
    backgroundColor: 'balck',
    // color: colorList,
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    grid: {
        right: 150,
    },
    yAxis: [
        {
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                },
            },
            data: yName,
        },
    ],
    series: [
        {
            //内
            type: 'bar',
            barWidth,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
             color:function(params){
                 return colorList[params.dataIndex]
             }
            },
            data: list,
            z: 1,
        },
        {
            // 背景
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [14, barWidth],
            itemStyle: {
                normal: {
                    color: '#1b346f',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    distance: 30,
                    textStyle: {
                        color: '#7AF8FF',
                        
                    },
                    formatter: function (params) {
                        return '{value|'+params.data+'}{unit|%}';
                    },
                    rich:{
                        value:{
                            fontSize: 24,
                        fontWeight: 600,
                        },
                        unit:{
                            padding:[0,6],
                             fontSize: 14,
                        }
                    }
                },
            },
            data: xData,
            z: 0,
        },
        {
            //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#000',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [4, barWidth + 1],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: list,
            z: 2,
        },
    ],
};
