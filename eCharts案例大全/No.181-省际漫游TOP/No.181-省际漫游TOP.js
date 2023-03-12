option = {
    title: {
        text: '',
    },
    //backgroundColor: 'rgb(24, 3, 98)',
    yAxis: {
        type: 'category',
        inverse: true,
        offset: 20,
        axisLabel: {
            show: true,
            interval: 'auto',
            color: 'rgb(106, 148, 255)',
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['四川省', '广东省', '江苏省', '上海市', '江西省'],
    },
    xAxis: {
        type: 'value',
        offset: 30,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(106, 148, 255)',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: true,
            inside: true,
            length: 10,
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%',
        },
    },
    series: [
        {
            // 上半截柱子
            name: '2019',
            type: 'bar',
            barWidth: '30',
            barGap: '-100%',
            z: 0,
            itemStyle: {
                //lenged文本
                opacity: 1,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: 'rgba(207, 235, 255)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(228, 242, 255)', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: [50, 50, 50, 50, 50],
        },
        {
            //最右圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [10, 30],
            symbolOffset: [5, 0],
            z: 3,
            symbolPosition: 'end',
            itemStyle: {
                color: 'rgb(174, 222, 255)',
                opacity: 1,
            },
            data: [50, 50, 50, 50, 50],
        },
        {
            //下半截柱子
            name: '2020',
            type: 'bar',
            barWidth: 30,
            barGap: '-100%',
            itemStyle: {
                //lenged文本
                opacity: 1,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0, 111, 255)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(29, 227, 255)', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: [32.1, 20.2, 9.5, 4.2, 2.3],
        },
        {
            //数据圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [10, 30],
            symbolOffset: [5, 0], 
            z: 3,
            itemStyle: {
                opacity: 1,
                color: 'rgb(27, 140, 255)'
            },
            symbolPosition: 'end',
            data: [32.1, 20.2, 9.5, 4.2, 2.3],
            label: {
                show: true,
                position: 'left',
                distance: -770,
                formatter: '{c}%'
            },
            
        },
        {
            //最左圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [10, 30],
            symbolOffset: [-10, 0],
            z: 3,
            itemStyle: {
                opacity: 1,
                color: 'rgb(0, 111, 255)'
                //color: '#000'
            },
            symbolPosition: 'end',
            data: [1, 1, 1, 1, 1],
        },
    ],
};
