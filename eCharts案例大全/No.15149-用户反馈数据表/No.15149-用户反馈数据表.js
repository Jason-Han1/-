
var timeData = ['5-21', '5-22', '5-23', '5-24', '5-25', '5-26', '5-27',
        '5-28', '5-29', '5-30','5-31','6-1',
        '6-2', '6-3', '6-4', '6-5', '6-6', '6-7',
        '6-8', '6-9', '6-10', '6-11', '6-12', '6-13'];
        
        

timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});

option = {
    title: {
        bottom:5,
        text: '用户反馈数据表',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + '位<br/>';
        },
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['用户排名','关注排名','汽车之家用户评分','XX网用户评分','YY网用户评分'],
        x: 'left'
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
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : true,
            axisLine: {onZero: true},
            data: timeData,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '用户排名',
            type : 'value',
            min:60
        },
        {
            gridIndex: 0,
            name : '关注排名',
            type : 'value',
            min:0,
            max:10
        },
        {
            gridIndex: 1,
            name : '用户评分',
            type : 'value',
            min:4,
            max:5
        }
    ],
    series : [
        {
            name:'用户排名',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[
               67,68,67,68,69,70,71,72,73,72,70,71,70,69,68,67,67,66,65,65,66,68,70,71
            ]
        },
        {
            name:'关注排名',
            type:'line',
            symbolSize: 8,
            yAxisIndex:1,
            xAxisIndex:0,
            hoverAnimation: false,
            data: [
               1,1,1,2,1,1,1,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3
            ]
        },
        {
            name:'汽车之家用户评分',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 2,
            data:[
              4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.4
            ]
        },
        {
            name:'XX网用户评分',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 2,
            data:[
              4.5,4.5,4.5,4.8,4.8, 4.5,4.4,4.7,4.6,4.8, 4.2,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.1,4.7, 4.6,4.4,4.9,4.2,4.4
            ]
        },
        {
            name:'YY网用户评分',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 2,
            data:[
              4.5,4.2,4.5,4.6,4.1, 4.5,4.4,4.5,4.3,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.3,4.5,4.6,4.1, 4.5,4.4,4.9,4.4,4.4
            ]
        }
    ]
};