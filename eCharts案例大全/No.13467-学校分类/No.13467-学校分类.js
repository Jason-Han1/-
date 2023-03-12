// 图表渲染参数开始
var total = {
    value: '200',
    name: '主机(台)',
};

var option = {
    color: ['#3ab7ff', '#87da7b', '#ffdb56', '#ff7a74', '#bfa4fa'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 60,
        top: 2,
        bottom: 10,
        itemGap: 15,
        itemWidth: 8,
        itemHeight: 8,
        data: ['班牌', '监控', '录播', '校徽', '电子书包'],
        textStyle: {
            fontSize: '13',
            color: '#000',
        },
    },
    title: [
        {
            text: total.value,
            left: '28%',
            top: '35%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#000',
                fontWeight: 'normal',
                fontSize: 25,
            },
        },
        {
            text: total.name,
            left: '60%',
            top: '45%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#B3B3B3',
                fontWeight: 'normal',
                fontSize: 13,
            },
        },
    ],
    series: [
        {
            name: '具体数值',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['30%', '40%'],
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 3,
                },
            },

            label: {
                normal: {
                    show: true,
                    formatter: '{b}\n{d}%',
                },
            },
            labelLine: {
                normal: {
                    show: true,
                },
            },
            data: [
                { value: 335, name: '班牌' },
                { value: 310, name: '监控' },
                { value: 234, name: '录播' },
                { value: 195, name: '校徽' },
                { value: 548, name: '电子书包' },
            ],
        },
    ],
};
