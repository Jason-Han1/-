var emojis = ['打call', '泪', '允悲', 'doge', '笑cry', '心', '哈哈'];
var times = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
var data = [
    //[开始时间，持续时长 ]
    [9.6, 12.3],
    [8.5, 10],
    [5.6, 13.8],
    [8, 23.2],
    [9.2, 16.8],

];
var barHeight = 57;

option = {
    title: {
        text: 'weibo',
        subtext: 'weibo'
    },
    legend: { //标签
        show: true,
        data: ['热搜时长']
    },
    grid: { //位置
        top: 10,
        show: true
    },
    angleAxis: {
        type: 'category',
        data: emojis,
        boundaryGap: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#111',
                type: 'dotted',
                opacity: 0.4
            }
        },

    },
    tooltip: { //辅助参数 
        show: true,
        formatter: function(params) {
            var id = params.dataIndex;
            return emojis[id] + '<br>开始：' + data[id][0] + '<br>持续：' + data[id][1];
        }
    },
    radiusAxis: {
        type: 'category',
        data: times,
        axisLine: {
            show: false //半径
        },
        //axisLabel: {}

    },
    polar: {},
    series: [{
            type: 'bar',
            itemStyle: {
                color: '#000000'
            },
            data: data.map(function(d) {
                return d[0];
            }),
            coordinateSystem: 'polar',
            // stack: '最大最小值',
            //    silent: true
        },
        {
            type: 'bar',
            data: data.map(function(d) {
                return d[1] - d[0];
            }),
            coordinateSystem: 'polar',
            name: '热搜时长',
            stack: '最大最小值'
        },
        // {
        //     type: 'bar',
        //     itemStyle: {
        //         color: 'transparent'
        //     },
        //     data: data.map(function(d) {
        //         return d[2] - barHeight;
        //     }),
        //     coordinateSystem: 'polar',
        //     stack: '均值',
        //     silent: false,
        //     z: 1
        // }, 
        // {
        //     type: 'bar',
        //     data: data.map(function(d) {
        //         return barHeight * 2;
        //     }),
        //     coordinateSystem: 'polar',
        //     name: '均值',
        //     stack: '均值',
        //     barGap: '1',
        //     z: 10
        // }
    ]
};