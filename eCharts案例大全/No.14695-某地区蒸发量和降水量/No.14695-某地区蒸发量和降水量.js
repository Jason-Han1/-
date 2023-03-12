option = {
    graphic:[
        {
            type: 'group',
            width: 276,
            height: 14,
            left: 'center',
            top: 20,
            children: [
                {
                    left:0,
                    bottom:0,
                    type: 'rect',
                    shape: {
                        width: 276,
                        height: 14
                    },
                    style:{
                        fill: '#ddd'
                    }
                },
                //ji hua shu
                {
                    type: 'rect',
                    left: 0,
                    bottom: 0,
                    shape: {
                        width: 25,
                        height: 14
                    },
                    style:{
                        fill: 'green'
                    }
                },
                {
                    type: 'text',
                    left: 27,
                    bottom: 0,
                    style: {
                        text: '计划数'
                    }
                },
                {
                    type: 'rect',
                    left: 70,
                    bottom: 0,
                    shape: {
                        width: 25,
                        height: 14
                    },
                    style:{
                        fill: '#FFCC33'
                    }
                },
                {
                    type: 'text',
                    left: 97,
                    bottom: 0,
                    style: {
                        text: '未达成'
                    }
                },
                {
                    type: 'rect',
                    left: 140,
                    bottom: 0,
                    shape: {
                        width: 25,
                        height: 14
                    },
                    style:{
                        fill: '#4db64d'
                    }
                },
                {
                    type: 'text',
                    left: 167,
                    bottom: 0,
                    style: {
                        text: '已达成'
                    }
                },
                {
                    type: 'line',
                    left: 210,
                    bottom: 4,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 25,
                        y2: 0,
                        percent: 1,
                    },
                    style:{
                        stroke:'#ff7900'
                    }
                },
                {
                    type: 'circle',
                    left: 220,
                    bottom: 1,
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: 5,
                    },
                    style:{
                        fill: '#fff',
                        stroke:'#ff7900'
                    }
                },
                {
                    type: 'text',
                    left: 240,
                    bottom: 0,
                    style: {
                        text: '达成率'
                    }
                }
            ]
        },
        {
            type: 'group',
            width: 64,
            height: 72,
            left: 0,
            top: 'center',
            children: [
                {
                    left:0,
                    top:0,
                    type: 'rect',
                    shape: {
                        width: 64,
                        height: 72
                    },
                    style:{
                        fill: '#ddd'
                    }
                },
                {
                    type: 'rect',
                    left: 0,
                    top: 0,
                    shape: {
                        width: 25,
                        height: 14
                    },
                    style:{
                        fill: 'green'
                    }
                },
                {
                    type: 'text',
                    left: 27,
                    top: 0,
                    style: {
                        text: '计划数'
                    }
                },
                {
                    type: 'rect',
                    left: 0,
                    top: 20,
                    shape: {
                        width: 25,
                        height: 14
                    },
                    style:{
                        fill: '#FFCC33'
                    }
                },
                {
                    type: 'text',
                    left: 27,
                    top: 20,
                    style: {
                        text: '未达成'
                    }
                },
                {
                    type: 'rect',
                    left: 0,
                    top: 40,
                    shape: {
                        width: 25,
                        height: 14
                    },
                    style:{
                        fill: '#4db64d'
                    }
                },
                {
                    type: 'text',
                    left: 27,
                    top: 40,
                    style: {
                        text: '已达成'
                    }
                },
                {
                    type: 'line',
                    left: -2,
                    top: 63,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 25,
                        y2: 0,
                        percent: 1,
                    },
                    style:{
                        stroke:'#ff7900'
                    }
                },
                {
                    type: 'circle',
                    left: 8,
                    top: 60,
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: 5,
                    },
                    style:{
                        fill: '#fff',
                        stroke:'#ff7900'
                    }
                },
                {
                    type: 'text',
                    left: 27,
                    top: 60,
                    style: {
                        text: '达成率'
                    }
                }
            ]
        }
    ],
title : {
    text: '某地区蒸发量和降水量',
    subtext: '纯属虚构'
},
tooltip : {
    trigger: 'axis'
},
legend: {
    data:['蒸发量','降水量']
},
toolbox: {
    show : true,
    feature : {
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar']},
        restore : {show: true},
        saveAsImage : {show: true}
    }
},
calculable : true,
xAxis : [
    {
        type : 'category',
        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }
],
yAxis : [
    {
        type : 'value'
    }
],
series : [
    {
        name:'蒸发量',
        type:'bar',
        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint : {
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]
        },
        markLine : {
            data : [
                {type : 'average', name: '平均值'}
            ]
        }
    },
    {
        name:'降水量',
        type:'bar',
        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint : {
            data : [
                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
            ]
        },
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        }
    }
]
};