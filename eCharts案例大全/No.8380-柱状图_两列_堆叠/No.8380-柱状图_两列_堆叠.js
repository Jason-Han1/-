option = {
    color:['red','#4ad2ff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
var res='<div><p>时间：'+params[0].name+'</p></div><hr><div><p>新增：</p></div>' 
for(var i=0;i<params.length;i++){
res+='<p>'+params[i].marker+params[i].seriesName+':'+params[i].data+'</p>'
if(i==1){
    res+='<hr><div><p>拆除：</p></div>'
}
}
return res;
},
    },
    legend: {
        data: ['村镇办', '南屿村']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18']
        }
    ],
    dataZoom: [
    {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        left: '5%',
        start: 0, //数据窗口范围的起始百分比
        end:100 // 滚动条所占百分比
    },
    {
        type: 'inside',
        xAxisIndex: [0],
        start: 0,
        end: 36
    }
],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '村镇办',
            type: 'bar',
            barWidth: 35,
            stack: '新增',
            label: {
                        normal: {
                            show: true,
                            position: 'insideBottom',
                           formatter:function(v){return '新增'}
                        }
                    },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '南屿村',
            type: 'bar',
            stack: '新增',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '村镇办',
            type: 'bar',
            barWidth: 35,
            backgroundColor:'#e5e5e5',
            stack: '拆除',
            label: {
                        normal: {
                            show: true,
                            position: 'insideBottom',
                           formatter:function(v){return '拆除'}
                        }
                    },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '南屿村',
            type: 'bar',
            stack: '拆除',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
    ]
};