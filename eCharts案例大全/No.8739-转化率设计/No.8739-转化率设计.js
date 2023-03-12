var rightArrow = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABNBAMAAAAYzFT5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACZmZmZmZmqqqqZmZkAAAClqsN/AAAAA3RSTlMAf4C/aSLHAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAFdJREFUSMftzbENgCAYROEDHMCCASwYwMQFKNh/JkOhHfnPxuq9+sud9FSuZac+qnUFhUKhUKi3raNQqJ/U7qgU7k1VHZWGo+qI62qWyvHjrFkqW0pHTG6J1zAklFuGvAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0wM1QxODo0OTo1NyswODowMJLTpqcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMDNUMTg6NDk6NTcrMDg6MDDjjh4bAAAAAElFTkSuQmCC";
var uploadedDataURL = "/asset/get/s/data-1576742942370-X6JMK0GY.png";
var colors = ['#1cd389', '#668eff', '#ffc751', '#ff6e73', '#8683e6', '#9692ff'];
var url = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAMAAACLgl7OAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaVBMVEUAAADBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcEAAAD45xibAAAAInRSTlMAmT6WJYwSfBMGZAFHmEgtkBeCCW0KAlI1k5QeiA10A1tc7ah1owAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAB7SURBVCjPtZDZDoAgDAQXvA+8bwX1/3/SGKIBEd+cx07TdgtIiAF0/mygDvnAoYDr2b3nnjP8wOaDUG6J4ncfR9cdScpMzbJECZEXT1/kesyy0n1VPv6AulF908Kg6+9DWN/hjWGUfhpgYV5Ov8ywwgUhguODddtXvXIAjuUEs/70/t4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMTZUMTU6MzM6MDkrMDg6MDCzL2BEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTE2VDE1OjMzOjA5KzA4OjAwwnLY+AAAAABJRU5ErkJggg==';
var markLineSetting = {
    normal: {
        show: true,
        backgroundColor: '#e4f5da',
        borderRadius: 4,
        color: '#333',
        verticalAlign: 'middle',
        offset: [40, 0, 0, 0],
        fontSize: 14,
        padding: [3, 10, 5, 10],
        formatter: function(d) {
            console.log(d)
            if (d.value) {
                var ins = '{img1|} ' + '{words|' + d.data.itemValue + '}';
                return ins
            }
        },
        rich: {
            img1: {
                backgroundColor: {
                    image: uploadedDataURL,
                },
                width: 18,
                height: 16
            },
            words: {
                color: '#333',
                position: 'right',
                fontSize: 14,
                lineHeight: 20,
                padding: [0, 0, 5, 0],
            }
        }
    }
}
var lineargroup = [{
        value: 100,
        name: '目标',
        oriname: "意向",
        number: 98756,
        color: ["rgba(29,211,137,0.8)", "rgba(29,211,137,0)"]
    },
    {
        value: 80,
        name: '方案率',
        oriname: "方案",
        number: 88756,
        color: ["rgba(102,142,255,0.7)", "rgba(102,142,255,0)"]
    },
    {
        value: 60,
        name: '商務率',
        oriname: "商務",
        number: 78756,
        color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"]
    },
    {
        value: 40,
        name: '成交率',
        oriname: "即將成交",
        number: 68756,
        color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"]
    },
    {
        value: 20,
        name: '贏單率',
        oriname: "贏單",
        number: 58756,
        color: ["rgba(134,131,230,0.4)", "rgba(134,131,230,0)"]
    }
];
var data1 = [];
var data2 = [];
for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: lineargroup[i].value,
        num: lineargroup[i].number,
        name: lineargroup[i].oriname
    };
    var obj2 = {
        value: lineargroup[i].value,
        name: lineargroup[i].name,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: lineargroup[i].color[0]
                }, {
                    offset: 1,
                    color: lineargroup[i].color[1]
                }]),
                borderWidth: 0,
                opacity: 1
            }
        },
    };
    data1.push(obj1);
    data2.push(obj2);
}
var option = {
    backgroundColor: '#ffffff',
    color: colors,
    // tooltip: {
    //     trigger: "item",
    //     formatter: "{b} : {c}%"
    // },
    grid: {
        top: '0',
        left: "2%",
        right: 20,
        height: "336",
        bottom: '10',
        //  containLabel: true
    },
    xAxis: [{
            show: false,
            inverse: true,
            position: 'top',
        },
        {
            position: 'bottom',
            show: false,
            min: 100,
            max: 200
        }
    ],
    yAxis: [{
            position: 'left',
            top:'120',
            show: false,
            boundaryGap: false,
            inverse: true,
            type: "category",
             min: '转化率1',
            data: ["转化率1", "转化率2", "转化率3", "转化率4", "转化率5"]
        }
    ],
    series: [{
            top: 0,
            type: 'funnel',
            height: '400',
            gap: 20,
            minSize: 150,
            left: '20%',
            width: '60%',
            label: {
                show: true,
                position: 'inside',
                fontSize: '14',
                formatter: function(d) {
                    var ins = d.name + '{aa|}\n' + d.data.num;
                    return ins
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0]
                    }
                }
            },
            data: data1
        },
        {
            top: 0,
            type: 'funnel',
            height: '400',
            gap: 20,
            minSize: 150,
            left: '8%',
            width: '60%',
            z: 2,
            label: {
                normal: {
                    color: '#333',
                    position: 'insideLeft',
                    padding: [11, 25],
                    formatter: function(d) {
                        var ins = '{aa|' + d.name + '}\n{bb|' + d.percent + '%}';
                        return ins
                    },
                    rich: {
                        aa: {
                            align: 'center',
                            color: '#666',
                            fontSize: '12',
                            lineHeight: '30'
                        },
                        bb: {
                            align: 'center',
                            color: '#333',
                            fontSize: '22'
                        }
                    }
                }
            },
            data: data2
        },
        {
            top: '20%',
            type: 'pictorialBar',
            name: 'xiaojiantou',
            symbolSize: ['32', '17'],
            symbolOffset:[0,-10],
            symbolPosition: 'center',
            symbol: url,
            animation: true,
            symbolClip: true,
            z: 10,
            data: [{
                    value: 100,
                },
                {
                    value: 100,
                },
                {
                    value: 100,
                },
                {
                    value: 100,
                },
                {
                    value: 100,
                }
            ]
        },
        {
            top: '20%',
            name: 'youcejiantou',
            type: 'pictorialBar',
            symbolPosition: 'center',
            symbolSize: ['73', '77'],
            symbol: rightArrow,
            symbolClip: true,
            xAxisIndex: '1',
            z: 1,
            data: [
                {
                    value: 0,
                    itemValue: '50%',
                    show: false,
                    label: markLineSetting,
                },
                 {
                    value: 360,
                    itemValue: '50%',
                    label: markLineSetting,
                },
                {
                    value: 350,
                    itemValue: '40%',
                    label: markLineSetting,
                },
                 {
                    value: 340,
                    itemValue: '20%',
                    label: markLineSetting,
                },
                {
                    value: 330,
                    itemValue: '10%',
                    label: markLineSetting,
                },
            ]
        },
    ]
};
