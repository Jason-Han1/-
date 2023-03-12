var fontSize = (val) => {
    return val
}
 option = {
     backgroundColor: '#012248',
     tooltip: {
         formatter: '{a} <br/>{c} Mbps'
     },
     series: [{
         name: '速率',
         type: 'gauge',
         center: ['50%', '50%'],
         min: 0,
         max: 100,
         startAngle: 210,
         endAngle: -30,
         radius: '40%',
         splitNumber: 5,
         axisLine: { // 坐标轴线
             lineStyle: { // 属性lineStyle控制线条样式
                 color: [
                     [0.09, 'lime'],
                     [0.82, '#1e90ff'],
                     [1, '#ff4500']
                 ],
                 width: fontSize(3),
                 shadowColor: '#fff', // 默认透明
                 shadowBlur: 10
             }
         },
         axisLabel: { // 坐标轴小标记
             show: true,
             // fontWeight: 'bolder',
             color: '#fff',
             shadowColor: '#fff', // 默认透明
             shadowBlur: 10
         },
         axisTick: { // 坐标轴小标记
             length: fontSize(15), // 属性length控制线长
             lineStyle: { // 属性lineStyle控制线条样式
                 color: 'auto',
                 shadowColor: '#fff', // 默认透明
                 shadowBlur: 10
             }
         },
         splitLine: { // 分隔线
             length: fontSize(25), // 属性length控制线长
             lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                 width: fontSize(3),
                 color: '#fff',
                 shadowColor: '#fff', // 默认透明
                 shadowBlur: 10
             }
         },
         pointer: { // 分隔线
             shadowColor: '#fff', // 默认透明
             shadowBlur: 5,
             width: fontSize(2)
         },
         title: {
             offsetCenter: [0, '65%'],
             textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                 fontWeight: 'bolder',
                 fontSize: fontSize(14),
                 fontStyle: 'italic',
                 color: '#fff',
                 shadowColor: '#fff', // 默认透明
                 shadowBlur: 10
             }
         },
         detail: {
             show: false,
             shadowColor: '#fff', // 默认透明
             shadowBlur: 5,
             offsetCenter: [0, 0], // x, y，单位px
             textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                 fontWeight: 'bolder',
                 color: '#fff',
                 fontSize: fontSize(14)
             }
         },
         data: [{
             value: 50,
             name: '4g:Mbps'
         }]
     }]
 }