data = [
        {
            value: 100,
            name: '未执行',
        },
        {
            value: 100,
            name: '已执行',
        },
        {
            value: 90,
            name: '执行中',
        },
    ],
    option = {
        backgroundColor: '#022457',
        color: ['#1fe5ea', '#1daeff', '#f4e051'],
        legend: {
            top: '10%',
            left: '3%',
            icon: 'rect',
            orient: 'vertical',
            itemGap: 30,
            formatter: (name) => {
                const item = data.filter((item) => item.name === name)[0];
                if (name === '未执行') {
                    option.legend.textStyle.rich.value.color = '#1fe5ea';
                    return '{title|' + name + '}\n{value|' + item.value + '}{title|条}';
                }
                if (name === '已执行') {
                    option.legend.textStyle.rich.value.color = '#1fe5ea';
                    return '{title|' + name + '}\n{value1|' + item.value + '}{title|条}';
                }
                if (name === '执行中') {
                    option.legend.textStyle.rich.value.color = '#1fe5ea';
                    return '{title|' + name + '}\n{value2|' + item.value + '}{title|条}';
                }
            },
            textStyle: {
                rich: {
                    title: {
                        color: '#fff',
                        fontSize: 20,
                        padding:[3,0]
                    },
                    value: {
                        fontSize: 22,
                        lineHeight: 20,
                        color: '#1fe5ea',
                    },
                    value1: {
                        fontSize: 22,
                        lineHeight: 20,
                        color: '#1daeff',
                    },
                    value2: {
                        fontSize: 22,
                        lineHeight: 20,
                        color: '#f4e051',
                    },
                },
            },
            data: data,
        },
        title: [
            {
                text: 290,
                subtext: '计划总数',
                top: '42%',
                left: '49%',
                textAlign: 'center',
                itemGap: 30,
                subtextStyle: {
                    color: '#fff',
                    fontSize: 42,
                    align: 'center',
                },
                textStyle: {
                    color: '#f4e051',
                    fontSize: 44,
                },
            },
        ],
        series: [
            //环形
            {
                name: '基础饼图',
                type: 'pie',
                radius: ['45%', '52%'],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                zlevel: 1,
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
                data: data,
            },
            //环形分割线
            {
                name: '分割线',
                type: 'gauge',
                radius: '55%',
                clockwise: true,
                startAngle: '90',
                center: ['50%', '50%'],
                endAngle: '-269.9999',
                splitNumber: 22,
                zlevel: 2,
                detail: {
                    offsetCenter: [10, 20],
                    formatter: ' ',
                },
                axisLine: {
                    lineStyle: {
                        width: 0,
                        opacity: 0,
                    },
                },
                axisTick: {
                    show: false,
                },
                markArea: {
                    itemStyle: {
                        color: '#0f0',
                    },
                },
                splitLine: {
                    show: true,
                    length: 32,
                    padding: [0, 0, 0],
                    lineStyle: {
                        color: '#022457',
                        width: 3,
                    },
                },
                axisLabel: {
                    show: false,
                },
            },
            {
                type: 'pie',
                name: '内层细圆环',
                radius: ['40%', '41%'],
                center: ['50%', '50%'],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: '#fff',
                    },
                },
                label: {
                    show: false,
                },
                data: [100],
            },
        ],
    };
