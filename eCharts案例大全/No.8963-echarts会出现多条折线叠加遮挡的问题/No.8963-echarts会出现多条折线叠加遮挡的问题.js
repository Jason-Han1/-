var colors = ['#FE7676', '#51EE80', '#48BCF8', '#F8AC48'];
option = {
    color: colors,
    legend: {
        selectedMode: true,
        // #ifdef APP-PLUS
        left: 10,
        itemGap: 65,
        itemWidth: 20
        // #endif
    },
    tooltip: {
        trigger: 'axis',
        showContent: true,
        confine: true,
        backgroundColor: 'rgba(0,0,0,0)',
        smooth: true,
        textStyle: {
            color: "#333333",
        },
        position: ['38%', '10%']
    },
    grid: {
        top: '40%'
    },
    dataset: {
        source: {
            '类型': ['9/24', '9/25', '9/26', '9/27', '9/28', '9/29'],
            '衣物干洗': [2, 3, 5, 1, 5, 9],
            '奢侈品护理': [3, 5, 4, 4, 1, 5],
            '家电清洗': [2, 5, 1, 3, 5, 7],
            '窗帘清洗': [1, 0, 3, 1, 4, 1]
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row'
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row'
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row'
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row'
        },
    ]
};