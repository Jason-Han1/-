option = {
    backgroundColor: "#fff",
    tooltip: {
        position: 'top',
        backgroundColor: '#16324F',
        //   trigger: 'axis',
        formatter(params) {
            const marker = '<span style="display:inline-block;margin-right:5px;margin-bottom:3px;border-radius:10px;width:5px;height:5px;background-color:#2FC25B;"></span>'
            return marker + params.value + '个'
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false //不显示坐标轴刻度线
        },
        axisLine: {
            show: false, //不显示坐标轴线
        },
        axisLabel: {
            show: true, //不显示坐标轴上的文字
        },

    },
    yAxis: {
        type: 'value',
        "axisLine": { //y轴
            "show": false
        },
        "axisTick": { //y轴刻度线
            "show": false
        },
        "splitLine": { //网格线
            "show": false
        },
        axisLabel: {
            show: false, //不显示坐标轴上的文字
        },
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 15,
        showBackground: true,
        backgroundStyle: {
            // 官方bug，待解决
            barBorderRadius: 8,
            // borderWidth: 0,
            // borderColor:'#293c55',
            // borderType:'solid',
            color: '#f5f5f5',
        },
        //背景色
        itemStyle: {
            normal: {
                color: '#46c7dc',
                barBorderRadius: 8,
            },
        },
        //显示文字
        label: {
            normal: {
                show: false,
                position: 'insideTop'

            }
        }

    }]
};