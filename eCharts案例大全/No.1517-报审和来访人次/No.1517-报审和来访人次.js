var xData2 = ["联想公司","百度公司","腾讯公司","物业公司","阿里公司"];
var data1 = [65,58,10,8,10];
var data2 = [92,89,22,22,76];
option = {
    backgroundColor: '#021132',
    tooltip: {
        trigger: 'item',
    },
    grid:{
        left:150,
        bottom:100
    },
    xAxis: {
        axisTick: {
            show: false
        },
        axisLine: {
            show:false
        },
        axisLabel: {
            interval:0,
            textStyle: {
                color: '#fff',
                fontSize:14,
            },
            // margin: 20, //刻度标签与轴线之间的距离。
        },
         splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255,255,255,0.2)',
                },
            },

    },
    yAxis: {
        data: xData2,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            
            margin:30,
            textStyle: {
                color: '#fff',
                fontSize:14,
            },
        }
    },
    series: [
            {//三个最低下的圆片
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [10, 20],
                "symbolOffset": [-4, 0],
                "z": 12,
                itemStyle:{
                    opacity:1,
                    color:'#FF9A22'
                },
                tooltip:{
                  trigger:'item',
                  show:false,
                },
                "data": [1,1,1,1,1]
            },


            //下半截柱状图
            {
                name: '报审人次',
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                itemStyle: {//lenged文本
                    opacity:.7,
                    color:'#FF9A22'
                },

                data: data1
            },

            // { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
            //     type: 'bar',
            //     barWidth: 45,
            //     barGap: '-100%',
            //     stack: '广告',
            //     itemStyle: {
            //         color: 'transparent'
            //     },
            //     data: data1
            // },

            {
                "name": "来访人次", //头部
                "type": "pictorialBar",
                "symbolSize": [10, 20],
                "symbolOffset": [5, 0],
                "z": 12,
                "symbolPosition": "end",
                itemStyle:{
                    color:'#163F7A',
                    opacity:1,
                },
                tooltip:{
                  trigger:'item',
                  show:false,
                },
                label: {
                    normal: {
                        show: true,
                        // position: ['108%','35%'],
                        position: 'right',
                        formatter: '{a}'+'：'+'{c}'
                    }
                },
                "data": data2
            },

            {
                "name": "报审人次",
                "type": "pictorialBar",
                "symbolSize": [10, 20],
                "symbolOffset": [5, 0],
                "z": 12,
                itemStyle:{
                    opacity:1,
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FF9A22' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color:  '#FFD56E'// 100% 处的颜色
                            }], false)
                },
                "symbolPosition": "end",
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{a}'+'：'+'{c}'
                    }
                },
                "data": data1
            },
            {
                name: '来访人次',
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                z:0,
                itemStyle: {
                    color: '#163F7A',
                    opacity:.7,
                },
               
                data: data2
            }


        ]
};