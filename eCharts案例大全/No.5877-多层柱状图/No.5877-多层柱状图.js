option = {
    backgroundColor: '#fff',
    color: ['#ffcd80', '#22d7bb', '#2dbcff'],
    grid: {
        top: "67",
        left: "32",
        bottom: "15",
        right: "39",
        containLabel: true
    },
    legend: {
        show: true,
        top: 15,
        data: ['较差', '一般', '较好'],
        textStyle: {
            color: "#788aa4"
        },
        width:8,
        height:8,
    },
    xAxis: [{
        type: "category",
        data: ["综合", "听力", "口语", "阅读", "写作"],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            lineStyle: {
                color: '#d2d2d2',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: "value",
       axisLabel: {
            textStyle: {
                color: "#999",
                fontSize: 10
            },
            formatter: "{value}"
        },
        minInterval:1,
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
            name: '较差',
            type: 'bar',
            barWidth: "6",
           data: [3,6,10,6,1]
        },
        {
            name: '一般',
            type: 'bar',
            barWidth: "6",
            data: [8,4,3,2,1]
        },
        {
            name: '较好',
            type: 'bar',
            barWidth: "6",
            data: [5,2,3,1,3]
        }
    ]
};