option = {
    backgroundColor: '#fff',
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        z: 1,
        trigger: 'axis',
        position: function (oldPos, params, dom) {
            var seriesModel = myChart.getModel().getSeriesByIndex(0);
            var data = seriesModel.getData();
            var param = params[0];
            var newPos = data.getItemLayout(param.dataIndex);
            // 这里估计了下 tooltip 的宽度是 80
            return [newPos[0] - 40, newPos[1] + 30];
        },
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'white',
                shadowBlur: 50,
                shadowOffsetY: 20,
                shadowColor: 'rgba(112, 155, 233, 0.5)'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#fff', '#eee']
                }
            }
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            showSymbol: false,
            symbolSize: 15,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#709be9',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 5,
                    shadowOffsetX: 2,
                    shadowOffsetY: 5
                }  
            },
            lineStyle: {
                normal: {
                    width: 4,
                    shadowColor: 'rgba(112, 155, 233, 0.5)',
                    shadowBlur: 4,
                    shadowOffsetY: 4
                }
            },
            areaStyle: {normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'transparent'
                }, {
                    offset: 0.3,
                    color: 'transparent'
                }, {
                    offset: 1,
                    color: 'rgba(112, 155, 233, 0.4)'
                }])
            }},
            smooth: true,
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ]
};

// myChart.off('showtip')
// myChart.on('highlight', function (param) {
//     var seriesModel = myChart.getModel().getSeriesByIndex(0);
//     var data = seriesModel.getData();
//     var symbol = data.getItemGraphicEl(param.batch[0].dataIndex);
//     symbol.traverse(function (el) {
//       if (el.type !== 'group') {
//           // Put on the top
//           el.attr('z', 1000);
//       } 
//     });
// });
