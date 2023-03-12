option = {
    title: {
        text: '初次举报反映的问题类别分布图',
        left: 'center',
        bottom: 0
    },
    graphic: [{
            type: 'group',
            top: 20,
            left: '23%',
            children: [{
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    shape: {
                        width: 100,
                        height: 30
                    },
                    style: {
                        fill: '#b1d2a2',
                        stroke: '#f79646',
                        lineWidth: 2,
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#333',
                        text: [
                            '违反党纪问题',
                        ].join('\n'),
                        font: '14px Microsoft YaHei'
                    }
                }
            ]
        },
        {
            type: 'group',
            top: 20,
            left: '62%',
            children: [{
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    shape: {
                        width: 155,
                        height: 30
                    },
                    style: {
                        fill: '#b1d2a2',
                        stroke: '#f79646',
                        lineWidth: 2,
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#333',
                        text: [
                            '职务违法职务犯罪问题',
                        ].join('\n'),
                        font: '14px Microsoft YaHei'
                    }
                }
            ]
        },
        {
            type: 'group',
            top: 20,
            right: '5%',
            children: [{
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    shape: {
                        width: 70,
                        height: 30
                    },
                    style: {
                        fill: '#b1d2a2',
                        stroke: '#f79646',
                        lineWidth: 2,
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#333',
                        text: [
                            '其他问题',
                        ].join('\n'),
                        font: '14px Microsoft YaHei'
                    }
                }
            ]
        }
    ],
    grid: {
        left: 50,
        right: 50,
        bottom: 120
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: '' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, ticket, callback) {
            if (params[0].data) {
                return params[0].name + '<br/>' + params[0].marker + params[0].data;
            } else {
                return '';
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['政治纪律', '组织纪律', '廉洁纪律', '群众纪律',
            '工作纪律', '生活纪律', '', '贪污贿赂', '滥用职权',
            '其他职务违法犯罪', '', '其他违法犯罪'
        ],
        axisLabel: {
            rotate: 45
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, , 130, 200, 150, , 400],
        type: 'bar',
        barWidth: 20, //柱图宽度
        itemStyle: {
            normal: {
                // 定制显示（按顺序）
                color: function(params) {
                    // var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ];
                    var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3'];
                    var colrIndex = (params.dataIndex / (colorList.length - 1) > 1) ? (params.dataIndex % colorList.length) : params.dataIndex;
                    return colorList[colrIndex]
                }
            },
        },
    }]
}