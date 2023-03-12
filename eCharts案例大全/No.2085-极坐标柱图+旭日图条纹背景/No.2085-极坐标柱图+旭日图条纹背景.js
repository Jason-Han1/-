// 颜色16进制转rgba
function hexToRgba(hex, opacity) {
    return (
        'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')'
    );
}
var cw = document.body.clientHeight / 70;
//饼图等的用这个
var tooltipAxis = {
    trigger: 'axis',
    padding: 10,
    borderRadius: 4,
    textStyle: {
        fontSize: 12,
    },
    axisPointer: {
        type: 'none',
    },
    formatter: (params) => {
        let param = params[2];
        if (param) {
            return param.name + ':' + param.value;
        } else {
            return '';
        }
    },
};

var datalist = [
    {
        value: 670,
        name: '环境资源',
    },
    {
        value: 111,
        name: '安保资源',
    },
    {
        value: 270,
        name: '消防资源',
    },
    {
        value: 550,
        name: '监控资源',
    },
    {
        value: 190,
        name: '物联网设备',
    },
    {
        value: 190,
        name: '应急资源',
    },
];
let data2 = [];
let data3 = [];
let data4 = [],
    data5 = [],
    data6 = [];
let total = 0;
let valueArr = [];
let dataArr = JSON.parse(JSON.stringify(datalist));
for (var j = 0; j < datalist.length; j++) {
    dataArr.push({
        value: 0,
        name: '',
    });
    valueArr.push(datalist[j].value);
    total += datalist[j].value;
}
let max = Math.max.apply(null, valueArr);
let min = Math.min.apply(null, valueArr);
// 柱图模拟边框数据
valueArr.forEach((item,index) => {
    data2.push(max / 14);
    data3.push(max / 30);
    data6.push(max / 10);
    data4.push(total - item);
    data5.push(
    {
        value: 1,
        name: '111',
        index:index
    }
);
});
// 旭日图数据（一半透明）
data5.push(
    {
        value: valueArr.length,
        name: '',
        itemStyle: {
            color: 'transparent',
        },
    }
);

let child = {
    name: '',
    value: 1,
};
let n = 0;
// 旭日图条纹，
function xun(obj, n, type) {
    n++;
    if (n > 11) {
        return;
    }
    if (obj.itemStyle) {
        obj.children = [
            {
                name: '',
                value: 1,
            },
        ];
    } else {
        obj.children = [
            {
                name: '',
                value: 1,
                itemStyle: {
                    color: 'rgba(141, 192, 235, 0.1)',
                },
            },
        ];
    }
    xun(obj.children[0], n);
}
xun(child, n);
data5.forEach((item) => {
    if (item.name) {
        item.children = [child];
    }
});
let color = ['#00ffff', '#008cff', '#8400ff', '#00ff2a', '#d9ff00', '#ffd000', '#ff5100'];
let serlist = [
    {
        type: 'bar',
        data: data3,
        coordinateSystem: 'polar',
        barWidth: '96%',
        name: '领用总量',
        stack: 'a',
        itemStyle: {
            color: (params) => {
                return color[params.dataIndex];
            },
        },
        z: 0,
    },
    {
        type: 'bar',
        data: data6,
        coordinateSystem: 'polar',
        name: '领用总量',
        stack: 'a',
        itemStyle: {
            color: 'transparent',
        },
        z: 0,
    },
    {
        type: 'bar',
        data: dataArr,
        coordinateSystem: 'polar',
        name: '存储总量',
        stack: 'a',
        // color: "rgba(37,213,232,1)",
        itemStyle: {
            color: (params) => {
                if (params.name != '') {
                    return hexToRgba(color[params.dataIndex], 0.4);
                } else {
                    return 'transparent';
                }
            },
        },
        z: 5,
    },
    {
        type: 'bar',
        data: data2,
        coordinateSystem: 'polar',
        name: '领用总量',
        stack: 'a',
        itemStyle: {
            color: (params) => {
                return color[params.dataIndex];
            },
        },
        z: 5,
    },
    {
        type: 'bar',
        data: data4,
        coordinateSystem: 'polar',
        name: '总量',
        stack: 'a',
        itemStyle: {
            color: (params) => {
                return 'rgba(255,255,255,0.07)';
            },
        },
        z: 5,
    },
    {
        type: 'sunburst',
        startAngle: 0,
        nodeClick: false, //是否允许旭日图点击 默认可以点击
        center: ['50%', '60%'],
        radius: ['10%', '58%'],
        data: data5,
        // 占据的位置 文字设置
        label: {
            show: false,
            color: '#fff',
            fontSize: 14,
            rotate:'number',
            position:'top',
            formatter:(params)=>{
                if(params.data.name=='111'){
                   return (dataArr[params.data.index].value*100/total).toFixed(1)+'%'
                }
            }
        },
        // 旭日图的分割线
        itemStyle: {
            color: 'rgba(255,255,255,0)',
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0)',
        },
        z: -1,
    },
];
option = {
    backgroundColor: 'rgba(0,0,0,1)',
    tooltip: tooltipAxis,
    grid: {
        top: 0,
        bottom: 0,
    },
    angleAxis: {
        type: 'category',
        startAngle: 180,
        data: dataArr,
        splitLine: {
            // 分隔线
            show: false, // 默认显示，属性show控制显示与否
            // onGap: null,
            lineStyle: {
                // 属性lineStyle（详见lineStyle）
                // ["rgba(207,238,252,0.2)"],
                width: 1,
                type: 'solid',
            },
        },
        axisLine: {
            // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
            lineStyle: {
                // 属性lineStyle控制线条样式
                color: 'rgba(207,238,252,0.2)',
                width: 1,
                type: 'solid',
            },
        },
        axisTick: {
            // 坐标轴小标记
            show: false, // 属性show控制显示与否，默认不显示
            inside: false, // 控制小标记是否在grid里
            length: 5, // 属性length控制线长
            lineStyle: {
                // 属性lineStyle控制线条样式
                color: 'transparent',
                width: 1,
            },
        },
        axisLabel: {
            show: true,
            formatter: (value, index) => {
                if (index <= datalist.length - 1) {
                    return ((value * 100) / total).toFixed(1) + '%';
                } else {
                    return '';
                }
            },
            color:'#fff',
            margin: -30,
            fontSize: 16,
        },
    },

    radiusAxis: {
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'solid',
            },
        },
        axisLabel: {
            show: false,
            color: '#fff',
            fontSize: 1.2 * cw,
        },
        axisTick: {
            // 坐标轴小标记
            show: false, // 属性show控制显示与否，默认不显示
            inside: false, // 控制小标记是否在grid里
            length: 5, // 属性length控制线长
            lineStyle: {
                // 属性lineStyle控制线条样式
                color: 'transparent',
                width: 1,
            },
        },
    },

    polar: {
        z: 0,
        center: ['50%', '60%'],
        radius: ['10%', '70%'],
    },
    series: serlist,
};
