    var myColor=['#11B543','#FBC841','#EA6E23','#0CC497', '#2B67D1'];
    var myBgColor=['#0D3847','#0D3847','#0D3847','#0D3847', '#0D3847'];
    //柱子数据
    var data = [38, 55, 70, 36, 91];
    var option = {
       backgroundColor:'#072634',
            grid: {
                left: '3%',
                top:'25%',
                right: '2%',
                bottom: '7%',
                containLabel: true
            },
            title: {
                text: '各类型车辆在线率',
                textStyle: {
                    color: '#7CB6BF',
                    fontSize: 19
                },
                left: 90,
                top: 100
            },
            xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        textStyle:{
                            color:function(param,index){
                                return '#5B7A85'
                            },
                            fontSize: 15,
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    offset: 1,
                    position: 'bottom',
                    data: ['客运班车','客运包车','危化品车','普货', '其他']
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
                    z: -1,
                    data: []
                },
            ],
            yAxis: {
                show: false,
                type: 'value'
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
                            barBorderRadius: 0,
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
                            return stuNum + '%' ;
                          },
                          color: '#fff',
                          position: 'top',
                          textStyle:{
                              lineHeight: 40,
                              fontSize:15,
                          }
                        }
                    },
                    barWidth: '35%',
                    data: [100, 100, 100,100, 100]
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
                            barBorderRadius: 0,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: false,

                        }
                    },
                    zlevel: 2,
                    barWidth: '35%',
                    data: data
                }
            ]
    };