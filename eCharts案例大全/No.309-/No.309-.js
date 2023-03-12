  var name="";
   var  data = [
        {
            name:'居民区废弃家具设备',
            value:50,

        },
        {
            name:'广告招牌破损',
            value:10,

        },
        {
            name:'街头散发广告',
            value:10,

        },
        {
            name:'暴露垃圾',
            value:10,

        }
    ]
    // 带刻度的Y轴样式
    var  colors = ["#FE635F",'#EEA12D','#70F889','#FFDF02'];
    const linecolor = '#1E4277'
    const labelcolor = '#D5ECFF'
    let max = 0; // 数据总数
    let datas = [];
    let names = [];
    data.forEach(value => {
        max = max < value.value ? value.value : max
        datas.push(value.value);
        names.push(value.name);
    });
    let bgdatas = datas.map(e => {
        return max
    })
     option = {
        backgroundColor: 'rgba(0,0,0,1)', //背景色
        xAxis: {
            max: max,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        grid: {
            left:100,
            top: 100,
            right: 300,
            bottom: 100,

        },
        yAxis: [{
            type: "category",
            inverse: true,
            data: names,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 70,
                align: 'left',
                formatter: function (params) {
                    let index = 0
                    names.map((e, i) => {
                        if (e === params) {
                            index = i + 1
                        }
                    })
                    let name = 'top' + index
                    return '{' + name + '|}'
                },
                rich: {
                    top1: {
                        width: 52,
                        height: 18,
                        lineHeight: 18,
                        align: 'center',

                    },
                    top2: {
                        width: 52,
                        height: 18,
                        lineHeight: 18,
                        align: 'center',

                    },
                    top3: {
                        width: 52,
                        height: 18,
                        lineHeight: 18,
                        align: 'center',

                    },
                    top4: {
                        width: 52,
                        height: 18,
                        lineHeight: 18,
                        align: 'center',

                    },
                    top5: {
                        width: 52,
                        height: 18,
                        lineHeight: 18,
                        align: 'center',
                    },
                }
            },
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {

                    rich:{
                        text0:{
                            color:colors[0],
                            fontSize: '22',
                            fontFamily:'FZLanTingHeiS-B-GB',
                            fontWeight :'bold'
                        },
                        text1:{
                            color:colors[1],
                            fontSize: '22',
                            fontFamily:'FZLanTingHeiS-B-GB',
                            fontWeight :'bold'
                        },
                        text2:{
                            color:colors[2],
                            fontSize: '22',
                            fontFamily:'FZLanTingHeiS-B-GB',
                            fontWeight :'bold'
                        },
                        text3:{
                            color:colors[3],
                            fontSize: '22',
                            fontFamily:'FZLanTingHeiS-B-GB',
                            fontWeight :'bold'
                        },
                    },

                },
                formatter: function(value,index) {
                    return "    {text"+index+"|" + value + "}"
                },


            },

            data: datas
        }],
        series: [
            {
                // 内
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: function(params) {

                            return colors[params.dataIndex]
                        },


                    }
                },
                label: {
                    show: true,

                    color: '#8FBBDF',
                    position: 'insideLeft',
                    offset: [-5, -20],
                    formatter: '{b}',
                    fontSize:14
                },
                symbolRepeat: "fixed",
                symbolMargin: 3,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [3, 10],
                symbolPosition: "start",
                symbolOffset: [0, 0],
                symbolBoundingData: this.max,
                data: data,
                z: 3,
                animationEasing: "elasticOut",
            },

            {
                // 背景
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: "#3e71a2"
                    }
                },
                symbolRepeat: "fixed",
                symbolMargin: 3,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [3, 10],
                symbolPosition: "start",
                symbolOffset: [0, 0],
                symbolBoundingData: max,
                data: bgdatas,
                z: 2,
                animationEasing: "elasticOut",

            }
        ]
    }