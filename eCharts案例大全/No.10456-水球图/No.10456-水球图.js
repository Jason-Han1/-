option = {
        title: {
            top: '45%',
            left: 'center',
            text: "异常比例",
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12
            },
            subtext: '70.34%',
            subtextStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'item',
            // formatter: function (res) {
            //     console.log(res)

            //     if (res.componentSubType == 'liquidFill') {
            //         return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
            //     } else {
            //         return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value + ' (' + res.percent + '%)<br/> ' + res.data.explain;
            //     }
            // }
        },
        series: [{
            type: 'liquidFill',
            data: ["0.6", "0.6", "0.6", "0.6", "0.6", "0.6", "0.6", "0.6", "0.6"],
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: '#9395BE'
                }
            },
            backgroundStyle: {
                borderWidth: 1,
                borderColor: '#0a0917',
                color: ["transparent"]
            },
            center: ['50%', '50%'],
            radius: '60%',
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: '#9395BE',
                    borderWidth: 0
                },
                borderDistance: 0
            }
        },
        {
            type: 'pie',
            color: ['#33B8A6', '#f57f6c'],
            radius: ['48%', '60%'],
            center: ['50%', '50%'],
            hoverAnimation: false, ////设置饼图默认的展开样式
            label: {
                normal: {
                    show: true,
                    position: 'outter',
                    textStyle: {
                        fontSize: 14
                    },
                    formatter: function (parms) {
                        console.log(parms);
                        return parms.data.name + "\n\n" + parms.data.value;
                    }
                }
            },
            labelLine: {
                show: false,
                normal: {
                    show: true,
                    // length: 5,
                    // length2:3,
                    smooth: true,
                }
            },
            itemStyle: { // 此配置
                normal: {
                    borderWidth: 1,
                    borderColor: '#063757',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: [{
                value: 110,
                name: '异常'
            },
            {
                value: 30,
                name: '正常'
            }]
        }
        ]
    }