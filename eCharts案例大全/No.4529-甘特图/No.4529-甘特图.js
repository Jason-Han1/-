var datas = {
    legended: ["100%", "(0%,100%)", "0%"],
    yXdata: ["a", "b", "c", "d", 'f'],
    color: ['rgba(6,217,138,1)', 'rgba(5,153,251,1)', 'rgba(254,152,51,1)', ]
}
var data = [
    [{
            name: 'a',
            xAxis: 1508925720000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925799000
        },
        {
            name: 'b',
            xAxis: 1508925720000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925799000
        },
        {
            name: 'c',
            xAxis: 1508925720000,
            startTime: '',
            endTime: '',
            xAxisEnd: 1508925799000
        }, {
            name: 'd',
            xAxis: 1508925720000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925799000
        },
        {
            name: 'f',
            xAxis: 1508925720000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925799000
        },
    ],
    [{
            name: 'a',
            xAxis: 1508925789000,
            startTime: '2017-10-25 18:06:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925822000
        },
        {
            name: 'b',
            xAxis: 1508925696000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925906000
        },
        {
            name: 'c',
            xAxis: 1508925789000,
            startTime: '',
            endTime: '',
            xAxisEnd: 1508925822000
        }, {
            name: 'd',
            xAxis: 1508925789000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925822000
        },
        {
            name: 'f',
            xAxis: 1508925789000,
            startTime: '2017-10-25 18:02:00',
            endTime: '2017-10-25 18:03:19',
            xAxisEnd: 1508925822000
        },
    ],

];
seriesArr = [];
data.map((item, i) => {
    var obj = {};
    var dataObj = [];
    item.map((items, y) => {
        let {
            name,
            xAxis,
            startTime,
            endTime,
            xAxisEnd
        } = items;
        var obj1 = [{
                xAxis: xAxis,
                yAxis: name,
                tooltip: {
                    endTime: startTime,
                    // eventName: "宝龙5号",
                    sip: "53.53.53.2",
                    startTime: endTime
                },
                itemStyle: {
                    normal: {
                        color: datas.color[i]
                    }
                }
            },
            {
                xAxis: xAxisEnd,
                yAxis: name
            }
        ];
        dataObj.push(obj1);
    })
    obj = {
        type: 'bar',
        stack: 1,
        name: datas.legended[i],
        markLine: {
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'solid',
                        width: 8,
                    },
                },
                emphasis: {
                    lineStyle: {
                        width: 15,
                    }
                }
            },
            data: dataObj
        }
    }
    seriesArr.push(obj);
});
option = {
    // color: ['#da251d', '#e77817', '#f8c300', '#68b920', '#3bb3c2', '#0093dd', '#667ab3'],
    color: datas.color,
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        formatter: function(v) {
            // return '<div >' +
            //     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + v.color + '"></span>' + v.seriesName + '<br/>' +
            //     '    <span class="chainTextTitle">开始时间：' + v.data.tooltip.startTime + '</span><br>' +
            //     '    <span class="chainTextTitle">结束时间：' + v.data.tooltip.endTime + '</span><br>' +
            //     '</div>';
        },
    },
    legend: {
        x: 'center',
        y: 'bottom',
        show: true,
        textStyle: {
            color: '#858585',
        },
        // data: ["100%", "(0%,50%)", "0%"]

        data: datas.legended
    },
    grid: {
        borderWidth: 0
    },
    xAxis: {
        type: 'time',
        // position: 'top',
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#858585',
                fontSize: 14,
            },
        },
        splitLine: {},
        max: 1508925966000,
        min: 1508925636000
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false,
            lineStyle: {
                color: '#858585',
                width: 2
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#404d5b',
                fontSize: 14,
            },
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#858585',
            },
        },
        // data: ["阶段1", "阶段2", "阶段3", "阶段4"]
        data: datas.yXdata
    },
    series: seriesArr
};