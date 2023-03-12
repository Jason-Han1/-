option = {
    backgroundColor: '#ffffff',
    title:{
        text:'单位检查情况',
         subtext: '区县级',
        left:'left'
    },
    legend: {
        top: 50,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['违法违规企业数','检查企业数','完成整改企业数']
    },
    grid: {
        left: '3%',
        right: '20%',
        top:75,
         bottom: '1%',
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
            }, data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','东盟开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']

        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','东盟开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']
}

    ],
    series: [{
            name: '违法违规企业数',
            type: 'bar',
            barWidth : 7,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#EE7621',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [207,232,160,204,255,228,221,204,195,192,192,176,187,233,170,241]
        },{
            name: '检查企业数',
            type: 'bar',
            barWidth : 7,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#5793f3',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:[347,486,389,467,498,437,311,326,438,302,394,310,440,394,394,494]
        },{
            name: '完成整改企业数',
            type: 'bar',
            barWidth : 7,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#4EEE94',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60,73,70,69,71,72,54,54,72,54,61,79,72,71,79,66]
        }]
};