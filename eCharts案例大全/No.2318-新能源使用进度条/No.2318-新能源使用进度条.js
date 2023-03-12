
var  category= [
    {
        name: "风力-本年总用电量",
        eType: "3590kw-h",
        value: 3000
    },
    {
        name: "光伏-本年总用电量",
        eType: "2800kw-h",
        value: 3000
    },
    {
        name: "风力-上月总用电量",
        eType: "520kw-h",
        value: 8000
    },
    {
        name: "光伏-上月总用电量",
        eType: "380kw-h",
        value: 2500
    }
]; // 类别
var total = 10000; // 数据总数
var  datas = [];
category.forEach(value => {
    datas.push({
        eType : value.eType,
        value: value.value
    });
});
option = {
    backgroundColor:'#071347',
    legend: {
        data: [
          {
            name: '风力',
            icon: 'rect',
            itemStyle: {
              color: '#239cf9'
            },
          },
          {
            name: '光伏',
            icon: 'rect',
            itemStyle: {
              color: '#EB5118'
            },
          },
        ],
        itemWidth: 20,
        itemHeight: 20,
        itemGap:100,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        top:'3%',
        right: '2%'
      },
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
        name:'风力',
            // 内
            type: "bar",
            barWidth: 18,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    color: function(params) {
                        console.log(params.dataIndex)
                        var color;
                        if(params.dataIndex % 2 != 0){
                             color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#EB511810" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#EB5118" // 100% 处的颜色
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
                                        color: "#0F407110" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#1588D1" // 100% 处的颜色
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
                    position: ['0', '-130%'],
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
            symbolMargin: 30,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [5, 21],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            name:'光伏',
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
                        text = '{f|  '+params.data.eType+'}';
                        return text;
    				},
    				rich:{
    					a: {
    			            color: 'red'
    			        },
    			        b: {
    			        	color: 'blue'
    			        },
    			        c:{
    			        	color: 'yellow'
    			        },
    			        d:{
    			        	color:"green"
    			        },
    			        f:{
    			        	color:"#ffffff"
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
            data: [total, total, total, total],
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


