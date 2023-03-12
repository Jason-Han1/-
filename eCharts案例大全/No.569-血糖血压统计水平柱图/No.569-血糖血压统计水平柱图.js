
var  category= [{
         name: "血糖偏高",
        value: 2500
    },
    {
        name: "血糖偏低",
        value: 8000
    },
    {
        name: "血压偏高",
        value: 3000
    },
    {
        name: "血压偏低",
        value: 3000
    },
    {
        name: "当日新增",
        value: 3000
    }
]; // 类别
var  datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor:'#333',
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        left: 80,
        top: 20, // 设置条形图的边距
        right: 80,
        bottom: 20
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            // 内
            type: "bar",
            barWidth: 18,

            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    barBorderRadius:[4,4,4,4],
                    color: function(params) {
                        var color;
                        if(params.dataIndex==19){
                             color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#66b1ff" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#409eff" // 100% 处的颜色
                                    }
                                ]
                            }
                            }else if(params.dataIndex==18){
                            color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                         offset: 0,
                                        color: "#66b1ff" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#409eff" // 100% 处的颜色
                                    }
                                ]
                            }
                            }else if(params.dataIndex==17){
                            color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                         offset: 0,
                                        color: "#66b1ff" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#409eff" // 100% 处的颜色
                                    }
                                ]
                            }
                            }else{
                            color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                         offset: 0,
                                        color: "#66b1ff" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#409eff" // 100% 处的颜色
                                    }
                                ]
                            }
                            }
                            return color;
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "left",
                    formatter: "{b}",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    }
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal:{
                    color:"#333"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [2, 21],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            // 外边框
            type: "pictorialBar",
            symbol: "rect",
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                	formatter: (params) => {
                		var text;
                        if(params.dataIndex==1){
                        	text = '{f|  '+params.data+'}';
                        }else if(params.dataIndex==2){
                        	text = '{f|  '+params.data+'}';
                        }else if(params.dataIndex==3){
                        	text = '{f|  '+params.data+'}';
                        }else{
                        	text = '{f|  '+params.data+'}';
                        }
                        return text;
    				},
    				rich:{
    					f:{
    			        	color:"#ffffff"
    			        }
    				},
    				position: 'right',
    				show: true
                }
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
        }
    ]
};


