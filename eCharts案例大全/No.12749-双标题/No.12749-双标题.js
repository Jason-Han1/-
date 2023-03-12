option = {
    title: [ 
        {
        left:'center',
        text: '全国各地区志愿者年度平均服务时长'
        },
        {
            top:'bottom',
            left:'数据来源：民政部',
            text: '122'
        }
    ]
   ,
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};