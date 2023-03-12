/*
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
重要的事情说三遍，没有脸的可以直接cv发布哈
*/

option = {
    backgroundColor: '#2a548f',
    title: {
        text: '班级考勤质量排行',
        x: '10', // 水平安放位置，默认为左对齐，可选为：
        y: '10', // 垂直安放位置，默认为全图顶端，可选为：
        padding: 0, // 标题内边距，单位px，默认各方向内边距为5，
        // 接受数组分别设定上右下左边距，同css
        itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#00CAE6', // 主标题文字颜色
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '1%',
        right: '10%',
        top: '10%',
        bottom: '2%',
        containLabel: true,
    },
    xAxis: {
        show: false,
        type: 'value',
        name: '万人',
        nameTextStyle: {
            color: '#fff',
            fontSize: 10,
            verticalAlign: 'bottom',
        },
        nameLocation: 'end',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
            },
            formatter: function (v) {
                return parseInt(v); // 表示整数。其他数值类型以此类推
            },
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12,
        },
    },
    series: [
        {
            name: '班级应到人数',
            type: 'bar',
            barGap: '-65%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                    fontSize: 14,
                    formatter: function (param) {
                        // console.info();
                        return param.data[0];
                    },
                },
            },
            barWidth: '32%',
            itemStyle: {
                normal: {
                    borderColor: '#00CAE6',
                    borderWidth: 2,
                    barBorderRadius: 15,
                    color: 'rgba(102, 102, 102,0)',
                },
            },
            z: 1,
            // data的元素有名称重复时，柱子会出现重叠，请自行处理
            data: [
                [200, '班级1'],
                [210, '班级2'],
                [220, '班级3'],
                [230, '班级4'],
                [235, '班级5'],
                [240, '班级6'],
                [260, '班级7'],
            ],
        },
        {
            name: '班级实到人数',
            type: 'bar',
            barGap: '-85%',
            barWidth: '21%',
            itemStyle: {
                normal: {
                    barBorderRadius: 16,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'RGB(32, 132, 183)',
                        },
                        {
                            offset: 1,
                            color: '#00CAE6',
                        },
                    ]),
                },
            },
            max: 1,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                show: true,
            },
            z: 2,
            // data的元素有名称重复时，柱子会出现重叠，请自行处理
            data: [
                [100, '班级1'],
                [110, '班级2'],
                [120, '班级3'],
                [130, '班级4'],
                [135, '班级5'],
                [140, '班级6'],
                [160, '班级7'],
            ],
        },
    ],
};
