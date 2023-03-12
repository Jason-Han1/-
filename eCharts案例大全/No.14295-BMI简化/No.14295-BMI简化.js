option = {
    name:'BMI简化',
    backgroundColor: '#ffffff',
    title: {
        text: 'BMI\n25', //最近一次体重
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#6b94ff',
        },
        left: '2%',
        top: '5%'
    },
    grid: {
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['9.23', '10.3', '10.11', '10.15', '10.26', '11.2'],
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        show: false,
        min: 27.7, //最低为最低值减0.3
        max: 29, //最高为最高值加0.5
    }],
    series: [{
        name: 'BMI',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 5,
                color: '#6b94ff',
            }
        },

        data: [28, 28.3, 28, 28.3, 28, 27.9]
    }, ]
};