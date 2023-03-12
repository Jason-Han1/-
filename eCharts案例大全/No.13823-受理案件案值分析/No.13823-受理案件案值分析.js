var data1=[122,150,149,130,142,178,148,180,146,176,113,126,131,169];
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
        data: ['南宁市', '柳州市', '桂林市', '梧州市', 
         '北海市',  '防城港市', '钦州市'
        ,'贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
    },
    yAxis: {
        name:'万元',
        max:200,
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
            return Math.sqrt(data) * 2;
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
            return Math.sqrt(data) * 2;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(184,134,11)'
                }]),
        data:[41,31,40,48,46,41,40,36,38,33,31,35,38,41]
    },{
        name:'没收金额',
        symbolSize: function (data) {
            return Math.sqrt(data) * 2;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }, {
                    offset: 1,
                    color: 'rgb(0,252, 0)'
                }]),
        data:[68,54,78,56,78,61,50,68,60,62,51,65,53,77]
    }]
};