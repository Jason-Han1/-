var data = [{
        name: '频繁停电户数',
        value: 11,

    }, {
        name: '频繁停电台区',
        value: 12
    }];
    var backGroundData = [],
        nameData = [],
        valueData = [],
        maxValue = 0,
        len = data.length;
    for (var i = 0; i < len; i++) {
        if (data[i].value > maxValue) {
            maxValue = data[i].value;
        }
    }
    for (var i = 0; i < len; i++) {
        backGroundData.push(maxValue * 1.1);
        nameData.push(data[i].name);
        valueData.push(data[i].value);
    }

    var option = {
        backgroundColor:'#070931',
        grid: {
            left: '20%',
            right:'20%',
            top: '25%',
            bottom: '25%',
        },
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}：{c}',
            textStyle: {
                fontSize: "20"
            }
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                show:false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: nameData
        },
        series: [{
            barWidth: 20,
            z: 10,
            itemStyle: {
                color:function(params){
                    if(params.name == '频繁停电户数'){
                        return  new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: '#f05f1c' /*#0085FA*/
                            }, {
                                offset: 0.7,
                                color: '#e9ea07' /*#00BBFD*/
                            }])
                    }else{
                        return  new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: '#0078FF' /*#0085FA*/
                            }, {
                                offset: 0.7,
                                color: '#00E0FF' /*#00BBFD*/
                            }])
                    }
                },
                barBorderRadius: 15
            },
            label: {
                show: true,
                fontSize: 18,
                distance: 5,
                position: [0, "-100%"],
                formatter: "{b}",
                offset: [0, -5],
                color: '#FFFFFF'
            },
            type: 'bar',
            data: valueData
        },
            {
                type: 'bar',
                barGap: '-100%',
                barWidth: 20,
                animation: false,
                z: -1,
                itemStyle: {
                    color: 'rgba(42,41,71,.5)',
                    barBorderRadius: 15
                },
                label: {
                    show: true,
                    position: ['90%', "-100%"],
                    fontSize: 18,
                    color:'#fff',
                    offset: [0, -5],
                    rich:{
                        a:{
                            color:'#00FFFF',
                            fontSize:18
                        },
                        b:{
                            color:'#FFF100',
                            fontSize:18
                        }
                    },
                    formatter: function(param) {

                        for (var i = 0; i < data.length; i++) {
                            if (param.name == data[i].name && param.name == '频繁停电户数') {
                                return '{b|'+data[i].value+'}';
                            }else if(param.name == data[i].name && param.name == '频繁停电台区'){
                                return '{a|'+data[i].value+'}';
                            }
                        }
                    }
                },
                data: backGroundData
            }
        ]
    };