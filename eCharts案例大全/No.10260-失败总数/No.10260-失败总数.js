option = {
    backgroundColor: '#fff',
    title: {
        text: '报警总量',
        subtext: '31242',
        x: 'center',
        y: '41%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#999999',
        },
        subtextStyle: {
            fontSize: 22,
            color: '#1890ff'
        },
    },
color: ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6','#ff9f7e', '#5f71d2', '#f36f8a', '#5fd27b', '#6173d6', '#47dfae',
        '#4ac7f5', '#f36f8a', '#42a4eb', '#426eeb', '#5f71d2', '#f36f8a'
    ],
    legend: {
        orient: "horizontal",
        x: "center",
        top: "bottom",

        itemWidth: 12,
        itemHeight: 12,
        itemGap: 16,

    },

    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}：{c}个<br/>占比：({d}%)"
    },
    series: [{
        itemStyle: { //图形样式
            normal: {
                borderColor: '#ffffff',
                borderWidth: 4,
            },
        },
        type: 'pie',

        stillShowZeroSum: true,
        radius: ['60%', '84%'],
        label: {
            normal: {
                position: 'inner',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 110,
            name: '信息',
            itemStyle: {
                


            }
        }, {
            value: 222,
            name: '灾难',
            itemStyle: {
               


            }
        }, {
            value: 113,
            name: '严重',
            itemStyle: {
               

            }
        }, {
            value: 122,
            name: '未分类',
            itemStyle: {
               


            }
        }, {
            value: 122,
            name: '告警',
            itemStyle: {
               


            }
        }, {
            value: 132,
            name: '一般严重',
            itemStyle: {
               


            }
        }]
    }]
};