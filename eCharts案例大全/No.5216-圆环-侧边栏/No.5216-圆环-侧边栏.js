let data = [{
        name: '机车车列',
        value: 25091.07,
        rate: 58.92
    },
    {
        name: '轨道',
        value: 8020.48,
        rate: 18.83
    },
    {
        name: '线路',
        value: 8171.75,
        rate: 16.13
    },
    {
        name: '拉拉',
        value: 8171.75,
        rate: 16.13
    }
];
let color = ['#C7A975', '#BF3232', '#5B6376', '#CBCDD2'];
let title = ['产品', '占比', '营收（亿元）']
let total = 41500;
option = {
    color: color,
    title: [{
        text: '{header1| 产品}' + '{header2| 占比}' + '{header3| 营收（亿元）}',
        left: '49%',
        top: '30%',
        textStyle: {
            color: '#929292',
            rich: {
                header1: {
                    align: 'left',
                    width: 130,
                    fontSize: 12
                },
                header2: {
                    align: 'left',
                    width: 100,
                    fontSize: 12
                },
                header3: {
                    align: 'right',
                    fontSize: 12
                }
            }
        }
    }, {
        text: '{name|' + total + '}\n{val|总量}',
        top: 'center',
        left: '22%',
        textStyle: {
            rich: {
                name: {
                    fontSize: 16,
                    color: '#383838',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 10,
                    color: '#929292',
                    align: 'center'
                }
            }
        }
    }],
    legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        icon: 'circle',
        orient: 'vertical',
        left: '50%',
        top: '35%',
        align: 'left',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
            color: '#000',
            rich: {
                name: {
                    //verticalAlign: 'right',
                    align: 'left',
                    width: 110,
                    fontSize: 12
                },
                rate: {
                    align: 'left',
                    width: 80,
                    fontSize: 12
                },
                value: {
                    align: 'right',
                    width: 80,
                    fontSize: 12
                }
            }
        },
        data: data.map(item => item.name),
        formatter: function(name) {
            if (data && data.length) {
                for (var i = 0; i <= data.length; i++) {
                    console.log(name)
                    if (name === data[i].name) {
                        return (
                            '{name|' + name + '}' +
                            '{rate|' + data[i].rate + '%}' +
                            '{value|' + data[i].value + '} '
                        )
                    }
                }
            }
        }
    },
    series: [{
        name: '数量',
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['25%', '50%'],
        data: data,
        hoverAnimation: false,
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }]
};