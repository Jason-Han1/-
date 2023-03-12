//本人的影视小站(gaze.run)案例

var name_arrs = [
    '金台铁路',
    '杭海城际',
    '杭温二期',
    '金温改建',
    '湖杭',
    '衢丽',
    '瑞苍',
    '杭绍甬',
    '义东',
    '景文',
    '主通道',
    '杭金衢',
    '临建高速',
    '杭甬复线',
];
option = {
    title: {
        text: '',
        x: 'center',
        y: 'top',
        textAlign: 'left',
    },
    color: ['#1D3039', 'red'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            return params[0].name + ':' + params[0].value;
        },
    },
    xAxis: {
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1D3039',
            },
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'value',
        // min: 0,
        max: 800,
 
    },
    yAxis: {
        name: '',
        type: 'category',
        data: name_arrs,
        //y轴线样式
        axisLine: {
            show: false,
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        axisLabel: {
            margin: 16,
            height: 40,
            color: '#eee',
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: '30',
            data: [
                {
                    value: 140,
                },
                {
                    value: 150,
                },
                {
                    value: 180,
                },
                {
                    value: 200,
                },
                {
                    value: 220,
                },
                {
                    value: 250,
                },
                {
                    value: 250,
                },
                {
                    value: 300,
                },
                {
                    value: 350,
                },
                {
                    value: 400,
                },
                {
                    value: 500,
                },
                {
                    value: 600,
                },
                {
                    value: 700,
                },
                {
                    value: 800,
                },

            ],
            label: {
                normal: {
                    formatter: function (data) {
                        return data.value + '';
                    },
                    show: true,
                    position: 'right',
                    distance: 5,
                    color: 'white',
                    backgroundColor: 'w',
                    padding: 5,
                    borderRadius: 5,
                },
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#6bc0fb',
                            '#7fec9d',
                            '#fedd8b',
                            '#ffa597',
                            '#84e4dd',
                            '#749f83',
                            '#ca8622',
                            '#bda29a',
                            '#a8d8ea',
                            '#aa96da',
                            'green',
                            '#20d180',
                            '#e6cf4e',
                            '#f36c6c',
                            '#95e1d3',
                            '#e3fdfd',
                            '#749f83',
                            '#ca8622',
                        ];
                        return params.dataIndex>=11?colorList[params.dataIndex]: '#0093ff'
                    },
                },
            },
        },
    ],
};
