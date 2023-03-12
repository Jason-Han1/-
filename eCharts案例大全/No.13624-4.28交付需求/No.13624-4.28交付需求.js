option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    // backgroundColor:'#fff',
    color:['#333','#666'],
    series : [
        {
            name:'邮件营销',
            type:'line',
            // stack: '总量',
            areaStyle: {color:'#000'},
            data:[50, 45, 40, 39, 34]
        },
        {
            name:'联盟广告',
            type:'line',
            // stack: '总量',
            areaStyle: {color:'#ccc'},
            data:[10, 15, 20, 20, 25]
        }
    ]
};
