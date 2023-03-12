var dataArray = [15, 40, 35, 60, 30, 20, 70];
var dataX = ['16', '17', '18', '19', '20', '21', '22'];
// dataArray = dataArray.concat(dataArray).concat(dataArray).concat(dataArray);
// dataX = dataX.concat(dataX).concat(dataX).concat(dataX);
var dataArray2 = [3, 3, 3, 3, 3, 3, 3];
var marray = [];
var lscolor = 'rgba(255,255,255,1)';
var colorList = ['rgba(225,245,205,1)',
                'rgba(225,245,205,1)',
                'rgba(253,227,197,1)',
                'rgba(243,212,213,1)',
                'rgba(199,177,179,1)'];
for(var i =0;i<colorList.length;i++){
    colorList[i] = lscolor;
}
function getBarColor(e, p) {
    if (p == "color") {
        if (e == "0") {
            return 'rgba(140,198,63)';
        } else if (e == "1") {
            return 'rgba(247,147,30,0.35)';
        } else if (e == "2") {
            return 'rgba(247,147,30,0.6)';
        } else if (e == "3") {
            return 'rgba(247,147,30)';
        } else {
            return 'rgba(255,0,0,0.7)';
        }
    } else {
        if (e == "0") {
            return '正常';
        } else if (e == "1") {
            return '轻度';
        } else if (e == "2") {
            return '中度';
        } else if (e == "3") {
            return '中重度';
        } else {
            return '重度';
        }
    }
}
option = {
    title: {
        text: '模拟周报告'
    },
    xAxis: [{
            data: dataX,
            type: 'category',
            name: "(11月)",
            nameLocation: 'end',
        },
        {
            type: 'value',
            name: "(11月)",
            nameLocation: 'end',
            min: 0,
            max: 100,
            show: false
        }
    ],
    yAxis: [{
            type: 'value',
            min: 0,
            max: 100,
            splitLine: {
                show: true
            }
        },
        {
            name: "横着的",
            type: 'category',
            data: ["类目1", "类目2", "类目3", "类目4", "类目5"],
            show: false
        }
    ],
    // visualMap:[
    //   {
    //      seriesIndex:0,
    //      type:'piecewise',
    //      pieces:[
    //       {
    //           gt:0,
    //           lt:20,
    //           color:'green'
    //       },
    //       {
    //           gt:20,
    //           lt:45,
    //           color:'#ff6000'
    //       },
    //       {
    //           gt:45,
    //           lt:100,
    //           color:'red'
    //       }    
    //      ]
    //   }  
    // ],
    series: [{
            type: 'bar',
            yAxisIndex: 1,
            xAxisIndex: 1,
            data: dataArray2,
            z:100,
            itemStyle: {
                color: function(params) {
                    return getBarColor(params.dataIndex, 'color');
                }
            },
            label: {
                show: true,
                formatter: function(params) {
                    return getBarColor(params.dataIndex, 'label');
                },
                position: 'right',
                distance: 10,
                color: 'black'
            },
            barWidth: '99%'
        },
        {
            type: 'line',
            data: dataArray,
            showSymbol: false, //显示节点
            smooth: 0.1, //平滑展示
            lineStyle: {
                color: 'green'
            },
            markPoint: {
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 200 + 1000;  
                },
                symbolOffset:[0, "-20%"],
                data: [{
                    type: 'min',
                    itemStyle:{
                        color:'#ff6000'
                    }
                }, {
                    type: 'max',
                    itemStyle:{
                        color:'#ff6000'
                    }
                }]
            }
            //  markLine: {
            //     symbol: 'none',
            //     data: [
            //           [
            //                 {coord: ["16", 10],itemStyle:{color:'#e6e6e6'}},
            //                 {coord: ["16", 100]}
            //             ]
            //     ]
            //  }
        },
        {
            type: 'bar',
            data: dataArray,
            itemStyle: {
                color: 'rgba(0,132,255,0.7)'
            },
            barWidth: '40%',
            markLine: {
                symbol: 'none',
                lineStyle:{
                    type:'dotted',
                },
                data: [
                    // [
                    //     {coord: ["16", 100],itemStyle:{color:'rgba(100,39,45,1)'}},
                    //     {coord: ["22", 100]}
                    // ]
                    {
                        yAxis: 20,
                        itemStyle: {
                            color: 'rgba(140,198,63,1)'
                        }
                    },
                    {
                        yAxis: 40,
                        itemStyle: {
                            color: 'rgba(252,238,33,1)'
                        }
                    },
                    {
                        yAxis: 60,
                        itemStyle: {
                            color: 'rgba(247,147,30,1)'
                        }
                    },
                    {
                        yAxis: 80,
                        itemStyle: {
                            color: 'rgba(193,39,45,1)'
                        }
                    },
                    {
                        yAxis: 100,
                        itemStyle: {
                            color: 'rgba(100,39,45,1)'
                        }
                    }

                ]
            },
            markArea: {
                data: [
                    [{
                        name: '',
                        // xAxis:'16',    
                        yAxis: 0,
                        itemStyle: {
                            color: colorList[0]
                        },
                    }, {
                        //xAxis:'22',
                        yAxis: 20
                    }],
                    [{
                        name: '',
                        // xAxis:'Sun',
                        yAxis: 20,
                        itemStyle: {
                            color: colorList[1]
                        },
                    }, {
                        //xAxis:'Sat',
                        yAxis: 40
                    }],
                    [{
                        name: '',
                        //xAxis:'Sun',
                        yAxis: 40,
                        itemStyle: {
                            color: colorList[2]
                        },
                    }, {
                        //xAxis:'Sat',
                        yAxis: 60
                    }],
                    [{
                        name: '',
                        //xAxis:'Sun',
                        yAxis: 60,
                        itemStyle: {
                            color: colorList[3]
                        },
                    }, {
                        //xAxis:'Sat',
                        yAxis: 80
                    }],
                    [{
                        name: '',
                        //xAxis:'Sun',
                        yAxis: 80,
                        itemStyle: {
                            color: colorList[4]
                        },
                    }, {
                        //xAxis:'Sat',
                        yAxis: 100
                    }]
                ]
            }
        }
    ]
};