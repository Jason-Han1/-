var data=[70, 49, 50,60,50];
var className=['18-25岁','26-35岁','36-45岁','46-55岁','55岁以上'];
var colorList=['#5DFF3D','#FFE028','#F32424','#54D9FF','#987EFF'];
var defaultData=[100,100,100,100,100,100];
option = {
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none',
            },
            formatter: function(params) {
                return params[0].name + '<br/>' +
                    // "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                    params[0].seriesName + ' : ' + params[0].value + '%'
            }
        },
        backgroundColor: '#090D4E',
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: className
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
                formatter: function(value) {
                        return value + ' %';
                },
            },
            data: data
        }],
        series: [{
                name: '占比',
                type: 'bar',
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        //     offset: 0,
                        //     color: 'rgb(57,89,255,1)'
                        // }, {
                        //     offset: 1,
                        //     color: 'rgb(46,200,207,1)'
                        // }]),
                        color: (params) => {
                        return colorList[params.dataIndex]
                    }
                    },
                },
                barWidth: 10,
                data: data
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 10,
                barGap: '-100%',
                data: defaultData,
                itemStyle: {
                    normal: {
                        color: '#2C3767',
                        barBorderRadius: 30,
                    }
                },
            },
        ]
    };