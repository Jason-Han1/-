var Names = ["计算（Flops）", "通信（bps）", "控制（Cps）", "感知（Sps）"];
var Stu = [6, 8, 12, 10];
var Group = [20, 18, 17, 18];
var Max = [20, 20, 20, 20];
option = {
    tooltip: {},
    backgroundColor: '#fff',
    legend: {
        left:'center',
        bottom:170,
        textStyle: {
             fontSize: 14,
             align: "right",
             padding: 15,
             color:'#949494'
         },
        data: ['传统控制', '智能&以计算为核心'],
    },
    radar: [{
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#666666',
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#d5d5d5',
            }
        },
        splitLine:{
          lineStyle: {
              color: '#ececec'
          }  
        },
        splitArea: {
            areaStyle: {
                color: '#fff',
                opacity: 0,
            }
        },
        indicator: [{
                text: Names[0],
                max: Max[0],
                 axisLabel:{
          show: true  
        },
            },
            {
                text: Names[1],
                max: Max[1]
            },
            {
                text: Names[2],
                max: Max[2]
            },
            {
                text: Names[3],
                max: Max[3]
            }
        ],
        center: ['50%', '50%'],
        radius: 100
    }],
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                opacity: 1
            }
        },
        itemStyle:{
          color:'rgba(90,216,166,0.8)'  
        },
        data: [{
            value: Group,
            name: '智能&以计算为核心'
        }]
    }, {
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                opacity: 1
            }
        },
        itemStyle:{
          color:'rgba(91,143,249,1)'  
        },
        data: [{
            value: Stu,
            name: '传统控制'
        }]
    }]
};