var uploadedDataURL = "/asset/get/s/data-1491553645373-H1H_Ta4pe.json";
function format(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

$.get(uploadedDataURL, function(data) {
    data = JSON.parse(data)['data'];
    var base_start = data[0]['open'];
    //alert(base_start);
    //
    var date_tm = [];
    var data_ohlc = [];
    var data_percent = [];
    var data_ma5 = [];
    var data_ma10 = [];
    var data_ma20 = [];
    var data_ma30 = [];
    for(var idx=1; idx<data.length; idx++)
    {
        var item = data[idx];
        var tm = new Date(item.time);
        var str_tm = format(tm, 'hh:mm');
        //if( str_tm.substr(3) == '30' || str_tm.substr(3) == '00')
        date_tm.push(str_tm);
        //date_tm.push(Date.parse(tm));
        data_percent.push( (item.close-base_start)*100/base_start);
        data_ohlc.push([item.open, item.high, item.low, item.close]);
        data_ma5.push(item.ma5);
        data_ma10.push(item.ma10);
        data_ma20.push(item.ma20);
        data_ma30.push(item.ma30);
    }
    //
    myChart.setOption(option = {
        animation: false,
        //backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    type: 'solid',
                }
            },
            textStyle: {
                fontSize: '.24rem'
            },
            hideDelay: 0,
            position:[80, 10],
            formatter: function (params) {
                //alert(JSON.stringify(params));
                var cur_val = base_start + params[0].value * base_start / 100.0;
                //alert(cur_val);
                var res = '价格: ' + cur_val;
                return res;
            }
        },
        xAxis: {
            type: 'category',
            data: date_tm,
            
        },
        yAxis: {
            name: '涨幅(%)',
            max: 5,
            min: -5,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            nameTextStyle: {
                color: '#333'
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            interval: 1,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e2e6a'

                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#fbfbfb', '#fbfbfb']
                }
            }
        },
        visualMap: {
            show: false,
            pieces: [{
                gt: -5,
                lte: -1.5,
                color: '#096'
            }, {
                gt: -1.5,
                lte: -0.5,
                color: '#32b6cf'
            }, {
                gt: 0.5,
                lte: 1.5,
                color: '#fea621'
            }, {
                gt: 1.5,
                lte: 5,
                color: '#f72c2e'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        legend: {
            show: false
        },
        graphic: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 10,
                style: {
                    fill: 'rgba(128,128,128,0.1)',
                    text: 'miaoji',
                    font: '90px Microsoft YaHei'
                }
            }
        ],
        series: [{
            name: '价格',
            type: 'line',
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },
            data: data_percent,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#c5c5e1' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#f9fafb' // 100% 处的颜色
                    }], false),
                    opacity: 0.4
                }
            }
        }],
    });
});