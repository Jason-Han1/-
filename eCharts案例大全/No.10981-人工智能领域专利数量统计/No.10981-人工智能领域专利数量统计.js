option = {
    title: {
        text: "人工智能领域专利数量统计",
        textStyle: {
            color: "#000"
        }
    },
    tooltip: {
        trigger: 'axis',


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
    }],
    series: [
        // {
        //     name: '论文',
        //     type: 'bar',
        //     label: {
        //         show: true,
        //     },
        //     data: [12870, 14362, 13715, 13981, 12473, 10810, 10917, 10185, 9931]
        // },
        {
            name: '专利',
            type: 'line',
            label: {
                show: true,
                fontSize: 18,
                position:'left'
            },
            data: [2994, 3426, 4266, 4393, 6172, 6717, 9149, 10644, 8437]
        }
    ]
};