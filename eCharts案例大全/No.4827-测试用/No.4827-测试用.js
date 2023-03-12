option = {
    // title: {
    //     text: '资源总览',
    //     left:'20px',
    //     textStyle: {    
    //     color: "#436EEE",
    //     fontSize: 17,   
    //     }
    // },
    tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: "2",
        borderColor: "#d6d6d6",
        textStyle: {
            color: "#afafaf",
            fontSize: "11px"
        },
        padding: 0,
        formatter: function(params) {
            var res = params[0].name;
            res += "<style>td{padding:5px;}</style><table>";
            res += "<tr><td>指标</td><td>金额</td>";
            res += "<td>占比</td></tr>";
            let listNumber = 0;
            params.map(item => {
                listNumber += parseFloat(item.value);
            });
            for (let i = 0; i < params.length; i++) {
                let val = 0;
                if (listNumber) {
                    val =
                        (parseFloat(params[i].value) / listNumber).toFixed(2) * 100 +
                        "%";
                } else {
                    val = val + "%";
                }
                res +=
                    "<tr><td>" + params[i].seriesName + "</td><td>" + params[i].value;
                res += "</td><td>" + val;
                // res += '</td><td>'+params[i].data.datas[1];
                // res += '</td><td>'+params[i].data.datas[2];
                res += "</td></tr>";
            }
            // res += '<tr><td>'+params[params.length-1].seriesName+'</td><td>'+params[params.length-1].value+'</td></tr>';
            res += "</table>";
            return res;
        }

    },
    grid: {
        left: "2%",
        right: "2%",
        top: "5%",
        bottom: "15%",
        containLabel: true
    },
    legend: {
        itemWidth: 15,
        itemHeight: 15,
        data: ['可用', '不可用', '不可用2', '不可用3', '不可用4'],
    },
    xAxis: {
        data: ["网络设备", "服务器", "应用", "其他", "虚拟机", "存储"],
        type :'category',
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
    },
    series: [{
        name: '可用',
        type: 'bar',
        stack: '使用情况',
        data: [20, 20, 20, 20, 20, 20],
        barWidth:'100%',
        itemStyle: {
            normal: {
                color: "#FF8849"
            },
        }
    }, {
        name: '不可用',
        type: 'bar',
        stack: '使用情况',
        data: [30, 30, 30, 30, 30, 30],
        itemStyle: {
            normal: {
                color: "#3FBB49"
            },
        }
    }, {
        name: '不可用2',
        type: 'bar',
        stack: '使用情况',
        data: [10, 10, 10, 10, 10, 10],
        itemStyle: {
            normal: {
                color: "red"
            },
        }
    }, {
        name: '不可用3',
        type: 'bar',
        stack: '使用情况',
        data: [40, 40, 40, 40, 40, 40],
        itemStyle: {
            normal: {
                color: "yellow"
            },
        }
    }, {
        name: '不可用4',
        type: 'bar',
        stack: '使用情况',
        data: [10, 10, 10, 10, 10, 10],
        itemStyle: {
            normal: {
                color: "red"
            },
        },
        // markPoint: {
        //     // symbol:'circle',
        //     symbol: 'image://http://echarts.baidu.com/images/favicon.png',
        //     itemStyle: {
        //         normal: {
        //             label: {
        //                 show: true,
        //                 color: 'yellow',
        //                 formatter: function(param) {
        //                     // if(param.data.coord[1]>20){
        //                     return '优秀'
        //                     // }else if (param.data.coord[1]>10){
        //                     //   return '良好'
        //                     // } else {
        //                     //   return '不达标'
        //                     // }
        //                     // return param.name
        //                 }
        //             },
        //             color: '#BD60F6'
        //         }
        //     },
        //     symbolSize: 1,
        //     symbolOffset: [0, -35],
        //     data: [{
        //             name: '啦啦',
        //             coord: [0, 15]
        //         },
        //         {
        //             name: '天天',
        //             coord: [1, 20]
        //         },
        //         {
        //             name: '委婉',
        //             coord: [2, 36]
        //         },
        //         {
        //             name: '444',
        //             coord: [3, 13]
        //         },
        //         {
        //             name: '555',
        //             coord: [4, 16]
        //         },
        //         {
        //             name: '寄快递',
        //             coord: [5, 8]
        //         },
        //         {
        //             name: '看看',
        //             coord: [6, 32]
        //         },
        //     ],
        // },
    }]
};