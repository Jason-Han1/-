const lineOpt = ({
    timeList,
    alist,
    blist,
    clist
}) => {
    const option = {
        title: {
            text: '区间滑动动态更新多图表数据'
        },
        legend: {
            orient: "horizontal", // 'vertical'
            x: "center", // 'center' | 'left' | {number},
            y: "60" // 'center' | 'bottom' | {number}
        },
        tooltip: {
            trigger: "axis",
            transitionDuration: 0,
            confine: true,
            bordeRadius: 4,
            borderWidth: 1,
            borderColor: "#333",
            backgroundColor: "rgba(255,255,255,0.9)",
            textStyle: {
                fontSize: 12,
                color: "#333"
            },
            formatter: function(params) {
                let time = params[0].axisValue;
                return (
                    `<div><time>${time}</time><br/>` +
                    params
                    .map(item => {
                        return `<p>${item.marker + item.seriesName}: ${item.data[1]}</p>`;
                    })
                    .join("")
                );
            }
        },
        axisPointer: {
            type: "shadow",
            link: {
                xAxisIndex: "all"
            }
        },
        toolbox: {
            show: true,
            x: "right",
            y: "50",
            feature: {
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: [{
                top: 100,
                height: 100,
                right: 50
            },
            {
                top: 240,
                height: 100,
                right: 50
            }
        ],
        xAxis: [{
            type: "category",
            gridIndex: 0,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: false
            }
        }, {
            type: "category",
            gridIndex: 1,
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
                type: "value",
                name: "a",
                gridIndex: 0,
                axisLabel: {
                    formatter: "{value}"
                }
            }, {
                type: "value",
                name: "b",
                axisLabel: {
                    formatter: "{value}"
                },
                gridIndex: 1
            },
            {
                type: "value",
                name: "c",
                axisLabel: {
                    formatter: "{value}"
                },
                gridIndex: 0
            }
        ],
        dataZoom: [{
            type: "slider",
            xAxisIndex: [0, 1],
            filterMode: "filter",
            zoomLock: false,
            realtime: false,
            start: 0,
            end: 10,
            top: 30
        }],
        series: [
            genSeriesItem(timeList, alist, {
                name: "a数据",
                type: "line",
                yAxisIndex: 0,
                xAxisIndex: 0
            }),
            genSeriesItem(timeList, blist, {
                name: "b数据",
                type: "line",
                yAxisIndex: 1,
                xAxisIndex: 1
            }),
            genSeriesItem(timeList, clist, {
                name: "c数据",
                type: "line",
                yAxisIndex: 2,
                xAxisIndex: 0
            })
        ]
    };
    return option;
};
const genSeriesItem = (times, datas, others) => {
    return {
        ...others,
        data: times.map((time, index) => {
            return [unixTimestamp(time), datas[index]];
        })
    };
};
const unixTimestamp = (t) => {
    var time = new Date();
    time.setTime(t);
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};

var now = new Date().getTime();

function getData(t) {
    var a = [],
        b = [],
        c = [],
        tl = [];
    for (var i = 0; i < 100; i++) {
        tl.push(t + i * 1000);
        a.push(Math.floor(Math.random() * 1000));
        b.push(Math.floor(Math.random() * 100));
        c.push(Math.floor(Math.random() * 1800));
    }
    return {
        t: tl,
        a: a,
        b: b,
        c: c
    }
}

var data = getData(now += 100000);
myChart.setOption(lineOpt({
    timeList: data.t,
    alist: data.a,
    blist: data.b,
    clist: data.c
}), true);
myChart.on("datazoom", params => {
    // console.log(params)
    // 折线图获取数据，需要做区域平移尾部触发分片数据加载
    if (params.end === 100) {

        var newData = getData(now += 100000);
        // 加载完塞数据后，缩放区域要固定回上一个区域去
        const dataZoom = myChart.getOption().dataZoom[0],
            startValue = dataZoom.startValue,
            endValue = dataZoom.endValue;
        myChart.appendData(
            genSeriesItem(newData.t, newData.a, {
                seriesIndex: 0
            })
        );
        myChart.appendData(
            genSeriesItem(newData.t, newData.b, {
                seriesIndex: 1
            })
        );
        myChart.appendData(
            genSeriesItem(newData.t, newData.c, {
                seriesIndex: 2
            })
        );
        // 直接appenddata不会更新数据，需要重新setOption
        myChart.dispatchAction({
            type: "dataZoom",
            startValue,
            endValue
        });
    }
});