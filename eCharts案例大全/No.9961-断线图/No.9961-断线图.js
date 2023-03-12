app.title = '断线图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // legend: {
    //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    barGap:0,
    series : [
        {
            name:'邮件营销',
            type:'bar',
            barWidth:"100%",
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle:{
                color:"transparent"
            }
        },
        {
            type:'bar',
            barWidth:"100%",
            stack: '广告',
            data:[1, 1, 1, 1, 1, 1, 1]
        },
        {
            name:'line',
            type:'line',
            data:[60,30,79,100,200,300,100]
        }
    ]
};