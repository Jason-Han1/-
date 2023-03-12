// 中间类目两侧图标
var uploadedDataURL1 = '/asset/get/s/data-1626854852589-8B5aNWrgJ.png';
var uploadedDataURL3 = '/asset/get/s/data-1626854824240-gmEmXmoBy.png';
// 柱图圆形label
var uploadedDataURL2 = '/asset/get/s/data-1626854841001-zYQ5-0UJv.png';
var uploadedDataURL4 = '/asset/get/s/data-1626854809739-dWVqRNs_Z.png';

let data1 = [1, 2, 3, 4, 5, 6, 7];
let data2 = [1, 2, 3, 4, 5, 6, 7];
let max1 = Math.max.apply(null, data1);
let max2 = Math.max.apply(null, data2);
let max = Math.max.apply(null, [max1, max2]) * 1.2;
let maxArr = [];
// 统一两边长度
data1.forEach((item) => {
    maxArr.push(max);
});
let categoryData = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];
option = {
    baseOption: {
        backgroundColor: '#000',
        timeline: {
            show: false,
            top: 0,
            data: [],
        },
        grid: [
            // 左边柱子
            {
                show: true,
                left: '1%',
                top: '3%',
                bottom: '2%',
                containLabel: true,
                width: '40%',
                backgroundColor: {
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(37, 89, 119,0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(37, 89, 119,0.2)',
                        },
                    ],
                }, //'rgba(37, 89, 119,0.2)'
                borderColor: 'transparent',
            },
            // 中间年龄
            {
                show: false,
                left: '51%',
                top: '3%',
                bottom: '2%',
                width: '0%',
            },
            // 右边柱子
            {
                show: true,

                right: '1%',
                top: '3%',
                bottom: '2%',
                containLabel: true,
                width: '40%',
                backgroundColor: {
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(37, 89, 119,0.2)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(37, 89, 119,0)',
                        },
                    ],
                },
                borderColor: 'transparent',
            },
        ],
        xAxis: [
            {
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    color: '#08093f',
                },
                splitLine: {
                    show: false,
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    color: '#08093f',
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: categoryData,
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'center',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    formatter: (params) => {
                        return '{left|}{text|' + params + '}{right|}';
                    },
                    rich: {
                        left: {
                            width: 10,
                            height: 2,
                            backgroundColor: {
                                image: uploadedDataURL3,
                            },
                        },
                        right: {
                            width: 10,
                            height: 2,
                            backgroundColor: {
                                image: uploadedDataURL1,
                            },
                        },
                        text: {
                            width: 35,
                            padding: [0, 5, 0, 5],
                        },
                    },
                    textStyle: {
                        align: 'center',
                        color: '#fff',
                        fontSize: 12,
                    },
                },
                data: categoryData,
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: categoryData,
            },
        ],
        series: [],
    },
    options: [
        {
            series: [
                {
                    name: '背景1',
                    type: 'bar',
                    barWidth: 4,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    z: -10,
                    barGap: '-100%',
                    barCategoryGap: 0,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: 'rgb(30,44,59)',
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: (params) => {
                                return data1[params.dataIndex];
                            },
                            position: 'left',
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 12,
                            },
                            offset: [0, 0],
                        },
                    },
                    data: maxArr,
                },
                {
                    name: '2017',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    barWidth: 4,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: {
                                type: 'linear',

                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgb(113,97,75)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(196,185,90)',
                                    },
                                ],
                            },
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: (params) => {
                                return '';
                            },
                            position: [-6, -6],
                            padding: [8, 8],
                            backgroundColor: {
                                image: uploadedDataURL4,
                            },
                        },
                    },
                    data: data1,
                },
                {
                    name: '背景2',
                    type: 'bar',
                    barWidth: 4,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    z: -10,
                    barGap: '-100%',
                    barCategoryGap: 0,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: 'rgb(30,44,59)',
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: (params) => {
                                return data2[params.dataIndex];
                            },
                            position: 'right',
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 12,
                            },
                            // offset: [0, -25]
                        },
                    },
                    data: maxArr,
                },
                {
                    name: '2018',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 4,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: {
                                type: 'linear',

                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#12AEFF',
                                    },
                                    {
                                        offset: 1,
                                        color: '#11FFFC',
                                    },
                                ],
                            },
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: (params) => {
                                return '';
                            },
                            position: ['100%', -6],
                            padding: [8, 8],
                            offset: [-10, 0],
                            backgroundColor: {
                                image: uploadedDataURL2,
                            },
                        },
                    },
                    data: data2,
                },
            ],
        },
    ],
};
