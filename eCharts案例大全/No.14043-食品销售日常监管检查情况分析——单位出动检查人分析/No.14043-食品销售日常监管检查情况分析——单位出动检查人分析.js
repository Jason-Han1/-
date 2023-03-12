option = {
    backgroundColor: '#ffffff',
    title:{
        text:'单位出动检查人分析',
        left:'left'
    },
    legend: {
        top: 30,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['出动检查人次数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },
            data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','东盟开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']
        }
        
    ],
    series: [{
            name: '出动检查人次数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#049781',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [32,42,44,55,60,77,80,106,111,121,138,152,169,185,190,197]
        }]
};