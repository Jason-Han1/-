// let levels = ['严重', '高危', '中危', '低危'];

let serious = [56]; // 严重等级的总数
let highRisk = [15]; // 高危等级的总数
let MediumRisk = [78]; // 中危等级的总数
let LowRisk = [153]; // 低危等级的总数
let max = serious[0] + highRisk[0] + MediumRisk[0] + LowRisk[0]; // 首先计算出所有等级的总数

// 指定图表的配置项和数据
option = {
    /*tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },*/
    /*legend: {
        data: levels,
    },*/
    /*grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true,
    },*/
    xAxis: {
        type: 'value',
        max: max,
        show: false,
    },
    yAxis: {
        type: 'category',
        show: false,
        data: [''],
    },
    series: [
        {
            name: '严重',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            itemStyle: {
                normal: {
                    color: '#d98986',
                },
            },
            data: serious,
        },
        {
            name: '高危',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            itemStyle: {
                normal: {
                    color: '#f3b77b',
                },
            },
            data: highRisk,
        },
        {
            name: '中危',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            itemStyle: {
                normal: {
                    color: '#f8c955',
                },
            },
            data: MediumRisk,
        },
        {
            name: '低危',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            itemStyle: {
                normal: {
                    color: '#82b4a3',
                },
            },
            data: LowRisk,
        },
    ],
};
