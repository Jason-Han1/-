app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB','red'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
                barWidth: '10%',
            data:[10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
                normal: {
                    //每根柱子颜色设置
                    color: function(params) {
                        let colorList = [
                            "#c23531",
                            "#2f4554",
                            "#61a0a8",
                            "#d48265",
                            "#91c7ae",
                            "#749f83",
                            "#ca8622",
                            "#bda29a",
                            "#6e7074",
                            "#546570",
                            "#c4ccd3",
                            "#4BABDE",
                            "#FFDE76",
                            "#E43C59",
                            "#37A2DA"
                        ];
                        return colorList[params.dataIndex];
                    }
                }
            }
        }
    ]
};
