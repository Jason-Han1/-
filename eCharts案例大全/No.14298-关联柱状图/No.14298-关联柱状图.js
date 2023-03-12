    var dataOne = [50, '','',''];
    var dataTwo= ['', -250,'',''];
    var dataMaxOne = [300, '','',''];
    var dataMaxTwo = ['', 300,'',''];
    var maxOne = dataOne[0]+(-dataTwo[1]);
    var minOne = 0;
    minTwo = -maxOne;
    // 前两个柱子
    var dataThree = ['', '',100,''];
    var dataFour= ['','','',-200];
    var dataMaxThree = ['', '',300,''];
    var dataMaxFour = ['','','',300];
    var maxThree = dataThree[2]+(-dataFour[3]);
    var maxFour = dataThree[2]+(-dataFour[3]);
    var minOne = 0;
    minFour = -maxThree;
    // yAxis
    var yAxisOne = ['已结','','',''];
    var yAxisTwo = ['','未结','',''];
    var yAxisThree = ['','','新收',''];
    var yAxisFour = ['','','','旧存'];
    // 公共区域
    maxDataColor = 'rgba(0,0,0,0.2)';
    option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '2%',
            top:'12%',
            right: '6%',
            bottom: '8%',
            containLabel: true
        },
        xAxis:[
           {
            type: 'value',
            show:false,
            max:maxOne,
            min:minOne
        },
         {
            type: 'value',
            show:false,
            max:minOne,
            min:minTwo
        },
         {
            type: 'value',
            show:false,
            max:maxThree,
            min:minOne
        },
         {
            type: 'value',
            show:false,
            max:minOne,
            min:minFour
        }
        ],
        yAxis: [
           {
            type: 'category',
            position:'left',
            minInterval: 1,
            axisLine:{show:false},
            axisTick:{show:false},
            axisLabel:{
                textStyle:{
                    color:'#ffffff',
                    fontSize:15,
                }
            },
            data: yAxisOne
        },
        {
            type: 'category',
            position:'left',
            axisLine:{show:false},
            axisTick:{show:false},
              axisLabel:{
                textStyle:{
                    color:'#ffffff',
                    fontSize:15,
                }
            },
            data: yAxisTwo
        },
        {
            type: 'category',
            position:'left',
            axisLine:{show:false},
            axisTick:{show:false},
             axisLabel:{
                textStyle:{
                    color:'#ffffff',
                    fontSize:15,
                }
            },
            data: yAxisThree
        },
        {
            type: 'category',
            position:'left',
            axisLine:{show:false},
            axisTick:{show:false},
            axisLabel:{
                textStyle:{
                    color:'#ffffff',
                    fontSize:15,
                }
            },
            data: yAxisFour
        }
        ],
        series: [
            {
                name: '1',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        {offset: 1, color: '#14936b'},
                                        {offset: 0, color: '#05ab8d'}
                                    ]
                                ),
                        
                    }
                },
                label:{
                    normal:{
                        show:true,
                        position:'insideRight',
                        textStyle:{
                            colro:'#ffffff'
                        }
                    }
                },
                data: dataOne
            },
            {
                name: '2',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        {offset: 1, color: '#227fba'},
                                        {offset: 0, color: '#33cbb0'}
                                    ]
                                ),
                        
                    }
                },
                xAxisIndex:1,
                yAxisIndex:1,
                label:{
                    normal:{
                        show:true,
                        position:'insideRight',
                         formatter:function(param){
                            return -param.value;
                        },
                        textStyle:{
                            colro:'#ffffff'
                        }
                    }
                },
                 data: dataTwo
            },
            {
                name: '3',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        {offset: 1, color: '#e17b30'},
                                        {offset: 0, color: '#e1b530'}
                                    ]
                                ),
                    }
                },
                xAxisIndex:2,
                yAxisIndex:2,
                label:{
                    normal:{
                        show:true,
                        position:'insideRight',
                        textStyle:{
                            colro:'#ffffff'
                        }
                    }
                },
                 data: dataThree
            },
            {
                name: '4',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        {offset: 1, color: '#e16f30'},
                                        {offset: 0, color: '#e15130'}
                                    ]
                                ),
                    }
                },
                xAxisIndex:3,
                yAxisIndex:3,
                label:{
                    normal:{
                        show:true,
                        position:'insideRight',
                        formatter:function(param){
                            return -param.value;
                        },
                        textStyle:{
                            colro:'#ffffff'
                        }
                    }
                },
                 data: dataFour
            },
        ]
    };