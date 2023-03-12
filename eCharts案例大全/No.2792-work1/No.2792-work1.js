var dataArr = [{
    value: 120,
    name: '噪音检测'
}];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#5CF9FE' // 0% 处的颜色
    },
    {
        offset: 0.17,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 0.9,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
    }
]);
var colorSet = [
    [1, color],
    // [0.91, color],
    // [1, '#FFF']
];
var rich = {
    white: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '500',
        padding: [-150, 0, 0, 0]
    },
    bule: {
        fontSize: 70,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
}
var colorList = ['#0E1327', '#0E1327', '#FFC371', '#797AFF'];
var getsjjg = ['小说', '辅助教材', '期刊', '其他'];
var getsjjgrs = [300, 200, 100, 50];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
option = {
    backgroundColor: '#0E1327',
    tooltip: {
       show:false
    },

    series: [

        {
            type: 'gauge',
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: false
            },
        
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 25,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
            animationDuration: 4000,
        },
   
        {
            name: "白色圈刻度",
            type: "gauge",
            radius: "60%",
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            min: 0,
            max: 120,
            splitNumber: 6,
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: '#018DFF'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,8)',
                fontSize: 24,
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },

        {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius:'40%',
        center: ["50%", "50%"],
        stillShowZeroSum: true,
        label: {
           show:false
        },
        data: syjgdata
    },
    {
        itemStyle: {
            color:"#fff"
        },
        type: 'pie',
        radius:["5%", "3%"],
        center: ["50%", "50%"],
        stillShowZeroSum: true,
        label: {
           show:false
        },
        data: [{name:"ceshi",value:10}],
        z:10
    },
    {
        itemStyle: {
            color:"#aaa"
        },
        type: 'pie',
        radius:"3%",
        center: ["50%", "50%"],
        stillShowZeroSum: true,
        label: {
           show:false
        },
        data: [{name:"ceshi",value:10}],
        z:10
    },
    ]
};