option = {
    title: {
        text: '甘特图测试',
        x: '甘特图测试'
    },
    yAxis: [{
        type: "category",
        data: ["项目确定", "问卷设计", "试访", "问卷确定", "实地执行", "数据录入", "数据分析"]
    }],
    xAxis: [{
        type: 'value',
        axisLabel: {
            formatter: function(value) {
                var end_time = 1418428800000;
                var start_time = 1417392000000;
                var date = [];
                var i = 1;
                while (end_time > start_time) {
                    var date_formatter = new Date(start_time);
                    var date_time = (date_formatter.getFullYear() + "-" + (date_formatter.getMonth() + 1) + "-" + date_formatter.getDate());
                    date.push(date_time);
                    start_time = start_time + i * 24 * 60 * 60 * 1000;
                }
                console.log(date);
                return date[value * 1];
            }
        },
    }],
    series: [{
            name: "辅助",
            type: "bar",
            stack: "总",
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1, 2, 3, 4, 5, 6]
        },
        {
            name: "项目确定",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [3, 0, 0, 0, 0, 0, 0]
        },
        {
            name: "问卷设计",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [0, 4, 0, 0, 0, 0, 0]
        },
        {
            name: "试访",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [0, 0, 2, 0, 0, 0, 0]
        },
        {
            name: "问卷确定",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [0, 0, 0, 5, 0, 0, 0]
        },
        {
            name: "实地执行",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [0, 0, 0, 0, 4, 0, 0]
        },
        {
            name: "数据录入",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [0, 0, 0, 0, 0, 2, 0]
        },
        {
            name: "数据分析",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [0, 0, 0, 0, 0, 0, 3]
        },
        {
            name: "当前",
            type: "scatter",
            symbolSize: 20,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: '#e1694b',
                    opacity: 1,
                }
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        }
    ]
};