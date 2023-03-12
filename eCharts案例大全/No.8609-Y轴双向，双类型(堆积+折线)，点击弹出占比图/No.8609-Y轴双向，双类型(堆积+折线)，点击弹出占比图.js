option = {
    title: {
        text: '堆叠区域图'
    },
    color: ['#7EBD4F', '#BD974F', '#E69147', '#7A3BF2', '#4FACBD','#7EBD4F', '#BD974F', '#E69147', '#7A3BF2', '#4FACBD', 'black'], 
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
        //位置需要与color对应，方可得到相应颜色
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎','邮件营销1', '联盟广告1', '视频广告1', '直接访问1', '搜索引擎1','sum']
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
            axisLabel:{
                formatter:function(v){
                    return v>0?v:-v;
                }
            }
        }
    ],
    series: [
        //每个对象与图例的名称先后顺序对应，方可得到对应颜色
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '邮件营销1',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [-120, -132, -101, -134, -90, -230, -210]
        },
        {
            name: '联盟广告1',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [-220, -182, -191, -234, -290, -330, -310]
        },
        {
            name: '视频广告1',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [-150, -232, -201, -154, -190, -330, -410]
        },
        {
            name: '直接访问1',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [-320, -332, -301, -334, -390, -330, -320]
        },
        {
            name: '搜索引擎1',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [-820, -932, -901, -934, -1290, -1330, -1320]
        }
        ,
        {
            name: 'sum',
            type: 'line',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

myChart.on('click',function(o){
    //获取模型
    var op = myChart.getOption(); 
    //获取模型的数据
    var seriesY = op.series;
    var pieData=[]//从返回的所有数据中心，得到点击的某列数据【点击的列索引】
    for(var i=0;i<seriesY.length;i++){
        pieData.push({'value':seriesY[i].data[o.dataIndex],'name':seriesY[i].name});//通过打印o，得知点击列的索引为o.dataIndex
    }
    console.info(pieData,seriesY)
});

 
