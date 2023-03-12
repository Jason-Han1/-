var dataArray = [15, 40, 35, 60, 30, 20, 70];
var dataX = ['15:52', '15:53', '15:54', '15:55', '15:56', '15:57', '15:58','15:59','16:00','16:01','16:02','16:03'];
var dataArray2 = [2, 2, 2, 2, 2, 2, 2];
function handleList(N, Q) {
  let R = [],
    F;
  for (F = 0; F < Q.length; ) {
    R.push(Q.slice(F, (F += N)));
  }
  return R;
};


var jsdata1 = [];
var pldata1 = [];
var gzdata1 = [];
var d1 = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,3,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6";
var d2 = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0";
var d3 = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,2,2,2,2,2,2,0,0,0,0,0,0,5,5,5,5,5";
d1 = d1.split(",");
d2 = d2.split(",");
d3 = d3.split(",");
d1 = handleList(6,d1);
d2 = handleList(6,d2);
d3 = handleList(6,d3);
console.log(d1,d2,d3);
var i = 0;
var jsv = 0,plv=0,gzv=0;
for(var h=0;h<d1.length;h++){
    
    for(var s=0;s<d1[h].length;s++){
        jsv+=d1[h][s]*1;
    }
    jsdata1.push((jsv/6).toFixed(2));
    for(var s=0;s<d2[h].length;s++){
        plv+=d2[h][s]*1;
    }
    pldata1.push((plv/6).toFixed(2));
    for(var s=0;s<d3[h].length;s++){
        gzv+=d3[h][s]*1;
    }
    gzdata1.push((gzv/6).toFixed(2));
    jsv = 0;
    plv = 0;
    gzv = 0;
}
console.log(jsdata1,pldata1,gzdata1);


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
        text: '分析模拟'
    },
    legend:{
        show:true ,
        // data:["精神面貌","疲劳状态","工作状态"],
        data:[{
                name: '精神面貌',
                textStyle: {
                    color: 'green'
                }
            },
            {
                name: '疲劳状态',
                textStyle: {
                    color: '#ff6000'
                }
            },
            {
                name: '工作状态',
                textStyle: {
                    color: '#34ade4'
                }
            }
        ]
    },
    xAxis: [{
            data: dataX,
            type: 'category',
            name: "(时间)",
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
            max: 10,
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
    series: [
        {
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
            name:"精神面貌",
            data: jsdata1,
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
                        color:'green'
                    }
                }, {
                    type: 'max',
                    itemStyle:{
                        color:'green'
                    }
                }]
            }
        },
        {
            type: 'line',
            name:"疲劳状态",
            data: pldata1,
            showSymbol: false, //显示节点
            smooth: 0.1, //平滑展示
            lineStyle: {
                color: '#ff6000'
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
        },
        {
            type: 'line',
            name:"工作状态",
            data: gzdata1,
            showSymbol: false, //显示节点
            smooth: 0.1, //平滑展示
            lineStyle: {
                color: '#34ade4'
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
                        color:'#34ade4'
                    }
                }, {
                    type: 'max',
                    itemStyle:{
                        color:'#34ade4'
                    }
                }]
            }
        },
        // {
        //     type: 'bar',
        //     // data: dataArray,
        //     itemStyle: {
        //         color: 'rgba(0,132,255,0.7)'
        //     },
        //     barWidth: '40%',
        //     markLine: {
        //         symbol: 'none',
        //         lineStyle:{
        //             type:'dotted',
        //         },
        //         data: [
        //             // [
        //             //     {coord: ["16", 100],itemStyle:{color:'rgba(100,39,45,1)'}},
        //             //     {coord: ["22", 100]}
        //             // ]
        //             {
        //                 yAxis: 20,
        //                 itemStyle: {
        //                     color: 'rgba(140,198,63,1)'
        //                 }
        //             },
        //             {
        //                 yAxis: 40,
        //                 itemStyle: {
        //                     color: 'rgba(252,238,33,1)'
        //                 }
        //             },
        //             {
        //                 yAxis: 60,
        //                 itemStyle: {
        //                     color: 'rgba(247,147,30,1)'
        //                 }
        //             },
        //             {
        //                 yAxis: 80,
        //                 itemStyle: {
        //                     color: 'rgba(193,39,45,1)'
        //                 }
        //             },
        //             {
        //                 yAxis: 100,
        //                 itemStyle: {
        //                     color: 'rgba(100,39,45,1)'
        //                 }
        //             }

        //         ]
        //     }
        // }
    ]
};