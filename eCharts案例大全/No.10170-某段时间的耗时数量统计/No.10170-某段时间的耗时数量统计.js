app.title = '坐标轴刻度与标签对齐';

option = {
        title: {
        text: '某段时间的耗时数量统计',
        subtext: 'X轴1-2分钟时数量为1，即让柱子显示在X轴的两个刻度中间'
    },
    color:['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '45',
        right: '45',
        bottom: '45'
    },
    xAxis : [
        {
            name:'分钟',
            type : 'category',
            data : [1,2,3,4,5,10,20,60],
            boundaryGap:false
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
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220,5,1]
        }
    ]
};
