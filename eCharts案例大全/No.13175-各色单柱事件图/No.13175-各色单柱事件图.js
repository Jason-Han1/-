            function formatNum(strNum) {
                if (strNum.length <= 3) {
                    return strNum;
                }
                if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                    return strNum;
                }
                var a = RegExp.$1,
                    b = RegExp.$2,
                    c = RegExp.$3;
                var re = new RegExp();
                re.compile("(\\d)(\\d{3})(,|$)");
                while (re.test(b)) {
                    b = b.replace(re, "$1,$2$3");
                }
                return a + "" + b + "" + c;
            }

            var myColor = ['#F7C4C4', '#F2D693', '#FAFA81', '#50F750', 'cyan', '#40ADF7', '#F595F5'];
            var xAxisData = ['A站', 'B站', 'C站', 'D站', 'E站', 'F站', 'G站'];

            option = {
                title: {
                    left: 'center',
                    text: '各色单柱事件图'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: (data) => {
                        return data.name + '  共计：' + data.value + '件';
                    },
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: xAxisData,
                    y: 'bottom',
                    padding: 0
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    name: '/站点',
                    type: 'category',
                    data: xAxisData,
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    name: '/件',
                    type: 'value'
                }],
                series: [{
                        name: xAxisData[0],
                        color: myColor[0],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [113, null, null, null, null, null, null]

                    },
                    {
                        name: xAxisData[1],
                        color: myColor[1],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [null, 157, null, null, null, null, null]
                    },
                    {
                        name: xAxisData[2],
                        color: myColor[2],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [null, null, 126, null, null, null, null]
                    },
                    {
                        name: xAxisData[3],
                        color: myColor[3],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [null, null, null, 185, null, null, null]
                    },
                    {
                        name: xAxisData[4],
                        color: myColor[4],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [null, null, null, null, 192, null, null]
                    },
                    {
                        name: xAxisData[5],
                        color: myColor[5],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [null, null, null, null, null, 134, null]
                    },
                    {
                        name: xAxisData[6],
                        color: myColor[6],
                        type: 'bar',
                        barGap: '-100%',
                        label: {
                            show: true,
                            position: "top",
                            formatter: (p) => {
                                return formatNum(p.value + "件");
                            },
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [null, null, null, null, null, null, 166]
                    }
                ]
            };