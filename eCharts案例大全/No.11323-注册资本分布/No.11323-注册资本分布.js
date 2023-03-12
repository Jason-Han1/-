            var data = [{
                name: '20万以下',
                value: 54
            }, {
                name: '20-50万',
                value: 44
            }, {
                name: '50-200万',
                value: 35
            }, {
                name: '200-500万',
                value: 30
            }, {
                name: '500万以上',
                value: 20
            }];
            var placeHolderStyle = {
                normal: {
                    label: {
                        show: false,
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderColor: "#dedede",
                    borderWidth: 1
                },
                emphasis: {
                    color: "rgba(0,0,0,0)",
                    show: false,
                    borderColor: "#dedede",
                    borderWidth: 1
                }
            };
            var dataStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            };
            var seriesArr = [],
                legenddata = [],
                sum = 0,
                colors = ['#389af4', '#ff8c37', '#ffc257', '#fd6f97', '#a181fc', '#00FCD6'];
            data.forEach(function(item, dataIndex) {
                if (item.value) {
                    sum += item.value;
                }

                legenddata.push(item.name);

                seriesArr.push({
                    name: '注册资本分布',
                    type: 'pie',
                    clockWise: true,
                    radius: [140- dataIndex * 20, 160- dataIndex * 20],
                    center: ['50%', '45%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            },
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    data: [{
                        value: data[dataIndex].value,
                        name: data[dataIndex].name,
                        total: sum
                    }, {
                        value: 100 - data[dataIndex].value,
                        name: 'invisible',
                        itemStyle: placeHolderStyle,
                        label: {
                            show: false
                        }
                    }]
                })
            });

            option = {
                backgroundColor: "#fff",
                color: colors,
                title: {
                    text: "注册资本分布",
                    subtext: "",
                    subtextStyle: {
                        fontSize: 16,
                        fontWeight: 700
                    },
                    left: "center",
                    padding: [50, 10]
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if (params.name == 'invisible') {
                            return '';
                        }
                        return params.seriesName + '<br />' + params.name + '：' + params.data.value + '（' + (params.data.value / params.data.total * 100).toFixed(2) + '%）';
                    }

                },
                legend: {
                    orient: 'vertical',
                    top: 30,
                    right: 10,
                    data: legenddata
                },
                animation: true,
                series: seriesArr
            };