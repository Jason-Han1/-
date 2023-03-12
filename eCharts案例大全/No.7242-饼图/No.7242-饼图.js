var total = 7500
var numberZ = 1500
var number = 500
var data = [{
        value: number,
        name: '完成',
        itemStyle: {
            color:'#2039C3',
        }
    },
    {
        value: numberZ - number,
        name: '剩余预算',

        tooltip: {
            // show: false,
        },
        itemStyle: {
            normal: {
                color: '#2039C3',
                opacity:0.25
            },
            emphasis: {
                show: false
            }
        },
  
    }
]
// 已完成百分比

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}(万元) ({d}%)"
    },
    title: {
        text:'大功率永磁牵引电机型式试验站总预算'+ total +'万元',
        left:'center',
        top:'2%',
        textStyle:{
            color:'#a2c7f3',
            fontSize:18,
            fontWeight:'normal',
            align:'center'
        }
    },
    color:['#0F9AF8','#2039C3','#2ECACE'],
    series: [{
            name: '总体预算占比',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '60%'],
            center: ["50%", "56%"],
            startAngle: 340, //起始角度

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 5090,
                    name: '2019'
                },
                {
                    value: 1500,
                    name: '2020'
                },
                {
                    value: 910,
                    name: '2021'
                }
            ]
        },
        {
            type: 'pie',
            name:'2020年预算占比情况',
            startAngle: 90, //起始角度
            radius: ['78%', '88%'],
            center: ["50%", "56%"],
            label: {
                show: false
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            hoverAnimation: false,
            data: data,
        }
    ]
}