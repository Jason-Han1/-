app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
        title: [{
        text: '最活跃会话分析',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#ff733f'
        }
    }, {
        text: '最活跃会话占比',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#ff733f'
        }
    }],
    legend: {
         
 
        data: ['ip1', 'ip2','ip3','ip4','ip5']
    },
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
        {
            name: 'ip1',
            type: 'bar',
            stack: '总量',

            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'ip2',
            type: 'bar',
            stack: '总量',

            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'ip3',
            type: 'bar',
            stack: '总量',

            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'ip4',
            type: 'bar',
            stack: '总量',
  
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'ip5',
            type: 'bar',
            stack: '总量',

            data: [820, 832, 901, 934, 1290, 1330, 1320]
        },
        {
        type: 'pie',
        center: ['83%', '53%'],
        radius: ['25%', '39%'],

              data:[
                {value:335, name:'ip1'},
                {value:310, name:'ip2'},
                {value:234, name:'ip3'},
                {value:135, name:'ip4'},
                {value:1548, name:'ip5'}
            ]
    },


  
    ]
};