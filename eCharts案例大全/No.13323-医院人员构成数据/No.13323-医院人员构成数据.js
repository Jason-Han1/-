app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['XX医院医生分布', '医院平均医生分布']
    },
    grid: [{
        left: '50%',
        right: '4%',
        bottom: '55%',
        containLabel: true
    },{
        left:'4%',
        right:'4%',
        top:'50%',
        containLabel:true
    }],
    xAxis : [
        {
            type : 'value',
        },
        {
            type: 'category',
            axisTick: {show: false},
            data: ['住院医生','主治医生','副主任医生','主任医生'],
            gridIndex:1
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['住院医生','主治医生','副主任医生','主任医生']
        },
        {
            type : 'value',
            gridIndex:1
        }
    ],
    series : [
        {
            name:'XX医院医生分布',
            type:'bar',
            stack: '总量',
            barWidth:30,
            label: {
                normal: {
                    show: true
                }
            },
            data:[40, 30, 20, 10]
        },
        {
            name:'医院平均医生分布',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-20, -20, -29, -31]
        },
         {
            name: 'XX医院医生分布',
            type: 'bar',
            barWidth:30,
            data: [320, 332, 301, 334],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            name: '医院平均医生分布',
            type: 'bar',
            barWidth:30,
            data: [220, 182, 191, 234],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
         {
        type: 'pie',
        radius: [0, '20%'],
        center: ['25%', '25%'],
        label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:200, name:'男性', selected:true},
                {value:120, name:'女性'}
            ]
    },{name:'访问来源',
            type:'pie',
            radius: ['25%', '30%'],
            center: ['25%', '25%'],
            data:[
                {value:100, name:'20-30'},
                {value:50, name:'30-40'},
                {value:60, name:'40-50'},
                {value:80, name:'>50'},
            ]}
    ]
};
