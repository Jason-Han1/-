option = {
 title: {
                    text: '员工技能分布情况',
                    left: 'center',
                    bottom:'bottom',
                    textStyle: {
                        color: '#777777',
                        fontSize:15
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    shared: true,
                    enabled : true, // 是否启用提示框， 默认启用
                    formatter : function (params){
                        let mess='';
                        mess='<div style="width:150px;">'+params[0].marker+params[0].axisValue+'-'+(params[0].value/100*100).toFixed(2)+'%-'+params[0].value+'人</div>';
                        return mess
                    },
                    backgroundColor:'rgba(255,255,255,0.9)',
                    color:'black',
                    textStyle:{
                        color:'black',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '20%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine:{
                        show:false
                    },
                    axisTick:{       //x轴刻度线
                        show:false
                    },
                    splitLine: {     //网格线
                        show: true,
                        lineStyle:{
                            type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                        },
                    },
                    max:100
                },
                yAxis: {
                    type: 'category',
                    data: ['6号键','5号键','4号键','3号键','2号键','1号键'],
                    axisLine:{       //y轴
                        show:false
                    },
                    axisTick:{       //y轴刻度线
                        show:false
                    },
                    splitLine: {     //网格线
                        show: false,
                    },
                },
                series: [
                    {
                        name: '人数',
                        type: 'bar',
                        barWidth:25,
                        data: [
                            {
                                name:'6号键',
                                value: '70',
                                itemStyle: {
                                    color: '#fb4444'
                                }
                            },
                            {
                                name:'5号键',
                                value: '80',
                                itemStyle: {
                                    color: '#04d6f5'
                                }
                            },
                            {
                                name:'4号键',
                                value: '60',
                                itemStyle: {
                                    color: '#63c708'
                                }
                            },
                            {
                                name:'3号键',
                                value: '55',
                                itemStyle: {
                                    color: '#8e31ff'
                                }
                            },
                            {
                                name:'2号键',
                                value: '46',
                                itemStyle: {
                                    color: '#ff7824'
                                }
                            },
                            {
                                name:'1号键',
                                value: '46',
                                itemStyle: {
                                    color: '#0364ff'
                                }
                            },
                        ]
                    }
                ]
};
