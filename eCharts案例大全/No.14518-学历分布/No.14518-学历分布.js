var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAIECAYAAADviYsnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABShJREFUeNrs2jFqlVEURtH4ElGCWomNDsAJONjMx0GoYKmFCIoBEeSJ94dYWNl594G14KZI+TYJh8d379XN64vlwXov1nu83uUF/9PP9b6s93G989X68XC9l0Jsc3+9Z+s9Wu/taf14LkbC9XpPT3f/pmh4cvLXkXJ58hm0CCII/wpy9jFknI8gtz6HjG9HkA/+ShK+r/f5CPJjvTfrfRVmi+Ork0/rvVvv19XdL48o7302riwEEQRBBEEQQRBEEARBkLA/32XZZe1jlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIuyyXFkIIgiCCIIggiAIggiCICPZZe1nlxVjlxVllxVklxVjl+XsRZBpQQwbOuyyYuyyQuyyIv7aZf0WYAAQjvOA8mX+5wAAAABJRU5ErkJggg==';
var blueImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAIECAYAAADviYsnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABTlJREFUeNrs2qFq1mEYh+H5sSbarDObTLLjsBkFi6DZQ1FsRptHoMmyMzBq1qRsweT7wQwm2977geuCd8H4v2E+jN+tR28/nyxn671c73y92yfcpO/rfVzvzXqXp+vH/fXerXfHt9ni3npP1nu43rPD+vFCjIQH6z0+XP+aouH84P+MlLsH36BFEEH4X5BLnyHj5zHIhe+QcXEM8nq9X77Fdl/W+3AM8nW9p+t9Wu/Kd7lxP9Z7v97z9X6fXv/jt/Ve+TauLAQRBEEEQRBBEEQQBEGQsL9/y7LL2scuK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF2GW5shBEEAQRBEEEQRAEEQRBRrLL2s8uK8YuK8ouK8guK8Yuy9mLINOC2GV12GXF2GWF2GVF/LPL+iPAAAFI1AbsyerqAAAAAElFTkSuQmCC';
var redImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAIECAYAAADviYsnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABS5JREFUeNrs2jFqlVEURtG8h2AhOoRYO4KMQ0cg2AhmPNpa2jkC7TMCLe1NpcRCLLwPXmNll7sPrAU3pv436EG+w5+HLy6Wy/Wu17ta79EF9+n7ep/We7fe3WEFebp+eb/eY99mqy/rvTquH2/ESHi23vPj+a8pGq6O/s1IeXL0DVoEEYT/BbnzGTJ+nILc+A4ZN6cgb9f76Vts93W9j6cg39Z7ud7n9X75Lvfudr0P671e7/fh/H9ZuLIQRBAEEQRBBEEQQRAEQeoenP+0y9rHLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRdhlubIQRBAEEQRBBEEQBBEEQUayy9rPLivKLivGLivILivGLsvZiyDTgthlddhlxdhlhdhlRfyzy/orwACyQfV+BXZqgAAAAABJRU5ErkJggg==';

var color = {
        red: '#fc0752',
        blue: '#3fdaff',
        line: 'rgba(53, 153, 196, .5)'
    },
    bodyMax = 3000;
var data = [{
    name: '博士研究生',
    value: 2315
}, {
    name: '硕士研究生',
    value: 3027
}, {
    name: '本科生',
    value: 684
}];
var maxData = [];
var maxNumArray = [];
data.forEach(function(value, index) {
    maxNumArray.push(value.value);
})
data.forEach(function(value, index) {
    var num;
    maxData.push({
        name: value.name,
        value: Math.max.apply(null, maxNumArray)
    });
})
var scale = 1;
//富文本配置
var rich = {
    white: {
        color: "#fff",
        align: 'left',
        fontSize: 18 * scale,
        padding: [0, 0]
    },
};
var option = {
    backgroundColor: '#031f2d',
    
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        name: '百分比%',
        nameGap: 20,
        nameTextStyle: {
            color: color.red,
            fontStyle: 14 * scale,
        },
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: color.line
            }
        },
        axisTick: {
            inside: false
        },
        axisLabel: {
            textStyle: {
                color: color.red,
                fontSize: 12 * scale
            },
            formatter: function(value, index) {
                return value +'%'
            }
        },
    },{
        name: '人数',
        nameGap: 20,
        nameTextStyle: {
            color: color.blue,
            fontStyle: 14 * scale,
        },
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: color.line
            }
        },
        axisTick: {
            inside: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 12 * scale
            },
            // formatter: function(value, index) {
            //     return value +'%'
            // }
        },
    }],
    xAxis: [{
        type: 'category',
        data: ['博士研究生', '硕士研究生', '本科生'],
        boundaryGap: ['20%', '20%'],
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: color.line
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            //   rotate: 45,
            padding: [15, 0, 0, 0],
            textStyle: {
                fontSize: 16 * scale,
                color: '#3fdaff'
            }
        }
    }],
    series: [{
        name: '百分比%',
        type: 'pictorialBar',
        // stack: '百分比%',
        z: 3,
        // barWidth: '45%',
        // barGap: '30%',
        data: data,
        symbol: 'image://'+ redImg,
        symbolClip: true,
        symbolBoundingData: bodyMax,
        symbolSize: [50, '100%'],
        symbolOffset: ['-60%', 0]
    }, {
        name: '占位',
        type: 'pictorialBar',
        // barWidth: '45%',
        // barGap: '-100%',
        // silent: true,
        symbol: 'image://'+ bgImg,
        symbolClip: true,
        symbolBoundingData: bodyMax,
        symbolSize: [50, '100%'],
        symbolOffset: ['-60%', 0],
        data: maxData
    },{
        name: '人数',
        yAxisIndex: 1,
        type: 'pictorialBar',
        // stack: '人数',
        z: 4,
        // barWidth: '45%',
        // barGap: '30%',
        data: data,
        symbol: 'image://'+ blueImg,
        symbolClip: true,
        symbolBoundingData: bodyMax,
        symbolSize: [50, '100%'],
        symbolOffset: ['60%', 0]
    }, {
        name: '占位2',
        yAxisIndex: 1,
        type: 'pictorialBar',
        // barWidth: '45%',
        // barGap: '-100%',
        // silent: true,
        symbol: 'image://'+ bgImg,
        symbolClip: true,
        symbolBoundingData: bodyMax,
        symbolSize: [50, '100%'],
        symbolOffset: ['60%', 0],
        data: maxData
    }]
};