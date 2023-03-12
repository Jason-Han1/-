option = {
       title: {
        text: '其中考试数学考试波动较大的学生',
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
            formatter: '{value}',
        }
    },
    yAxis: {
        "axisLabel": {
            "interval": 0,
            fontSize: 18,
        },
        type: 'category',
        data: ['高一三班陈晓丽',
            '高二四班刘明鑫',
            '高一五班沈国栋',
            '高三六班刘佳丽',
            '高二四班郭力行',
            '高一十班张三',
            '高一七班李刚',
            
        ].reverse()
    },
    series: [{
        name: '分数',
        type: 'bar',
        barCategoryGap: '30%',
        data: [18, 15, 13, 12, 11.1, 10.9, 9.8, ].reverse(),

    }]
};