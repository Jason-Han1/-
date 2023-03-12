  var yData = ['唐山市', '秦皇岛', '邯郸市', '张家口', '保定市', '石家庄'];
        var dataArr = [87.5, 95.9, 79, 60, 53, 92];
        var allDataArr = [100,100,100,100,100,100];
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid:{
                left:20,
                right:10,
                top:0,
                bottom:20,
                containLabel: true ,
            },
            xAxis: {
                type: 'value',
                axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:false
                },
                splitLine:{
                    show:false
                }
            },
            yAxis: [
                {
                    type: 'category',
                    data: yData,
                    axisLabel:{
                        color:"#fff",
                        fontSize:13
                    },
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        show:false
                    }
                }, {
                    type: 'category',
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                    axisLabel: {
                        textStyle: {
                            color:function (params) {
                                console.log(params);
                                if(params >= 60 && params < 70){
                                    return "#FF6A66"
                                }else if(params >= 70 && params < 80){
                                    return "#06FFB6"
                                }else if(params >= 80 && params < 90){
                                    return "#FFD369"
                                }else if(params >= 90){
                                    return "#22BDFF"
                                }else {
                                    return "#FF6A66"
                                }
                            },
                            fontSize: '12'
                        },
                    },
                    data:dataArr,
                }
            ],
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: dataArr,
                    barWidth:13,
                    zlevel: 1,
                    itemStyle:{
                        normal:{
                            barBorderRadius:[10, 10, 10, 10],
                            color:function (params) {
                                console.log(params);
                                if(params.data >= 60 && params.data < 70){
                                    return "#FF6A66"
                                }else if(params.data >= 70 && params.data < 80){
                                    return "#06FFB6"
                                }else if(params.data >= 80 && params.data < 90){
                                    return "#FFD369"
                                }else if(params.data >= 90){
                                    return "#22BDFF"
                                }else {
                                    return "#FF6A66"
                                }
                            }
                        }

                    },

                },
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: 13,
                    barGap: '-100%',
                    data: allDataArr,
                    itemStyle: {
                        normal: {
                            color: '#213F71',
                            barBorderRadius: 10,
                        }
                    },
                },
            ]
        };