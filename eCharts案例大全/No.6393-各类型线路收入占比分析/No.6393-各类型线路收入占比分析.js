const startAlpha = 1;
const endAlpha = 0;
const color = [{
        r: 70,
        g: 240,
        b: 255
    },
    {
        r: 26,
        g: 255,
        b: 198
    },
    {
        r: 54,
        g: 90,
        b: 206
    },
    {
        r: 143,
        g: 114,
        b: 244
    }
]

const data = [{
    name: "广州公交   6025.76   60%",
    value: 6025.76,
    _startArc: 0,
    _endArc: 3.0471975511965976,
    _color: "#46F0FF",
    _percent: 0.16666666666666666
}, {
    name: "佛山公交   2221.06   20%",
    value: 2221.06,
    _startArc: 3.0471975511965976,
    _endArc: 3.665191429188092,
    _color: "#1AFFC6",
    _percent: 0.4166666666666667
}, {
    name: "广州地区   2000.01   10%",
    value: 2000.01,
    _startArc: 3.665191429188092,
    _endArc: 7.9269908169872414,
    _color: "#365ACE",
    _percent: 0.041666666666666664
}, {
    name: "外围六区   1236.23   10%",
    value: 1236.23,
    _startArc: 3.9269908169872414,
    _endArc: 5.759586531581288,
    _color: "#8F72F4",
    _percent: 0.2916666666666667
}]

/**
 * 线性渐变起止方向的计算方法
 * 
 *
 * @param {*} startArc 开始角度
 * @param {*} endArc 结束角度
 * @returns 四个坐标 x,y,x2,y2
 */
function getCoordinates(startArc, endArc) {
    const posi = [
        Math.sin(startArc),
        -Math.cos(startArc),
        Math.sin(endArc),
        -Math.cos(endArc)
    ]
    const dx = posi[2] - posi[0]
    const dy = posi[3] - posi[1]
    
    return getLocation(dx, dy)
}

function getLocation(dx, dy) {
  const tanV = dx / dy
  const directSign = Math.abs(tanV) < 1
  const t = directSign ? tanV : 1 / tanV
  
  const sign1 = t > 0 ? 1 : -1
  const sign2 = dx > 0 ? 1 : -1
  const sign = directSign ? sign1 * sign2 : sign2
  
  const group1 = [ 0.5 - sign * t / 2, 0.5 + sign * t / 2]
  const group2 = sign > 0 ? [0, 1] : [1, 0]
  const group = [...group1, ...group2]
  const keys = directSign ? ['x', 'x2', 'y', 'y2'] : ['y', 'y2', 'x', 'x2' ]

  let res = {}
  keys.forEach((k, idx) => {
    res[k] = group[idx]
  })
  return res
}

/**
 * 给数据写入 样式(线性渐变)
 *
 * @param {*} datas 数据
 * @param {*} colorlist 颜色列表
 * @param {*} startAlpha 开始颜色的透明度
 * @param {*} endAlpha 结束颜色透的明度
 * @returns 带样式的数据
 */
function setGradientColorInItemSyle(datas, colorlist, startAlpha, endAlpha) {
    for (let i = 0; i < datas.length; i++) {
        const color = colorlist[i];
        const startArc = datas[i]._startArc;
        const endArc = datas[i]._endArc;
        // 这里计算了 线性渐变的起止方向
        const coordinates = getCoordinates(startArc, endArc);
        datas[i].itemStyle = {
            color: {
                ...coordinates,
                type: "linear",
                global: false,
                // 这里给了 线性渐变的起止颜色
                colorStops: [{
                    offset: 0,
                    color: `rgba(${color.r}, ${color.g}, ${color.b}, ${startAlpha})`
                }, {
                    offset: 1,
                    color: `rgba(${color.r}, ${color.g}, ${color.b}, ${endAlpha})`
                }]
            }
        }
    }
    return datas
}

option = {
    backgroundColor: '#101736',
    title: {
        text: "各类型线路收入占比分析",
        x: "4%",
        width: 173,
        height: 163,
        fontSize: 22,
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',
        },
    },
    color: ['#46F0FF', '#1AFFC6', '#365ACE', '#8F72F4'],
    tooltip: {
        trigger: "item",
        formatter: "{b}"
    },
    legend: {
        orient:'vertical',
        icon: 'circle', //图例形状
        bottom:'25%',
        right:'10%',
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#fff',
        }
	},
    series: [{
        type: "pie",
        data: setGradientColorInItemSyle(data, color, startAlpha, endAlpha),
        // "animation": false,
        radius: [50, 60],
        center: ["30%", "50%"],
        labelLine: {
          show: false
        },
        label:{
            show: false
        }
        
    }]
};