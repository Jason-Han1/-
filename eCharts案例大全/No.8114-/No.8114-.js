const colorArray = [{
        top: '#ffa800', //黄
        bottom: 'rgba(248,195,248,.3)'
    }, {
        top: '#1ace4a', //绿
        bottom: 'rgba(100,255,249, 0.3)'
    },
    {
        top: '#4bf3ff', //蓝
        bottom: 'rgba(135,183,255,.3)'
    }, {
        top: '#4f9aff', //深蓝
        bottom: 'rgba(11,42,84,.3)'
    },
    {
        top: '#b250ff', //粉
        bottom: 'rgba(100,255,249,.3)'
    }
];

option = {
    backgroundColor: "#38445E",
    tooltip: {
        show: true,
        formatter: '{b} : {c}'
    },
    xAxis: {
        type: 'value',
        show: false,
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: false,
            length: 5,
        },
        inverse: 'true',
        axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
        data: ['合同一', '合同二', '合同三', '合同四', '合同五', '合同六', '合同七']
    },
    series: [{
        type: 'bar',
        label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                }
            },
        data: [120, 200, 150, 80, 70, 110, 130],
        barWidth: '40px',
        barCategoryGap: '50%',
        itemStyle: {
            normal: {
                show: true,
                color: function(params) {
                    let num = colorArray.length;
                    return {
                        type: 'linear',
                        colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }]
                    }
                },
                barBorderRadius: 20,
                borderWidth: 0,
                borderColor: '#333',
            }
        }
    }]
};
