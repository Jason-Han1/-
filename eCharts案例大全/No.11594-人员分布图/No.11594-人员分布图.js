option = {
    backgroundColor: 'black',
    title: {
        text: '人员分布图',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        show: false
    },
    visualMap: {
        type: 'piecewise',
        showLabel: true,
        pieces: [{
                value: -1
            },
            {
                value: 0
            },
            {
                gte: 1
            }
        ],
        calculable: true,
        inRange: {
            color: ['#FF0000', '#f1f502', '#37E317']
        },
        textStyle: {
            color: '#fff'
        },
        formatter: function(value) { //标签的格式化工具。
            if (value >= 1) {
                return "男生";
            } else if (value === 0) {
                return "女生";
            } else if (value === -1) {
                return '人员分布区域';
            }
        }
    },
    geo: {
        scaleLimit: {
            min: 1,
            max: 8
        },
        map: 'china',
        label: {
            normal: {
                show: true,
                color: '#fff'
            },
            emphasis: {
                show: true,
                color: '#fff'
            }
        },
        roam: true,
        zoom: 1,
        center: [108.95, 34.27],
        itemStyle: {
            normal: {
                areaColor: '#1a305d',
                borderColor: '#111',
            },
            emphasis: {
                areaColor: '#264582'
            }
        }
    },
    series: [{
            zoom: 1,
            roam: true,
            name: '监控量测',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{
                name: '太阳花',
                value: ["93.622012", "43.37518", "0"]
            }, {
                name: '小草',
                value: ["95.622012", "40.37518", "1"]
            }],
            tooltip: {
                show: true,
                formatter: function(params, ticket, callback) {
                    var tpl =
                        '<table class="table table-bordered table-hover" style="color:#000000;" id="maptiptable"> ' +
                        '    <tbody> ' +
                        '        <tr> ' +
                        '            <td>名称</td> ' +
                        '            <td colspan="3"><span class="badge badge-red badge-square">' + params.data.name + '</span></td> ' +
                        '        </tr> ' +
                        '        <tr> ' +
                        '            <td style="width:80px;">测试</td> ' +
                        '            <td><span class="badge badge-blueberry badge-square">' + params.data.name + '</span></td> ' +
                        '            <td style="width:80px;">测试</td> ' +
                        '            <td><span class="badge badge-blueberry badge-square">' + params.data.name + '</span></td> ' +
                        '        </tr> ' +
                        '    </tbody> ' +
                        '</table> ';
                    return tpl;
                }
            },
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{
                name: '天使',
                value: ["93.622012", "43.37518", "-1"]
            }, {
                name: '魔鬼',
                value: ["117.2287", "39.084999", "-1"]
            }],
            symbolSize: 20,
            symbol: 'path://M35.025,17.608c-5.209-4.786-11.483-2.301-15.303-4.281v-1.482c0-0.41-0.333-0.743-0.743-0.743c-0.411,0-0.743,0.333-0.743,0.743v24.682c-1.855,0.104-3.261,0.59-3.261,1.175c0,0.661,1.793,1.197,4.005,1.197c2.21,0,4.003-0.536,4.003-1.197c0-0.585-1.405-1.071-3.261-1.175V26.151C24.575,24.573,28.408,17.166,35.025,17.608z',
            symbolRotate: 0,
            symbolOffset: ['50%', '-100%'],
            symbolKeepAspect: true,
            visualMap: false,
            tooltip: {
                show: true,
                formatter: function(params, ticket, callback) {
                    var tpl =
                        '<table class="table table-bordered table-hover" style="color:#000000;" id="maptiptable"> ' +
                        '    <tbody> ' +
                        '        <tr> ' +
                        '            <td>名称</td> ' +
                        '            <td colspan="3"><span class="badge badge-red badge-square">' + params.data.name + '</span></td> ' +
                        '        </tr> ' +
                        '    </tbody> ' +
                        '</table> ';
                    return tpl;
                }
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'top',
                    show: false,
                    textStyle: {
                        color: '#000000',
                        fontSize: 16
                    }

                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#F06C00'
                }
            }
        }
    ]
};