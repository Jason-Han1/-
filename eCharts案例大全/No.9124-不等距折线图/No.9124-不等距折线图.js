option = {
                //设置标题
                title : {
                    text : '不等距折线图',
                },
               
                //设置横坐标
                xAxis : [
                    {
                       
                        type : 'value',
                        data : [0,10,20,30,50,60,180,360],
                        splitLine:{show:true},
                        splitNumber:5
                    }
                ],
                //设置纵坐标
                yAxis : [
                    {
                        type : 'value',
                        min: 0,
                        max: 1,   
                        splitArea:{show:true,
                            areaStyle:{color:['#008000',
                                    '#99CC00',
                                    '#FFFF00',
                                    '#FF9900',
                                    '#FF0000']}
                        },
                        splitLine:{show:false},
                        splitNumber:5
                    }
                ],
                //设置数据驱动
                series : [
                    {
                        name: '随机数值',
                        type: 'line',
                        //图标大小，根据值进行计算
                        symbolSize:4,
                        data: [['0','0.223'],['10','0.323'],['20','0.53'],['30','0.023'],['50','0.723'],['60','0.423'],['180','0.193'],['360','0.623']]
                    }
                ]
            };