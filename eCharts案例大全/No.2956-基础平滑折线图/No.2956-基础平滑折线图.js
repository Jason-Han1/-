option = {
      title: {
        text: '折线图堆叠'
    },
    legend: {
        itemWidth: 30,
        itemHeight: 15,
        data: ['aaaaaaaaaa', 'bbbbbbbbbbb'],
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#BDBDBD',
            },
        },
        axisLabel: {
            interval: 4,
        },
    },
    yAxis: {
        type: 'value',
        name:'ccccccc',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#BDBDBD',
            align: 'right',
             lineHeight: 16,
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLine: {
            show: false, //y轴线消失
        },

        axisTick: {
            show: false, //y轴坐标点消失
        },
        axisLabel: {
            textStyle: {
                color: '#BDBDBD',
            },
        },
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            symbolSize: 10, //设定实心点的大小
            name: 'bbbbbbbbbbb',

            type: 'line',
            smooth: true,
            label: {
                show: true, //开启显示
                position: 'top',
                textStyle: {
                    //数值样式
                    color: 'grey',
                    fontSize: 15,
                },
            },
            color: '#4DB6AC',
        },
        {
            data: [620, 332, 801, 734, 1090, 1130, 1100],
            type: 'line',
            smooth: true,
            symbolSize: 10, //设定实心点的大小
            name: 'aaaaaaaaaa',

            color: '#FFCA28',
            label: {
                show: true, //开启显示
                position: 'top',
                textStyle: {
                    //数值样式
                    color: 'grey',
                    fontSize: 15,
                },
            },
        },
    ],
};
