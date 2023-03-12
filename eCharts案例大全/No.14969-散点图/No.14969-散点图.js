option = {
    color: ['#23cbe5', '#ec561b', '#ffa500', '#dddf00', '#b23aee', '#50b332'],

    legend: {
        itemWidth: 25,
        left: 10,
        data: ['一案双查', '举报', '信访', '巡查', '检查考核', '违纪', ]
    },
    grid: {
        left: '6%',
        bottom: '2%',
        top: '70',
        height: '60%',
        width: '89%'
    },
    xAxis: {
        type: 'category',
        data: ['2013年', '2014年', '2015年', '2016年', '2017年'],
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value',
    },
    series: [

        {
            name: '一案双查',
            type: 'scatter',
            data: [
                ["2013年", 0],
                ['2014年', 0],
                ['2015年', 4],
                ['2016年', 10],
                ['2017年', 0]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.05;
            },

        }, {
            name: '举报',
            type: 'scatter',
            data: [
                ["2013年", 0],
                ['2014年', 0],
                ['2015年', 0],
                ['2016年', 3],
                ['2017年', 2]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.05;
            },

        }, {
            name: '信访',
            type: 'scatter',
            data: [
                ["2013年", 0],
                ['2014年', 0],
                ['2015年', 0],
                ['2016年', 2],
                ['2017年', 1]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.05;
            },
        }, {
            name: '巡查',
            type: 'scatter',
            data: [
                ["2013年", 0],
                ['2014年', 2],
                ['2015年', 20],
                ['2016年', 2],
                ['2017年', 0]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.1;
            },
        }, {
            name: '检查考核',
            type: 'scatter',
            data: [
                ["2013年", 0],
                ['2014年', 0],
                ['2015年', 1],
                ['2016年', 0],
                ['2017年', 2]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.1;
            },
        }, {
            name: '违纪',
            type: 'scatter',
            data: [
                ["2013年", 0],
                ['2014年', 10],
                ['2015年', 13],
                ['2016年', 14],
                ['2017年', 15]
            ],
            symbolSize: function(data) {
                return Math.sqrt(data[1]) / 0.1;
            },
        },
    ]
};