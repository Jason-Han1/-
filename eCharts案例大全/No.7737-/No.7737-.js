 var dataX=['2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', "2018-10", "2018-11", "2018-12", "2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08"];
var data2=["03","04","05","06","07","08","09","10","11","12","01","02","03","04"]
 option = {
            tooltip: {
                show: true,
            },
            legend: {
                top:15,
                type: "plain",
                right: 10,
                itemGap: 10,
                itemWidth: 10,
                itemHeight: 10,
                selectedMode: true,
                textStyle: {
                    color: "#ffffff",
                    fontFamily: "Microsoft YaHei",
                },
                data: ["年累收入", "同比"]
            },
            "dataZoom": [{
                "show": true,
                "height": 10,
                "xAxisIndex": [
                    0
                ],
                bottom: 30,
                // "start": 20,
                // "end": 100,
                startValue:dataX[dataX.length-13],
                endValue:dataX[dataX.length-1],
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",

                },
                textStyle: {
                    color: "#fff"
                },
                borderColor: "#90979c",
                rangeMode:["17日","100"],
                zoomLock:true


            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 50
            
            }],
            grid: {
                show: true,
                left: "2%",
                top: "20%",
                right: "3%",
                bottom: 70,
                border: 0,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    position: 'bottom',
                    interval: 0,
                    axisLine: {
                        show: true,
                        onZero: true,
                        lineStyle: {
                            color: "#556477"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        color: "#000",
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12,
                        rotate: 60
                    },
                    data: dataX,
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],

            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 400,
                    interval: 100,
                    splitNumber: 4,
                    axisLine: {
                        show: true,
                        onZero: true,
                        lineStyle: {
                            color: "#4a5c66"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        interval: 'auto',
                        color: "#ffffff",
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12
                    },

                },
                {
                    show: false,
                    type: 'value',
                    min: 0,
                    max: 25,
                    interval: 5,

                }
            ],
            series: [
                {
                    name: '年累收入',
                    type: 'bar',
                    legendHoverLink: true,
                    barWidth: 13,
                    barGap: 0,
                    itemStyle: {
                        normal: {
                            color: "#7ab9ef"
                        }

                    },
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            return "<div class='tooltip-box'><h3>政企行业</h3>" +
                                "<div class='num-box'><b>年累收入：</b><span>1111</span></div>" +
                                "<div class='num-box'><b>同比：</b><span>2222</span></div>" +
                                "<div class='num-box'><b>当月收入：</b><span>3333</span></div>" +
                                "<div class='num-box'><b>环比：</b><span>4444</span></div>" +
                                "</div>"
                        }
                    },
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6,2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6]
                }


            ]
        };