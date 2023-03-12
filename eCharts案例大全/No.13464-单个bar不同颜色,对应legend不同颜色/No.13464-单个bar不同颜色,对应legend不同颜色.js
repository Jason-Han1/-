
var colorList = [
    '#ff2600',
    '#ffc000',
    '#00ad4e',
    '#0073c2',
    '#165868',
    '#e76f00',
    '#316194',
    '#723761',
    '#00b2f1',
    '#4d6022',
    '#4b83bf',
    '#f9c813',
    '#0176c0'
];
option = {
    color:colorList,
    legend: {
        orient: 'vertical',
        y: 'center',
        right: '2%',
        itemWidth: 12,
        itemHeight: 12,
        data :  ['石家庄市','张家口市','承德市','秦皇岛市','唐山市','廊坊市','保定市', '沧州市', '衡水市', '邢台市','邯郸市', '定州市', '辛集市'],
        textStyle:{    //图例文字的样式
            fontSize:14
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {
                show: true
            },

        }
    },
    grid: {
        left: '2%',
        right: '10%',
        bottom: '3%',
        height:'90%',
        width:'80%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#28316d',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel:  {
                interval: 0,
                rotate:40,
                show: true,
                splitNumber: 15,

                textStyle: {
                    //fontFamily: "微软雅黑",
                    fontSize: 10,
                },

            },

            data :  ['石家庄市','张家口市','承德市','秦皇岛市','唐山市','廊坊市','保定市', '沧州市', '衡水市', '邢台市','邯郸市', '定州市', '辛集市'],

            axisTick: {

                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'',
            splitLine: {  //分割线
                show: true,
                // color:"#fff",
                lineStyle: {
                    color: '#28316d'
                }
            },
            axisLabel: {
                interval: 0,
                rotate: 0,
                show: true,
                splitNumber: 30,
                // color:"#fff",
                textStyle: {
                    //fontFamily: "微软雅黑",
                    fontSize: 12,
                }
            },

        },

    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth : 30,//柱图宽度
            data:[2800, 1700, 1200, 1000, 900, 600, 400, 500, 550, 480, 320, 230,380],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#ff2600',
                            '#ffc000',
                            '#00ad4e',
                            '#0073c2',
                            '#165868',
                            '#e76f00',
                            '#316194',
                            '#723761',
                            '#00b2f1',
                            '#4d6022',
                            '#4b83bf',
                            '#f9c813',
                            '#0176c0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: false,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            }
        },
        {
            name:'石家庄市',
            type:'bar',
            stack: '',
            data:2800
        },
        {
            name:'张家口市',
            type:'bar',
            stack: '',
            data:1700
        },
        {
            name:'承德市',
            type:'bar',
            stack: '',
            data:1500
        },
        {
            name:'秦皇岛市',
            type:'bar',
            stack: '',
            data:1300
        },
        {
            name:'唐山市',
            type:'bar',
            stack: '',
            data:1000
        },
        {
            name:'廊坊市',
            type:'bar',
            stack: '',
            data:700
        },
        {
            name:'保定市',
            type:'bar',
            stack: '',
            data:650
        },
        {
            name:'沧州市',
            type:'bar',
            stack: '',
            data:550
        },
        {
            name:'衡水市',
            type:'bar',
            stack: '',
            data:500
        },
        {
            name:'邢台市',
            type:'bar',
            stack: '',
            data:450
        },
        {
            name:'邯郸市',
            type:'bar',
            stack: '',
            data:400
        },
        {
            name:'定州市',
            type:'bar',
            stack: '',
            data:350
        },
        {
            name:'辛集市',
            type:'bar',
            stack: '',
            data:320
        }
    ]
};
myChart.setOption(option);