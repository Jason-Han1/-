option = {
       title: {
        text: '物理考试失分考点排行',
        textStyle: {
            fontSize: 25,
            fontWeight: 'normal',
            color: '#fff',
        },
        x: 'center'
    },
    backgroundColor: "#05224d",
    color: ["#28ffb3"],
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        //formatter: "{a} <br/>{b} : {c}%"
    },

    grid: {

        containLabel: true
    },
    xAxis: {

        type: 'value',
        boundaryGap: [0, 0.01],
        "axisLabel": {
            "interval": 0,
            fontSize: 18,
            formatter: '{value}%',
        }
    },
    yAxis: {
        "axisLabel": {
            "interval": 0,
            fontSize: 18,
        },
        type: 'category',
        data: ['受力分析',
            '电磁学',
            '光学',
            '圆周运动',
            '牛顿三大定律'
            
        ].reverse()
    },
    series: [{
        name: '失分率',
        type: 'bar',
        barCategoryGap: '30%',
        data: [40, 38, 36, 36, 35].reverse(),

    }]
};