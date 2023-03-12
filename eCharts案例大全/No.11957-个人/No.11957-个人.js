option = {
    color: ['#338AF6', '#57C0A1', '#F6BC4C', '#F08951', '#DC4C64', '#EE7090', '#8F7AD8'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['<18', '18-24', '25-29', '30-34', '35-39', '40-49', '≥50'],
        axisTick: {
            alignWithLabel: true
        },

        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',
                //X轴线的颜色
                width: '2' //坐标线的宽度
            }
        },
        //  axisLabel: {
        //   show: true,
        //  textStyle: {
        //   color: '#57C0A1'
        //}
        //  }
        axisLabel: {
            color: function(value) {
                return value == '18-24' ? 'green' : 'red';
            }
        }
    }],
    yAxis: [{
        type: 'value',
        show: false
    }],
    series: [{
        name: '总数量',
        type: 'bar',
        barWidth: '60%',
        itemStyle: {
            normal: {
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                // 定制显示（按顺序）
                color: function(params) {
                    var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                    return colorList[params.dataIndex]
                }
            },
        },
        data: [10, 52, 200, 334, 390, 330, 220]

    }]
};