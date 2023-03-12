var getbx=3583;//本校值
var getpjz=4000;//同类型同性质院校平均值
var getxzzs=1500;//限制招生最大值
var getyj=3000;//预警最大值
var gethg=8000;//监测合格值以上最大值

option = {

    angleAxis: {
        show: false,
        max: gethg*360/270, //-45度到225度，二者偏移值是270度除360度
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
                value: getxzzs,
                itemStyle: {
                    color: '#FF5652',
                },
            }],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角
            z: 3 //圆环层级，同zindex
        },{
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: getyj,
                itemStyle: {
                    color: '#FFBD4B',
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
                value: gethg,
                itemStyle: {
                    color: '#70D5FF',
                    borderWidth:0,
                },
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
            pointer: { // 分隔线
                shadowColor: 'auto', //默认透明
                shadowBlur: 5,
                length:'20%'
            },
            itemStyle: {
                color: '#FF5652'
            },
            detail:{
                show:false,
            },
            title: {
                show: false
            },
            data: [{
                value: getpjz*100/gethg,
            }]
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
            pointer: { // 分隔线
                shadowColor: 'auto', //默认透明
                shadowBlur: 5,
                 length:'20%'
            },
            itemStyle: {
                color: '#70D5FF'
            },
            detail: {
              		formatter: function (params) {
                        return getbx+'元';
                    },
                    color: '#70D5FF',
                    fontSize: 18,
                    offsetCenter: [0, 60],
            },
            title: {
                show: false
            },
            data: [{
                value: getbx*100/gethg,
            }]
        }
    ]
};