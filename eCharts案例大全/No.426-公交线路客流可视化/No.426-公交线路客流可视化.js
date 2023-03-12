//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！

var uploadedDataURL = "/asset/get/s/data-1497613978134-ByGiUH-m-.json";


var t_pos = {
    left: 0,
    top: 0
}

var last_point = [0, 0];
var counter = 0;
myChart.showLoading();
var planePath = 'path://M268.601,18.375c0,0,14.496,0,18.005,0 		\
c31.325,0,59.155,0,59.155,0c6.701,0,12.14,5.238,12.14,11.695v17.872c-24.507,0-44.374,19.859-44.374,44.351 		\
c0,24.492,19.86,44.351,44.374,44.351V335.99c-24.507,0.006-44.374,19.857-44.374,44.357c0,24.484,19.86,44.344,44.374,44.352 		\
v25.26c0,6.457-5.431,11.695-12.14,11.695H200.158c-12.013,0-19.527-7.781-19.527-19.084c0,0,0-351.215,0-365.378 		\
s18.736-42.622,44.1-53.734C238.303,17.658,268.601,18.375,268.601,18.375z M202.818,387.729v39.918 		\
c0,6.531,5.29,11.828,11.821,11.828h35.426c6.531,0,11.814-5.297,11.814-11.828v-39.918H202.818z M202.818,321.199v51.746h59.053 		\
v-51.746H202.818z M202.818,254.904v51.518h59.053v-51.518H202.818z M202.818,188.413v51.517h59.053v-51.517H202.818z 		 \
M202.818,121.882v51.746h59.053v-51.746H202.818z M289.658,121.904c-3.037,0-5.497,3.311-5.497,7.396 		\
c0,4.086,2.46,7.389,5.497,7.389h10.978c3.037,0,5.497-3.303,5.497-7.389c0-4.085-2.46-7.396-5.497-7.396H289.658z M237.38,43.472 		c-20.229,4.766-34.562,30.897-34.562,38.145c0,17.754,0,25.475,0,25.475h59.053l0.03-66.094 		C261.901,40.998,253.641,39.653,237.38,43.472z M328.326,380.348c0-16.328,13.247-29.568,29.59-29.568 		\
c16.335,0,29.582,13.24,29.582,29.568c0,16.334-13.247,29.566-29.582,29.566C341.573,409.914,328.326,396.682,328.326,380.348z 		 M328.326,92.286c0-16.328,13.247-29.567,29.59-29.567c16.335,0,29.582,13.239,29.582,29.567c0,16.335-13.247,29.574-29.582,29.574 		C341.573,121.86,328.326,108.621,328.326,92.286z  '
myChart.setOption(option = {
    title: [{
        text: "公交线路可视化",
        subtext: '点击右侧柱状图可对应到站点',
        left: 10,
        top: 10,
        textStyle: {
            color: 'rgba(18,89,147,1)',
            fontSize: 40
        }
    }, {
        right: 170,
        text: "公交站点上车人数",
        subtext: '',
        textStyle: {
            color: '#fff',
            fontSize: 15
        }
    }, {
        right: 170,
        top: '53%',
        text: "公交上车客流时变",
        subtext: '',
        textStyle: {
            color: '#fff',
            fontSize: 15
        }
    }],

    grid: [{
            right: 150,

            height: '44%',
            width: '300px',

        }, {
            right: 50,
            width: '380px',
            bottom: '3%',
            top: '58%',

            //height: '40%',

        }, {
            show: true,
            left: null,
            right: 0,
            height: '100%',
            width: '480px',
            bottom: '0%',
            backgroundColor: 'rgba(18,89,147,0.8)'
        }, {
            show: true,
            left: 0,
            top: 0,
            height: '80px',
            width: '320px',
            bottom: '0%',
            backgroundColor: 'rgba(255,255,255,0.8)',
            zlevel: -1
        }

    ],
    tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        position: function(point, params, dom, rect, size) {
            var least_area = 20;
            var offset_x = 30; /* 相对于point的偏移 */
            var offset_y = 30;

            /* last_point的least_area范围内不会产生新的t_pos */
            if (Math.abs(point[0] - last_point[0]) < least_area &&
                Math.abs(point[1] - last_point[1]) < least_area &&
                counter >= 2) {
                return t_pos;
            }
            if (Math.abs(point[0] - last_point[0]) >= least_area ||
                Math.abs(point[1] - last_point[1]) >= least_area) {
                counter = 0;
            }
            counter += 1;
            /* 使real_x,real_y有数值 */
            if (counter == 1) {
                t_pos.left = point[0] + offset_x;
                t_pos.top = point[1] + offset_y;
                last_point = [point[0], point[1]];
            }
            /* 此处进行修正tooltip的位置 */
            if (counter == 2) {
                var real_x = $(dom).position().left;
                var real_y = $(dom).position().top;
                t_pos.left += point[0] - real_x + offset_x;
                t_pos.top += point[1] - real_y + offset_y;
            }
            return t_pos;
        }
    },
    animation: false,
    bmap: {
        center: [114.050032, 22.543052],
        zoom: 13,
        roam: true,


    },
    dataZoom: [{
        type: 'slider',
        yAxisIndex: 0,
        start: 0,
        end: 30,
        filterMode: 'empty',
        textStyle: {
            color: '#fff'
        },
        borderColor: '#fff',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }, {
        type: 'inside',
        yAxisIndex: 0,
        start: 0,
        end: 30,
        filterMode: 'empty'
    }, ],
    visualMap: {
        type: 'continuous',
        top: '65%',
        text: ['High', 'Low'],
        min: 0,

        //seriesIndex: [0,2],
        calculable: false,
        inRange: {
            color: ['lightblue', 'yellow', '#FF8000'] //['green', '#eac736','#d94e5d']
        },
        textStyle: {
            color: '#000',
            formatter: 'aaaa{value}bbbb{value2}' // 范围标签显示内容。
        }

    },
    xAxis: [{
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 2,
            textStyle: {
                color: '#fff'
            }
        }
    }, {
        gridIndex: 1,
        min: 0,
        max: 24,
        name: '时间',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 2,
            textStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: [{
        type: 'category',
        //  name: 'TOP 20',
        nameGap: 16,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff'
            }
        },
        data: []
    }, {
        gridIndex: 1,
        min: 0,
        name: '客流',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {

            margin: 2,
            textStyle: {

                color: '#fff'
            }
        }
    }],
    series: [{
        id: 'scatter',
        zlevel: -2,
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: 8,
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + ' : ' + params.value[2];
            },
            position: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '上车人数:' + params.data.value[2] + '人次';
            }
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
    }, {
        type: 'lines',

        effect: {
            show: true,
            period: 20,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15

        },
        coordinateSystem: 'bmap',
        polyline: true,
        zlevel: -2,
        lineStyle: {
            normal: {
                color: 'rgba(18,89,147, 1)',

                opacity: 0.8,
                width: 5,
                shadowColor: 'rgba(0, 0, 0, 0.9)',
                shadowBlur: 10
            }
        },

        progressiveThreshold: 500,
        progressive: 200
    }, {
        id: 'bar',
        zlevel: 2,
        type: 'bar',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#ddb926'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(params) {
                    return params.data[0] + ':' + params.data[1] + '人次';
                }
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: [],
        encode: {
            x: [1]
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '上车人数:' + params.data + '人次';
            }
        }
    }, {
        id: 'line2',
        zlevel: 2,
        type: 'line',

        itemStyle: {
            normal: {
                color: '#ddb926'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [],
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.data[0] + '时客流量' + params.data[1] + '人次';
            }
        }
    }]
});
if (!app.inNode) {
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

;

$.getJSON(uploadedDataURL, function(linedata) {
    var xAxisData = [];
    var bardata = [];
    for (var i = 0; i < linedata[0].length; i += 1) {
        xAxisData.push(linedata[0][i].name)
        bardata.push([linedata[0][i].name, linedata[0][i].value[2]])
    }
    myChart.hideLoading();
    myChart.setOption({
        yAxis: {
            data: xAxisData
        },
        visualMap: {
            max: linedata[1]
        },
        series: [{
            data: linedata[0],
            symbolSize: function(val) {

                return Math.max(30 * val[2] / linedata[1], 10);
            },
        }, {
            data: [{
                coords: linedata[2]
            }]
        }, {
            data: bardata
        }, {
            data: linedata[3]
        }]
    });
    myChart.on('mouseover', function(params) {
        if (params.seriesId == 'bar') {
            myChart.setOption({
                visualMap: {
                    seriesIndex: [0, 1, 2, 3, 4]
                },
                series: [{}, {}, {}, {}, {
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    symbolSize: function(val) {

                        return Math.max(30 * val[2] / linedata[1], 10)
                    },
                    data: [linedata[0][params.dataIndex]],
                    showEffectOn: 'render',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 15,
                                fontWeight: 'bolder',
                                color: 'rgba(18,89,127, 1)'
                            },
                            formatter: function(params1) {
                                return linedata[0][params.dataIndex].name;
                            }
                        },
                        emphasis: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: 'rgba(18,89,147, 1)'
                            },
                            formatter: function(params1) {
                                return linedata[0][params.dataIndex].name;
                            }
                        }
                    }
                }]
            });
        }
    })
    myChart.on('click', function(params) {
        if(params.seriesIndex == 0 | params.seriesIndex == 2){
        myChart.setOption({
            bmap: {
                center: linedata[0][params.dataIndex].value,
                zoom: 16
            },
            visualMap: {
                seriesIndex: [0, 1, 2, 3, 4]
            },
            series: [{}, {}, {}, {}, {
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                symbolSize: function(val) {

                    return Math.max(30 * val[2] / linedata[1], 10)
                },
                data: [linedata[0][params.dataIndex]],
                showEffectOn: 'render',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'rgba(18,89,147, 1)'
                        },
                        formatter: function(params1) {
                            return linedata[0][params.dataIndex].name;
                        }
                    },
                    emphasis: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'rgba(18,89,147, 1)'
                        },
                        formatter: function(params1) {
                            return linedata[0][params.dataIndex].name;
                        }
                    }
                }
            }]
        });}

    });
});