option = {
       title: {
        text: '期末数学考试考点得分率排行',
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
        data: ['函数概念',
            '三角函数',
            '解析几何',
            '立体几何',
            '概率论',
            '导数',
            
        ].reverse()
    },
    series: [{
        name: '得分率',
        type: 'bar',
        barCategoryGap: '30%',
        data: [85, 83, 82, 80, 79, 79, 75, ].reverse(),

    }]
};