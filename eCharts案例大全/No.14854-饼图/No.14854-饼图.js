var data = [
    {value: "1890", name: "有效作答率", itemStyle: {
        color:"#ffbf00"
    }},
    {value: "240", name: "无效作答率", itemStyle: {
         color:"#fc465"
        
    }}
    ];
var color =["#ffbf00", "#fc4265"];
echarts.util.each(data, function(item, index) {
        item.itemStyle = {
            normal: {
                color: color[index]
            }
        };
    });
    var yx = Math.floor((data[1].value / data[0].value) * 100)
    var wx = 100 - yx;
    var dataArr = [{
        value: wx,
        name: '英雄联盟',
        itemStyle: {
            normal: {
                color: color[0]
            }
        }
    }, {
        value: yx,
        name: '守望先锋',
        itemStyle: {
            normal: {
                color: color[1]
            }
        }
    }]

    var option = {
        title: [{
            text: '参与游戏人数',
            left: '49%',
            top: '30%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#ffbf00',
                fontWeight: 'normal',
                fontSize: 30
            }
        }, {
            text: (Number(data[0].value) + Number(data[1].value)) + '人',
            left: '50%',
            top: '45%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#ff6702',
                fontWeight: 'normal',
                fontSize: 60
            }
        }, {
            text: '参与率',
            left: '49%',
            top: '65%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#ffbf00',
                fontWeight: 'normal',
                fontSize: 50
            }
        }],
        series: [{
            type: 'pie',
            data: [100],
            z: 2,
            radius: ['75%', '0%'],
            itemStyle: {
                normal: {
                    color: '#fff7df',
                }
            },
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            }
        }, {
            type: 'pie',
            data: [100],
            z: 1,
            radius: ['76%', '0%'],
            itemStyle: {
                normal: {
                    color: '#ffe187',
                }
            },
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            }
        }, {
            radius: ['60%', '70%'],
            name: '',
            type: 'pie',
            selectedOffset: 16, //选中是扇区偏移量
            startAngle: 90,
            z: 3,
            labelLine: {
                normal: {
                    length: 30,
                    length2: 10,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 28
                    },
                    formatter: function(params) {
                        return params.name + '\n' + params.value + '%'
                    }
                }
            },
            data: dataArr
        }]
    };
    myChart.setOption(option, true);