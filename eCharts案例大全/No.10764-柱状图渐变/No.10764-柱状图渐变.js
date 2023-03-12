// 科目
var subjects = ['语文', '数学', '英语', '物理', '化学', '生物'];
// 成绩
var grade = [85, 130, 90, 30, 90, 70];

option = {
    backgroundColor:'#ffffff',
    title: {
        text: '小明期末成绩单',
        subtext:'纯属虚构',
        x:'center',
        top:'2%',
        textStyle:{
           fontSize:25
        }
    },
    grid:{
        containLabel:true,
        top:'15%'
    },
    xAxis: {
        name:'科目',
        axisLabel:{
            textStyle:{
                fontSize:18
            }
        },
        data: subjects
    },
    yAxis: {
        name:'成绩',
        splitLine:{show:false},
    },
    series: [{
        type: 'bar',
        barWidth:'30%',
        label:{
            normal:{
                show:true,
                position:'top',
              
            }
        },
        itemStyle:{
            normal:{
              color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0286ff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#00feff'
                            }
                        ]
                    ),
                barBorderRadius:[50,50,0,0],
                shadowColor:'#BABABA',
                shadowBlur:5
            }
        },
        data:[85,130,90,30,90,70]
    }]
};