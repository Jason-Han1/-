var timeList =["07-29", "07-30", "07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "08-08", "08-09", "08-10", "08-11", "08-12", "08-13", "08-14", "08-15", "08-16", "08-17", "08-18", "08-19", "08-20", "08-21", "08-22", "08-23", "08-24", "08-25", "08-26", "08-27"],
    data1 =[245.6, 238, 229.2, 247.1, 280.8, 273.5, 263.8, 251.7, 268.8, 273.2, 276.1, 259.4, 257.7, 247.6, 249.1, 247.7, 251.6, 248.5, 247.3, 239.2, 233.1, 235.4, 234, 231.3, 228.2, 228.4, 254.5, 271.5, 269.6, 262.2],
    data2=[234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9, 234.9],
    data3=[387.1, 390.8, 393.2, 346.3, 357.8, 358.2, 372.4, 376.2, 380.4, 384.3, 386.4, 383.4, 375.6, 380.4, 377.5, 381.1, 383.8, 384.9, 390.6, 390, 390, 382.4, 375.9, 384.8, 393, 395, 391.4, 404.8, 412.1, 389.6];
var lineList = getTableLine(4);
option = {
    backgroundColor:'#fff',
    title: {
        textStyle:{
            color:'#333',
            fontSize:'14',
            lineHeight: 24,
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        },
        text:'item1\nitem2\nitem3',
        bottom: 120, //控制表格Y轴方向
        left: 25
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['item1', 'item2', 'item3'],
        padding:[5,10],
        top:'5%'
    },
    grid: {
        top:'15%',
        left: '5%',
        right: '4%',
        bottom: '20%',
        containLabel: true
    },
    dataZoom: [{
        show: true,
        realtime: true,
        bottom: 50,
        start: 20,
        end: 80
    },
        {
            type: 'inside',
            realtime: true,
            bottom: 50,
            start: 20, // dataZoom百分比
            end: 100
        }
    ],
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data:timeList ,
        axisTick: {
            length: 104//竖线的长度
        },
        axisLabel: {
            formatter: function(value, index) {
                var indexNum = 0;
                for(var i = 0; i < timeList.length; i++){
                    if(value == timeList[i]){
                        indexNum = i;
                    }
                }
                return '{table|' + value +
                    '}\n{table|' + data1[indexNum] +
                    '}\n{table|' + data2[indexNum] +
                    '}\n{table|' + data3[indexNum] +'}';
            },
            rich: {
                table: {
                    lineHeight: 24,
                    align: 'center'
                }
            }
        }
    },
    yAxis: {
        name:'(吨)',
        type: 'value'
    },
    series: [
        {
            name: 'item1',
            type: 'line',
            data: data1
        },
        {
            name: 'item2',
            type: 'line',
            data: data2
        },
        {
            name: 'item3',
            type: 'line',
            data: data3
        }
    ],
    graphic: lineList
}

  function getTableLine(num) {
        var list = [];
        var bottom = 195; //控制线的位置
        var height = 24;
        for (var i = 0; i < num; i++) {
            list.push({
                type: 'line',
                bottom: bottom - i * height,
                // right: 200,
                left:30,
                style: {
                    fill: '#333'
                },
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 1503,
                    y2: 0
                }

            });
        }
        return list;
    }
                   