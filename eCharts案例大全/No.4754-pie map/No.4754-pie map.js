const worldGeoCoordMap = {
    '美国蒙特里': [-121.874729, 36.541478],
    '荷兰奥特芬': [5.057415, 52.735095],
    '中国上海': [121.4648, 31.2891]
};
const worldDatas = [
    ['美国蒙特里', 10, 20, 30, 0, 0],
    ['荷兰奥特芬', 0, 0, 0, 0, 1],
    ['中国上海', 0, 50, 0, 100, 0]
];

let series = [];

const option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
    },
    geo: {
        map: 'world',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                areaColor: '#DDD',
                borderColor: '#b1b1b1'
            },
            emphasis: {
                areaColor: '#DDD'
            }
        }
    },
    series: series
};

const renderStations = () => {
    let option = {
        title: [],
        grid: [],
        legend: {
            //   x: '64%',
            //   y: '30%',
            //   orient: 'vertical',
            data: ['GPS', 'GLONASS', 'GALILEO', 'BDS', '异常']
        },
        series: []
    };

    echarts.util.each(worldDatas, function(dataItem, idx) {
        let geoCoord = worldGeoCoordMap[dataItem[0]];
        let coord = myChart.convertToPixel('geo', geoCoord);
        idx = String(idx);
        inflationData = [{
                name: 'GPS',
                value: dataItem[1]
            },
            {
                name: 'GLONASS',
                value: dataItem[2]
            },
            {
                name: 'GALILEO',
                value: dataItem[3]
            },
            {
                name: 'BDS',
                value: dataItem[4]
            },
            {
                name: '异常',
                value: dataItem[5]
            },
        ];
        let total = dataItem[1] + dataItem[2] + dataItem[3] + dataItem[4] + dataItem[5];
        let title = {
            text: dataItem[0],
            textStyle: {
                fontSize: 10,
                fontWeight: 'bold'
            },
            x: coord[0] - 15,
            y: coord[1] + 15
        };
        option.title.push(title);
        option.grid.push({
            id: idx,
            gridId: idx,
            width: 30,
            height: 40,
            left: coord[0] - 15,
            top: coord[1] - 15,
            z: 100
        });
        option.series.push({
            id: idx,
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            radius: 15,
            center: coord,
            data: inflationData,
            z: 100,
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {c}'
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        // 每个饼的颜色
                        let colorList = ['#38c2cc', '#a047f2', '#f7bb2a', '#a7f421', '#f02020'];
                        return colorList[params.dataIndex];
                    }
                }
            }
        });
    });
    myChart.setOption(option);
}

setTimeout(renderStations, 0);
// 缩放和拖拽
function throttle(fn, delay, debounce) {
    let currCall;
    let lastCall = 0;
    let lastExec = 0;
    let timer = null;
    let diff;
    let scope;
    let args;

    delay = delay || 0;

    function exec() {
        lastExec = new Date().getTime();
        timer = null;
        fn.apply(scope, args || []);
    }

    let cb = function() {
        currCall = new Date().getTime();
        scope = this;
        args = arguments;
        diff = currCall - (debounce ? lastCall : lastExec) - delay;

        clearTimeout(timer);

        if (debounce) {
            timer = setTimeout(exec, delay);
        } else {
            if (diff >= 0) {
                exec();
            } else {
                timer = setTimeout(exec, -diff);
            }
        }

        lastCall = currCall;
    };

    return cb;
}

const throttledRenderEachStation = throttle(renderStations, 0);
myChart.on('geoRoam', throttledRenderEachStation);
myChart.setOption(option);