option = {
    backgroundColor: "#ffffff",
    color: ["#EA9948"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a} <br/>{b} :人"
    },

    grid: {
       
        containLabel: true
    },
    xAxis: {
        type: 'value',
       // boundaryGap: [0, 0.01],
        "axisLabel": {
            "interval": 0,
            formatter: '{value}',
        }
    },
    yAxis: {
        type: 'category',
        data: ['清华大学',
            '北京大学',
            '复旦大学',
            '上海交通大学',
            '同济大学',
            '浙江大学',
             '中国人民大学',
            '北京外国语大学',
            '中山大学',
            '上海财经大学',
        ].reverse()
    },
    series: [{
        name: '',
        type: 'bar',
      //  barCategoryGap: '30%',
        data: [977, 972, 744,710, 697, 437, 304, 252, 200, 102].reverse()
    }]
};