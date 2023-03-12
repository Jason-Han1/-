option = {
    xAxis: {
        type: 'category',
        data: ['鲜花', '星星', '香蕉', '嫌弃']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80],
        type: 'bar',
        //配置样式
        itemStyle: {   
            //通常情况下：
            normal:{  
　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                    var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
                    return colorList[params.dataIndex];
                }
            },
            //鼠标悬停时：
            emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        //设置柱子的宽度
        // barWidth : 120,
    }]
};
