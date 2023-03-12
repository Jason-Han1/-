let seriesData = [],
    data1 = {
        "设备正常": {
            data: [120, 80, 30, 70, 150,110],
            color: "#10c4ff"
        },
        "设备异常": {
            data: [10, 5, 2, 5, 10,15],
            color: "#f03150"
        }
    }
    
for (let key in data1) {
    seriesData.push({
        name: key,
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: data1[key].color
            },
        },
        data: data1[key].data
    })
}

option = {
    backgroundColor: '#00101d',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        left: '3%',
        top: '30px',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        icon: 'roundRect',
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 5,
        textStyle: {
            fontSize: 12, //字体大小
            color: '#b2ebff', //字体颜色
        },
        data: ["开启", "关闭"],
        top: "0%",
        right: '3%' //距离右侧

    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#8fd5f3' //字体颜色
            },
        },
        axisLine: {
            lineStyle: { //y轴网格线设置
                color: '#242a3c',
                width: 1,

            }

        },
        //                             
        data: ["喷淋头", "烟感", "消防栓", "灭火器", "指示牌", "应急照明灯"]
    }],
    yAxis: [{
            type: 'value',
            name: '单位/个',
            nameTextStyle: {
                color: "#8fd5f3",
            },
            axisLabel: {
                textStyle: {
                    color: '#8fd5f3' //字体颜色
                },
            },
            axisLine: {
                show: false
            },
            splitLine: { //保留网格线
                show: true,
                lineStyle: { //y轴网格线设置
                    color: '#242a3c',
                    width: 1,
                }
            },
        },

    ],
    series: seriesData
};