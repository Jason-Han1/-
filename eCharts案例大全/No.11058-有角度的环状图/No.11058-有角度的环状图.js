 var imgurl = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAzCAYAAAAuNK7LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTg1OUMyMzkwQzcxMUU5OTJEMUUxODA1NTA2OTJENiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOTg1OUMyNDkwQzcxMUU5OTJEMUUxODA1NTA2OTJENiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5ODU5QzIxOTBDNzExRTk5MkQxRTE4MDU1MDY5MkQ2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5ODU5QzIyOTBDNzExRTk5MkQxRTE4MDU1MDY5MkQ2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uQW6hQAACdlJREFUeNrUW3twVOUV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';
        var mainData = [];
        mainData.push({
            name: '充值收入',
            value: 342305,
            prevalue: 382305,
            hismax: 455898,
            per: '25%'
        });
        mainData.push({
            name: '包月收入',
            value: 1332042,
            prevalue: 1552305,
            hismax: 1896900,
            per: '25%'
        });
        mainData.push({
            name: '道具消费',
            value: 305652,
            prevalue: 323305,
            hismax: 446783,
            per: '25%'
        });
        mainData.push({
            name: '新增用户',
            value: 31861,
            prevalue: 30805,
            hismax: 77598,
            per: '25%'
        });
        mainData.push({
            name: '活跃用户',
            value: 114553,
            prevalue: 120105,
            hismax: 145898,
            per: '25%'
        });
        function createSeries(mainData) {
            var result = [];
            var insideLabel = {
                normal: {
                    position: 'center',
                    formatter: function(params) {
                        if (params.name == "other")
                            return "";
                        var str = '';

                        for (var i = 0; i < params.name.length; i++) {
                            console.log(params.name[i])
                            str += params.name[i];
                            if ((i + 1) % 2 == 0) { str += '\n'; }
                        }
                        return str;
                    },
                    textStyle: {
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 12,
                        color: '#666'
                    }
                }
            };
            var outsideLabel = {
                normal: {
                    show: false
                }
            };
            var itemOthers = {
                normal: {
                    color: '#eee'
                }
            };
            for (var i = 0; i < mainData.length; i++) {
                var increase = mainData[i].value > mainData[i].prevalue;
                result.push({
                    type: 'pie',
                    center: [i * 20 + 10 + '%', 30 + (i - 2) * (i - 2) * 5 + '%'],
                    radius: ['20%', '22%'],
                    label: insideLabel,
                    angleAxis: {
                        clockwise: true
                    },
                    data: [{
                        name: mainData[i].name,
                        value: mainData[i].value,
                        // prevalue: mainData[i].prevalue
                    },{
                        name: 'other',
                        value: mainData[i].hismax - mainData[i].value,
                        itemStyle: itemOthers
                    }],
                    markPoint: {
                        data: [{
                            symbol: '',
                            symbolSize: 15,
                            // symbolRotate: increase ? 0 : 180,
                            itemStyle: {
                                normal: {
                                    color: 'transparent'
                                }
                            },
                            // name: mainData[i].name,
                            value: mainData[i].per,
                            x:  i * 20 + 9 + '%',
                            y: 14 + (i - 2) * (i - 2) * 5 + '%',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'cener',
                                    formatter: function(params) {
                                        return params.value;
                                    },
                                    textStyle: {
                                        color: '#333'
                                    }
                                }
                            },
                        }]
                    }
                });
            }
            var youxiji = {
                name: 'hill',
                type: 'pictorialBar',
                symbolSize: ['20%', '25%'],
                barCategoryGap: '-50%',
                symbolOffset: [0, '-50%'],
                symbol: imgurl,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#333'
                    }
                },
                data: ['1'],
                z: 10,
                itemStyle: {
                    normal: {
                        opacity: 0.8,
                        //每根柱子颜色设置
                        color: function(params) {
                            let colorList = [
                                "#1cd389",
                                "#668eff",
                                "#ffc751",
                                "#5bd1ff",
                                "#ff6e72",
                                "#16c1af",
                                "#9692ff",
                                "#eeeeee",
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
            }
            result.push(youxiji)
            return result;
        }
        var option = {
            backgroundColor: '#fff',

            xAxis: {
                data: ['a'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    // 刻度线
                    show: false
                },
                axisLine: {
                    // 轴线
                    show: false
                },
                axisLabel: {
                    // 轴坐标文字
                    show: false
                }
            },
            series: createSeries(mainData)
        }