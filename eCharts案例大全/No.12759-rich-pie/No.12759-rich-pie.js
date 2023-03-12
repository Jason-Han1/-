
var data = {
    id: 'echartPie',
    value: [12, 32, 54, 12],
    legend: ['人质', '要不要投降', '过期', '追梦的蚂蚁'],
    color: ['#3FA7DC', '#7091C4', '#5170A2', '#E1CA74'],
    title: '饼图',
}

var seriesData = []
data.value.forEach(function(item, index) {
    seriesData.push({
        value: item,
        name: data.legend[index]
    })
})
option = {
    title: {
        text: data.title
    },
    legend: {
        orient: 'horizontal',
        bottom: 22,
        icon: 'circle',
        selectedMode: false,
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 6,
        borderRadius: 6,
        data:data.legend
    },
    series: [{
        name: '-',
        type: 'pie',
        hoverAnimation: false,
        radius: ['40%', '52%'],
         labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 40,
                lineStyle: {
                    color: '#ccc',
                    width: 1
                },
                emphasis:{
                    show:true,
                }
            }
        },
        label: {
            normal: {
                // formatter: '{a|{b}}\n{hr|}\n{per|{d}%}  ',
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
                    let name = param.data.name;
                   return  ["{a|"+name+"}\n{hr|}\n{per|"+s+"%}"]
                },
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#687284',
                        lineHeight:34,
                        width:60,
                        padding: [0,0,0,100],
                        align: 'left'
                    },
                    hr: {
                        borderColor: '#ccc',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    per: {
                        lineHeight: 33,
                        fontSize: 14,
                         align: 'left',
                        color: '#414957',
                        padding: [2, 6],
                    }
                }
            },
        },
        color: data.color,
        data: seriesData
    }]
};