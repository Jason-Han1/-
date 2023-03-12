option = {
    backgroundColor: '#030F1F',
    title:{
        show:true,
        text:'自定义图例',
        textStyle: { 
            fontFamily: 'Arial, Verdana',
            fontSize: 20,
            color:'#ffffff'
        }
    },
    legend: [
        {
            show: true,
            textStyle: {
                color: '#fff',
            },
            top: '2%',
            itemWidth: 20,
            itemHeight: 14,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#ffff',
            },
            right: '5%',
            data: ['商品数量'],
        },
        {
            show: true,
            textStyle: {
                color: '#fff',
            },
            top: '2%',
            itemWidth: 20,
            itemHeight: 14,
            right: '15%',
            data: ['销售额'],
        },
    ],
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 12,
            textStyle: {
                margin: 8,
            },
            interval: 0,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#80C3F5',
            },
        },
        data: ['CAD', 'SKR', 'ERO', 'SSS', 'JCR', 'LMK', 'TCFF', 'DSN'],
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 3,
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted',
                    color: '#80C3F5',
                },
                symbolOffset: 100,
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 12,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#80C3F5',
                },
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            min: 0,
            splitNumber: 3,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted',
                    color: '#80C3F5',
                },
                symbolOffset: 100,
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 12,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#80C3F5',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '商品数量',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#F11557',
                    borderColor: '#fff',
                    borderWidth: 1,
                },
            },
            lineStyle: {
                shadowColor: '#F11557',
                shadowBlur: 8,
            },
            tooltip: {
                show: false,
            },
            yAxisIndex: 1,
            data: [5, 8, 4, 6, 7, 9, 7, 3],
        },
        {
            name: '销售额',
            type: 'bar',
            showAllSymbol: true,
            barWidth: 24,
            label: {
                show: true,
                position: 'top',
                color: '#ffffff',
            },
            itemStyle: {
                normal: {
                    color: '#1741FE',
                },
            },
            lineStyle: {
                shadowColor: '#1741FE',
                shadowBlur: 8,
            },
            tooltip: {
                show: false,
            },
            data: [80, 120, 60, 110, 90, 148, 89, 50],
        },
    ],
};
