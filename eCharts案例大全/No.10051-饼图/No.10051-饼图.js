var tarArr = ["实体办税工作量", "税务登记总合计", "发票管理合计", "纳税申报合计", "行政处罚合计", "其他合计"]
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
           
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#031845',
                }
            },
            data: [{
                    value: 271,
                    name: tarArr[0]
                },
                {
                    value: 303,
                    name: tarArr[1]
                },
                {
                    value: 241,
                    name: tarArr[2]
                },
                {
                    value: 227,
                    name: tarArr[3]
                },
                {
                    value: 327,
                    name: tarArr[4]
                },
                {
                    value: 457,
                    name: tarArr[5]
                }

            ],
            labelLine: {
                normal: {
                    show: false,
                    length: 2,
                    length2: 2,
                    lineStyle: {
                        color: '#CCCCCC',
                        width: 2
                    }
                }
            },
            label: {
                padding: [0, 0, 0, 0],
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{c|{c}笔}',
                    rich: {
                        b: {
                            fontSize: 18,
                            color: '#FFF',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#CCCCCC',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        c: {
                            fontSize: 22,
                            align: 'center',
                            padding: 4,
                            color: '#00EDED'
                        }
                    }
                }
            }
        }

    ]
};