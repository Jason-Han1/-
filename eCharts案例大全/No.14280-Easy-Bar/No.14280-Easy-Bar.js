var label = {
    show: true,
    position: 'top',
    color: '#999999',
    formatter: '{c}'
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{a0} : {c0}<br/>{a1} : {c1} "
    },
    legend: {
        data: ['管理人员', '施工人员'],
        align: 'right',
        right: 10
    },
    xAxis: [{
        //type: 'category', // 默认值
        name: '月份',
        boundaryGap: true,
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        axisLabel: {
            //show: false, // 不显示纵坐标数值
            formatter: '{value}月'
        }
    }],
    yAxis: [{
        //type: 'value', // 默认值
        name: '人数',
        axisLabel: {
            //show: false, // 不显示纵坐标数值
            formatter: '{value}人'
        }
    }],
    series: [{
        name: '管理人员',
        type: 'bar',
        data: [20, 12, 31, 34, 31, 14, 10, 15, 21, 30, 3, 12],
        itemStyle: {
            normal: {
                color: '#00CCFF',
                label: label
            }
        }
    }, {
        name: '施工人员',
        type: 'bar',
        data: [10, 20, 5, 9, 3, 12, 20, 22, 31, 14, 31, 2],
        itemStyle: {
            normal: {
                color: '#FF6633',
                label: label
            }
        }
    }]
};