option = {
    title: {
        text: 'Chart',
    },
    legend: {
        icon: 'rect',
        // itemHeight: 5,
        // itemWidth: 5,
    },
    xAxis: {
        data: ['浙江', '江苏', '安徽', '湖南', '湖北', '四川', '江西', '上海', '重庆'],
    },
    yAxis: {},
    series: [
        {
            data: [6610],
            stack: 'total', // (string) 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            name: '浙江',
            type: 'bar',
        },
        {
            data: [0, 4660],
            stack: 'total',
            name: '江苏',
            type: 'bar',
        },
        {
            data: [0, 0, 2610],
            stack: 'total',
            name: '安徽',
            type: 'bar',
        },
        {
            data: [0, 0, 0, 7610],
            stack: 'total',
            name: '湖南',
            type: 'bar',
        },
        {
            data: [0, 0, 0, 0, 9010],
            stack: 'total',
            name: '湖北',
            type: 'bar',
        },
        {
            data: [0, 0, 0, 0, 0, 3610],
            stack: 'total',
            name: '四川',
            type: 'bar',
        },
        {
            data: [0, 0, 0, 0, 0, 0, 4210],
            stack: 'total',
            name: '江西',
            type: 'bar',
        },
        {
            data: [0, 0, 0, 0, 0, 0, 0, 5210],
            stack: 'total',
            name: '上海',
            type: 'bar',
        },
        {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 2210],
            stack: 'total',
            name: '重庆',
            type: 'bar',
        },
    ],
};
