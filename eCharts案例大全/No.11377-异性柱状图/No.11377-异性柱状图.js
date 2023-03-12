var titlename = ['宿州', '合肥', '芜湖'];
var valdata = [683, 343, 555]
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
option =  {
        title: '',
        xAxis: [{
            type: 'category',
            show: false,
            axisLabel: {
                textStyle: {
                    color: '#b6b5ab'
                }
            }
        },
        {
            type: 'category',
            position: "bottom",
            data: titlename,
            boundaryGap: true,
            // offset: 40,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#666666'
                }
            }
        }

        ],
        yAxis: [{
            show: false,
            offset: 52,
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                color: '#b6b5ab'
            }
        }, {
            show: false,
            type: "value",
            name: "合格率(%)",
            nameTextStyle: {
                color: '#ccc'
            },
            axisLabel: {
                color: '#ccc'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        color: ['#e54035'],
        series: [{
            name: '训练人次',
            type: 'pictorialBar',
            xAxisIndex: 1,
            barCategoryGap: '-80%',
            // barCategoryGap: '-5%',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = [
                            '#159AF3', '#04BFA2',
                            '#7C38E9', '#F5D243',
                            '#EA6E5B', 'rgba(29,103,182,0.6)'
                        ];
                        return colorList[params.dataIndex];
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: valdata,
        },

        ]
    };