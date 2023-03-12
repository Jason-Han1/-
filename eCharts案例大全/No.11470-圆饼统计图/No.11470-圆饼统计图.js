var ydata = [{
    name: '军事训练',
    value: 80
}, {
    name: '生产劳动',
    value: 180
}, {
    name: '勤工俭学',
    value: 220
}, {
    name: '研学旅行',
    value: 25
}, {
    name: '社会调查',
    value: 50
}, {
    name: '实践活动',
    value: 255
}];
var total = 0;
var legData = [];
for (var i = 0, len = ydata.length; i < len; i++) {
    total += ydata[i].value;
    legData.push(ydata[i].name);
}

var color = ["#0098ec", '#01ffff', '#00c800', "#fcc000", '#c451ea', '#ff5252']

option = {
    backgroundColor: '#012A5C',
    color: color,
    title: {
        text: '总计：' + total,
        //  subtext: 7789,
        textStyle: {
            color: '#fff',
            fontSize: 40,
            align: 'center'
        },
        // subtextStyle: {
        //     fontSize: 30,
        //     color: ['#ff9d19']
        // },
        x: 'center',
        y: 'center',
    },
    // tooltip: {
    //     trigger: "item",
    //     textStyle: {
    //         fontSize: 20
    //     },
    //     formatter: function(param) {
    //         return param.marker + param.name + "  " + param.percent.toFixed(1) + "%";
    //     }
    // },
    legend: {
        orient: 'horizontal',
        bottom: 20,
        x: 'center',
        width: '32%',
        itemWidth: 14,
        itemHeight: 14,
        // align: 'left',
        textStyle: {
            color: '#fff'
        },
        itemGap: 20,
        formatter: function(name) {
            for (var i = 0, len = legData.length; i < len; i++) {
                if (legData[i] == name) {
                    return name + ' - ' + ((ydata[i].value / total) * 100).toFixed(1) + '%'
                }
            }
        }
    },
    series: [{
        name: '各类活动次数',
        type: 'pie',
        // clockwise: false, //饼图的扇区是否是顺时针排布
        // minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ["30%", "50%"],
        label: {
            normal: {
                show: false,
                formatter: '{text|{b}}\n{value|{d}%}',
                rich: {
                    text: {
                        color: "#fff",
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 5
                    },
                    value: {
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true
            }
        },
        data: ydata
    }]
};