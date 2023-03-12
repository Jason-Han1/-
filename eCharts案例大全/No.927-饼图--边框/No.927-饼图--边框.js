option = {
    backgroundColor: '#000',
    color: ['#02f0fe', '#14bcff', '#0054ff', '#ffd684', '#5c30fc', '#2489ff'],
    title: {
        text: '32%',
        subtext: '信息产业',
        textStyle: {
            color: '#02f0fe',
            fontSize: 26,
            // align: 'center'
        },
        subtextStyle: {
            fontSize: 12,
            color: ['#fff'],
        },
        x: 'center',
        y: '25%',
    },
    grid: {
        bottom: 150,
        left: 1,
        right: '10%',
    },
    legend: {
        icon: 'circle',
        data: ['信息产业', '科研服务', '金融服务', '交通服务', '农林牧鱼', '文化教育'],
        bottom: 20,
        left: 50,
        textStyle: {
            color: '#fff',
        },
        itemGap: 20,
    },
    series: [
        // 主要展示层的
        {
            radius: ['40%', '61%'],
            center: ['50%', '35%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#1d42a7',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            name: '民警训练总量',
            data: [
                {
                    name: '信息产业',
                    value: 10,
                },
                {
                    name: '科研服务',
                    value: 10,
                },
                {
                    name: '金融服务',
                    value: 10,
                },
                {
                    name: '交通服务',
                    value: 10,
                },
                {
                    name: '农林牧鱼',
                    value: 10,
                },
                {
                    name: '文化教育',
                    value: 20,
                },
            ],
        },
    ],
};
