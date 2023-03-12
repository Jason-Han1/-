/**
 * 图标所需数据
 */
var data = {
    id: 'echartPie',
    value: [12, 32, 54, 12],
    legend: ['人质', '要不要投降', '过期', '追梦的蚂蚁'],
    color: ['#3FA7DC', '#7091C4', '#5170A2', '#E1CA74'],
    // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
    // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
    title: '饼图',
}

////////////////////////////////////////

/**
 * 数据处理
 */
var seriesData = []
data.value.forEach(function(item, index) {
    seriesData.push({
        value: item,
        name: data.legend[index]
    })
})
////////////////////////////////////////

var option = {
    backgroundColor: '#fff',
    title: {
        x: '2%',
        y: '2%',
        textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
        },
        text: data.title || ''
    },
    tooltip: {
        trigger: 'item',
        show: data.tooltipShow === false ? false : true
        //   formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        top: 16,
        icon: 'circle',
        selectedMode: false,
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 6,
        borderRadius: 6,
        data: data.legend
    },
    series: [{
        type: 'pie',
        // clickable:false,
        // selectedMode: 'single',//单点击设置
        hoverAnimation: data.hoverAnimation === false ? false : true,
        radius: ['40%', '67%'],
        color: data.color,
        label: {
            normal: {
                position: 'inner',
                // formatter: '{d}%',
                formatter: function(param) {
                    if (!param.percent) return ''
                    var f = Math.round(param.percent * 10) / 10;
                    var s = f.toString();
                    var rs = s.indexOf('.');
                    if (rs < 0) {
                        rs = s.length;
                        s += '.';
                    }
                    while (s.length <= rs + 1) {
                        s += '0';
                    }
                    return s + '%';
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: seriesData
    }]
};