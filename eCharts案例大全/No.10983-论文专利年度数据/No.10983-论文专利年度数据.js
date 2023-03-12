option = {
    title: {
        text: "人工智能领域论文数量统计",
        textStyle: {
            color: "#000"
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }

    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        name: '年份',
        type: 'category',
        axisLabel: {
            fontSize: 18
        },
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
    }],
    yAxis: [{
        type: 'value',
        name: '数量',
        axisLabel: {
            fontSize: 18
        },
    }, ],
    series: [{
            name: '论文',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                color:'#000',
                position:'top'
            },
            data: [9931, 10185, 10917, 10810, 12473, 13981, 13715, 14362, 12870]
        },
        // {
        //     name: '专利',
        //     type: 'line',
        //     label: {
        //         show: true,
        //     },
        //     data: [8437, 10644, 9149, 6717, 6172, 4393, 4266, 3426, 2994]
        // }
    ]
};