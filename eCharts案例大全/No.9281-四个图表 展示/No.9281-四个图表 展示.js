        var itemStyle1= {
            normal: {
                color:'#8dfeee',
                lineStyle: {
                    color: "#8dfeee",
                    width:1
                },
                areaStyle: {
                    color: 'rgba(174,254,251,0.8)'
                }
            }
        }

        var itemStyle2= {
            normal: {
                color:'#739dec',
                lineStyle: {
                    color: "#739dec",
                    width:1
                },
                areaStyle: {
                    color: 'rgba(115,157,236,0.5)'
                }
            }
        }

        var option = {
            tooltip : {
                trigger: 'axis',
                formatter: function (params) {
                   console.log(params)
                   var formatterString
                    /*$.each(params, function(i, data) {
                        if( data.seriesIndex==0 || data.seriesIndex==1){
                            formatterString='TCP一二步握手成功率'
                            formatterString += data.seriesName+':'+data.value
                        }
                        
                    })*/
                    for(var i=0;i++;i<7){
                      formatterString='TCP一二步握手成功率'
                      formatterString += params[i].seriesName+':'+params[i].value
                    }
                  return formatterString
                }

                // formatter: 'TCP一二步握手成功率<br />{a0}: {c0}<br />{a1}: {c1}' +
                // '<br /><br />TCP客户端时延<br />{a2}: {c2}<br />{a3}: {c3}' +
                // '<br /><br />TCP重传率<br />{a4}: {c4}<br />{a5}: {c5}' +
                // '<br /><br />IPTV卡顿时长占比<br />{a6}: {c6}<br />{a7}: {c7}',
            },
            axisPointer: {
                link: {
                    xAxisIndex: 'all'
                }
            },
            color:['#aefefb','#739dec'],
            grid: [{
                left: '2%',
                // right: '40%',
                top:'10%',
                bottom: '0%',
                height: '40%',
                width: '46%',
                containLabel: true
            },{
                left: '51%',
                right: '0%',
                top:'10%',
                bottom: '0%',
                height: '40%',
                width: '46%',
                containLabel: true
            },{
                left: '2%',
                // right: '40%',
                top:'59%',
                bottom: '0%',
                height: '40%',
                width: '46%',
                containLabel: true
            },{
                left: '51%',
                right: '0%',
                top:'59%',
                bottom: '0%',
                height: '40%',
                width: '46%',
                containLabel: true
            }],
            xAxis:[{
                type: 'category',
                boundaryGap: false,
                data: ['0', '2', '4', '6', '8', '10', '12'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },{
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                data: ['0', '2', '4', '6', '8', '10', '12'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },{
                gridIndex: 2,
                type: 'category',
                boundaryGap: false,
                data: ['0', '2', '4', '6', '8', '10', '12'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },{
                gridIndex: 3,
                type: 'category',
                boundaryGap: false,
                data: ['0', '2', '4', '6', '8', '10', '12'],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },],
            yAxis: [{
                name : 'TCP一二步握手成功率',
                nameTextStyle :{
                    align:'left',
                    color:'#333',
                    padding: [0, 0, -10, 0]
                },
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },{
                name : 'TCP客户端时延',
                nameTextStyle :{
                    align:'left',
                    color:'#333',
                    padding: [0, 0, -10, 0]
                },
                gridIndex: 1,
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },{
                gridIndex: 2,
                name : 'TCP重传率',
                nameTextStyle :{
                    align:'left',
                    color:'#333',
                    padding: [0, 0, -10, 0]
                },
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            },{
                gridIndex: 3,
                name : 'IPTV卡顿时长占比',
                nameTextStyle :{
                    align:'left',
                    color:'#333',
                    padding: [0, 0, -10, 0]
                },
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#6A6A6A'
                    }
                },
                axisTick: {
                    show: false
                },
            }],
            series: [{
                name:'全网',
                data: [15, 27, 134, 125, 57, 15, 10],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 47]
                    }]
                },
                type: 'line',
                areaStyle: {
                    normal: {}
                },
                itemStyle:itemStyle1,
            },{
                name:'用户群',
                data: [10, 30, 10, 30, 35, 58, 30],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 30]
                    }]
                },
                type: 'line',
                areaStyle: {
                    normal: {}
                },
                itemStyle: itemStyle2,
            },{
                name:'全网',
                data: [35, 47, 34, 25, 57, 45, 40],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 47]
                    }]
                },
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                areaStyle: {
                    normal: {}
                },
                itemStyle:itemStyle1,
            },{
                name:'用户群',
                data: [20, 30, 40, 30, 35, 58, 30],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 30]
                    }]
                },
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                areaStyle: {
                    normal: {}
                },
                itemStyle: itemStyle2,
            },{
                name:'全网',
                data: [35, 47, 34, 25, 57, 45, 40],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 47]
                    }]
                },
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                areaStyle: {
                    normal: {}
                },
                itemStyle:itemStyle1,
            },{
                name:'用户群',
                data: [20, 30, 40, 30, 35, 58, 30],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 30]
                    }]
                },
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                areaStyle: {
                    normal: {}
                },
                itemStyle: itemStyle2,
            },{
                name:'全网',
                data: [35, 47, 34, 25, 57, 45, 40],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 47]
                    }]
                },
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                areaStyle: {
                    normal: {}
                },
                itemStyle:itemStyle1,
            },{
                name:'用户群',
                data: [20, 30, 40, 30, 35, 58, 30],
                markPoint: {
                    data: [{
                        symbol: 'circle',
                        symbolSize: 12,
                        coord: ["2", 30]
                    }]
                },
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                areaStyle: {
                    normal: {}
                },
                itemStyle: itemStyle2,
            }]
        };