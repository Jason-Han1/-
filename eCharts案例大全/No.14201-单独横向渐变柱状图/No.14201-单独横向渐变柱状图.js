
option = {
    backgroundColor:'#020933',
    title:{
        text:'各产业占比',
        textStyle:{
          color:'#FFFFFF'  
        },
        left:'300px',
        top: '300'
        
    },
    tooltip: {
        show: true,
        formatter: "{b} <br> {c}%"

    },
    //color:['red','while','green','blue'],
    legend: {
        top: '400px',
        left:'250',
        data:[{
                name :'旅游',
                textStyle:{
                    color:'#FFFFFF',
                }
             },
             {
                name :'家居',
                textStyle:{
                    color:'#FFFFFF'
                }
             },
             {
                name :'零售',
                textStyle:{
                    color:'#FFFFFF'
                }
             },
             {
                name :'金融平台',
                textStyle:{
                    color:'#FFFFFF'
                }
             },
            ]
    },
    xAxis: [{
        type :'value',
        axisTick: {
            show: false,
            // color:'#fff',
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
                //color:'#fff',
        },
        splitLine: {
            show: false,
            // color:'#fff',
        }
    }],
    yAxis: [{
        //type: 'category',
        data: [''],
        axisTick: {
            // color:'#fff',
            show: false,
        },
        axisLine: {
            //  color:'#fff',
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            }
        }

    }],
    /*
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },*/
    series: [
        /*{
        name: '旅游',
        type: 'bar',
        barWidth: 16,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                color: '#ffffff'
            }
        },
        data: [{
            value: 53,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#ffa800' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
        } ],
    },*/
        {
            name:'旅游',
            type:'bar',
            barWidth:16,
            stack: '广告',
            label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                color: '#ffffff'
                }
            },
            data:[{
                value:53,
                itemStyle: {
                normal: {
                    //barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#c23531' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2f4554' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'家居',
            type:'bar',
            barWidth:16,
            stack: '广告',
            data:[{
                value:53,
                itemStyle: {
                normal: {
                    //barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#2f4554' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#61a0a8' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'零售',
            type:'bar',
            barWidth:16,
            stack: '广告',
            data:[{
                value:53,
                itemStyle: {
                normal: {
                    //barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#61a0a8' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d48265' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        },
        {
            name:'金融平台',
            type:'bar',
            barWidth:16,
            stack: '广告',
            data:[{
                value:53,
                itemStyle: {
                normal: {
                    //barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#d48265' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#91c7ae' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
            }]
        }
    ]
};