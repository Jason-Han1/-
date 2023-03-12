option = {
    backgroundColor: '#062544',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
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
            color: '#45D0E3',
        },
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 25,
    },
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
                color: '#45D0E3',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                width: 1,
                color: '#45D0E3',
            },
        },
        axisLabel: {
            margin: 8,
            interval: 'auto',
            rotate: 0,
            fontSize: 14,
            color: '#45D0E3',
        },
        data: ['2021/09/01', '2021/09/02', '2021/09/03', '2021/09/04', '2021/09/05', '2021/09/06', '2021/09/07', '2021/09/08', '2021/09/09', '2021/09/10', '2021/09/11'],
    },
     yAxis: [
        {
            show: true,
            type: 'value',
            name: '',
            min: 0,
            nameTextStyle: {
                color: '#45D0E3',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#45D0E3',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value} ',
                rotate: 0,
                textStyle: {
                    color: '#45D0E3',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#45D0E3',
                },
            },
        },
    ],
     series: [
        {name: '实际完工数',
            type: 'bar',
            barWidth : 10 ,
            itemStyle: {
              normal: {
                color: '#45D0E3',
                borderColor: '',
                borderWidth: 0,
              },
            },
            label: {
                show: true,
                rotate: 0,
                color: '#45D0E3',
                position: 'top',
                fontSize: 12,
            },
            data: [67, 97, 80, 76, 52, 63, 24, 97, 56, 78, 84, 45,]
          },
        
    ],
};