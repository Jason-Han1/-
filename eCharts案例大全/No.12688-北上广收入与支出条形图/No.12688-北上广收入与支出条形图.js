app.title = '北上广收入与支出条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['北京', '上海', '广东']
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
            data : ['食品支出','衣着支出','居住支出','文教娱乐支出','工资收入','家庭经营收入','财产性收入']
        }
    ],
    series : [
        {
            name:'北京',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    //position: 'inside'
                }
            },
            data:[1735.95, 378.66, 854.35, 796.99, 4524.25, 1778.33, 588.04]
        },
        {
            name:'上海',
            type:'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[2683.89, 366.44, 1319.76, 936.51, 6159.7, 774.6, 457.52]
        },
        {
            name:'广东',
            type:'bar',
            //stack: '总量',
            label: {
                normal: {
                    show: true,
                   // position: 'left'
                }
            },
            data:[1789.42, 143.5, 530.3, 360.73, 2562.39, 1731.97,167.25 ]
        }
    ]
};
