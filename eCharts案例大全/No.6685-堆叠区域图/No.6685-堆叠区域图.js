option = {
    title: {
        text: '堆叠区域图'
    },
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
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 0,101, 134, 90, 230, 210],
            symbolSize: function(value){
                return value ? 4: 0
            },
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 0,191, 234, 290, 330, 310],
            symbolSize: function(value){
                return value ? 4: 0
            },
           
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 0,201, 154, 190, 330, 410],
            symbolSize: function(value){
                return value ? 4: 0
            },
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            symbolSize: function(value){
                return value ? 4 : 0
            
            },
            data: [320, 0, 0,301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [820, 932,0, 901, 934, 1290, 1330, 1320],
            symbolSize: function(value){
                return value ? 4: 0
            },
        },
        {
            name: '测试c',
            type: 'line',
            stack: '总量',
             symbolSize: function(value){
                return value ? 4: 0
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [0, 0,0, 0, 0, 0, 0, 0]
        }
    ]
};
myChart.setOption(option);

myChart.on('click', function(params) {
    if (params.value === 0) {
        return
    }
   console.log(params)
});

