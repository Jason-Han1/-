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
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'联盟广告',
            type:'line',
            areaStyle: {
                color: '#2f4554',
                // origin: 'end',
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'邮件营销',
            type:'line',
            areaStyle: {
                // color: '#2f4554',
                // origin: 'end'
                color: '#e7f0fb',
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ],
    color: ['#2f4554', '#c23531']
};