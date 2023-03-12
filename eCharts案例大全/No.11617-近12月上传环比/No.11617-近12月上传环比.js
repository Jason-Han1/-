option = {
    // title: {
    //     text: '师资匹配度分布',
    //     subtext: '2017(年)',
    //     left: 'center',
    //     top:3,
    //     textStyle:{
    //         fontSize:16,
    //         align:'center',
    //         verticalAlign:'middle'
    //     },
    //     subtextStyle:{
    //         fontSize:14,
    //     }
    // },
    // tooltip : {
    //         trigger: 'axis',
    //         backgroundColor:'transparent',
    //         textStyle:{
    //             color: '#7d7d7d'
    //         },
    //         alwaysShowContent:true,/*一直显示提示框，鼠标移出区域后也显示*/
    //         /*鼠标悬浮的数据说明：根据数值的大小关联样式*/
    //         // formatter:function (params) {
    //         //     var text='高进度';
    //         //     var a='';
    //         //     var color='#82db99';
    //         //     for(var i=0;i<params.length;i++){
    //         //         if(params[i].value < 60){
    //         //             color='#ee3d6e';
    //         //             text='低进度';
    //         //         }
    //         //         a +="<div style='text-align: center;display: inline-block'>" +
    //         //             "<div class='des1' style='color:"+color+"'>" +params[i].value+"%"+"</br>" +text
    //         //             +"<div class='des2'>建议提高畜牧首页、计算机、公路监理人员培训和招聘</div>"
    //         //             +'</div></div>';
    //         //     }
    //         //     return  a;
    //         // },
    //         position: function (point, params, dom, rect, size) {
    //             // 居中固定在顶部
    //             var left=(size.viewSize[0]-338)/2;//居中时左边距离
    //             return  {left: left,top: '15%'};
    //         }
    //     },
    xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLabel: {
                    textStyle: {
                        color: function (value, index) {
                            var num=value.split(':')[1];
                            return num > 59 ? '#7d7d7d' : '#ee3d6e';
                        }
                    },
                    label:{
                        backgroundColor: '#ffffff',
                        textStyle:{
                            color: '#ee3d6e'
                        },
                    },
                    formatter: function (value) {
                        var name=value.split(':')[0];
                        var num=value.split(':')[1];
                        return name
                    },
                },
                axisPointer: {
                    lineStyle: {
                        color: '#004E52',
                        opacity: 0.5,
                        width: 2
                    }
                },
                data :['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],

            }
        ],
    yAxis : [
            {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#ddd'],
                        type:'dotted'
                    }
                },
                axisLabel: {
                    inside: false,
                    formatter: '{value}%'
                },
                z: 10
            }
        ],
    color:"#7AB0E1",    
    grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'37%',
            containLabel: true
        },    
     series : [{
            name: '学院',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204, 0.7)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(17,235,210, 0.2)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17,235,210,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data:[5, 1, 6, 4, 2, -2, -1,-2,8,6,2,-3]
        }
        ]
};