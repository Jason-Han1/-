 option = {
                backgroundColor:'#1B2D3B',

                     title : {
                         text: '某站点用户访问来源',
                         subtext: '纯属虚构',
                         x:'center',
                         textStyle:{
                          //文字颜色
                         color:'white',
                          // //字体风格,'normal','italic','oblique'
                          // fontStyle:'normal',
                          // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                          // fontWeight:'bold',
                          // //字体系列
                          // fontFamily:'sans-serif'
                          // //字体大小
                         // fontSize:18
                       },
                         subtextStyle:{},  //与textStyle类似
                    },

                    color:['#4472C4','#39E7FB','#FAC901'],  //饼图颜色

                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },

                legend: {
                    orient: 'vertical',
                    x:'right',
                    y:'top',
                    data: ['直接访问','邮件营销','联盟广告'],
                    textStyle:{
                        color:'white'
                    }
                },
                    //graphic是原生图形元素组件,可以支持的图形元素包括image, text, circle等等 除了下面的属性之外,还有onclick: function () {...}属性,具体的可参照echarts文档

                graphic:{
                        type: 'text',
                        // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
                        // right: 10,
                        // bottom: '10%',
                        left: 'center', // 相对父元素居中
                        top: 'middle',  // 相对父元素居中
                        //可设置颜色 字体等等
                        style: {
                            fill: 'white',  //text颜色
                            text: '直接访问 335\n邮件营销 310\n联盟广告 234',
                            font: '20px Microsoft YaHei'
                        }
                    },


                    //avoidLabelOverlap:标签重叠,为true时标签拥挤重叠的情况下会挪动各个标签的位置,为false时强制所有标签放在中心位置
                    //label和labelLine:当设置label的show为false时,饼图外围的标签不显示,labelLine是标签的指导线,false则不显示.
                    //emphasis指的是鼠标移到饼图外围标签时,show为false的时候,标签文字不变化,当show为true时,鼠标移到饼图外围标签时,标签会变化,变化的属性在textStyle中
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: true,
                            label: {
                                show: false,
                                position: 'outside',
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                show:false
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                            ]
                        }
                    ]
                };
