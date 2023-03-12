option = {
    title: {
        text: '堆叠区域图'
    },
    color:['yellow','green'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
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
            boundaryGap: false,
            
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            position:'left',
            splitLine:{show:false}
        },
         {
            type: 'value',
            position:'right',
            splitLine:{show:false}
        },
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            yAxisIndex:1,
            areaStyle: {
                color:'yellow',
                opacity:.2
            },
            data: [120, 110, 100, 90, 80, 70, 60]
        },
        {
            name: '联盟广告',
            type: 'line',
             areaStyle: {
                color:'green',
                opacity:.2
            },
             yAxisIndex:0,
            data: [2, 3, 4, 5, 6, 7, 8]
        },
       
       
    ]
};
