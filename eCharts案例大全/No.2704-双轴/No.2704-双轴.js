
option = {
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
   
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '49%',
        height: '35%'
    }],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            offset: 15,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            nameGap:40,
            axisLabel:{
              show:false  
            },
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            position: 'top'
        }
    ],
    yAxis: [
        {
            type: 'value',
        },
        {
            gridIndex: 1,
            type: 'value',
            inverse: true
        }
    ],
    series: [
        {
            name: '流量',
            type: 'line',
            symbolSize: 8,
            hoverAnimation: false,
             data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            name: '降雨量',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
             data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    ]
};