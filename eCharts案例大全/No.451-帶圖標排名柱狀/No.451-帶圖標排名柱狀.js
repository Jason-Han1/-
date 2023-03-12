var data = [{
    name: "应用8",
    value: 1864,
}, {
    name: "应用7",
    value: 2543,
}, {
    name: "应用6",
    value: 3521,
}, {
    name: "应用5",
    value: 3546,
}, {
    name: "一次接线图",
    value: 4895,
}, {
    name: "运行管家",
    value: 6545,
}, {
    name: "知识图谱",
    value: 8398,
}, {
    name: "K线图",
    value: 10352,
}]//已排序好的数组

var ydata=[]
for (var i = 0; i < data.length; i++ ){
    ydata.push(data[i].name);
}
var datalength=[]
for (var i = 0; i < data.length; i++ ){
    datalength.push(0);
}
var databg=[]
for (var i = 0; i < data.length; i++ ){
    databg.push(data[data.length-1].value);
}


option = {
        backgroundColor:'#fff',
        grid: {
            left: '11%',
            top:'12%',
            right: '10%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                axisTick:'none',
                axisLine:'none',
                offset:'10',
                axisLabel: {
                        textStyle: {
                            color: '#333',
                            fontSize:'14',
                        }
                    },
                data:ydata,
            }, {
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                            color: '#1890ff',
                            fontSize:'16',
                        }
                    },
                data: data
            },{
                axisLine:{
                  lineStyle:{
                    color:'rgba(0,0,0,0)'
                  }
                },
                data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            stack:'圆',
            yAxisIndex: 0,
            data: data,
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#bae7ff', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1890ff', // 100% 处的颜色
                            },
                        ],
                    },
                    barBorderRadius: 5,
                }
            },
            z: 2
        },{
            name: '内圆',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            data: datalength,
            label:false,
            symbolSize: 12,
            itemStyle: {
                normal: {
                     borderColor: '#409eff',
                         borderWidth:4 ,
                    color: '#fff',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '内圆框',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            data: datalength,
            label:false,
            symbolSize: 30,
            itemStyle: {
                normal: {
                     borderColor: '#cce3ff',
                         borderWidth:2 ,
                    color: '#e3f0ff',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: databg,
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: '#e4effe',
                    barBorderRadius: 5,
                }
            },
            z: 0
        }]
    };