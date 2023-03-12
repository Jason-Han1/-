option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '20px',
        right: '20px',
        bottom: '60px',
        top: '16%',
        containLabel: true,
    },
    legend: {
        left: 'center',
        top: '5%',
        textStyle: {
            color: '#000',
        },
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 25,
    },
    dataZoom: [
        {
            show: true,
            height: 18,
            xAxisIndex: [0],
            bottom: 20,
            start: 0,
            end: 100,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '100%',
            handleStyle: {
                color: 'rgba(255, 255, 255,1',
            },
            textStyle: {
                color: '#909399',
                fontSize: 12,
            },
            fillerColor: '#CBCED4',
            borderColor: 'rgba(255, 255, 255,1)',
            backgroundColor: '#F0F2F5',
            showDataShadow: true,
            brushSelect: false,
        },
        {
            type: 'inside',
            disabled: false,
        },
    ],
    xAxis: {
        show: true,
        type: 'category',
        name: '',
        nameLocation: 'end',
        nameTextStyle: {
            fontSize: 14,
        },
        inverse: false,
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: '#000',
                width: 1,
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                type: 'solid',
                width: 1,
                color: '#909399',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                width: 1,
                color: '#909399',
            },
        },
        axisLabel: {
            margin: 8,
            interval: 'auto',
            rotate: 0,
            fontSize: 14,
            color: '#909399',
        },
        data: ['2021/09/01', '2021/09/02', '2021/09/03', '2021/09/04', '2021/09/05', '2021/09/06', '2021/09/07', '2021/09/08'],
    },
    yAxis: [
        {
            show: true,
            type: 'value',
            name: '',
            min: 0,
            nameTextStyle: {
                color: '#909399',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#909399',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value} %',
                rotate: 0,
                textStyle: {
                    color: '#909399',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#e4e7ed',
                },
            },
        },
    ],
    series: [
        {name: '开机率',
            type: 'line',
            lineStyle: {
                    type: 'solid',
                    color: '#419fff'},
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#FFFFFF',
                borderColor: '#419fff',
                borderWidth: 2,
              },
            },
            data: [67, 97, 80, 76, 52, 63, 24, 13],
          },
       
        {name: '稼动率',
            type: 'line',
                        lineStyle: {
                    type: 'solid',
                    color: '#5C41FF'},
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#FFFFFF',
                borderColor: '#5C41FF',
                borderWidth: 2,
              },
            },
            data: [63, 86, 63, 62, 36, 51, 56, 22],
        },
        
    ],
};
