option = {
    title: {
        text: '堆叠区域图'
    },
    legend: {
        data:['区级等级','校级等级']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            offset: 10,
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        },
         {
            show: false,
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            boundaryGap: true
        }
    ],
    yAxis : [
        {
            show: false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'校级等级',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e2683f'
                    }, {
                        offset: 1,
                        color: '#dda491'
                    }])
            }},
            data:[120, 132, 101, 134, 90, 230, 210],
            xAxisIndex: 0,
            zlevel: 3,
            label: {
                show: true
            }
        },
        {
            name:'区级等级',
            type:'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#75cda3'
                    }, {
                        offset: 1,
                        color: '#afd5c3'
                    }])
            }},
            data:[220, 182, 191, 234, 290, 330, 310],
             xAxisIndex: 0,
             zlevel: 2,
             label: {
                 show: true
             }
        }
    ]
};
