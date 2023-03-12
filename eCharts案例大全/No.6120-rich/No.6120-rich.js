let dataPie2 = [{
        name: '错题数',
        value: 50
    },
    {
        name: '已讲评',
        value: 18
    },

];
let dataColor2 = [{
        os1: '#faaaaa',
        os2: '#f88a8a'
    },
    {
        os1: '#22d7bb',
        os2: '#3be4ca'
    },

];
let legendData = [],
    seriesData = [],
    radiusValue = 40,
    total = 50;


for (var i = 0; i < dataPie2.length; i++) {
    legendData.push(dataPie2[i].name);
    seriesData.push({
        type: 'pie',
        clockWise: true, //饼图的扇区是否是顺时针排布
        radius: [radiusValue - 4 * i + '%', radiusValue - 4 * i + 1 + '%'],
        center: ['40%', '50%'],
        label: {
            normal: {
                show: false //隐藏引导线标识
            }
        },
        hoverAnimation: false, //关闭 hover 在扇区上的放大动画效果
        startAngle: -40 * i, //起始角度
        data: [{ //透明伞形
                value: total - dataPie2[i].value,
                tooltip: {
                    show: false
                },
                itemStyle: { //设置透明伞形
                    normal: {
                        color: '#041e36', //伞形颜色
                        borderWidth: 8,
                        borderColor: '#fff',
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
                        borderWidth: 8,
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
    backgroundColor: '#fff',
    title: [{
        text: '{a|'+18+"  " + '}{b|'+dataPie2[1].name+'}\n\n{line|'+ '}\n\n{x|'+50+"  "+'}{b|'+dataPie2[0].name+'}',
        textAlign: 'center',
        textStyle: {
            rich: {
                a: {
                    fontFamily: 'Arial-BoldMT',
                    fontSize: 30,
                    color: '#00c0a2',
                },
                b: {
                    fontFamily: 'MicrosoftYaHei',
                    fontSize: 18,
                    fontWeight: 'normal',
                    letterSpacing: '0px',
                    color: '#788aa4',
                },
                line:{
                    width: 160,
	                height: 1,
	                opacity: 0.3,
	                borderColor:"#000",
	                borderWidth:1,
	                borderType:'solid'
                },
                x: {
                    fontFamily: 'Arial-BoldMT',
                    fontSize: 30,
                    color: '#f97676',
                },
            }

        },
        x: '38%',
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
    // legend: {
    //     data: ['已讲评', '错题数'],
    //     icon: 'vertical',
    //     right: '5%',
    //     top: 'center',
    //     orient: 'vertical',
    //     itemGap: 20,
    //     itemWidth: 15,
    //     itemHeight: 8,
    //     formatter: function(name) {


    //         let target, percent;
    //         for (let i = 0; i < dataPie2.length; i++) {
    //             if (dataPie2[i].name === name) {
    //                 target = dataPie2[i].value;
    //                 percent = ((target / total) * 100).toFixed(2);
    //             }
    //         }
    //         let arr = [' {blue|' + name + '}', ' {white|' + target + '}', percent + '% ', ];
    //         return arr.join("\n")

    //     },
    //     textStyle: {

    //         lineHeight: 20,
    //         color: '#a5dbff',
    //         align: 'right',
    //         rich: {
    //             white: {
    //                 color: '#e9e9e9',
    //                 align: 'right',

    //             },
    //             blue: {
    //                 color: '#a5dbff',
    //                 align: 'right',

    //             },
    //         }

    //     },
    // },
    series: seriesData
};