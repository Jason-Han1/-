option = {
    textStyle: {
        fontSize: 10, // 调节字体大小
    },
    title: {
        text: '', // 主标题名称
        subtext: '', // 副标题名称
        x: 'center' // 标题的位置
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical', // 标签名称垂直排列
        x: 'right', // 标签的位置
        data: ['计划检修', '供应大用户', '季节性负荷',
            '故障跳闸', '供电范围大', '其他原因'
        ],
        textStyle: {
            color: '#a1c9fa',
        },
        //图例在左，文字在右
        align: 'left',
        //设置图例的间隔
        itemGap: 20,
    }, // 标签变量名称
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            } // 保存图片
        }
    },
    calculable: true,
    series: [{
            name: '面积模式', // 图表名称
            type: 'pie', // 图表类型
            radius: [80, 130], // 图表内外半径大小
            center: ['32%', '55%'], // 图表位置
            roseType: 'area',

            label: {
                normal: {
                    show: true,
                    // 指示线显示百分比
                    //formatter: '{b}({d}%)',      
                    formatter: '{b|{b} {d}%}\n{c|●}',
                    rich: {
                        //指导线的文字
                        b: {
                            padding: [0, -95, -15, -95],
                            color: '#a1c9fa'
                        },
                        //指导线的小圆点
                        c: {
                            padding: [0, -9, 0, -8],
                            color: '#2f79f2'
                        }
                    },
                    //指示线文字位置

                },

            },
            //设置引导线样式
            labelLine: {
                lineStyle: {
                    //引导线颜色
                    color: '#2f79f2'
                },
                //第一根引导线
                length: '50rem',
                //第二根引导线
                length2: '97rem',
            },

            data: [{
                    value: 180,
                    name: '计划检修'
                }, // 变量对应的具体数据
                {
                    value: 180,
                    name: '供应大用户'
                },
                {
                    value: 165,
                    name: '季节性负荷'
                },
                {
                    value: 151,
                    name: '故障跳闸'
                },
                {
                    value: 97,
                    name: '供电范围大'
                },
                {
                    value: 81,
                    name: '其他原因'
                }
            ],
            color: ['#e1464a', '#df8c46', '#d3d864', '#5dabf5', '#82e7fb', '#9982fb'],

        },
        //设置小环
        {
            type: 'pie',
            //设置内环外环大小
            radius: ['75', '71'],
            //值满100
            data: [100],
            //环的上下左右位置
            center: ['32%', '55%'],
            color: '#66ffff',
            //不显示竖线
            label: {
                show: false
            }
        }
    ]
};