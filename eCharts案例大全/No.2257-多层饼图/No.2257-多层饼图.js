
var sum = 1350
const colorArr = ['#49CCFFee', '#20D3ABee', '#FDD56Aee', '#7F9EECee'];
const colorAlpha = ['#49CCFF88', '#20D3AB88', '#FDD56A88', '#7F9EEC88'];
option = {
    //backgroundColor: '#ffffff',
    title: {
        text: sum + '个',
        textStyle: {
            color: '#484848',
            fontSize: 18
        }, 
        
        subtext: '门禁总数',
        subtextStyle: {
            color: '#717171',
            fontSize: 14
        },
        itemGap: 17,
        left: 'center',
        top: '47%',
        left: '35%'
    },
    tooltip: {
        trigger: 'item'
    }, 
    xAxis: [
        {
            type: 'category',
            show: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
        },
    ],
    legend: [{
        orient: 'vertical', 
        icon: "circle",
        x: '78%',
        y: '46%',
        itemWidth: 25,
        itemHeight: 22,
        align: 'left',
        itemGap: 30,
          textStyle:{
            fontSize:16,
            color:"#fff",

          }, 
        data: ['开', '关', '常开', '常关'] 
    },{
        orient: 'vertical', 
        x: '78%',
        y: '30%',
        itemWidth: 25,
        itemHeight: 22,
        align: 'left', 
        itemGap: 30,
          textStyle:{
            fontSize:16,
            color:"#fff",

          }, 
        data: ['在线', '离线',], 
    }],
    series: [
        {
            type: 'pie',
            radius: ['0%', '15%'],
            center:  ['38%', '50%'],
            color: '#fff', 
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {
                    value: 1350,
                    name: '总数', 
                }, 
            ],
        },
        {
            type: 'pie',
            radius: ['15%', '35%'],
            center:  ['38%', '50%'],
            startAngle: [90],
            label: {
                normal: {
                    position: 'inner',
                    fontSize: 16,
                    formatter: params => {
                        return (params.name);
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {
                    value: 1000,
                    name: '在线',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: colorAlpha[0],
                            shadowColor: colorArr[0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorArr[0],
                                },
                                {
                                    offset: 1,
                                    color: colorAlpha[0],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 350,
                    name: '离线',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: colorAlpha[1],
                            shadowColor: colorArr[1],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorArr[1],
                                },
                                {
                                    offset: 1,
                                    color: colorAlpha[1],
                                },
                            ]),
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            radius: ['40%', '47%'],
            center:  ['38%', '50%'], 
            label: {
                show: true,
                position: 'outside',
                formatter: '{b}：{c}个  {d}%',
                        color:'#fff',
                        fontSize:16
            },
            labelLine: {
                normal: {
                    length: 30,
                    length2: 15,
                    lineStyle: {
                        width: 1,
                        color: '#fff'
                    }
                }
            },
            data: [
                {
                    value: 150,
                    name: '开',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: colorAlpha[0],
                            shadowColor: colorArr[0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorArr[0],
                                },
                                {
                                    offset: 1,
                                    color: colorAlpha[0],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 300,
                    name: '关',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: colorAlpha[1],
                            shadowColor: colorArr[1],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorArr[1],
                                },
                                {
                                    offset: 1,
                                    color: colorAlpha[1],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 580,
                    name: '常开',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: colorAlpha[2],
                            shadowColor: colorArr[2],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorArr[2],
                                },
                                {
                                    offset: 1,
                                    color: colorAlpha[2],
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 320,
                    name: '常关',
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 20,
                            borderColor: colorAlpha[3],
                            shadowColor: colorArr[3],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorArr[3],
                                },
                                {
                                    offset: 1,
                                    color: colorAlpha[3],
                                },
                            ]),
                        },
                    },
                }, 
            ],
        },
    ],
};
