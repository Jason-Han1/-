option = {
     backgroundColor:'#fff',
    title : {
        text: '单位立案情况分析',
        subtext: '投诉立案数'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['投诉立案数']
    },
     grid: {
        left: '3%',
        right: '25%',
        top:'11%',
        bottom: '30%',
        containLabel: true
    },
    color:['#fbceb2','#dbb0e3'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','广西-东盟经济技术开发区行政审批局','广西-东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']},
        
    ],
    yAxis : {
            name:'投诉立案数',
            type : 'value'
        }
    ,"dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series : [
        {
            name:'投诉立案数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 37, 50,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 37, 50,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[210, 312, 121,654, 500, 830, 710, 521, 304, 560, 330, 410, 710, 521, 304, 560 ]
        }
    ]
};