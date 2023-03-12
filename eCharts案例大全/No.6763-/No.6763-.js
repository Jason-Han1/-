var light = "/asset/get/s/data-1595930107662-5IpeftyCW.png";

var uploadedDataURLgrey = "/asset/get/s/data-1595928383529-QwrevlUTe.png";

var uploadedDataURLgreen = "/asset/get/s/data-1595928356924-g-oSomb1P.png";

var uploadedDataURLred = "/asset/get/s/data-1595928332832-V3qHb56dl.png";


let dataPie2 = [{
        name: '在线',
        value: 60
    },
    {
        name: '离线',
        value: 40
    },
    {
        name: '异常',
        value: 10
    },
   
];
let dataColor2 = [{
        os1: '#22ffff',
        os2: '#22ffff'
    },
    {
        os1: '#ff0950',
        os2: '#ff0950'
    },
    {
        os1: '#a2a2a2',
        os2: '#a2a2a2'
    },
   
];
let legendData = [],
    seriesData = [],
    radiusValue = 40,total = 0;
    
 dataPie2.forEach(function(val, idx, arr) {
     total += val.value;
 })
 for (let i = 0; i < dataPie2.length; i++) {
            legendData.push(dataPie2[i].name);
            seriesData.push({
                type: 'pie',
                clockWise: false, //饼图的扇区是否是顺时针排布
                radius: [radiusValue - 18 * i + '%', radiusValue - 18 * i + 1 + '%'],
                center: ['20%', '50%'],
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
                            borderWidth: 5,
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
                                borderWidth: 5,
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
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: light,
                        width: 24,
                        height: 24
                    },
                    left: '17.5%',
                    top: '30%'
                }]
            },
            title: [{
                // text: '160',
                subtext: '228个',
                textAlign: 'center',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                    lineHeight: 12
                },
                subtextStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                    // fontWeight:800
                },
                x: '19%',
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


                right: '5px',
                top: 'center',
                orient: 'horizontal',
                itemGap: 20,
                itemWidth: 19,
                itemHeight:19,
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
                data: [
                    {name:'在线', icon:'image://'+uploadedDataURLgreen},
                    {name:'离线', icon:'image://'+uploadedDataURLred},
                    {name:'异常', icon:'image://'+uploadedDataURLgrey},
                ],
            },
            series: seriesData
        };