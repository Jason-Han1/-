var category = [{
        name: "千峰",
        value: 2500
    },
    {
        name: "不凡",
        value: 8000
    },
    {
        name: "黑马",
        value: 3000
    },
    {
        name: "云和",
        value: 3000
    },
    {
        name: "达内",
        value: 3000
    }
]; // 类别
var total = 10000; // 数据总数

option = {
    tooltip:{
        target:'axis'  
    },
    backgroundColor: '#071347',
    xAxis: {
        type: "category",
        inverse: false,
        data: category,
       
        
        axisLabel: {
            show: false
        },
        splitLine:{
            show:false
        }

    },
    grid: {
        left: 80,
        top: 20, // 设置条形图的边距
        right: 80,
        bottom: 20
    },
    yAxis: {
        max: total,
        splitLine:{
            show:false
        },
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        }

    },
    series: [{
            // 内
            type: "bar",
            barWidth: 18,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    color: function(params) {
                            return {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 1,
                                        color: "#1588D1" // 0% 处的颜色
                                    },
                                    {
                                        offset: 0,
                                        color: "#0F4071" // 100% 处的颜色
                                    }
                                ]
                            }
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "bottom",
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
                normal: {
                    color: "#061348"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [21, 1],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },


    ]
};