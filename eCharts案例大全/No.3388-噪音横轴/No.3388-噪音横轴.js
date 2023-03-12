var salvProName =["功能区域噪声","交通噪声","区域噪声"];
var salvProValue =['45','75','32'];
var salvProValue1 =['73','81','74'];
option = {
    backgroundColor:"#003366",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    legend:{
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['2021年', '2020年']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value + '%<br/>' +params[1].name  + ' : ' + params[1].value + '%'
        }
    },
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
        data: salvProName
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
        },
        data:['','','']
    }],
    series: [
        {
           type: 'bar',
            yAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    barBorderRadius: 50,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '10%',
            data: [100, 100, 100]
        },
        {
            type: 'bar',
            yAxisIndex: 1,
            barGap: '100%',
            data: [100, 100, 100],
            zlevel: 1,
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    barBorderRadius: 50,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
        },
        {
            name: '2021年',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    label:{
                        show:true,
                        position:'right',
                        textStyle: { //数值样式
						    color: '#fff',
						    fontSize: 16
                        },formatter: function(params) {
                    　　　　　　if(params.value){
                    　　　　　　　　return params.value + '%' 
                    　　　　　　}else{//否则返回个空
                    　　　　　　　　return '';
                    　　　　　　}
                　　　　}
                    },
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: [45, 75, 32]
        },
        {
            name: '2020年',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#96d668'
                    }, {
                        offset: 1,
                        color: '#01babc'
                    }]),
                    label:{
                        show:true,
                        position:'right',
                        textStyle: { //数值样式
						    color: '#fff',
						    fontSize: 16
                        },
                        formatter: function(params) {
                    　　　　　　if(params.value){
                    　　　　　　　　return params.value + '%' 
                    　　　　　　}else{//否则返回个空
                    　　　　　　　　return '';
                    　　　　　　}
                　　　　}
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [73, 81, 74]
        }
    ]
};