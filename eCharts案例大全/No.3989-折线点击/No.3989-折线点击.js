var sr=[74, 85, 72, 84, 73, 82, 70, 80, 73, 81, 85, 82];
var zc=[66, 71, 79, 73, 60, 58, 65, 73, 79, 71, 62, 69];
var srtip=[];
for (var i = 0; i < sr.length; i++) {
   srtip.push(sr[i]+3)
}

option = {
    title:{
        text:"这是一个另类的tooltip指示器？",
        subtext:"大佬们求给我一个赞---木可"
    },
    tooltip: {
        trigger: 'axis',

        formatter: function(e) {
            var html = "";
            html += e[0].name + "月</br>";
            for (var i = 0; i < e.length; i++) {
                if (e[i].seriesType == "line") {
                    html += e[i].marker + e[i].seriesName + ":" + e[i].data + "</br>"
                }
            }
            return html
        }
    },
    legend: {},
    xAxis: [{
            type: 'category',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            axisLabel: {
                formatter: "{value}月"
            },
            axisPointer: {
                show: true,
                lineStyle: {
                    width: 0
                }
            }
        },
        {
            type: 'category',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            show: false,
            axisPointer: {
                show: true,
                lineStyle: {
                    width: 0
                }
            }
        },
    ],

    yAxis: {
        type: 'value'
    },
    series: [{
            id: "all",
            data: sr,
            type: 'line',
            name: "收入",
            smooth: true,
            itemStyle: {
                color: "orange",
                opacity: 0
            }

        },
        {
            id: "count",
            data: zc,
            type: 'line',
            name: "支出",
            smooth: true,
            itemStyle: {
                color: "green",
                opacity: 1
            }
        },
        {
            id: "all2",
            data: srtip,
            type: 'bar',
            xAxisIndex: 1,
            barWidth: "60%",
            itemStyle: {
                normal: {
                    opacity: 0
                },
                emphasis: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "white" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'green' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 0.5
                }


            }


        },
        {
            id: "count2",
            data: zc,
            type: 'bar',
            zlevel: 1,
            barWidth: '2px',
            itemStyle: {
                normal: {
                    opacity: 0
                },
                emphasis: {
                    opacity: 1,
                    color: "green"
                }
            }
        }
    ]
};

myChart.on('click',function(params){
	var name = params.name;
	var seriesType = params.seriesType;
	console.log(name+"\n"+seriesType);
	//你的具体逻辑流程
})











