option = {
    backgroundColor: '#080b30',
    title: {
        text: '68%',
        textStyle: {
            color: '#d3d5d6',
            fontSize: 14,
            fontWeight: 'normal'
        },
        padding:[6,6,2,6],
        backgroundColor: '#44b2d5',
        borderRadius: 25,
        top: '49%',
        x: '34%'
    },
    grid: {
        top: '10%',
        // left: '5%',
        // right: '5%',
        bottom: '15%',
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            color: '#d3d5d6',
            fontSize: 16,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        name: '单位 / kwh',
        nameTextStyle: {
             color: '#d2d2d2',
             fontSize: 16,
             padding: [0, 0, 20, -20],
             lineHeight: 24
        },
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#05365d',
                width: 2
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#d3d5d6',
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name: '外出',
            type: 'line',
            // symbol: 'none',  //取消折点圆圈
            smooth: 'false',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: "#05cbe5",
                borderColor: "#fff",
                borderWidth: 2
            },
            lineStyle: {
                width: 4,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#072942'
                    },
                    {
                        offset: 1,
                        color: '#05cbe5'
                    }
                ]),
                shadowColor: '#05cbe5',
                shadowBlur: 40,
            },
            tooltip: {
                show: false
            },
            data: [22,25,42,57,57,41,24]
            // data: [
            //     {value:22},
            //     {value:25},
            //     {value:42,label:{show:true,position: 'top'}},
            //     {value:57},
            //     {value:57},
            //     {value:41},
            //     {value:24}
            // ]
        },
    ]
};