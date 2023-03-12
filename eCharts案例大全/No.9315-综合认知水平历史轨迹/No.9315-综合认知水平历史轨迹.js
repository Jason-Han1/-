var Stu = [120, 132, 101, 134, 90, 230, 210];
var Group = [220, 182, 191, 234, 290, 330, 310];
option = {
    color:['#ff7707','#029bfc'],
    backgroundColor: '#fff',
    title: {
        text: '综合认知水平历史轨迹',
        left:'center',
        textStyle:{
            fontSize:16,
            fontWeight:'normal'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['个人','整体'],
        right:'40'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
            color: '#333333'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#cacaca'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#cacaca'
            }
        }
    },
    yAxis: {
        name:'认知能力值',
        nameTextStyle:{
            color:'#999'
        },
        type: 'value',
        axisLabel: {
            color: '#333333'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#cacaca'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#cacaca'
            }
        },
        splitNumber:3
    },
    series: [{
            name: '个人',
            type: 'line',
            data: Stu
        },
        {
            name: '整体',
            type: 'line',
            data: Group
        },
    ]
};