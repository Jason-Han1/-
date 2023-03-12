option = {
    baseOption: {
        timeline: {
            // show: false,
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            data: ['1', '2', '3', '4', '5', '6'],
        },
        toolbox: { show: false },
        backgroundStyle: { color: '#F5A623FF', opacity: 0.1 },
        label: { show: true, position: 'right' },
        title: { text: '' },
        tooltip: { trigger: 'axis', showDelay: 0, transitionDuration: 0 },
        legend: {
            show: true,
            icon: 'rect',
            textStyle: { color: '' },
            top: 100,
            itemWidth: 10,
            itemHeight: 5,
            data: ['访问量', '业务量'],
        },
        grid: { top: 40, left: 40, right: 40, bottom: 20, containLabel: true },
        xAxis: {
            show: false,
            name: '',
            axisLabel: { rotate: 0 },
            axisLine: {},
            axisTick: {},
            splitLine: { lineStyle: {} },
            animationDuration: 300,
            animationDurationUpdate: 300,
            nameTextStyle: {},
            type: 'value',
        },
        yAxis: {
            animationDuration: 1000,
            animationDurationUpdate: 1000,
            show: true,
            name: '',
            axisLabel: { rotate: 0 },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: {} },
            nameTextStyle: {},
            type: 'category',
            boundaryGap: true,
            // data: ['微信', '柜面', '网厅', '自助终端', '门户网站'],
        },
        series: [
            {
                name: '访问量',
                type: 'bar',
                showBackground: true,
                backgroundStyle: { color: '#F5A623FF', opacity: 0.1 },
                showSymbol: false,
                smooth: false,
                step: false,
                barWidth: 15,
            },
            {
                name: '业务量',
                type: 'bar',
                showBackground: true,
                backgroundStyle: { color: '#F5A623FF', opacity: 0.1 },
                showSymbol: false,
                smooth: false,
                step: false,
                barWidth: 15,
            },
        ],
        animationDuration: 0,
        animationDurationUpdate: 1000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        isHorizon: true,
        barWidth: 15,
        color: ['#FFAF42', '#FF2830'],
        showBackground: true,
    },
    options: [
        {
            yAxis: {
                data: ['微信', '柜面', '网厅', '自助终端', '门户网站'],
            },
            series: [
                {
                    data: [1, 2, 3, 4, 5],
                },
                {
                    data: [1, 2, 3, 4, 5],
                },
            ],
        },
        {
            yAxis: {
                data: ['柜面', '网厅', '自助终端', '门户网站', '微信'],
            },
            series: [
                {
                    data: [2, 3, 4, 5,  1],
                },
                {
                    data: [2, 3, 4, 5,  1],
                },
            ],
        },
        {
            yAxis: {
                data: ['网厅', '自助终端', '门户网站', '微信', '柜面'],
            },
            series: [
                {
                    data: [3, 4, 5,  1, 2],
                },
                {
                    data: [3, 4, 5,  1, 2],
                },
            ],
        },
        {
            yAxis: {
                data: ['自助终端', '门户网站', '微信', '柜面', '网厅'],
            },
            series: [
                {
                    data: [4, 5,  1, 2, 3],
                },
                {
                    data: [4, 5,  1, 2, 3],
                },
            ],
        },
        {
            yAxis: {
                data: ['门户网站', '微信', '柜面', '网厅', '自助终端'],
            },
            series: [
                {
                    data: [5,  1, 2, 3, 4],
                },
                {
                    data: [5,  1, 2, 3, 4],
                },
            ],
        }
    ],
};
