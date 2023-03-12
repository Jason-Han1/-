let cityData = ['city1', 'city2', 'city3', 'city4', 'city5', 'city6', 'city7', 'city8', 'city9', 'city10', 'city11', 'city12'];

option = {
    color: ['#FDD692', '#EC7357'],
    title: {
        text: `XXX不同等级霾过程发生次数统计`,
        top: '10%',
        x: 'center',
        textStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#30465D'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        width: '50%',
        top: '20%',
        left: '10%',
        right: '10%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#30465D'
            }
        },
        data: cityData
    }],
    yAxis: [{
        name: '次数',
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#30465D'
            }
        },
        nameTextStyle: {
            fontSize: 14,
            color: '#30465D'
        },
        minInterval: 1
    }],
    series: [{
            name: '中度霾',
            type: 'bar',
            stack: '1',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
        {
            name: '重度霾',
            type: 'bar',
            stack: '1',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
        {
            type: 'pie',
            radius: [0, '40%'],
            center: ['80%', '50%'],
            label: {
                position: 'inside',
                formatter: '{b}:{d}%',
                color: '#30465D'
            },
            labelLine: {
                length: 5,
                length2: 5
            },
            data: [{
                    name: '中度霾',
                    value: '50'
                },
                {
                    name: '重度霾',
                    value: '50'
                }
            ]
        }
    ]
};