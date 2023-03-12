option = {
    backgroundColor: '#000',
    topicIndex: null,
    height: '432px',
    legend: {
        show: false
    },
    tooltip: {
        formatter: function(params) {
            console.log(params);
            var data = params.data;
            return "<div style='background:#07273B;border:1px solid #03941D;width:300px;height:200px;border-radius:5px'>" +
                "<div style='width:100%;text-align: center;margin-top:20px;font-size:16px;'>编码　<span style='color:#2AEAF0;font-size:18px;'>" + data.name + "</span></div>" +
                "<div style='width:100%;text-align: center;margin-top:20px;font-size:16px;white-space:pre-wrap;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;'><span style='color:#fff;font-size:14px;'>" + data.paizi + "</span></div>" +
                "<div style='width:50%;text-align: center;margin-top:20px;float:left;font-size:16px;'>轮胎　<span style='color:#BF564E;font-size:14px;'>" + data.luntai + "</span></div>" +
                "<div style='width:50%;text-align: center;margin-top:20px;float:left;font-size:16px;'>刹车　<span style='color:#2AEAF0;font-size:14px;'>" + data.shache + "</span></div>" +
                "<div style='width:50%;text-align: center;margin-top:20px;float:left;font-size:16px;'>雨刮　<span style='color:#2AEAF0;font-size:14px;'>" + data.yugua + "</span></div>" +
                "<div style='width:50%;text-align: center;margin-top:20px;float:left;font-size:16px;'>挡风玻璃　<span style='color:#2AEAF0;font-size:14px;'>" + data.dfbl + "</span></div>" +
                "</div>";
        },
        padding: 0,
        axisPointer: {
            type: 'shadow',
        },
        position: function(point, params, dom, rect, size) {
            console.log();
            if (point[1] > 866 && point[0] <= 1644) {
                return [point[0] + 10, point[1] - (size.contentSize)[1]];
            } else if (point[1] > 866 && point[0] > 1644) {
                return [point[0] - (size.contentSize)[0] - 10, point[1] - (size.contentSize)[1]];
            }
        }
    },
    grid: {
        containLabel: true,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        height: 432,
    },
    xAxis: {
        max: 100,
        min: 0,
        interval: 2,
        position: 'top',
        type: 'value',
        splitNumber: 4,
        axisLabel: { //坐标轴刻度标签的相关设置。
            show: false,
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
            lineStyle: {
                color: ['#fff'],
                opacity: 0.1
            }
        }
    },
    yAxis: {
        max: 100,
        min: 0,
        interval: 1,
        inverse: true,
        type: 'value',
        splitNumber: 4,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            right: '1px',
            start: 1,
            end: 36,
            fillerColor: '#1C466A',
            showDetail: false,
            handleSize: '0%',
            zoomLock: true,
            borderColor: 'rgba(167,183,204,0)',
            width: 8,
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 1,
            end: 36,
            zoomOnMouseWheel: false,
            moveOnMouseMove: false,
            moveOnMouseWheel: true
        }
    ],
    series: [{
        name: "车辆",
        data: [{
            value: [5, 5],
            name: "G253678",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [15, 5],
            name: "G251248",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "故障",
            dfbl: "故障"
        }, {
            value: [25, 5],
            name: "G253624",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [35, 5],
            name: "G250212",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [45, 5],
            name: "G253313",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [55, 5],
            name: "G253625",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "故障",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [65, 5],
            name: "G253520",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [75, 5],
            name: "G253775",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "故障",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [85, 5],
            name: "G253668",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [95, 5],
            name: "G251235",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 13],
            name: "G253312",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [15, 13],
            name: "G253641",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [25, 13],
            name: "G253625",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [35, 13],
            name: "G253641",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [45, 13],
            name: "G253645",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [55, 13],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [65, 13],
            name: "G253645",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [75, 13],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 21],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 29],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 37],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 45],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 53],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 61],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 69],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 77],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 85],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }],
        symbol: "rect",
        type: "scatter",
        hoverAnimation: false,
        zlevel: 3,
        symbolSize: [123, 67],
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data.name;
                },
                position: "insideLeft",
                fontSize: 16,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                opacity: 1,
                color: "#3E9A9D",
                barBorderRadius: "100"
            },
            emphasis: {
                color: "#DC5F51",
                opacity: 0
            }
        }
    }, {
        name: "车辆",
        data: [{
            value: [5, 5],
            name: "G253678",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [15, 5],
            name: "G251248",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "故障",
            dfbl: "故障"
        }, {
            value: [25, 5],
            name: "G253624",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [35, 5],
            name: "G250212",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [45, 5],
            name: "G253313",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [55, 5],
            name: "G253625",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "故障",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [65, 5],
            name: "G253520",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [75, 5],
            name: "G253775",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "故障",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [85, 5],
            name: "G253668",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [95, 5],
            name: "G251235",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 13],
            name: "G253312",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [15, 13],
            name: "G253641",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [25, 13],
            name: "G253625",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "故障",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [35, 13],
            name: "G253641",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [45, 13],
            name: "G253645",
            paizi: "广汽丰田",
            luntai: "故障",
            shache: "正常",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [55, 13],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "故障"
        }, {
            value: [65, 13],
            name: "G253645",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "正常",
            dfbl: "正常"
        }, {
            value: [75, 13],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 21],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 29],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 37],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 45],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 53],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 61],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 69],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 77],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }, {
            value: [5, 85],
            name: "G253612",
            paizi: "广汽丰田",
            luntai: "正常",
            shache: "正常",
            yugua: "故障",
            dfbl: "正常"
        }],
        hoverAnimation: false,
        symbol: "rect",
        type: "scatter",
        zlevel: 2,
        symbolSize: [123, 67],
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data.name;
                },
                position: "insideLeft",
                fontSize: 16,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                opacity: 1,
                color: "#DC5F51"
            }
        }
    }]
}