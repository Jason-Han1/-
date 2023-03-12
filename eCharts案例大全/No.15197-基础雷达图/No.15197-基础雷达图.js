option = {
    backgroundColor:'#06152a',
    
    title: {
        text: '基础雷达图'
    },
    
    radar: {
         yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
        shape: 'circle',//雷达图绘制类型 polygon 多边形 circle 圆形
        center:['50%','50%'],//位置
        radius:'50%',//半径
        startAngle :90,//起始角度
        nameGap :30,//名称和指示器轴的距离
        splitNumber :20,//分割段数
        splitArea: {//背景分割区域
        
            areaStyle: {
                
                color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','#04a8d5',]
            }
        },
        indicator: [//雷达图的指示器，用来指定雷达图中的多个变量（维度）
           { name: '管理制度与策略', max: 6500},
           { name: '管理制度与策略', max: 16000},
           { name: '管理制度与策略', max: 30000},
           { name: '管理制度与策略', max: 300000},
           { name: '管理制度与策略', max: 300000},
        ],
        splitLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
        name: {
                show: true,
                textStyle:{
                    color:"#fff"
                }
              },
    },
    legend:{
        show:true,
        backgroundColor:'red',
    },
   
    series: [{
        name: '雷达图1',
        type: 'radar',
        areaStyle: {normal: {}},
                lineStyle: {
                    normal: {
                        color:'rgba(0,0,0,0)',
                        curveness: 0.1
                    }
                },
        itemStyle: {
            normal:{
            color:'#005AAF',
            borderWidth:10,
            borderColor: '#aaa',
            borderType:'dashed',
             shadowColor: 'red',
             shadowBlur: 2,
            opacity:1
        },emphasis:{
            color:'red',
            borderWidth:16
        },
        areaStyle: {
                normal: {
                    opacity: 0,
                    color:'#aaa'
                }
            }
             
        },//拐点样式
        lineStyle: {normal: {color:'#005AAF',width:2}},//折线样式
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000,10000],
                name : '预算分配（Allocated Budget）'
            }
        ]
    }]
};