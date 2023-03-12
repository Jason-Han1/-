//EUI.include("vfs/root/echarts/echarts2.js");

//var chartData =<#=GRID22.B1$#>;
//var chartName =<#=GRID22.A1$#>;
var chartName = ['数学学院', '物理学院', '化学学院', '生命科学学院', '工学院', '材料科学与工程学院', '生物医学工程学院'];
var chartData = ['132', '110', '100', '100', '90', '90', '70'];

var attackSourcesColor = [{
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#FF7E7C' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#FF6061' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#F9C270' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#F9A146' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 2,
    colorStops: [{
        offset: 0,
        color: '#F9C270' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#F9A146' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#5CC0FF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#5998FF' // 100% 处的颜色
    }],
}]

var option = {
    grid: {
        left: '2%',
        right: '10%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },
    series: [
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            z: 2,
            //            itemStyle: {
            //                normal: {
            //                    barBorderRadius:10,
            //                    color: new echarts2.graphic.LinearGradient(0, 0, 0, 1, [{
            //                    offset: 0,
            //                    color: '#5998FF' // 0% 处的颜色
            //                }, {
            //                    offset: 1,
            //                   color: '#5CC0FF' // 100% 处的颜色
            //                }], false)
            //               }
            //            },

            itemStyle: {
                normal: {
                    color: function(params) {
                        return attackSourcesColor[params.dataIndex > 3 ? 3 : params.dataIndex]
                    },
                    barBorderRadius: 5,
                }
            },

            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontSize: 14,
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (chartData[data.dataIndex]).toFixed(0);
                    }
                }
            },
            data: chartData,
        },
        //年份
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: '-100%',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-23'],
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    },
                    formatter: function(data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: chartData
        }
    ]
};

//chartName[if(params.name='',0,params.name)]

//myChart.on('click', function (params) {
// _zcalcn([['Widget1',"HHH160",'@cs='+chartName[params.name ='' ? '0' : params.name]+'']]); 
//     _zcalcn([['Widget1',"HHH160",'@cs='+chartName[params.name =1|2|3|4|5|6 ?  params.name : 0]+'']]); 
//  });


//return option;