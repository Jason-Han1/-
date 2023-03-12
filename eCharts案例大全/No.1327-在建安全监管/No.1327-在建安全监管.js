var chartData = [
      
        {name:'2020.4', value: 15001, value1: 2729, value2: 623},
        {name:'2020.5', value: 28932, value1: 10321, value2: 1613},
        {name:'2020.6', value: 36245, value1: 13621, value2: 1886},
        {name:'2020.7', value: 31563, value1: 10851, value2: 1980},
        {name:'2020.8', value: 36389, value1: 12659, value2: 1116},
        {name:'2020.9', value: 38000, value1: 10700, value2: 1700}
    ];

    option= {
        backgroundColor: '#0a393d',//背景色
        title:{
           show: true,
           text: '',
           textStyle: {
                color: '#fff', // 主标题文字颜色
                fontFamily:'Simsun',
                fontSize: 14
            },
            x:'center',
            y:'top'
        },
        tooltip: {
            show: true,
            trigger: 'axis',  //axis , item
            backgroundColor:'rgba(0,15,78,0.6)',
            borderColor:'#00afff',
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#fff",
                fontSize: 13,
                align:'left'
            },
            axisPointer:{
                type: 'line', //'line' | 'cross' | 'shadow' | 'none
                lineStyle: {
                    width: 1,
                    type: 'dotted',
                    color: 'rgba(46,149,230,.9)'
                }
            }
        },
        legend:{
            show: true,
            orient:'horizontal', //'vertical' 
            data: ['在建','违建', '已整改'],
            icon: 'circle',
            selectedMode: true,
            itemWidth: 10,
            itemHeight: 10,
            itemGap:20,
            textStyle:{
                fontSize: 13,
                color: '#9bc8ff'
            },
            x: 'center',
            y: '25'
        },
        grid: {
            top: '25%',
            right: '3%',
            bottom: '10%',
            left: '10%'
        },
        xAxis:{
            type: 'category',
            axisLabel: {
                show: true,
                interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
                textStyle: {
                    color: '#fff',
                    fontSize: 13
                },
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'rgba(15,45,134,.9)'
                }
            },
            axisTick:{
                show: false //坐标轴小标记
            },
            data: (function(data){
                var arr=[];
                data.forEach(function(items){
                    arr.push(items.name);   //name
                });
                return arr;
            })(chartData)  //载入横坐标数据
        },
        yAxis: {
            type: 'value',
            name: '（次）',
            nameTextStyle:{
                color:'#93d3fc',
                fontSize: 12,
                align: 'right'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9bc8ff',
                    fontSize: 13
                },
                interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
                margin: 10,
                //formatter: '{value}'
            },
            splitNumber: 3, //y轴刻度设置(值越大刻度越小)
            axisLine:{ //y轴线
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(15,45,134,.6)', //横向网格线颜色
                    width: 1
                }
            },
            axisTick:{
                show: false //坐标轴小标记
            }
        },
        series:[
            {
                name:'在建',
                type: 'effectScatter', //effectScatter 涟漪效果, scatter 散点
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#9bc8ff',
                            fontSize: 12
                        },
                        formatter: '{c}' //图形上显示数字
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,55,135,1)', //颜色
                    }
                },
                symbol: 'circle', //circle, rect, roundRect, triangle,  pin, diamond, arrow
                symbolPosition: 'end',
                symbolSize: 20,
                symbolOffset: [0, '-120%'],
                data: (function(data){
                    var arr=[];
                    data.forEach(function(items){ 
                        var itemName = items.name,
                            itemValue = items.value,
                            itemStyle = itemValue/1600; //console.log(itemStyle)
                        arr.push({
                            name: itemName,
                            value: itemValue,
                            symbolSize: itemStyle
                        })
                    });
                    return arr;
                })(chartData)  //载入数据并设置图形尺寸
            },
            {
                name:'违建',
                type:'pictorialBar',
                barWidth: 40,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#9bc8ff',
                            fontSize: 12
                        },
                        formatter: '{c}' //图形上显示数字
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(142,48,255,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(142,48,255,.2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }, //渐变颜色
                    }
                },
                symbol: 'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
                data: (function(data){
                    var arr=[];
                    data.forEach(function(items){
                        arr.push(items.value1);   //value
                    });
                    return arr;
                })(chartData)  //载入数据
            },
            {
                name:'整改',
                type:'pictorialBar',
                barWidth: 40,
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#9bc8ff',
                            fontSize: 12
                        },
                        formatter: '{c}' //图形上显示数字
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(0,236,150,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,236,150,.2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }, //渐变颜色
                    }
                },
                symbol: 'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
                data: (function(data){
                    var arr=[];
                    data.forEach(function(items){
                        arr.push(items.value2);   //value
                    });
                    return arr;
                })(chartData)  //载入数据
            }
        ]   
    };

    var app = {
            curIndex: -1,
    };
    setInterval(()=> {
        var dataLen = chartData.length;
        
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.curIndex
        });
    
        app.curIndex = (app.curIndex + 1) % dataLen;
    
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.curIndex,
        });
    
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.curIndex
        });
    
    }, 3000);
