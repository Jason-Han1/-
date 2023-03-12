var getname=['省会级城区','地级市城区','县级及以下'];
var data = [8, 15, 10];
var myColor=[{
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0A79DF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#4EA4F3' // 100% 处的颜色
                    }],
                },{
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#48D59D' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#41F8B3' // 100% 处的颜色
                    }],
                },{
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 2,
                    colorStops: [{
                        offset: 0,
                        color: '#FEAE5B' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FECB84' // 100% 处的颜色
                    }],
                }];
var bgColor=['#D9EBFC','#D9FCEF','#FFF2E3'];   
    
var option = {
        grid: {
            left: '3%',
            top:'10%',
            right: '2%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },splitLine: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(160,160,160,0.3)',
                            }
                            },
                axisLabel:{
                        textStyle:{
                        color:'#666666',
                        fontSize:13,
                        
                    }
                    },
                data: getname
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
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
                name:'单位：个',
                nameGap:35,
                 show:false,
                nameTextStyle:{
                    color:'#ffffff',
                    fontSize:16,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                   show:false
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.8)',
                        fontSize:13,
                    }
                }
            },
            series: [{
                    type: 'pictorialBar',
                    symbol: 'triangle',
                    //xAxisIndex: 1,
                    //animation:false,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: function(params) {
                                var num=bgColor.length;
                                return bgColor[params.dataIndex%num]
                            },
                        }
                    },
                    barWidth: '120',
                    data: [33, 33, 33]
                }, 
                {
                    type: 'pictorialBar',
                    symbol: 'triangle',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                            },
                        }
                    },
                    barWidth: '120',
                    data: data
                }
            ],
    };