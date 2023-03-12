//数据格式[{"value":"1"},{"value":"2"}......],
//在我项目里这里是数据库的一个字段，对这个指标字段进行正太分析
var uploadedDataURL = "/asset/get/s/data-1612318232940-5fG6JlsJh.json";


$.getJSON(uploadedDataURL, function(json) {

    let seriesValuedata = json;
    
    let listData = [];
    let xAxis = [];
    seriesValuedata.forEach((item, index) => {
        listData.push(item.value)
    });

    let objGroup = listData.reduce(function(obj, name) {
        obj[name] = obj[name] ? ++obj[name] : 1;
        return obj;
    }, {});

    let max = Math.max(...listData);
    let min = Math.min(...listData);

    //x轴最大最小前后范围
    let dataRangeMinOP = 2;
    let dataRangeMaXOP = 2.1;
    //间距 ，X轴的步距 
    let dataRangeOP = 0.1;
    //小数点位数.这个要和数据精确到哪一位相匹配
    let Xpiont = 1;

    //处理x轴，把数据范围内的x轴求出来，并设置值轴没有的值为空，按顺序对应
    for (let i = min - dataRangeMinOP; i <= max + dataRangeMaXOP; i += dataRangeOP) {
        let str = i.toFixed(Xpiont).toString();
        xAxis.push(str);
        if (objGroup[str] == null) {
            objGroup[str] = 0;
        } 
    }
    //结果不对，用下面这个 解决 0.0！=0，1.0！=1的问题
   /* for (let i = min - dataRangeMinOP; i <= max + dataRangeMaXOP; i += dataRangeOP) {
      let str = i.toFixed(Xpiont).toString();
      xAxis.push(str);
      if (objGroup[Number(str)] == null) {
        objGroup[str] = 0;
      }
    }*/

    let barYaxis = [];
    Object.keys(objGroup).sort(function(a, b) {
        return parseFloat(a) - parseFloat(b)
    }).map(key => {
        let num = Math.floor((objGroup[key] / listData.length * 100) * 100) / 100;
        barYaxis.push(num)
    })
     
    
    function sum(array) {
        let s = 0;
        array.forEach(function(val, idx, arr) {
            s += Number(val);
        }, 0);
        return s;
    };

    //正太曲线计算的基本数据和方法
    let avg = 0;
    let stdev = 0;
    avg = sum(listData) / listData.length;

    let sumXY = function(x, y) {
        return Number(x) + Number(y);
    };
    let square = function(x) {
        return Number(x) * Number(x);
    };
    let mean = listData.reduce(sumXY) / listData.length;
    let deviations = listData.map(function(x) {
        return x - mean;
    });
    
    
    stdev = Math.sqrt(deviations.map(square).reduce(sumXY) / (listData.length - 1));

    //计算正太曲线
    function NDjs(array) {
        let NDarr = [];
        for (let i = 0; i < array.length; i++) {
            let ND = (Math.sqrt(2 * Math.PI) * stdev) * Math.pow(Math.E, (-(Math.pow(array[i] - avg, 2) / (2 * Math.pow(stdev, 2)))));
            NDarr.push(ND);
        }
        return NDarr
    }
    let lineYaxis = NDjs(xAxis)
    
    
    //配置项，本身项目是可以动态在页面配置修改这些属性的，贴到这里用了默认值
    let opacityOption = 'off';
    let opacity = 0.5;
    if (opacityOption == 'off') {
        opacity = 0;
    }
    let endPositionOption = 'all';
    let endPositionPercentum = '';
    let endPosition;
    if (endPositionOption == 'all') {
        endPosition = 100;
    } else if (endPositionOption == 'third') {
        endPosition = 29;
    } else {
        endPosition = endPositionPercentum;
    }

    let persents = 'on';
    let format1;
    let format2;
    if (persents == 'on') {
        format1 = '{value} %'
        format2 = '{c} %'
    }

    let data = [];
    let lineDataSet = {
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        areaStyle: {
            opacity: opacity
        },
        data: lineYaxis,
        name: '正太分布曲线',
        itemStyle: {
            normal: {
                label: {
                    formatter: format2,
                    show: false, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        fontSize: 16
                    }
                }
            }
        }
    }
    let barDataSet = {
        type: 'bar',
        smooth: true,
        yAxisIndex: 0,
        areaStyle: {
            opacity: opacity
        },
        data: barYaxis,
        name: '实际分布',
        itemStyle: {
            normal: {
                label: {
                    formatter: format2,
                    show: false, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        fontSize: 16
                    }
                }
            }
        }
    }
    data.push(lineDataSet, barDataSet);

    option = {
        type: 'scroll',
        title: {
            text: ''
        },
        dataZoom: [{
                type: 'inside',
                show: false,
                xAxisIndex: [0],
                start: 0,
                end: endPosition,
                borderColor: '#F5A9D0',
                backgroundColor: '#F5A9D0'
            },
            {
                show: false,
                type: 'slider',
                xAxisIndex: [0],
                start: 0,
                end: endPosition
            }
        ],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: ['正太分布曲线', '实际分布']
        },
        xAxis: {
            boundaryGap: false,
            type: 'category',
            data: xAxis
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: format1
            }
        }, {
            show: false,
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        }],
        grid: [{
            x: '5%',
            y: '10%',
            width: '92%',
            height: '75%'
        }],
        series: data
    };
    myChart.setOption(option);
});