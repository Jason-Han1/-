/*
报到状态 isCheckIn
注册状态 isRegistered
缴费状态 isPay
*/

data = {
    正常: [
        ['2019', 'up', '2019-1', {
            isCheckIn: 0,
            isRegistered: 0,
            isPay: 0,
        }],
        ['2019', 'down', '2019-2', {
            isCheckIn: 0,
            isRegistered: 0,
            isPay: 0,
        }],
    ],
    异常: [
        ['2020', 'up', '2020-1', {
            isCheckIn: 0,
            isRegistered: 1,
            isPay: 1,
        }],
    ],
    未开始: [
        ['2020', 'down', '2020-2', {
            isCheckIn: 2,
            isRegistered: 2,
            isPay: 2,
        }],
        ['2021', 'up', '2021-1', {
            isCheckIn: 2,
            isRegistered: 2,
            isPay: 2,
        }],
        ['2021', 'down', '2021-2', {
            isCheckIn: 2,
            isRegistered: 2,
            isPay: 2,
        }],
        ['2022', 'up', '2022-1', {
            isCheckIn: 2,
            isRegistered: 2,
            isPay: 2,
        }],
        ['2022', 'down', '2022-2', {
            isCheckIn: 2,
            isRegistered: 2,
            isPay: 2,
        }],
    ]
}


xdata = [2019, 2020, 2021, 2022]


var markPointData = []

for (var i = 0; i < xdata.length; i++) {
    var item = {
        name: i,
        coord: [i, 'middle']
    }
    markPointData.push(item)
}


var red = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAeCAYAAABdalL1AAAFFUlEQVRogb2ZX24UMQzGP1f7iKpeAnGFPiPEATgNEojHitNwANQDcIRKXKJqeR6j7a4zn784w053B0vV7GTyx/nFdpzU/NtXAHgL4DuADwCusbW4AwZg2j/t8O4xph/e6fXwfiybMP9u7eI5zf1MVAdSz/kbjenFeD4aC9z/Exz3AD4D+L0D8A7ALwA3m8Nk2etiKIDi8IEn3B6e6ykc53petNn/WQbj2t5lTPSLrPq4XQP+CcB7OG73UO/+D1BRtJt0MYkKmlpKV+7FNwW+MEbVZzee6Gxt7BsY7nZHl99Wwvq6CUU5zZqhd+We4bjMWK2sub70O1HfCjq9K2wXvWwGOtf7uPsvMbQpURX7HAaiXrJYdVUQUBzc2ad+qOTSRnBlYRlKx6+Ive27zQq5UUO82a3islbCNVjR9LuyXMxlARzIVpQ2j8JSh5vSKDQMrL1TSsJXALW8INtBbbHG8kSB3h2BDCIUtqLcaTKjzaYrY6ut+hv1MfKeEEtRLWQbqI4MhDV1rSiQq7iYQEi8LPtRWBCQo/hLDdwGOrP69YdtoBrFGSfCi1brHaMcAwuQZdyj+Frmm2DSg5Qu6ljWzXSsWi4L1SuXRQ20iP0zKK2jcdmXXXOiDYj2k0N8lvra1qmy7vzxavotywWhHk9HGiPjUUFgC/CR5WF+H5WlnRgZencCq/JjslxDrYdDspSxXA6qurQql05PvOqePLbvl1Mh6+Eq0C6TqI6Xo4VD3za6lx1+SS4fU9PkWUl1YcwWxQuguWlqx/TJyqN4eE4XC2a9qpAgw5bvC3IeVF1BBsoTL5XmzULjG80iXYwUG064d3n+Vx3UFDU1k74Z+go531Ld+iQ9TQbFZLj9KN5GdeuBaX9s3QykXMDiqaErxDwNc6qcAbXaNOhbspZBSqVumuCo1QwmT7w6V+cK1bo666dtLOeqK2Q91DaG6WyKUDCCUMFTSLwBiSUHYFNSmiGo5etYxyNmBOUS+HpZB7WzRIaG7Kp6V1oBrGIuwxFjm60d/e1QOigsxHLu1ETvtlCvs9CQFVAlsW8JsOdbIFB5a+pze92ph2Ax+D6Ct9BPtZjxaCc+Ln89UJwM1eUUkdxEEn4T1zbth1Mg+ZY2G9lgAlx5a4WsQweH6+jRk8dZPimdKidaqq4+WyYDy0fvnH9GJbUSKnf9ze2LmJzgiss2t55o4cWLVN8zXJ7lBKgSY8p8UVx8ZEWgY2Oy2iKGvjwngU/j8PwNcpvvM9C04cm0WhhbSe0fsgBV3Kl0fQUrCo/e4wefy9PNh0AGta/yTLXQ5N5Tvpl3WY0LuLvKVV3MsYdcKU1Q60iuGfXdE6t2AeLS5sWq+GKl+N8VA0vq2lxVV7ilTdW8Lg8Ui5YqBtBZRKskz7Q5yO9q0t3mRN84Xsa5v91oWW+t7AkdON48T78ceY0IVF7Jqbi9L/5nnqxL0q4u9vn4LM/x18XVUyiqLJLb2pxrjuLvhkBxdP8n1i0d3Tr3D+ujDUQVnALKcRNq9YpkPrm/9FdZmIYBV2846jgx8+oIuqn82UO9D4ZNXFySgbZ4xy5a7PLOOavnempByf3lflVu++ZcVcaC5f/c5iBMum7NFD/3UL/A8Zhd7QjN0ANRd2vC1qsbC0/e8+9mbfQEvZvU0fisIUNDhf7eVh73PK8AfwD8Fo4fAJ5T3JwGR7+ANxUQuVKA0BxydF7nvoVvV6f1XyxQvDcr39xCn4EXfrcAHv4C4AXPqBsd+PkAAAAASUVORK5CYII='
var gray = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAeCAYAAABdalL1AAAAvklEQVRoge3awQnCQBgF4XHPIjYhtpACxJqE3IPVWIBYgCUEbELUAmQhDWj2gch8HezAv6e3GMcRYAMcgR2wQp96ABfgANxq1C1wBdamnO0OdAUYDNpM7TiU6eTVzr74hza3LH/2oJ9g1ACjBhg1wKgBRg0waoBRA4waYNQAowYYNcCoAUYNMGqAUQOMGmDUAKMGGDXAqAFlWleonVeZ5ipq51yj9tNcRfPVjn2NWhdqHXACnob9Su1W+3XA+AZ20RjWKwxXcgAAAABJRU5ErkJggg=='
var green = 'data:image/png;base64,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'


CheckInList = ['已报到', '未报到', '未开始']
RegisteredList = ['已注册', '未注册', '未开始']
PayList = ['已缴费', '欠费（住宿费未缴纳）', '未开始']



colorArry = [
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: "#0FB27C"
        },
        {
            offset: 1,
            color: "#4BCDA1"
        }
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: "#FF6061"
        },
        {
            offset: 1,
            color: "#FF7E7C"
        }
    ]),
    '#D8D8D8'
]

let markLineColor = {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: 'rgba(32, 200, 144, 0.98)'
    }, {
        offset: 1,
        color: 'rgba(32, 200, 144, 0.11)',
    }]
}

let markPointColor = {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: 'rgba(32, 200, 144, 0.98)'
    }, {
        offset: 1,
        color: 'rgba(32, 200, 144, 0.11)',
    }]
}


option = {
    color: colorArry,
    tooltip: {
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        padding: 10,
        formatter: function(parme) {
            const {
                isCheckIn,
                isPay,
                isRegistered
            } = parme.data[3]
            var CheckIn = CheckInList[isCheckIn]
            var Pay = PayList[isPay]
            var Registered = RegisteredList[isRegistered]
            if (isCheckIn === 0) {
                CheckIn = '<span style="color:#10AF7A;">' + CheckIn + '</span>'
            } else if (isCheckIn === 1) {
                CheckIn = '<span style="color:#FF5555;">' + CheckIn + '</span>'
            } else {
                CheckIn = CheckIn
            }

            if (isPay === 0) {
                Pay = '<span style="color:#10AF7A;">' + Pay + '</span>'
            } else if (isPay === 1) {
                Pay = '<span style="color:#FF5555;">' + Pay + '</span>'
            } else {
                Pay = Pay
            }

            if (isRegistered === 0) {
                Registered = '<span style="color:#10AF7A;">' + Registered + '</span>'
            } else if (isRegistered === 1) {
                Registered = '<span style="color:#FF5555;">' + Registered + '</span>'
            } else {
                Registered = Registered
            }

            return '报到状态：' + CheckIn + '</br>' + '注册状态：' + Registered +
                '</br>' + '缴费状态：' + Pay
        },
        textStyle: {
            color: '#4E4E4E'
        }
    },
    backgroundColor: '#F4FBFB',
    legend: {
        data: ['正常', '异常', '未开始'


        ],
        itemWidth: 12,
        itemHeight: 12,
        icon: 'roundRect',
        right: 0,
        top: 0,
    },

    xAxis: {
        show: false,
        data: xdata
    },
    yAxis: {
        show: false,
        inverse: true,
        data: ['up', 'middle', 'down'],
    },
    series: [{
            name: '正常',
            type: 'scatter',
            symbol: 'image://' + green, //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: [85, 30],
            label: {
                show: true,
                position: 'inside',
                formatter: function(param) {
                    return param.data[2];
                },
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                verticalAlign: 'middle',
                // borderRadius: 4,
                // backgroundColor: '#0FB27C',
                padding: [10, 12]
            },
            itemStyle: {
                normal: {
                    color: colorArry[0],
                },
                emphasis: {
                    scale: false
                }
            },
            data: data['正常'],

            // silent: true,

        },
        {
            name: '异常',
            type: 'scatter',
            symbol: 'image://' + red, //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: [85, 30],
            label: {
                show: true,
                position: 'inside',
                formatter: function(param) {
                    return param.data[2];
                },
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                verticalAlign: 'middle',
                // borderRadius: 4,
                // backgroundColor: '#FF6061',
                // padding: 10
            },
            itemStyle: {
                normal: {
                    color: colorArry[1],
                }
            },
            data: data['异常'],
            // silent: true,
        },

        {
            name: '未开始',
            type: 'scatter',
            symbol: 'image://' + gray, //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: [85, 30],
            label: {
                show: true,
                position: 'inside',
                formatter: function(param) {
                    return param.data[2];
                },
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                verticalAlign: 'middle',
                // borderRadius: 4,
                // backgroundColor: '#D8D8D8',
                // padding: 10
            },
            itemStyle: {
                normal: {
                    color: colorArry[2],
                }
            },
            data: data['未开始'],
            // silent: true,
        },
        // 模拟中线
        {
            name: '',
            type: 'scatter',
            symbol: 'rect', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 0,
            label: {
                show: false,
                position: 'inside',
                formatter: function(param) {
                    return param.data[2];
                },
                fontSize: 16,
                fontWeight: 'bold',
                verticalAlign: 'middle',
                borderRadius: 4,
                backgroundColor: '#0FB27C',
                padding: 10
            },
            markPoint: {
                data: markPointData,
                symbol: "circle",
                symbolSize: 10,
                itemStyle: {
                    shadowColor: '#13B881',
                    shadowBlur: 10,
                    color: '#13B881'
                },
                tooltip: {
                    show: false
                }
            },
            markLine: {
                symbol: ['none', 'triangle'],
                symbolSize: [10, 10],
                label: {
                    show: false
                },
                data: [{
                    type: "average"
                }],
                lineStyle: {
                    type: "solid",
                    width: 4,
                    color: markLineColor
                },
                tooltip: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(32, 200, 144, 0)',
                }
            },
            data: data['正常'],
        },

    ]
};