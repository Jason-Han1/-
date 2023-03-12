app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['2019成交金额','2019成交量','2018成交金额','2018成交量']
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'2019成交金额',
            type:'bar',
            barWidth : 10,
            data:[320, 332, 301, 334, 390, 330, 320, 320, 320, 320, 320, 320]
        },
        {
            name:'2019成交量',
            type:'bar',
            barWidth : 10,
            data:[120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210]
        },
        {
            name:'2018成交金额',
            type:'bar',
            barWidth : 10,
            data:[220, 182, 191, 234, 290, 330, 310, 310, 310, 310, 310, 310]
        },
        {
            name:'2018成交量',
            type:'bar',
            barWidth : 10,
            data:[150, 232, 201, 154, 190, 330, 410, 410, 410, 410, 410, 410]
        }]
};
