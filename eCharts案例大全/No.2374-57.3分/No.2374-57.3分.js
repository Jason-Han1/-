var colorList = ['#5AEBE6', '#7A4BFB', '#1EDB7F', '#EC6E48', '#219DF7', '#F9CF19'] //上层环背景 
var bgList = ['#DAF9FB', '#DACCFF', '#CFFACD', '#F7B39F', '#B3DAF9', '#F7E9AC'] //下层环背景
option = {
    backgroundColor: '#010818',
    title:{
              show:true,
              text:57.3+'分',
              subtext:'总分',
              left:"50%",
              top:"48%",
              textAlign:'center',
              textStyle:{
                 color:'#ffffff',
                 fontSize: 24,
              },
              subtextStyle:{
                color:'#ffffff',
                fontSize: 20,
              }
            },
            angleAxis: {
              show: false, //隐藏角度轴（圆心角）
              max: 100,
              startAngle: 90, //极坐标从第一象限开始，即平面直角坐标系,用时钟理解，0就是三点钟方向，这里我们从12点钟方向开始，也就是3点钟方向加90度
              splitLine: {
                show: false //隐藏分隔线
              },
            },
            // barMaxWidth: 10, //设置圆环最大宽度
            radiusAxis: {
              show: false, //隐藏径向轴（半径）
              type: 'category',
              data: ['巡查任务', '检查任务', '人员', '"人"的安全', '隐患排查', '"物"的安全'] //传入每条圆环的径向值
            },
            polar: {
              radius: [50, 250] //总体的最小半径，最大半径
            },
            series: [{ //上层的圆环
              type: 'bar',
              data: [80, 49.1304347826087, 57.49999999999999, 61.33333333333333, 24.09090909090909, 46.62499999999999], //初始值
              coordinateSystem: 'polar', //设置类型为极坐标
              roundCap: true, //柱状图末端呈现圆角
              itemStyle: { //设置每一个圆环的颜色
                color: (params) => {
                  return colorList[params.dataIndex]
                }
              },
              animationEasing: 'quadraticIn', //初始动画
              barGap: '-100%', //柱间距离,用来将上下两种圆环重合
              z: 200, //圆环层级，和zindex相似
            },
            { //下层的圆环
              type: 'bar',
              data: [100, 100, 100, 100, 100, 100],
              coordinateSystem: 'polar',
              roundCap: true,
              itemStyle: { //设置每一个圆环的颜色
                color: (params) => {
                  return bgList[params.dataIndex]
                }
              },
              z: 100,
              barGap: '-100%', //柱间距离,用来将上下两种圆环重合
            }]
};
