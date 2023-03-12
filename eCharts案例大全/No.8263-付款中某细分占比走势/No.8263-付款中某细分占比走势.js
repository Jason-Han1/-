option = {
        backgroundColor: '#fff',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'

        }
    },
    legend: {
         bottom: 0,
        center: 0,
        data: ['付款金额','店铺专粉付款金额','付款人数','店铺专粉付款人数']},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['2018-12-01','2018-12-02','2018-12-03','2018-12-04','2018-12-05','2018-12-06','2018-12-07','2018-12-08','2018-12-09','2018-12-10']
    },
    series: [{
            name: '付款人数',
            type: 'line',
            data: [2990, 2900, 3133, 3433, 3233, 3333, 3133, 2933, 3033, 2630, 2730, 2913],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            }
        },
         {
            name: '店铺专粉付款人数',
            type: 'line',
            data: [1800, 833, 933, 1003, 933, 1083, 1150, 1329, 2473, 1003, 743, 763],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            }
        },
        {
            name: '付款金额',
            type: 'bar',
            stack: '总量',
            data: [320, 2020, 1801, 2340, 2500, 2300, 2200,1800,200,1600]
        },
        {
            name: '店铺专粉付款金额',
            type: 'bar',
            stack: '总量',
            data: [1200, 132, 401, 134, 290, 530, 610,900,2320,960]}
       
    ]
};