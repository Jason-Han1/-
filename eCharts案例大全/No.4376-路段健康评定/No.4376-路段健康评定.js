var data = {
    total: 100,
    data: [{
        name: "一级",
        value: 25
    },
    {
        name: "二级",
        value: 80
    },
    {
        name: "三级",
        value: 30
    },
    {
        name: "四级",
        value: 30
    },

] 
}
var  category= data.data; // 类别
var total = data.total; // 数据总数
var  datas = [],color = ['rgba(96, 244, 194, 1)','rgba(0, 171, 255, 1)','rgba(255, 245, 0, 1)','rgba(255, 136, 31, 1)'];
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
        inverse: true,
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
                        return color[params.dataIndex]
                    },
                    barBorderRadius: [2,2,2,2]
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
                		text = '{f|  '+params.data+'}{a|km}';
                        return text;
    				},
    				rich:{
    		            a:{
    		                color: 'white',
    		                fontSize: 14
    		            },
    			        f:{
    			        	color:"white",
    			        	fontSize: 22,
    			        	fontWeight: 'bold'
    			        }
    				},
    				position: 'right',
    				distance: 0, // 向右偏移位置
    				show: true,
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
            data: [total,total,total,total],
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


