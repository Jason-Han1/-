var gain = 0.9;
var gap = 0;
var myColor=['#e63810','#ff6b00','#e3b61f'];
var myBgColor=['rgba(230,56,16,0.2)','rgba(255,107,0,0.2)','rgba(227,182,31,0.2)'];
//柱子数据
var data = [8, 15, 10];
var option = {
   backgroundColor:'#1b1b1b',
        grid: {
            left: '30',
            top:'50',
            right: '20',
            bottom: '40',
            containLabel: true
        },
        xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine:{
                         lineStyle:{
                                  color:'rgba(160,160,160,0.8)',
                              }
                          },
                axisLabel:{
                	interval:0,
                	rotate:40,
                    textStyle:{
                        color:function(param,index){
                            return myColor[index]
                        },
                        fontSize:12*gain,
                    },
                },
                data: ['女党员','本科学历以上','60周岁以下'],
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval:0,
                    show: false,
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: []
            },
        ],
        yAxis: {
            type: 'value',
            name:'党员类型统计',
            nameTextStyle:{
                color:'#ffffff',
                fontSize:16*gain,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle:{
                    color:'rgba(160,160,160,0.3)',
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.8)',
                    fontSize:12*gain,
                }
            }
        },
        series: [{
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: function(params) {
                            var num=myBgColor.length;
                            return myBgColor[params.dataIndex%num]
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label:{
                    normal:{
                       show:true,
                       formatter: function(params) {
                        var stuNum = 0;
                        data.forEach(function(value, index, array) {
                            if (params.dataIndex == index) {
                               stuNum = value;
                            }
                        })
                        return stuNum ;
                      },
                      position: 'top',
                      textStyle:{
                          color:function(params) {
                            var num=myBgColor.length;
                            return myBgColor[params.dataIndex%num]
                        },
                          fontSize:25*gain,
                      }
                    }
                },
                barWidth: '25%',
                data: [33, 33, 33]
            }, 
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,

                    }
                },
                barWidth: '25%',
                data: data
            }
        ]
};