let max = 70;

option = {
    backgroundColor: '#000A2A', //背景必须与symbal颜色一样
    grid: {
        left: '30%',
        right: '20%'
    },
    legend:{
        show:true,
        itemWidth:52,
        itemHeight:30,
        itemGap:50,
        textStyle:{
            color:'#fff',
            fontSize:34
        }
    },
    "xAxis": {
        type: 'value',
        "max": max,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [{
        "type": "category",
        "inverse": true,
        "data": ['开工项目', '开工变  \n电容量  ', '开工线  \n路长度  '],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 10,
            "textStyle": {
                "color": "#fff",
                "fontSize": 36
            }
        }
    }],
    "series": [{ //内
            type: 'bar',
            barWidth: 43,
            name:'实际',
            label: {
                show: true,
                position: 'right',
                formatter:function(params){
                    if(params.name == '开工项目'){
                        return params.value+'{a|个}'
                    }else if(params.name == '开工变  \n电容量  '){
                        return params.value+'{a|万千伏安}'
                    }else{
                        return params.value+'{a|公里}'
                    }
                },
                textStyle: {
                    color: '#00F0FF',
                    fontSize: 48,
                    padding:[0,20],
                    rich:{
                        a:{
                            color:'#fff',
                            fontSize:36
                        }
                    }
                }
            },
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0078FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00DEFF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: [30,40,50]
        },
        { //分隔
            name:'实际',
            "type": "pictorialBar",
            itemStyle: {
                color: "#041541"
            },
            "symbolRepeat": "fixed",
            "symbolMargin": "25",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 43],
            "symbolPosition": "start",
            "symbolOffset": [
                0, -26.5
            ],
            z:4,
            // "symbolBoundingData": max,
            "data": [30,40,50]
        },
        { //内2
            type: 'bar',
            barWidth: 40,
            name:'计划',
            legendHoverLink: false,
            silent: true,
            label: {
                show: true,
                position: 'right',
                formatter:function(params){
                    if(params.name == '开工项目'){
                        return params.value+'{a|个}'
                    }else if(params.name == '开工变  \n电容量  '){
                        return params.value+'{a|万千伏安}'
                    }else{
                        return params.value+'{a|公里}'
                    }
                },
                textStyle: {
                    color: '#00F0FF',
                    padding:[0,20],
                    fontSize: 48,
                    rich:{
                        a:{
                            color:'#fff',
                            fontSize:36
                        }
                    }
                }
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#DF750E' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#CAA703' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: [20,30,60]
        },
        { //分隔
            "type": "pictorialBar",
            name:'计划',
            itemStyle: {
                color: "#041541"
            },
            "symbolRepeat": "fixed",
            "symbolMargin": "25",
            symbol: 'rect',
            "symbolClip": true,
            "symbolSize": [4, 43],
            "symbolPosition": "start",
            "symbolOffset": [
                0, 27
            ],
            z:4,
            // "symbolBoundingData": max,
            "data": [20,30,60]
        }
    ]
};