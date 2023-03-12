option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'cross' // 默认为直线，可选为：'line' | 'shadow'
        },
        //formatter: '{a}<br />{c}'
    },
     title: {
        left: 'center',
        text: '大数据量面积图',
    },
    legend: {
        bottom:'bottom',
        data: ['1率', '2率', '#1', '#2', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }],
    yAxis: [{
            name: 'name1',
            type: 'value',
            splitLine:false
        },
        {
            name: 'name2',
            type: 'value',
            splitLine:false
        }
    ],
    series: [

        {
            name: '#1',
            type: 'bar',
            stack: '搜索引擎',
            label: {
                show: true
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '#2',
            type: 'bar',
            label: {
                show: true
            },
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '总量',
            type: 'scatter',
            label: {
                normal: {

                    show: true,
                    position: 'top',
                    formatter: '{c}',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0)'
                }
            },
            data: [740, 864, 802, 868, 1380, 1360, 1340]


        },
        {
            name: '1率',
            type: 'scatter',
            yAxisIndex: 1,
            
            data: [62, 82, 91, 84, 109, 110, 120]
        },
        {
            name: '2率',
            type: 'scatter',
            yAxisIndex: 1,
            
            data: [60, 82, 91, 84, 109, 110, 120]
        }
    ]
};




// Enable data zoom when user click bar.

myChart.on('click', function(params) {
    console.log(params);

});