const _data = [{
    goWorkTime: "2020-03-19 09:44:45",
    offWorkerTime: "2020-03-19 19:44:45",
    ccNum: "0",
    recordDate: 1584599020000
}]
const BASE_TIME = '2020-20-20'
// let legend = []
// let onTime = []
// let offTime = []
// let travel = []
// function getData() {
//     for (let item of _data) {
//         this.legend.push(moment(item.recordDate).format('MM-DD'));
//         this.onTime.push(item.goWorkTime ? `${BASE_TIME} ${moment(item.goWorkTime).format('YYYY-MM-DD HH:mm').substr(11, 10)}` : null);
//         this.offTime.push(item.offWorkTime ? `${BASE_TIME} ${moment(item.offWorkTime).format('YYYY-MM-DD HH:mm').substr(11, 10)}` : null);
//         this.travel.push(item.ccNum !== '0' ? `${BASE_TIME} ${moment('2020-02-02 12:00').format('YYYY-MM-DD HH:mm').substr(11, 10)}` : null);
//     }
// }

option = {
    grid: {
        left: '3%',
        right: '8%',
        bottom: '10%',
        height: 150,
        containLabel: true
    },
    color: ['#1685ff', '#f22222', '#09cb4e', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['2020-07-09', '题材', '主演', '播出渠道', 'IP', '宣发', '团队制作', '总分']
    },
    // xAxis: {
    //     type: 'category',
    //     axisLabel: {
    //         interval: 0,
    //         fontSize: 9
    //     },
    //     axisTick: {
    //         alignWithLabel: true
    //     },
    //     axisLine: {
    //         onZero: false,
    //         lineStyle: {
    //             color: '#aaa'
    //         }
    //     },
    //     data: [
    //         '2020-07-09'
    //     ]
    // },
    yAxis: {
        type: 'time',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#333'
            }
        },
        nameTextStyle: {
            color: '#303133',
            fontSize: 10,
        },
        splitArea: {
            show: false
        },
        min: `${BASE_TIME} 0:00:00`,
        max: `${BASE_TIME} 23:59:59`,
        splitNumber: 5,
        axisLabel: {
            formatter: function(value) {
                return echarts.format.formatTime('yyyy-MM-dd hh:mm', value).substr(11, 20)
            }
        }
    },
    series: [
    //     {
    //     type: 'candlestick',
    //     barWidth: '80%',
    //     itemStyle: {
    //         color: 'red', // 往上升
    //         borderColor: 'red',
    //         color0: 'green', // 往下降
    //         borderColor0: 'green'
    //     },
    //     markPoint: {
    //         symbol: 'rect',
    //         symbolSize: 1,
    //         label: {
    //             show: true,
    //             color: '#202020',
    //             position: 'top',
    //             formatter: function(res) {
    //                 console.log(1, res);
    //                 return res.data.value;
    //             }
    //         },
    //         data: [{
    //             value: 50,
    //             coord: [0, 0]
    //         }, {
    //             value: -21,
    //             coord: [1, -21],
    //             label: {
    //                 position: 'bottom'
    //             }
    //         }, {
    //             value: 138,
    //             coord: [2, 138]
    //         }, {
    //             value: 232,
    //             coord: [3, 232]
    //         }, {
    //             value: 222,
    //             coord: [4, 232]
    //         }]
    //     },
    //     data: [
    //         [0, -21, 0, -21],
    //         [-21, -21, -21, -21],
    //         [-21, 138, -21, 138],
    //         [138, 232, 138, 232],
    //         [232, 222, 232, 222],
    //         [222, 242, 222, 242],
    //         [242, 406, 242, 406],
    //         [0, 406, 0, 406]
    //     ]
    // }
        
        {
            type: 'candlestick',
            symbolSize: '6',
            data: ['20:30'],
            markLine: {
                symbol: 'none',
                data: [{
                    name: '下班',
                    yAxis: `${BASE_TIME} 17:30`
                }, ],
                label: {
                    formatter: '{b}',
                }
            }
        },

        // {
        //     type: 'scatter',
        //     symbolSize: '6',
        //     data: me.onTime,
        //     markLine: {
        //         symbol: 'none',
        //         data: [{
        //             name: '上班',
        //             yAxis: `${BASE_TIME} 08:30`
        //         }, ],
        //         label: {
        //             formatter: '{b}',
        //         }
        //     }
        // }
    ]
}




// {
//     title: {
//         text: 'Awesome Chart'
//     },
//     xAxis: {
//         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     yAxis: {
//         axisLabel: {
//             formatter: function(value) {
//                 // return (moment(value).format('YYYY-MM-DD HH:mm')).substr(11, 20)
//                 return echarts.format.formatTime('yyyy-MM-dd', value)
//             }
//         }
//     },
//     series: [{
//         type: 'line',
//         data: _data
//     }]
// };