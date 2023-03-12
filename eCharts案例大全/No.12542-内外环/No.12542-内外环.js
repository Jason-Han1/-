option = {
    title: {
        //text: '直销有效客户分布'
    },
    backgroundColor: '#00265f',
    tooltip: {
        //trigger: 'item',
        //formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 10,
        y:'35%',
        data: ['本地', '外地', '未知(籍贯)','男性', '女性', '未知(性别)'],
        textStyle: {
            color: "#fff"
        }
    },
    series: [{
            name: '性别比例',
            type: 'pie',
            selectedMode: 'single',
            radius: ['20%', '35%'],
            center:['65%','50%'],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n{d}%',
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'item'
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 222,
                    name: '男性',
                    itemStyle: {
                        normal: {
                            color: "#5045f6"
                        }
                    }
                },
                {
                    value: 328,
                    name: '女性',
                    itemStyle: {
                        normal: {
                            color: "#ff4343"
                        }
                    }
                },
                {
                    value: 128,
                    name: '未知(性别)',
                    itemStyle: {
                        normal: {
                            color: "gray"
                        }
                    }
                }
            ]
        },
        {
            name: '本外地',
            type: 'pie',
            radius: ['40%', '55%'],
            center:['65%','50%'],
            label: {
                normal: {
                    fontSize: 14,
                    formatter: '{b} ({d}%)'
                }
            },
            data: [{
                    value: 12,
                    name: '本地',
                    itemStyle: {
                        normal: {
                            color: "#0089fa"
                        }
                    }
                },
                {
                    value: 73,
                    name: '外地',
                    itemStyle: {
                        normal: {
                            color: "#45dbf7"
                        }
                    }
                },
                {
                    value: 80,
                    name: '未知(籍贯)',
                    itemStyle: {
                        normal: {
                            color: "#ffed25"
                        }
                    }
                }
            ]
        }
    ]
};