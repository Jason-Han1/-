option = {
     "color": [
            "#516b91",
            "#59c4e6",
            "#edafda",
            "#93b7e3",
            "#a5e7f0",
            "#cbb0e3"
        ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        orient: 'horizontal',
        y: 30,
        data: ['增加', '减少', '汇总']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: 70,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['项目收入', '土地成本', '开发成本', '开发费用', '税金','项目损益']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '汇总',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [97776906, '-', '-', '-', '-',103242635]
        },
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            // data: [0, 97776906, 102352413, 103816575, 103242635, 0]
            data: ['-', 97776906, 102352413, 103242635, 103242635, '-']
        },
        {
            name: '减少',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', 4575507, 1464162, 573940,573940, '-']
        },
    ]
};