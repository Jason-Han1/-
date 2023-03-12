var rightArrow = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABNBAMAAAAYzFT5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACZmZmZmZmqqqqZmZkAAAClqsN/AAAAA3RSTlMAf4C/aSLHAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAFdJREFUSMftzbENgCAYROEDHMCCASwYwMQFKNh/JkOhHfnPxuq9+sud9FSuZac+qnUFhUKhUKi3raNQqJ/U7qgU7k1VHZWGo+qI62qWyvHjrFkqW0pHTG6J1zAklFuGvAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0wM1QxODo0OTo1NyswODowMJLTpqcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMDNUMTg6NDk6NTcrMDg6MDDjjh4bAAAAAElFTkSuQmCC",
    uploadedDataURL = "/asset/get/s/data-1576742942370-X6JMK0GY.png",
    colors = ['#1cd389', '#668eff', '#ffc751', '#ff6e73', '#8683e6', 'rgba(134,131,230,1)', 'rgba(134,131,230,0.8)', 'rgba(134,131,230,0.6)', 'rgba(134,131,230,0.4)', 'rgba(134,131,230,0.2)'],
    url = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAMAAACLgl7OAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaVBMVEUAAADBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcEAAAD45xibAAAAInRSTlMAmT6WJYwSfBMGZAFHmEgtkBeCCW0KAlI1k5QeiA10A1tc7ah1owAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAB7SURBVCjPtZDZDoAgDAQXvA+8bwX1/3/SGKIBEd+cx07TdgtIiAF0/mygDvnAoYDr2b3nnjP8wOaDUG6J4ncfR9cdScpMzbJECZEXT1/kesyy0n1VPv6AulF908Kg6+9DWN/hjWGUfhpgYV5Ov8ywwgUhguODddtXvXIAjuUEs/70/t4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMTZUMTU6MzM6MDkrMDg6MDCzL2BEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTE2VDE1OjMzOjA5KzA4OjAwwnLY+AAAAABJRU5ErkJggg==',
    markLineSetting = {
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
    };



var lineargroup = [{
        value: 100,
        name: '目标',
        oriname: "意向",
        number: 98756,
        percent: '15.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
    {
        value: 80,
        name: '方案率',
        oriname: "方案",
        number: 88756,
        percent: '18.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
    {
        value: 60,
        name: '商務率',
        oriname: "商務",
        number: 78756,
        percent: '19.56%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
    {
        value: 40,
        name: '成交率',
        oriname: "即將成交",
        number: 68756,
        percent: '25.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
    {
        value: 20,
        name: '贏单率',
        oriname: "贏单",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
    {
        value: 20,
        name: '贏单率1',
        oriname: "贏单1",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
    {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    }, {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
     {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },

 {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },

    {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    }, {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },
     {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },

 {
        value: 20,
        name: '贏单率2',
        oriname: "贏单2",
        number: 58756,
        percent: '65.35%', // 非必须，如果不需要，填充空字符串， 左侧的数据

    },


];





var data1 = [];
var data2 = [];
var ydata = [];
var xiaojiantou_data = [];
for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: (100 / lineargroup.length) * (lineargroup.length - i),
        num: lineargroup[i].number,
        name: lineargroup[i].oriname
    };
    var obj2 = {
        value: (100 / lineargroup.length) * (lineargroup.length - i),
        percent: lineargroup[i].percent,
        name: lineargroup[i].name,
        itemStyle: {
            normal: {
                color: '#eee',
                borderWidth: 0,
                opacity: 1
            }
        },
    };
    var _jiantou = {
        value: 100,
    }
    data1.push(obj1);
    data2.push(obj2);
    ydata.push(i + 1);
    xiaojiantou_data.push(_jiantou)
}

var _rightHeight = (600 - 20 * (lineargroup.length - 1)) / lineargroup.length + 17;

//转化率数据
var sdata = ['24%', '21%', '15%', '12%', '7%', '97.87%', '20%', '20%', '12%']



var arrowData = [{
    value: 0,
    itemValue: '50%',
    show: false,
    label: markLineSetting,
}]

for (var i = 0; i < lineargroup.length - 1; i++) {
    var _objdd = {
        value: 365 - i * (50 / lineargroup.length),
        itemValue: sdata[i],
        label: markLineSetting,
    }
    arrowData.push(_objdd);
}



var option = {
    backgroundColor: '#ffffff',
    color: colors,
    grid: {
        top: '0',
        left: "2%",
        right: 20,
        height: ((600 - 20 * (lineargroup.length )) / lineargroup.length + 23) * (lineargroup.length - 1)- (lineargroup.length),
        bottom: '10',
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
     
        top: '120',
        show: false,
        boundaryGap: false,
        inverse: true,
        type: "category",
        // min: '转化率1',
        data: ydata
    }],
    series: [
        {
            top: 0,
            type: 'funnel',
            height: '600',
            gap: 20,
            minSize: 150,
            left: '20%',
            width: '60%',
            z: 3,

            label: {
                show: true,
                position: 'inside',
                fontSize: '14',
                formatter: function(d) {
                    var ins = d.name + '{aa|} ' + d.data.num;
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
            height: '600',
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
                        var ins = '{bb|' + d.data.percent + '}';
                        return ins;
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
            top: '0',
            type: 'pictorialBar',
            name: 'xiaojiantou',
            symbolSize: ['32', '17'],
            symbolOffset: [0, -10],
            symbolPosition: 'center',
            symbol: url,
            animation: true,
            symbolClip: true,
            z: 10,
            data: xiaojiantou_data
        },
        {
            top: '0',
            name: 'youcejiantou',
            type: 'pictorialBar',
            symbolPosition: 'center',
            symbolSize: ['73', '' + _rightHeight],
            symbol: rightArrow,
            symbolClip: true,
            xAxisIndex: '1',
            z: 1,
            data: arrowData
        },
    ]
};