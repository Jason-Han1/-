option = {
    title: {
        text: 'Awesome Chart',
    },
    legend: {
        type: 'plain',
        show: true,
        top: 0,
        left: '50%',
        data: [
            {
                name: '工单数量',
                icon: 'rect',
            },
            {
                name: '平均处理时长',
                icon: 'rect',
            },
        ],
    },
    xAxis: {
        data: [
            {
                value: '石家庄',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '邢台',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '沧州',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '廊坊',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '唐山',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '秦皇岛',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '张家口',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '城的',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '衡水',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '保定',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '雄安',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
            {
                value: '山嘎',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                },
            },
        ],

        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            name: '工单数量',
            data: [220, 182, 191, 234, 290, 330, 310, 100, 200, 140, 67, 2],
            showBackground: true,
            barCategoryGap: '80%',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#0a9ae0', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#28d9dd', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
                borderColor: '#0d8ccc',
            },
        },
        {
            type: 'line',
            name: '平均处理时长',
            data: [100, 234, 290, 300, 91, 67, 182, 100, 67, 200, 330, 290],
            symbol: 'emptyCircle',
            symbolSize: 6,
            itemStyle: {
                color: '#ff9800',
            },
            areaStyle: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: 'rgba(255,125,0,.4)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,255,255, 0)',
                        },
                    ],
                    false
                ),
            },
        },
    ],
};
