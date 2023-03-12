var minVal = 0;
var maxVal = 700;
option = {
    backgroundColor:"#0B1837",
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            fontSize: 18,
        },
        formatter: "{a} <br/> {b} : {c}万对 ",
    },
    legend: {
        top: '0',
        right: '3%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            fontSize: 14,
            // fontFamily: 'CRegular',
            fontFamily: '黑体',
        },
    },
    grid:{
        top: '20%',
        left:'10%',
        right:'4%',
        bottom:'15%'
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
        axisPointer: {
            type: 'shadow'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#92714d'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#92714d',
                opacity: 0.5,
                type: 'solid'
            }
        },
        axisLabel: {
            textStyle: {
                // color: '#7d8ab6',
                fontFamily: 'FZHTJW',
                color: '#ffffff',
                fontSize: 14,
            },
            margin: 8
        },
    }],
    yAxis: [{
        type: 'value',
        name: '（万对）       ',
        nameGap: 10,
        nameTextStyle:{
            color: '#bebebe',
            fontFamily: '黑体',
            fontSize: 14,
        },
        min: minVal,
        max: maxVal,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontFamily: 'FZHTJW',
                color: '#ffffff',
                fontSize: 14,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#92714d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#92714d',
                opacity: 0.2,
                type: 'solid',
            }
        },
    }],
    series: [{
        name: '结婚登记',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                // color: '#b764c9',
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#66a6e9'},
                        {offset: 1, color: '#3c619b'}
                    ]
                )
            }
        },
        data: [459.5, 461, 465.8, 463.9, 460.5, 458.1, 473.9, 480.5, 438.1],
        // data: dataArray1,
    }, {
        name: '离婚登记',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                // color: '#20cfdb',
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#f6e18f'},
                        {offset: 1, color: '#b47c3f'}
                    ]
                )
            }
        },
        data: [238.7,219.9,211.1,212.5,210.7,219.0,252.5,240.7,229.0],
        // data: dataArray2,
    }]
};