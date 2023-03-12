var data=[
                {value: 100, name: '主题宣讲',unit:'场'},
                {value: 42, name: '文体活动',unit:'场'},
                {value: 39, name: '技能培训',unit:'期'},
                {value: 20, name: '“大讲堂”活动',unit:'场'}
            ]
var color=['#ee6666',"#1492ff",'#fac858','#91cc75']
option = {
color:color,
    legend: {
        orient: 'vertical',
        right: 'center',
        bottom:'10px',
        itemWidth: 14,
        itemGap: 12,
        textStyle: {
          rich: {
                        a: {
                            color: '#333',
                            fontSize: 16,
                            padding: [0, 10, 0, 0],
                        },
                        b: {
                            color: '#333',
                            fontSize: 16,
                            padding: [0, 10, 0, 10],
                        },
                    }
        },
        formatter: function (name) {
                    var target,unit;
                    for (var i = 0, l = data.length; i < l; i++) {
                        if (data[i].name == name) {
                            target = data[i].value;
                            unit = data[i].unit
                        }
                    }
                    return `{a| ${name}}{b|${target}}{a|${unit}}`;
                }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['30%', '45%'],
            center:['50%','35%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'outside',
                formatter:'{text|{b}}\n{num|{c}}',
                rich:{
                    text: {
                        fontSize: '16',
                        lineHeight:'20',
                        color:'#333'
                    },
                    num: {
                        fontSize: '18',
                        lineHeight:'20',
                        color:'#1492ff'
                    }
                }
            },
            labelLine: {
                show: true
            },
            data: data
        }
    ]
};