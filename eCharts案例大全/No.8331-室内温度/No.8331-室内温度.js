var total = 50; //最大温度数据单独出来定义，方便环形总数的修改
var placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        }
    }
};
option = {
    backgroundColor: "#344b58",
    title: {
        text: '室内温度', //主标题
        subtext: '26℃', //副标题
        textStyle: { //主标题样式
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20
        },
        subtextStyle: { //副标题样式
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0f0'
        },
        left: 'center',
        top: 'middle'
    },
    tooltip: {
        show: true,
        trigger: 'item', //提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
        formatter: function(params, ticket, callback) { //第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
            return params.seriesName + ": " + params.value + "℃"; //系列名称：数据值
        }
    },
    color: ['#dc1439', '#e6b600', '#053afe'], //调色盘颜色列表，默认情况下图例和饼形环图颜色使用
    legend: {
        top: "124px",
        left: "50%",
        itemHeight: 20, //图例的高度

        itemGap: 10, //图例之间的间距        

        data: ['室外温度', '室内温度设定点', '室内温度'], //图例的数据数组
        textStyle: {
            color: '#fff'
        },
        selectedMode: true, //图例选择模式
        orient: "vertical" //图例布局方式
    },
    series: [{
            name: '室外温度',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [180, 200],
            itemStyle: placeHolderStyle,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                    value: 28,
                    itemStyle: {
                        normal: {
                            color: '#dc1439'
                        }
                    }
                },
                {
                    value: total - 28,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },
        {
            name: '室内温度设定点',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [150, 170],
            itemStyle: placeHolderStyle,
            data: [{
                    value: 26,
                    itemStyle: {
                        normal: {
                            color: '#e6b600'
                        }
                    }
                },
                {
                    value: total - 26,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },
        {
            name: '室内温度',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [120, 140],
            itemStyle: placeHolderStyle,
            data: [{
                    value: 26,
                    itemStyle: {
                        normal: {
                            color: '#053afe'
                        }
                    }
                },
                {
                    value: total - 26,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        }
    ]
};