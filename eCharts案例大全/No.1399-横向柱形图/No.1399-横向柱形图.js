
var  category= [{
        name: "管控",
        value: 25
    },
    {
        name: "集中式",
        value: 80
    },
    {
        name: "纳管",
        value: 30
    },
    {
        name: "纳管",
        value: 30
    },
    {
        name: "纳管",
        value: 30
    }
]; // 类别
var sum=0;
category.forEach(ele => {
	sum += ele.value;
});

var total = 100; // 数据总数
var  datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor:'#071347',
    xAxis: {
        max: total,
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
                    color: function(params) {
                        var color;
                        color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#1588D1" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#0F4071" // 100% 处的颜色
                                    }
                                ]
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
                    color:"#061348"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [1, 21],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            // 外边框
            type: "pictorialBar",
            symbol: "rect",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                	formatter: (params) => {
                		var text;
                		var pro = Math.floor(params.data/sum * 100)+'%'
                        text = '{a|  '+pro+'}{b|  '+params.data+'}';
                        return text;
    				},
    				rich:{
    					a: {
    			            color: '#ffffff'
    			        },
    			        b: {
    			        	color: '#18FEFE'
    			        }
    			       
    				},
    				position: 'right',
    				distance: 0, // 向右偏移位置
    				show: true
                }
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-120%", // 设置外框粗细
            data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                    barBorderColor: "#1C4B8E", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
};


