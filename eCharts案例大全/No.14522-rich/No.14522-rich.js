option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        type: 'pie',
        name: '性别',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: [{
            value: 1548,
            name: '男',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(253,173,52,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(246,105,49,1)'
                    }]),
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    formatter: [
                        '{title|{b}}{abg|}',
                        '{nameCol|天数：}{valCol|{c}}',
                        '{nameCol|占比：}{valCol|{d}%}'
                    ].join('\n'),
                    backgroundColor: '#eee',
                    borderColor: '#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        title: {
                            color: '#eee',
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '#333',
                            width: '100%',
                            align: 'right',
                            height: 25,
                            borderRadius: [4, 4, 0, 0]
                        },
                        nameCol: {
                            width: 20,
                            height: 30,
                            align: 'left',
                            padding: [0, 10]
                        },
                        valCol: {
                            width: 40,
                            align: 'left',
                            padding: [0, 10],
                            color:"#F66C31"
                        }
                    }
                }
            }
        }, {
            value: 535,
            name: '女',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(18,41,169,0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(27,15,141,1)'
                    }]),
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    }]
};