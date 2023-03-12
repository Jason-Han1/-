
var timeData = [
    '21:00',
    '21:05',
    '21:10',
    '21:15',
    '21:20',
    '21:25',
    '21:30',
    '21:35',
    '21:40',
    '21:45',
    '21:50',
    '21:55',
    '22:00',
    '22:05',
    '22:10',
    '22:15',
    '22:20',
    '22:25',
    '22:30',
    '22:35',
    '22:40',
    '22:45',
];

timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});

option = {
    title: {
        text: '7月27日《中国好声音》观众流入流出规模图',
        subtext: '数据来自欢网TV Zone',
        x:'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['流入','流出'],
        x: 'left'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 100,
        right: 100,
        height: '35%'
    }, {
        left: 100,
        right: 100,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '流入',
            type : 'value',
            max : 1500
        },
        {
            gridIndex: 1,
            name : '流出',
            type : 'value',
            max :1500, 
            inverse: true
        }
    ],
            visualMap: {
            bottom: 50,
            right: 0,
            pieces: [{
                gt: 0,
                lte: 100,
                color: '#90A691'
            }, {
                gt: 100,
                lte: 300,
                color: '#ABD6E0'
            }, {
                gt: 300,
                lte: 500,
                color: '#FFDF78'
            }, {
                gt: 500,
                lte: 1000,
                color: '#E93C35'
            }, {
                gt: 1000,
                color: '#B57795'
            }],
            outOfRange: {
                color: '#999'
            }
        },
    series : [
        {
            name:'流入',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [
                571,522,633,675,424,384,514,482,274,357,659,1244,567,227,196,148,142,101,250,147,110,31,
            ]
        },
        {
            name:'流出',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[
                211,555,348,225,306,351,246,288,579,915,234,341,406,897,620,361,317,512,413,174,508,88,
            ]
        }
        
    ]
};