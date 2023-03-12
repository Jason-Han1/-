// var uploadedDataURL = "/asset/get/s/data-1554346484419-4KGBejyJ5.json";

var uploadedDataURL = "/asset/get/s/data-1554349414632-EoKmzIc1h.json";

function str2month(str) {
    var arr = str.split('');
    arr.splice(4, 0, '-');
    arr.splice(7, 0, '-');
    arr.splice(10);
    var dateStr = arr.join('');
    var month = new Date(dateStr).toDateString().split(" ")[1];
    return month;
}

var dims = {
    time: 0,
    levels: 1,
    R: 2,
};
var arrowSize = 16;

function renderArrow(param, api) {
    var point = api.coord([
        api.value(dims.time),
        api.value(dims.levels)
    ]);
    return {
        type: 'path',
        shape: {
            pathData: 'M22 6 L10 6 L10 16 L22 16 L10 16 L10 46',
            x: -arrowSize / 2,
            y: -arrowSize / 2,
            width: arrowSize,
            height: arrowSize
        },
        rotation: Math.PI / 180 * api.value(dims.R),
        position: point,
        style: api.style({
            stroke: 'blue',
            fill: 'none',
            lineWidth: 1
        })
    };
}

function makeSeries(stPLan, opt) {
    var seriesItem = stPLan.data;
    let TT = echarts.util.map(seriesItem.tt, function(item) {
        // item = seriesItem.tt[0]
        let lineType = (item.value < 0 ? 'dotted' : 'solid');
        var points = [];
        var max = 0;
        echarts.util.map(item.pointdata, (item2, index) => {
            if (item2 && item2[0] >= max + 12) {
                points.push({
                    xAxis: item2[0],
                    yAxis: item2[1],
                    value: item.value
                });
                max = item2[0]
            }
        })
        if (points.length == 0) {
            points.push({
                xAxis: item.pointdata[Math.floor(item.pointdata.length / 2)][0],
                yAxis: item.pointdata[Math.floor(item.pointdata.length / 2)][1],
                value: item.pointdata.value
            });
        }

        return echarts.util.merge({
            name: '温度',
            type: 'line',
            smooth: true,
            symbol: 'none',
            symbolSize: 0,
            // smoothMonotone: false,
            // sampling:'average',
            // sampling: function(frame){
            // 	return 100;
            // },
            lineStyle: {
                type: lineType,
                width: 1,
            },
            data: item.pointdata,
            markPoint: {
                symbol: 'circle',
                symbolSize: '10',
                label: {
                    color: "red",
                    backgroundColor: "#fff",
                },
                itemStyle: {
                    color: 'transparent'
                },
                data: points
            },
        }, opt || {}, true);
    });

    let RH = echarts.util.map(seriesItem.rh, function(item) {
        // item = seriesItem.rh[1]
        let areaColor =
            item.value >= 95 ? '#11a20f' :
            item.value >= 90 ? '#11a20f' :
            item.value >= 80 ? '#96f48c' :
            item.value >= 70 ? '#c8fcbe' :
            '#11b41d';
        item.pointdata.push([item.pointdata[0][0], item.pointdata[0][1]])
        return echarts.util.merge({
            name: '湿度',
            type: 'line',
            smooth: true,
            symbol: 'none',
            symbolSize: 0,
            lineStyle: {
                width: 0,
            },
            areaStyle: {
                color: areaColor,
                opacity: '.6'

            },
            data: item.pointdata,
        }, opt || {}, true);
    });

    let windData = [];
    echarts.util.map(seriesItem.wd, function(item, index) {
        echarts.util.map(item, function(item2, index2) {
            windData.push([index2, stPLan.levels[index], item2])
        })
    })
    let WIND = {
        type: 'custom',
        name: '风向',
        renderItem: renderArrow,
        encode: {
            x: dims.time,
            y: dims.levels
        },
        data: windData,
    };

    //  return WIND;
    let result = TT.concat(RH);
    result.push(WIND);
    return result;
}


$.getJSON(uploadedDataURL, function(rawData) {
    var stPLan = rawData.stPLan;

    var optionItem = {
        title: 'Ec模式单点3小时间隔综合廓线图',
        lat: '35.24',
        lon: '113.6',
        time: '2017092912',
        baseTime: '000',
        offset: '072',
        timeZone: '北京时',
        seriesItem: stPLan,
        nameY: '(单位：hPa）'
    };
    var {
        title,
        lat,
        lon,
        time,
        baseTime,
        offset,
        timeZone,
        seriesItem,
        nameY,
    } = optionItem;


    option = {
        title: [{
            text: title,
            left: 'center'
        }, {
            text: `lat:+${lat} lon:${lon}`,
            textStyle: {
                fontWeight: 'normal',
                color: 'red',
            },
            top: 30,
            left: 70
        }, {
            text: time,
            textStyle: {
                fontWeight: 'normal',
                color: 'blue',
            },
            top: 30,
            left: 'center',
        }, {
            text: `${baseTime}-${offset}`,
            textStyle: {
                fontWeight: 'normal',
                color: 'blue',
            },
            top: 30,
            right: '70',
        }, {
            text: str2month(time),
            textStyle: {
                fontWeight: 'normal',
                color: 'red',
            },
            bottom: 15,
            left: '70',
        }, {
            text: timeZone,
            textStyle: {
                fontWeight: 'normal',
            },
            bottom: 15,
            right: '70',
        }],

        // tooltip: {
        //     trigger: 'axis',
        //     formatter: function(params) {
        //         var items = echarts.util.map(params, function(item) {
        //             return (`${item.seriesName}: ${item.value}`);
        //         });
        //         return [
        //             echarts.format.formatTime('yyyy-MM-dd', params[0].axisValue) +
        //             ' ' + echarts.format.formatTime('hh:mm', params[0].axisValue),
        //             items.join('<br>')
        //         ].join('<br>');
        //     },
        //     axisPointer:{
        //         type:"cross"
        //     }
        // },
        grid: {
            show: true,
            top: '70px',
            left: '50px',
            right: '50px'
        },
        graphic: [{
            type: 'group',
            bounding: 'raw',
            left: 0,
            top: 60,
            z: 100,
            width: 40,
            height: 480,
            children: [{
                type: 'rect',
                z: 100,
                shape: {
                    width: 40,
                    height: 480,
                },
                style: {
                    fill: 'rgba(255,255,255,1)'
                }
            }, {
                type: 'text',
                z: 100,
                right: '5',
                top: '-15',
                style: {
                    fill: '#333',
                    text: 'hpa',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '1%',
                style: {
                    fill: '#333',
                    text: '100',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '11%',
                style: {
                    fill: '#333',
                    text: '200',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '41%',
                style: {
                    fill: '#333',
                    text: '500',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '61%',
                style: {
                    fill: '#333',
                    text: '700',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '76%',
                style: {
                    fill: '#333',
                    text: '850',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '86%',
                style: {
                    fill: '#333',
                    text: '950',
                }
            }, {
                type: 'text',
                z: 100,
                right: '10',
                top: '91%',
                style: {
                    fill: '#333',
                    text: '1000',
                }
            }]
        }, {
            type: 'group',
            bounding: 'raw',
            right: 0,
            top: 60,
            z: 100,
            width: 50,
            height: 480,
            children: [{
                type: 'rect',
                z: 100,
                shape: {
                    width: 50,
                    height: 480,
                },
                style: {
                    fill: 'rgba(255,255,255,1)'
                }
            }, {
                type: 'image',
                z: 100,
                left: '12',
                top: 'center',
                style: {
                    image: '/images/legent.jpg',
                    width: 36,
                    height: 175,
                }
            }]
        }],
        // color:'lightGreen',
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: stPLan.vtis,
            axisLabel: {
                formatter: function(value) {
                    return echarts.format.formatTime('ddhh', new Date(+value));
                }
            },
        },
        yAxis: {
            type: 'value',
            show: false,
            name: nameY,
            inverse: true,
            nameLocation: 'center',
            nameGap: '40',
            min: function(v) {
                return stPLan.levels[stPLan.levels.length - 1];
            },
            max: function(v) {
                return stPLan.levels[0] + 100;
            },
            // scale: true,
        },
        dataZoom: {
            type: 'inside',
            showDetail: false,
             filterMode: 'none',
            start: 0,
            end: 30,
            // minSpan: 30,
            zoomLock: true,

        },
        series: makeSeries(seriesItem),
    };
    myChart.setOption(option);
})