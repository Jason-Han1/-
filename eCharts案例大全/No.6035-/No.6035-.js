var getname = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var getvalue = [26, 35, 64, 9, 52, 36, 19, 25, 65, 32, 65, 75];
var getvalue1 = [55, 45, 23, 65, 35, 95, 64, 35, 269, 59, 51, 65];


var sumData = [];
sumData = sumData.concat(getvalue).concat(getvalue1)
var maxnum=Math.max.apply(null,sumData);
var maxlen=Math.pow(10,String(Math.ceil(maxnum)).length-2);
console.log(maxlen);
if(maxnum>=5){
    var max = Math.ceil(maxnum / (9.5*maxlen))*maxlen*10;
}else{
    var max = 5;
}

var option = {
    grid: {
        top: 60,
        bottom: 40,
        left: 50,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}<br/>{a0}用水: {c0}吨<br/>{a1}: {c1}吨',
    },
    legend: {
        type: "scroll",
        right: 'center',
        top: '10',
        itemGap: 25,
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '用水量（吨）',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 75]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(209,209,209,.5)',
            }
        }
    }],
    series: [{
        name: '男生',
        type: 'line',
        smooth: true,
        data: getvalue,
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABK0lEQVQoU32SvUoDQRDHf2Mh2FuYKo2lGtAihOBj+IWiiaD4AhdfQzSFGDAXS60sjKWFmNiYRiuboI34CpKbkbnc4Z1FFpZdZv6/na8VMiu4tarCLhGLamDG6yjiqrkhT6lM/LJ2bdPFGc4RajZCVGMx5qdiGOHXFEc36/ITA42uXZpSjwUujP6AGFYQoX26KfsSdK0q8GiKuKNUgHIRMOgNYfCRRHJLxKocd+3CjAN/eakAO8vZqiDsw+BzDKG0pHFvPYyKGw7LMD+bB96/ofkwjmjG8xhQKh5hEuB+HMimVJqD7ZV8hE4fXrwOB6A1sej+MBF7p9KiHQvurI1Ry7VVwYdHehrh2ZbU84MjhuL2+k4GaOi/waVZ+9eIYM+UBc9BI95E6ZxkvsYv6K3Eo8JCwNIAAAAASUVORK5CYII=',
        symbolSize: 12,
        lineStyle: {
            normal: {
                width: 3,
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#77B7FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#6CA5FF' // 100% 处的颜色
                    }],
                },
                shadowColor: 'rgba(70, 143, 255, 0.38)',
                shadowBlur: 7,
                shadowOffsetY: 2,
            }
        },
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#77B7FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#6CA5FF' // 100% 处的颜色
                    }],
                },
                borderColor: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#77B7FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#6CA5FF' // 100% 处的颜色
                    }],
                },
                borderWidth: 3
            },
        },
    }, {
        name: '女生',
        type: 'line',
        smooth: true,
        data: getvalue1,
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9klEQVQ4T3WTPWsUURSGn5s1xRIlRishhWJnhBXTZRVMESvNElCwVBBDYruJkH9gNvkB/gLRSlNJBC3cbIL4A7QSzFqYJpERZu7cL7kzd3Y3+zEwzJ259zxzznveIxhxuc93znByMg0JnP/eFvPoYUdF/0e3O19FmDVUeheVlNEJ6CRGpbvouCEeH+/1xnQAziH4cu8lRtbRqUBJHwjK32GtpUOpLZ5GL4TAeVAX0Fxq4JQPBi3zwOzZA/Lvft+qLfFMrnUA7uuDObRpopXApCFIwtgEGAnR7zybAm6UQ5tb4rluZRm4g4fvsLqGVmSAsbMwswEXb+blHh1AcxWiXznE+HN6R6yamnDfZsfRV/9idBkb0q9swtSN0/r+acGH+wHgISamZCaF2390GWF/YhVZBqUJmHvdK08AOXh7DaJ2yECBtFcGAb7u6gjAmxn4d9gHKEqwqpzV5pWuNGCqMqSExXw/00DFlOxkIeJ7rFnMBQoiXt+AC15EAUf7QcTDLsDqHbFiajmgt40ZJPigdC4P8HX3t9Ga22JF73WN1FpqoIORCkBhpMxUwVh5G7fFsqyfdmLHymkdJUX258LKHUdKh023eRKtD1i5UMx9Wqhi5DpKLqBkGCYZo+RHdLw5cpgGpvLV7DiX1DSJhOMfbbGMGjbO/wGdNV62CEFw/wAAAABJRU5ErkJggg==',
        symbolSize: 12,
        lineStyle: {
            normal: {
                width: 3,
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FBA980' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F7CB6B' // 100% 处的颜色
                    }],
                },
                shadowColor: 'rgba(255, 227, 189, 0.38)',
                shadowBlur: 7,
                shadowOffsetY: 2,
            }
        },
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FBA980' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F7CB6B' // 100% 处的颜色
                    }],
                },
                borderColor: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FBA980' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F7CB6B' // 100% 处的颜色
                    }],
                },
                borderWidth: 3
            },
        },
    }]
};