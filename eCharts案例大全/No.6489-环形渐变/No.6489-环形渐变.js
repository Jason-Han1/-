const startAlpha = 1;
const endAlpha = 0;
const color = [{
        r: 21,
        g: 118,
        b: 210
    },
    {
        r: 209,
        g: 74,
        b: 130
    },
    {
        r: 38,
        g: 193,
        b: 242
    },
    {
        r: 161,
        g: 102,
        b: 255
    },
    {
        r: 18,
        g: 113,
        b: 204
    }
]

const data = [{
    "name": "2015",
    "value": 40,
    "_startArc": 0,
    "_endArc": 1.0471975511965976,
    "_color": "#1576d2",
    "_percent": 0.16666666666666666
}, {
    "name": "2016",
    "value": 100,
    "_startArc": 1.0471975511965976,
    "_endArc": 3.665191429188092,
    "_color": "#d14a82",
    "_percent": 0.4166666666666667
}, {
    "name": "2017",
    "value": 10,
    "_startArc": 3.665191429188092,
    "_endArc": 3.9269908169872414,
    "_color": "#26c1f2",
    "_percent": 0.041666666666666664
}, {
    "name": "2018",
    "value": 70,
    "_startArc": 3.9269908169872414,
    "_endArc": 5.759586531581288,
    "_color": "#a166ff",
    "_percent": 0.2916666666666667
}, {
    "name": "2019",
    "value": 20,
    "_startArc": 5.759586531581288,
    "_endArc": 6.283185307179585,
    "_color": "#1271cc",
    "_percent": 0.08333333333333333
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
                "type": "linear",
                "global": false,
                // 这里给了 线性渐变的起止颜色
                "colorStops": [{
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
    backgroundColor: "#000",
    "color": ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#1271cc", "#272f67", "#9C2BB6"],
    "tooltip": {
        "show": true,
        "textStyle": {
            "color": "#fff",
            "fontSize": 15,
            "fontFamily": "微软雅黑"
        }
    },
    "series": [{
        "type": "pie",
        "data": setGradientColorInItemSyle(data, color, startAlpha, endAlpha),
        "animation": false,
        "radius": ["50%", "75%"],
        "center": ["50%", "50%"],
        "labelLine": {
            show: false
        },
        "itemStyle": {
            "linearGradient": true
        },
        "hoverAnimation": false
    }]
};
console.log(option)