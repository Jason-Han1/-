app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    legend: {
        data:['trend','MBL HD TDDI']
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
            data : ['1月', '2月', '3月',  '4月', '5月', '6月',
                    '7月', '8月', '9月', '10月', '11月', '12月' ],
            axisTick:{
                show:false
            },
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'trend',
            data: [['1月',500], ['2月',500], ['3月',500]],
            type: 'line'
        },
        {
            name:'trend',
            data: [['4月',600], ['5月',600], ['6月',600]],
            type: 'line'
        },
        {
            name:'trend',
            data: [['7月',800], ['8月',800], ['9月',800]],
            type: 'line'
        },
        {
            name:'trend',
            data: [['10月',700], ['11月',700], ['12月',700]],
            type: 'line'
        },
        {
            name:'MBL HD TDDI',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220,100, 72,140, 234, 269]
        }
    ]
};
