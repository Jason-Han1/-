let input_data = {
    'raw_data': [
        ['timestamp', 'other', 'baidu', 'google', 'bing', 'sougou', '360'],
        [1540857600000, 12497, 0, 10569, 9998, 8997, 0],
        [1540944000000, 0, 0, 0, 0, 0, 0],
        [1541030400000, 0, 0, 0, 0, 0, 0],
        [1541116800000, 0, 0, 0, 0, 0, 0],
        [1541203200000, 0, 0, 0, 0, 0, 0],
        [1541289600000, 0, 0, 0, 0, 0, 0],
        [1541462400000, 2259, 0, 0, 0, 0, 0],
        [1541548800000, 8027, 15998, 0, 0, 0, 5499],
        [1541635200000, 0, 0, 0, 0, 0, 0]
    ],
    'percent_data': [
        ['timestamp', 'other', 'baidu', 'google', 'bing', 'sougou', '360'],
        [1540857600000, 29.711609329307436, 0.0, 25.12779058985759, 23.770238463184423, 21.390361617650555, 0.0],
        [1540944000000, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [1541030400000, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [1541116800000, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [1541203200000, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [1541376000000, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [1541462400000, 100.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [1541548800000, 27.18805039967484, 54.18642460371224, 0.0, 0.0, 0.0, 18.625524996612924],
        [1541635200000, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    ],
    'pic_data': {
        'baidu': 'https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D200%2Fsign%3Dee1431393afa828bd1239ae3cd1f41cd%2F50da81cb39dbb6fd004c501a0024ab18972b37f2.jpg&thumburl=https%3A%2F%2Fss3.bdstatic.com%2F70cFv8Sh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D2446850780%2C6827821%26fm%3D26%26gp%3D0.jpg',
        'google': 'https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F11%2F23%2F147991084978561905.PNG&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFuXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D330247564%2C1665757225%26fm%3D26%26gp%3D0.jpg',
        'bing': 'https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fwww.cncrk.com%2Fup%2F1712%2F20171230155417.jpg&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFvXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D1463658730%2C1765690119%26fm%3D26%26gp%3D0.jpg',
        'sougou': 'https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fi5.qhimg.com%2Fdr%2F200__%2Ft0141db91fbc85b5979.png&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFuXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D2106333250%2C2753288981%26fm%3D26%26gp%3D0.jpg',
        '360': 'https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fpic.downyi.com%2Fupload%2F2017-6%2F20176271116127699.jpg&thumburl=https%3A%2F%2Fss2.bdstatic.com%2F70cFvnSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D3579733735%2C4138366097%26fm%3D26%26gp%3D0.jpg'
    }
};

function formatSeries(seriesData) {
  const dimensions = seriesData[0];
  const timeKey = 'timestamp';
  const series = [];
  dimensions.forEach((item) => {
    if (item !== timeKey) {
      series.push({
        type: 'line',
        stack: 'value',
        areaStyle: {},
        name: item,
        encode: {
          x: timeKey,
          y: item,
        },
      });
    }
  });
  return series;
}

function formatLegend(seriesName) {
  const legend = seriesName.slice();
  legend.push('timestamp');
  return legend.reverse().slice(0, -1);
}

const dataDict = input_data;
const picDict = dataDict['pic_data'];
const seriesName = dataDict['raw_data'][0];
let mouseCurValue = 0;

let showMultiSeries = true;
let showPercent = false;
let showPic = true;

option = {
    legend: {
        type: 'scroll',
        data: formatLegend(seriesName),
        scrollDataIndex: 1,
    },
    toolbox: {
        show: true,
        itemSize: 20,
        feature: {
            myTool1: {
                title: 'percent view',
                icon: 'path://M804.571429 731.428571c0-40.009143-33.133714-73.142857-73.142858-73.142857s-73.142857 33.133714-73.142857 73.142857 33.133714 73.142857 73.142857 73.142858 73.142857-33.133714 73.142858-73.142858zM365.714286 292.571429c0-40.009143-33.133714-73.142857-73.142857-73.142858s-73.142857 33.133714-73.142858 73.142858 33.133714 73.142857 73.142858 73.142857 73.142857-33.133714 73.142857-73.142857z m585.142857 438.857142c0 121.161143-98.304 219.428571-219.428572 219.428572s-219.428571-98.304-219.428571-219.428572 98.304-219.428571 219.428571-219.428571 219.428571 98.304 219.428572 219.428571zM896 109.714286c0 8.009143-2.852571 15.433143-7.424 21.723428l-603.428571 804.571429C278.308571 945.152 267.446857 950.857143 256 950.857143H164.571429c-20.004571 0-36.571429-16.566857-36.571429-36.571429 0-8.009143 2.852571-15.433143 7.424-21.723428l603.428571-804.571429C745.691429 78.848 756.553143 73.142857 768 73.142857h91.428571c20.004571 0 36.571429 16.566857 36.571429 36.571429zM512 292.571429c0 121.161143-98.304 219.428571-219.428571 219.428571s-219.428571-98.304-219.428572-219.428571 98.304-219.428571 219.428572-219.428572 219.428571 98.304 219.428571 219.428572z',
                iconStyle: {
                    color: '#cdcdcd',
                },
                onclick: function() {
                    showPercent = !showPercent;
                    myChart.setOption({
                        toolbox: {
                            feature: {
                                myTool1: {
                                    iconStyle: {
                                        color: (showPercent) ? '#7CFC00' : '#cdcdcd',
                                    },
                                },
                            },
                        },
                        dataset: {
                            source: (showPercent) ? dataDict['percent_data'] : dataDict['raw_data'],
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: (showPercent) ? '{value}%' : null,
                            },
                            max: (showPercent) ? 100 : null,
                        },
                        series: (showPercent) ? formatSeries(dataDict['percent_data']) : formatSeries(dataDict['raw_data']),

                    });
                },
            },
            myTool2: {
                title: 'multi series',
                icon: 'path://M102.4 0h819.2C977.92 0 1024 46.08 1024 102.4v614.4c0 56.32-46.08 102.4-102.4 102.4H716.8L512 1024 307.2 819.2H102.4C46.08 819.2 0 773.12 0 716.8V102.4C0 46.08 46.08 0 102.4 0z m51.2 153.6V256h716.8V153.6H153.6z m0 204.8v102.4h512V358.4h-512z m0 204.8v102.4H768V563.2H153.6z',
                iconStyle: {
                    color: '#7CFC00',
                },
                onclick: function() {
                    showMultiSeries = !showMultiSeries;
                    myChart.setOption({
                        toolbox: {
                            feature: {
                                myTool2: {
                                    iconStyle: {
                                        color: (showMultiSeries) ? '#7CFC00' : '#cdcdcd',
                                    },
                                },
                            },
                        },
                    });
                },
            },
            myTool3: {
                title: 'show thumbnail',
                icon: 'path://M146.7136 55.68512C65.68448 55.68512 0 121.65632 0 202.5984v583.89504c0 81.13664 65.6128 146.91328 146.7136 146.91328h730.5728c81.02912 0 146.7136-65.9712 146.7136-146.91328V202.59328c0-81.13664-65.6128-146.91328-146.7136-146.91328H146.7136z m596.40832 390.5536s-11.65824-22.85056-52.65408-22.85056c-46.51008 0-60.49792 22.144-60.49792 22.144l-175.9232 286.47936s-9.56928 19.19488-33.04448 19.19488c-24.576 0-36.31104-19.19488-36.31104-19.19488l-92.51328-111.55968s-23.7056-33.11616-54.50752-33.11616c-30.67392 0-56.15616 36.64896-56.15616 36.64896l-71.80288 89.98912V238.24896c0-40.23296 32.5376-72.84736 72.82176-72.84736h658.93376c40.2176 0 72.81664 32.0256 72.81664 73.35936v438.64064l-171.1616-231.16288zM475.42784 384.80384c0 60.62592-49.11104 109.73696-109.696 109.73696S256 445.39392 256 384.80384c0-60.544 49.14688-109.69088 109.73184-109.69088 60.58496 0.03584 109.696 49.14688 109.696 109.69088z',
                iconStyle: {
                    color: '#7CFC00',
                },
                onclick() {
                    showPic = !showPic;
                    myChart.setOption({
                        toolbox: {
                            feature: {
                                myTool3: {
                                    iconStyle: {
                                        color: (showPic) ? '#7CFC00' : '#cdcdcd',
                                    },
                                },
                            },
                        },
                    });
                },
            },
        },
        top: '3%',
        right: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
        formatter: function(params) {
            const time = echarts.format.formatTime('MM-dd yyyy', new Date(params[0].data[0]));
            let str = time + '<br/>';
            if (showMultiSeries) {
                for (let p = params.length - 1; p >= 0; p--) {
                    const marker = echarts.format.getTooltipMarker(params[p].color);
                    const name = params[p].seriesName;
                    const tooltipData = params[p].data[seriesName.indexOf(name)];
                    str += marker + name + ': ' + (showPercent ? tooltipData.toFixed(2) + '%' : tooltipData) + '<br/>';
                }
            }
            let sum = 0;
            let curSeries = '';
            let findSeries = true;
            for (let p = 0; p < params.length; p++) {
                const marker = echarts.format.getTooltipMarker(params[p].color);
                const name = params[p].seriesName;
                const tooltipData = params[p].data[seriesName.indexOf(name)];
                sum += tooltipData;
                if (findSeries && sum >= mouseCurValue) {
                    curSeries = name;
                    findSeries = !findSeries;
                    if (!showMultiSeries) {
                        str += marker + name + ': ' + (showPercent ? tooltipData.toFixed(2) + '%' : tooltipData) + '<br/>';
                    }
                    break;
                }
            }
            if (curSeries !== '' && curSeries !== 'other') {
                str += curSeries + '<br/>';
                const pic = picDict[curSeries];
                if (showPic && pic !== '' && pic !== undefined) str += "<img style='width:150px; height:150px; ' src='" + pic + "'/>";
            }
            return str;
        },
        position: function (pos, params, dom, rect, size) {
        return {
          top: (pos[1] + size.contentSize[1] < size.viewSize[1]) ? pos[1] : (pos[1] < size.viewSize[1] / 2) ? pos[1] : pos[1] - (pos[1] + size.contentSize[1] - size.viewSize[1]),
          left: (pos[0] + size.contentSize[0] < size.viewSize[0]) ? pos[0] : (pos[0] < size.viewSize[0] / 2) ? pos[0] : pos[0] - (pos[0] + size.contentSize[0] - size.viewSize[0]),
        };
      },
    },
    dataset: {
        source: (showPercent) ? dataDict['percent_data'] : dataDict['raw_data'],
    },
    xAxis: {
        type: 'time',
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: (showPercent) ? '{value}%' : null,
        },
        max: (showPercent) ? 100 : null,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    series: (showPercent) ? formatSeries(dataDict['percent_data']) : formatSeries(dataDict['raw_data']),
    dataZoom: [{
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: [0],
        filterMode: 'filter',
        start: 0,
        end: 100,
    }, ],
    useUTC: true,
};

myChart.on('showTip', function(params) {
    mouseCurValue = myChart.convertFromPixel({
        yAxisIndex: 0
    }, params.y);
});

let allSelect = true;
myChart.on('dblclick', function(params) {
    allSelect = !allSelect;
    const dynamicSelected = {};
    for (const index in seriesName) {
        if (params.seriesName !== seriesName[index]) {
            dynamicSelected[seriesName[index]] = allSelect;
        }
    }
    myChart.setOption({
        legend: {
            selected: dynamicSelected,
        },
    });
});