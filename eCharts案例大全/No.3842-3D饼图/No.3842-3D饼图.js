 var data = [{
     "name": "危运",
     "value": 40,
     "number": 120,
     itemStyle: {
         // 透明度
         opacity: 0.7,
         // 扇形颜色
         color: 'rgba(32,159,237,1)',
     }
 }, {
     "name": "包车",
     "value": 30,
     "number": 80,
     itemStyle: {
         // 透明度
         opacity: 0.7,
         // 扇形颜色
         color: 'rgba(255,159,32,1)',
     }
 }, {
     "name": "班车",
     "value": 20,
     "number": 60,
     itemStyle: {
         // 透明度
         opacity: 0.7,
         // 扇形颜色
         color: 'rgba(159,255,237,1)',
     }
 }, {
     "name": "重货",
     "value": 10,
     "number": 10,
     itemStyle: {
         // 透明度
         opacity: 0.7,
         // 扇形颜色
         color: 'rgba(159,255,32,1)',
     }
 }]
 function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
                // 计算
                let midRatio = (startRatio + endRatio) / 2;

                let startRadian = startRatio * Math.PI * 2;
                let endRadian = endRatio * Math.PI * 2;
                let midRadian = midRatio * Math.PI * 2;

                // 如果只有一个扇形，则不实现选中效果。
                if (startRatio === 0 && endRatio === 1) {
                    isSelected = false;
                }

                // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
                k = typeof k !== 'undefined' ? k : 1 / 3;

                // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
                let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
                let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

                // 计算高亮效果的放大比例（未高亮，则比例为 1）
                let hoverRate = isHovered ? 1.05 : 1;

                // 返回曲面参数方程
                return {
                    u: {
                        min: -Math.PI,
                        max: Math.PI * 3,
                        step: Math.PI / 32,
                    },

                    v: {
                        min: 0,
                        max: Math.PI * 2,
                        step: Math.PI / 20,
                    },

                    x: function (u, v) {
                        if (u < startRadian) {
                            return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                        }
                        if (u > endRadian) {
                            return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                        }
                        return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
                    },

                    y: function (u, v) {
                        if (u < startRadian) {
                            return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                        }
                        if (u > endRadian) {
                            return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                        }
                        return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
                    },

                    z: function (u, v) {
                        if (u < -Math.PI * 0.5) {
                            return Math.sin(u);
                        }
                        if (u > Math.PI * 2.5) {
                            return Math.sin(u) * h * 0.1;
                        }
                        return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
                    },
                };
            }


 function getPie3D(pieData, internalDiameterRatio) {
     let series = [];
     let sumValue = 0;
     let startValue = 0;
     let endValue = 0;
     let legendData = [];
     let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;

     // 为每一个饼图数据，生成一个 series-surface 配置
     for (let i = 0; i < pieData.length; i++) {
         sumValue += pieData[i].value;

         let seriesItem = {
             name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
             value: typeof pieData[i].value === 'undefined' ? `series${i}` : pieData[i].value,
             type: 'surface',
             parametric: true,
             wireframe: {
                 show: false,
             },
             pieData: pieData[i],
             pieStatus: {
                 selected: false,
                 hovered: false,
                 k: k,
             },
         };

         if (typeof pieData[i].itemStyle != 'undefined') {
             let itemStyle = {};

             typeof pieData[i].itemStyle.color != 'undefined' ? (itemStyle.color = pieData[i].itemStyle.color) : null;
             typeof pieData[i].itemStyle.opacity != 'undefined' ? (itemStyle.opacity = pieData[i].itemStyle.opacity) : null;

             seriesItem.itemStyle = itemStyle;
         }
         seriesItem.label = {
             formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
             backgroundColor: '#eee',
             borderColor: '#aaa',
             borderWidth: 1,
             borderRadius: 4,
             // shadowBlur:3,
             // shadowOffsetX: 2,
             // shadowOffsetY: 2,
             // shadowColor: '#999',
             // padding: [0, 7],
             rich: {
                 a: {
                     color: '#999',
                     lineHeight: 22,
                     align: 'center'
                 },
                 // abg: {
                 //     backgroundColor: '#333',
                 //     width: '100%',
                 //     align: 'right',
                 //     height: 22,
                 //     borderRadius: [4, 4, 0, 0]
                 // },
                 hr: {
                     borderColor: '#aaa',
                     width: '100%',
                     borderWidth: 0.5,
                     height: 0
                 },
                 b: {
                     fontSize: 16,
                     lineHeight: 33
                 },
                 per: {
                     color: '#eee',
                     backgroundColor: '#334455',
                     padding: [2, 4],
                     borderRadius: 2
                 }
             }
         };
         series.push(seriesItem);
     }
     // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
     // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
     for (let i = 0; i < series.length; i++) {
         endValue = startValue + series[i].pieData.value;

         series[i].pieData.startRatio = startValue / sumValue;
         series[i].pieData.endRatio = endValue / sumValue;
         series[i].parametricEquation = getParametricEquation(
             series[i].pieData.startRatio,
             series[i].pieData.endRatio,
             false,
             false,
             k,
             series[i].pieData.value
         );

         startValue = endValue;
         legendData.push(series[i].name);
     }

     // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
     series.push({
         name: 'mouseoutSeries',
         type: 'surface',
         parametric: true,
         wireframe: {
             show: false,
         },
         itemStyle: {
             opacity: 0,
         },
         parametricEquation: {
             u: {
                 min: 0,
                 max: Math.PI * 2,
                 step: Math.PI / 20,
             },
             v: {
                 min: 0,
                 max: Math.PI,
                 step: Math.PI / 20,
             },
             x: function(u, v) {
                 return Math.sin(v) * Math.sin(u) + Math.sin(u);
             },
             y: function(u, v) {
                 return Math.sin(v) * Math.cos(u) + Math.cos(u);
             },
             z: function(u, v) {
                 return Math.cos(v) > 0 ? 0.1 : -0.1;
             },
         },
     });

     // 准备待返回的配置项，把准备好的 legendData、series 传入。
     let option = {
         //animation: false,

         legend: {
             icon: 'circle',
             data: legendData,
             top: 50,
             width: 50,
             itemGap: 20,
             right: 40,
             formatter: function(value) {
                 var res = '';
                 for (var i = 0; i < data.length; i++) {
                     if (data[i].name == value) {
                         res = pieData[i].name + data[i].number;
                     }
                 }
                 if (!res) {
                     res = value;
                 }
                 return res;
             },
             textStyle: {
                 color: '#fff',
                 fontSize: 16
             },
             rich: {
                 align: 'center',
                 text: {
                     fontSize: 14,
                     color: '#fff',
                     fontWeight: '500',
                     padding: [15, 0, 5, 0],
                 },
             },
             color: '#fff',
         },
         tooltip: {
             formatter: (params) => {
                 if (params.seriesName !== 'mouseoutSeries') {
                     return `${
                                    params.seriesName
                                }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                                    params.color
                                };"></span>${option.series[params.seriesIndex].pieData.number}`;
                 }
             },
         },
         xAxis3D: {
             min: -1,
             max: 1,
         },
         yAxis3D: {
             min: -1,
             max: 1,
         },
         zAxis3D: {
             min: -1,
             max: 1,
         },
         grid3D: {
             left: '-10%',
             top: 20,
             show: false,
             boxHeight: 5,
             viewControl: {
                 //3d效果可以放大、旋转等，请自己去查看官方配置
                 alpha: 40,
                 // beta: 40,
                 rotateSensitivity: 0,
                 zoomSensitivity: 0,
                 panSensitivity: 0,
                 autoRotate: false,
             },
             //后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
             postEffect: {
                 //配置这项会出现锯齿，请自己去查看官方配置有办法解决
                 enable: true,
                 bloom: {
                     enable: true,
                     bloomIntensity: 0,
                 },
                 SSAO: {
                     enable: false,
                     quality: 'medium',
                     radius: 2,
                 },
             },
         },
         series: series,
     };
     return option;
 }

 option = getPie3D(data, 0.71);