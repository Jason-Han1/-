var getvalue=40;
var getvalue1=4000;

option = {
    backgroundColor:'1B232F',
        graphic: {
        elements: [{
            type: "image",
            z: 999,
            style: {
                image:'/asset/get/s/data-1604990342243-2mGfoYhFh.png',
                width:66,
                height: 100
            },
            left: 'center',
            top: "45%",
        }]
    },
    angleAxis: {
        show: false,
        max: 100 * 360 / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 15, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '250'
    },
    series: [{
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: getvalue,
                itemStyle: {
                    color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1, //从左到右 0-1
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#EE6D6F'
                        }, {
                            offset: 1,
                            color: '#FF4D4F'
                        }],
                    },

                shadowColor: '#EE6D6F',
                shadowOffsetY: 0,
                shadowBlur: 10
                },
            }],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角
            z: 2 //圆环层级，同zindex
        },
        { //下层圆环，显示最大值
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#1B232F',
                    borderWidth:0,
                }
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },
        //仪表盘
        {
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLabel: {
                show: false
            },
            pointer: {
                show: false
            },
           detail: {
              		formatter: function (params) {
                        return getvalue1+'人('+getvalue.toFixed(2)+'%)';
                    },
                    color: '#BEE9FF',
                    fontSize: 15,
                    offsetCenter: [0, 110],
            },
            title: {
                show: false
            },
            data: [{
                value: getvalue.toFixed(2),
                name: '男性'
            }]
        }
    ]
}