var rich = {
    percentStyle: {
        color: "#555",
        fontSize: 14,
        padding: [5, 4],
        align: 'center'
    },
    hr: {
        borderColor: '#c5c5c5',
        width: '100%',
        borderWidth: 0.5,
        height: 0
    }
}
var echartData = [{
        value: 310,
        name: '项目5'
    },
    {
        value: 234,
        name: '项目4'
    },
    {
        value: 135,
        name: '项目3'
    },
    {
        value: 335,
        name: '项目2'
    },
    {
        value: 225,
        name: '项目1'
    }
]

var color = ['#00bcff', '#1ed0bc', '#a586fd', '#fbdd66', '#f2637b']
for(var i = 0;i<echartData.length;i++) {
    echartData[i].itemStyle = {
        borderWidth: 5,
        shadowBlur: 20,
        borderColor:color[i],
        shadowColor: color[i]
    }
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show:true,
        orient: 'horizontal',
        x: 'center',
        y:'bottom',
        data: ['项目1', '项目2', '项目3', '项目4', '项目5']
    },
    series: [{
        name: '总考生数量',
        type: 'pie',
        radius: ['32%', '50%'],
        hoverAnimation: false,
        color: color,
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; 
                    var percent = 0; 
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{percentStyle|' + percent + '}%\n{hr|}\n{percentStyle|' + params.name + '}';
                    //  + '\n{hr|}\n' + params.name+'}'
                },
                rich: rich,
                color:'#555555'
            },
        },
        labelLine: {
            normal: {
                length: 55,
                length2: 0,
                lineStyle: {
                    color: '#c5c5c5'
                }
            }
        },
        data: echartData
    }]
};