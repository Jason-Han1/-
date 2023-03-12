let category = [{name: "省外资金", value: "107.38"}]; // 类别
let total = 150; // 数据总数
var datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor:"#061740",
    grid: {
        left: '5%',
        top: '10%', // 设置条形图的边距
        right: '5%',
        bottom: '10%',
    },
    xAxis: {
        max: total,
        show: false,
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data: category,
        show: false,
    }],
    series: [
        {
            // 内
            type: "bar",
            barWidth: 5,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
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
                                    color: "#EB5118" // 0% 处的颜色
                                },
                                    {
                                        offset: 1,
                                        color: "#F21F02" // 100% 处的颜色
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
                                    color: "#FFA048" // 0% 处的颜色
                                },
                                    {
                                        offset: 1,
                                        color: "#B25E14" // 100% 处的颜色
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
                                    color: "#F8E972" // 0% 处的颜色
                                },
                                    {
                                        offset: 1,
                                        color: "#E5C206" // 100% 处的颜色
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
                                    color: "#011753" // 0% 处的颜色
                                },
                                    {
                                        offset: 1,
                                        color: "#46e9f7" // 100% 处的颜色
                                    }
                                ]
                            }
                        }
                        return color;
                    },
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
            symbolMargin: 10,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [1, 5],
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
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-135%", // 设置外框粗细
            data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            barWidth: 8,
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
