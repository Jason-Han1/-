
let dataPie2 = [{
        name: '空闲',
        value: 60
    },
    {
        name: '占用',
        value: 40
    },
   
];
let dataColor2 = [{
        os1: '#36d7e7',
        os2: '#216994'
    },
    {
        os1: '#ff277d',
        os2: '#ff277d'
    },
   
];
let legendData = [],
    seriesData = [],
    radiusValue = 60,total = 0;
    
 dataPie2.forEach(function(val, idx, arr) {
     total += val.value;
 })
for (var i = 0; i < dataPie2.length; i++) {
    legendData.push(dataPie2[i].name);
    seriesData.push({
        type: 'pie',
        clockWise: false, //饼图的扇区是否是顺时针排布
        radius: [radiusValue - 8 * i + '%', radiusValue - 8 * i + 1 + '%'],
        center: ['40%', '50%'],
        label: {
            normal: {
                show: false //隐藏引导线标识
            }
        },
        hoverAnimation: false, //关闭 hover 在扇区上的放大动画效果
        startAngle: 150*i, //起始角度
        data: [ { //透明伞形
                value: total - dataPie2[i].value,
                tooltip: {
                    show: false
                },
                itemStyle: { //设置透明伞形
                    normal: {
                        color: '#041e36',//伞形颜色
                         borderWidth: 10,
                         borderColor:'#041e36',
                        label: {
                            show: false
                        },
                        
                    },

                }
            },
            {
                value: dataPie2[i].value,
                name: dataPie2[i].name,
                
                itemStyle: {
                    normal: {
                        borderWidth: 10,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: dataColor2[i].os1,
                        }, {
                            offset: 1,
                            color: dataColor2[i].os2,
                        }]),
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: dataColor2[i].os1
                        }, {
                            offset: 1,
                            color: dataColor2[i].os2
                        }])
                    }
                }
            },
           
        ]
    });


}
option = {
    backgroundColor: '#021228',
   title: [{
        text: '160',
        subtext: '总车位',
        textAlign: 'center',
        textStyle: {
            color: '#ffffff',
            fontSize: 12,
            lineHeight: 12
        },
        subtextStyle: {
            color: '#00b5f3',
            fontSize: 16,
            fontWeight:800
        },
         x: '33%',
        y: 'center',
    }],
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
         data: ['空闲', '占用'],
         icon: 'vertical',
         right: '5%',
         top: 'center',
         orient: 'vertical',
         itemGap: 20,
         itemWidth: 15,
         itemHeight: 8,
         formatter: function(name) {


             let target,percent;
             for (let i = 0; i < dataPie2.length; i++) {
                 if (dataPie2[i].name === name) {
                     target = dataPie2[i].value;
                     percent = ((target/total)*100).toFixed(2);
                 }
             }
             let arr =  [ ' {blue|' + name + '}',' {white|' + target + '}', percent+'% ', ];
             return arr.join("\n")

         },
         textStyle: {

             lineHeight: 20,
             color: '#a5dbff',
             align: 'right',
             rich: {
                 white: {
                     color: '#e9e9e9',
                     align: 'right',

                 },
                 blue: {
                     color: '#a5dbff',
                      align: 'right',

                 },
             }

         },
     },
    series: seriesData
};