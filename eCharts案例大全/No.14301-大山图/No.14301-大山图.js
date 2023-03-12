var myColor=['#eb2100','#eb4800','#eb7f00','#d0a00e','#c9db00','#93c222'];
option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '3.8%',
            top:'21%',
            right: '4%',
            bottom: '12%',
            containLabel: true
        },
        xAxis: {
            data: ['博士研究生', '硕士研究生', '大学本科', '高中毕业', '专科毕业', '中专毕业'],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel:{
                                textStyle:{
                                     color: 'rgba(255,255,255,0.8)',
                                     fontSize:'14',
                                },
                              },
        },
        yAxis: {
            name:'单位：人',
            nameGap:'30',
                    nameTextStyle:{
                        color:'#ffffff',
                        fontSize:'16',
                    },
            splitLine: {
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    },
            axisTick: {show: false},
            axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.8)',
                            fontSize:'14',
                        }
                    },
            axisLine: {
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    },
        },
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M150 50 L130 130 L170 130 Z',
            label:{
                normal:{
                    show:true,
                    position:'top',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                        },
                }
            },
            data: [130, 160,12, 59, 12, 100],
            z: 10
        }]
    };