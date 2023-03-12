option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['公众宣传活动', '取消公共活动', '限制集会', '封闭公共交通', '居家隔离', '禁止国内旅行','学校关闭','工作场所关闭','禁止国际旅行']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['中国', '美国','意大利']
    },
    series: [
        {
            name: '公众宣传活动',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [6, 47,-1]
        },
        {
            name: '取消公共活动',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [18, 29,23]
        },
        {
            name: '限制集会',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [18, 41,23]
        },
        {
            name: '封闭公共交通',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [18, 18,40]
        },
        {
            name: '居家隔离',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [19, 46,23]
        },
        {
            name: '禁止国内旅行',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [19, 45,21]
        },
        {
            name: '学校关闭',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [21, 34,23]
        },
        {
            name: '工作场所关闭',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [22, 50,22]
        },
        {
            name: '禁止国际旅行',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [28, 14,-2]
        },
    ]
};