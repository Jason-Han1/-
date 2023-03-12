app.title = '正负条形图';

option = {
    title: {
        text: '电影空天猎评价',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['好评', '中性', '差评']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['新浪微博','网页新闻','豆瓣']
        }
    ],
    series : [
        {
            name:'好评',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[105, 1, 36]
        },
        {
            name:'中性',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[-38, -5,-20]
        },
        {
            name:'差评',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[57, 14, 24]
        }
    ]
};
