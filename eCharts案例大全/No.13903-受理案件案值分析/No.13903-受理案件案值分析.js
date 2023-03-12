var data1=[12,15,14,10,14,17,18,16,11,16,13,19];
option = {
    backgroundColor:'#fff',
    legend: {
        
        top:'30',
        data: ['案值金额','没收金额', '罚款金额']
    },
    grid:{
        bottom:'45%',
        right:'18%',
        left:'18%',
        top:'15%'
    },
    title: {
        text: '受理案件案值分析'
    },
    xAxis: {
         splitLine: {
            lineStyle: {
                show:true,
                type: 'dashed'
            }
        },"axisLabel": {
            "interval": 0,
             rotate:40,
            textStyle:{
                fontSize:12,
                color:'#000'
            },},
        data: ['武鸣区','西乡塘区','兴宁区','青秀区','江南区','良庆区','邕宁区','隆安县','马山县','上林县','宾阳县','横县']
    },
    yAxis: {
        name:'万元',
        max:20,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
     tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{a}:{c}(万元)'
         
     },
    series: [{
        name:'案值金额',
        symbolSize: function (data) {
            return Math.sqrt(data) * 7;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(164,298, 250)'
                }, {
                    offset: 1,
                    color: 'rgb(33, 207, 209)'
                }]),
        data:data1
    },{
        name:'罚款金额',
        symbolSize: function (data) {
            return Math.sqrt(data) * 7;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(184,134,11)'
                }]),
        data:[4,3,2,8,6,1,9,6,3,3,1,5]
    },{
        name:'没收金额',
        symbolSize: function (data) {
            return Math.sqrt(data) * 7;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }, {
                    offset: 1,
                    color: 'rgb(0,252, 0)'
                }]),
        data:[6,5,8,5,7,6,5,8,3,2,6,3]
    }]
};