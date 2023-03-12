var names = ['屠宰', '兽药', '诊疗', '调运', '饲料', '其他'];
var values = [300, 200, 150, 120, 100, 50];
var colorList = ['#03acd1', '#04cab7', '#03c781', '#fce348', '#fc2d8a', '#0292fe'];
var data = [];
for (var i = 0; i < names.length; i++) {
    data.push({
        name: names[i],
        value: values[i]
    })
}
data.reverse();
// 公用调整
var itemStyle = {
    normal: {
        borderColor: '#0A1934',
        borderWidth: 5,
        color: function(params) {
            return colorList[params.dataIndex]
        }
    }
}
var leftCenter = ['25%', '50%'],
    rightCenter = ['75%', '50%'],
    radius1 = ['30%', '35%'], // 饼图
    radius3 = ['40%', '41%'], // 线圈
    // 公用调整-end

    option = {
        backgroundColor: '#0A1934',
        tooltip: {
            trigger: 'item',
        },
        title: [{
                text: '30日',
                x: '22%',
                y: '48%',
                textStyle: {
                    color: '#559dbd',
                    fontSize: 20
                }
            },
            {
                text: '半年',
                x: '73%',
                y: '48%',
                textStyle: {
                    color: '#559dbd',
                    fontSize: 20
                }
            }
        ],
        series: [
            // 左饼图
            {
                // 饼图圈
                type: 'pie',
                zlevel: 3,
                radius: radius1,
                center: leftCenter,
                itemStyle: itemStyle,
                labelLine: {
                    show: false,
                    normal: {
                        length: 5,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: params => {
                            return '●';
                        }
                    }
                },
                data: data,
            },
            {
                // 最外圆圈
                type: 'pie',
                zlevel: 1,
                silent: true, //取消高亮
                radius: radius3,
                center: leftCenter,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 10,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    show: true
                },
                data: data,
            },

            // 右饼图
            {
                // 饼图圈
                type: 'pie',
                zlevel: 3,
                radius: radius1,
                center: rightCenter,
                itemStyle: itemStyle,
                labelLine: {
                    show: false,
                    normal: {
                        length: 5,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: params => {
                            return '●';
                        }
                    }
                },
                data: data,
            },
            {
                // 线圆圈
                type: 'pie',
                zlevel: 1,
                silent: true, //取消高亮
                radius: radius3,
                center: rightCenter,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 10,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    show: true
                },
                data: data,
            },
        ]
    };