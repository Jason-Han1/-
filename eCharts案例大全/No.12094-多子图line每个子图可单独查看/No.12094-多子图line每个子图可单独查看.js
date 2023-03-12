let easingFuncs = {
    linear: function(k) {
        return k;
    },
    quadraticIn: function(k) {
        return k * k;
    },
    quadraticOut: function(k) {
        return k * (2 - k);
    },
    quadraticInOut: function(k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    },
    cubicIn: function(k) {
        return k * k * k;
    },
    cubicOut: function(k) {
        return --k * k * k + 1;
    },
    cubicInOut: function(k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k + 2);
    },
    quarticIn: function(k) {
        return k * k * k * k;
    },
    quarticOut: function(k) {
        return 1 - (--k * k * k * k);
    },
    quarticInOut: function(k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
        }
        return -0.5 * ((k -= 2) * k * k * k - 2);
    },
    quinticIn: function(k) {
        return k * k * k * k * k;
    },
    quinticOut: function(k) {
        return --k * k * k * k * k + 1;
    },
    quinticInOut: function(k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
    sinusoidalIn: function(k) {
        return 1 - Math.cos(k * Math.PI / 2);
    },
    sinusoidalOut: function(k) {
        return Math.sin(k * Math.PI / 2);
    },
    sinusoidalInOut: function(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    },
    exponentialIn: function(k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    exponentialOut: function(k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    exponentialInOut: function(k) {
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
    circularIn: function(k) {
        return 1 - Math.sqrt(1 - k * k);
    },
    circularOut: function(k) {
        return Math.sqrt(1 - (--k * k));
    },
    circularInOut: function(k) {
        if ((k *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
    elasticIn: function(k) {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    },
    elasticOut: function(k) {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    },
    elasticInOut: function(k) {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        if ((k *= 2) < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

    },

    // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
    backIn: function(k) {
        let s = 1.70158;
        return k * k * ((s + 1) * k - s);
    },
    backOut: function(k) {
        let s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut: function(k) {
        let s = 1.70158 * 1.525;
        if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
        }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },

    // 创建弹跳效果
    bounceIn: function(k) {
        return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut: function(k) {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        } else {
            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
        }
    },
    bounceInOut: function(k) {
        if (k < 0.5) {
            return easingFuncs.bounceIn(k * 2) * 0.5;
        }
        return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    }
};

let N_POINT = 30;

let grids = [];
let xAxes = [];
let yAxes = [];
let series = [];
let titles = [];
let dataZooms = [];
let count = 0;
let seriesCount = 0;
let seriseMap = [];

let selectMap = [];
let selectIndex = -1;
let selectGrid = {};
let showOneChart = false;

echarts.util.each(easingFuncs, function(easingFunc, name) {
    let data = [];
    let half_data = [];
    let quarter_data = [];
    for (let i = 0; i <= N_POINT; i++) {
        let x = i / N_POINT;
        let y = easingFunc(x);
        data.push([x, y]);
        half_data.push([x, y * 0.5]);
        quarter_data.push([x, y * 0.25]);
    }
    selectMap.push(false);
    grids.push({
        show: true,
        borderWidth: 0,
        backgroundColor: '#fff',
        shadowColor: selectMap[count] ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 0, 0.3)',
        shadowBlur: selectMap[count] ? 10 : 2,
        containLabel: true,
    });
    xAxes.push({
        type: 'value',
        show: true,
        min: 0,
        max: 1,
        gridIndex: count,
    });
    yAxes.push({
        type: 'value',
        show: true,
        min: -0.4,
        max: 1.4,
        gridIndex: count,
    });
    seriseMap.push([]);
    series.push({
        name: 'origin',
        type: 'line',
        xAxisIndex: count,
        yAxisIndex: count,
        data: data,
        showSymbol: false,
        animationEasing: name,
        animationDuration: 1000,
        itemStyle: {
            color: 'rgba(255, 0, 0, 1)'
        }
    });
    seriseMap[count].push(seriesCount++);
    series.push({
        name: "half",
        type: 'line',
        xAxisIndex: count,
        yAxisIndex: count,
        data: half_data,
        showSymbol: false,
        animationEasing: name,
        animationDuration: 1000,
        itemStyle: {
            color: 'rgba(0, 255, 0, 1)'
        }
    });
    seriseMap[count].push(seriesCount++);
    series.push({
        name: "quarter",
        type: 'line',
        xAxisIndex: count,
        yAxisIndex: count,
        data: quarter_data,
        showSymbol: false,
        animationEasing: name,
        animationDuration: 1000,
        itemStyle: {
            color: 'rgba(0, 0, 255, 1)'
        }
    });
    seriseMap[count].push(seriesCount++);
    titles.push({
        textAlign: 'center',
        text: name,
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
        },
        triggerEvent: true,
    });
    dataZooms.push({
        type: 'inside',
        xAxisIndex: [count],
        filterMode: 'filter',
        start: 0,
        end: 100,
    });
    // dataZooms.push({
    //     type: 'inside',
    //     yAxisIndex: [count],
    //     filterMode: 'empty',
    //     start: 0,
    //     end: 100,
    // });
    count++;
});
titles = titles.concat([{
    text: '点击小图标题高亮=>点击放大按钮单独查看子图',
    top: 'bottom',
    left: 'center',
}])
selectGrid = grids[0];


// rowNumber = 每行显示多少个子图

// let rowNumber = Math.ceil(Math.sqrt(count));
let rowNumber = 3;
echarts.util.each(grids, function(grid, idx) {
    grid.left = ((idx % rowNumber) / rowNumber * 100) + '%';
    grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 4) + '%';
    grid.width = (1 / rowNumber * 100 - 4) + '%';
    grid.height = (1 / rowNumber * 100 - 4) + '%';

    titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
    titles[idx].top = parseFloat(grid.top) + '%';
});

option = {
    title: titles,
    grid: grids,
    xAxis: xAxes,
    yAxis: yAxes,
    series: series,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        confine: true
    },
    toolbox: {
        show: true,
        itemSize: 20,
        feature: {
            myTool1: {
                title: '放大按钮',
                icon: 'path://M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z',
                onclick: function() {
                    if (selectIndex != -1) {
                        showOneChart = !showOneChart;
                        myChart.setOption({
                            toolbox: {
                                feature: {
                                    myTool1: {
                                        iconStyle: {
                                            color: (showOneChart) ? '#7CFC00' : '#cdcdcd',
                                        },
                                    },
                                },
                            },
                        });
                        if (showOneChart) {
                            let oneSeries = [];
                            for (let i = 0; i < seriseMap[selectIndex].length; ++i) {
                                let s = series[seriseMap[selectIndex][i]];
                                let se = {
                                    name: s.name,
                                    type: s.type,
                                    xAxisIndex: 0,
                                    yAxisIndex: 0,
                                    data: s.data,
                                    showSymbol: false,
                                    animationEasing: name,
                                    animationDuration: 1000,
                                    itemStyle: s.itemStyle
                                };
                                oneSeries.push(se);
                            }
                            let option = {
                                title: {
                                    text: titles[selectIndex].text,
                                    top: 'bottom',
                                    left: 'center',
                                },
                                grid: {
                                    show: true,
                                    borderWidth: 0,
                                    backgroundColor: '#fff',
                                    shadowColor: 'rgba(0, 0, 0, 1)',
                                    shadowBlur: 10,
                                    // left: '4%',
                                    top: '4%',
                                    // width: '95%',
                                    // height: '90%',
                                    containLabel: true,
                                },
                                xAxis: {
                                    type: 'value',
                                    show: true,
                                    min: xAxes[selectIndex].min,
                                    max: xAxes[selectIndex].max,
                                    gridIndex: 0
                                },
                                yAxis: {
                                    type: 'value',
                                    show: true,
                                    min: yAxes[selectIndex].min,
                                    max: yAxes[selectIndex].max,
                                    gridIndex: 0
                                },
                                series: oneSeries,
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'cross'
                                    }
                                },
                                dataZoom: {
                                    type: 'inside',
                                    xAxisIndex: [0],
                                    filterMode: 'filter',
                                    start: 0,
                                    end: 100,
                                },
                                toolbox: myChart.getOption().toolbox
                            };
                            myChart.clear();
                            myChart.setOption(option);
                        } else {
                            echarts.util.each(grids, function(grid, idx) {
                                grid.left = ((idx % rowNumber) / rowNumber * 100) + '%';
                                grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 4) + '%';
                                grid.width = (1 / rowNumber * 100) + '%';
                                grid.height = (1 / rowNumber * 100) + '%';

                                titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
                                titles[idx].top = parseFloat(grid.top) + '%';
                            });
                            let option = {
                                title: titles,
                                grid: grids,
                                xAxis: xAxes,
                                yAxis: yAxes,
                                series: series,
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'cross'
                                    }
                                },
                                dataZoom: dataZooms,
                                toolbox: myChart.getOption().toolbox
                            };
                            myChart.clear();
                            myChart.setOption(option);
                        }
                    }
                }
            }
        }
    },
    dataZoom: dataZooms,
};

myChart.on('click', 'title', function(params) {
    let mouseIndex = params['componentIndex'];
    if (selectIndex != -1) {
        selectMap[selectIndex] = false;
        grids[selectIndex] = selectGrid;
    }
    if (mouseIndex != selectIndex) {
        selectMap[mouseIndex] = !selectMap[mouseIndex];
        selectIndex = mouseIndex;
        selectGrid = grids[mouseIndex];
        grids[mouseIndex] = {
            show: true,
            borderWidth: 0,
            backgroundColor: '#fff',
            shadowColor: selectMap[mouseIndex] ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 0, 0.3)',
            shadowBlur: selectMap[mouseIndex] ? 12 : 2
        }
    } else {
        selectIndex = -1;
    }
    myChart.setOption({
        grid: grids
    });
});