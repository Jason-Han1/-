option = {

    title: {
        text: '左侧柱状图',
        left: '50%',
        textAlign: 'center',

    },
    color: ['#95c7ff'],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: null // 默认为直线，可选为：'line' | 'shadow'
        },
        //backgroundColor: 'rgba(255,255,255,1)',
        //padding: [5, 10],
        //textStyle: {
        //color: '#7588E4',
        //},

        //formatter: '<div style="text-align: center;">流失用户金币分布</div>{b}  :  {c}'
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '10%'
    },
    xAxis: [{
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        //boundaryGap: true,

        splitLine: {
            show: false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            //margin: 5,
            textStyle: {
                fontSize: 14
                    //color:"rgba(255, 255, 255, .75)"
            }
        },
        data: [
            '射阳县', '盐都区',
            '滨海县', '阜宁县',
            '东台市', '亭湖区',
            '大丰区', '响水县', '建湖县'
        ].reverse()
    }],
    series: [{
        name: 'GDP增长率',
        type: 'bar',
        stack: '总量',
        barWidth: '60%',
        itemStyle:{
            normal:{
                color:'#1072ef'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}%'
            }
        },
        data: [8.2, 7.9, 7.2, 6.8, 6.5, 6.3, 6, 5.6, 5].reverse()
    }]
};


myChart.setOption(option);