//r sRgbColor = color.colorRgb();//转为RGB颜色值的方法
    option = {
        backgroundColor:'#2861CD',
        color:'red',
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                animation: true,
                lineStyle: {
                    color: 'rgba(240, 253, 252, 0.8)',

                },
            },
            formatter:function (params) {
                return "年份："+params[0].axisValue+"<br/>"+seriesName+": "+params[0].value+" "+subtitle;
            }
        },
        grid: {
            /*width:'80%',*/
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data :[2009,2010,2011,2012,2013,2014,2015],
                /*offset:'offset',*/
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontSize:16
                    },
                    interval:0,
                    rotate:0,
                    show: true,
                },
                axisLine: {
                    show: false
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize:16
                    },
                    interval:0,
                    rotate:0,
                    show: true,
                },
                nameTextStyle:{
                    color:'#4C4C4C',
                    fontSize:16
                },
                offset:'20',
                axisTick: {
                    show: true,
                    length:0,
                    alignWithLabel: true
                },
                data:[
                    {
                        value:'',
                        textStyle:{
                            fontSize:14,
                            color:'#fff',
                        },
                    }
                ],
                axisLine: {
                    show:false,
                    lineStyle:{
                        color:'rgba(254,117,136,0.8)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0.4)'
                    }
                }
            }
        ],
        series : [
            {
                name:'总量',
                type:'line',
                stack: '总量',
                symbolSize:10,
                hoverAnimation:false,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize:16,
                        color:'#fff'
                    }
                },
                areaStyle: {normal: {//['rgb(31, 255, 255,1)','rgb(173, 204, 71)','rgb(233, 170, 74)','rgb(79, 165, 246)']
                        color: /*'rgba(240, 253, 252, 0.2)'*/{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color:'rgba(254,117,136,0.8)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(254,117,136,0.1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }},
                data:['32','23',22,33,2,22,33]
            }
        ]
    };