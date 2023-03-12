let [dataArr, allArr, erArr, sanArr] = [[], [], [], []];
// 行为标注 show first row
let items = [
{
  symbol: "",
  name: "市监狱局",
  pointType: "point",
  belong: "南开区",
  pointColor: 'rgba(217, 0, 27, 1)', // 球颜色
  lineStyle: {
    color: 'red', // 线颜色
  },
  effect: {
    period: 2, // 箭头快慢
    symbolSize: [6, 20], // 箭头大小
  },
},
{
  symbol: "",
  name: "南开区政府",
  pointType: "point",
  belong: "南开区",
},
{
  symbol: "",
  name: "市税务局",
  pointType: "point",
  belong: "河北区",
},
{
  symbol: "",
  name: "河北区政府",
  pointType: "point",
  belong: "河北区",
},

{
  symbol: "",
  name: "市司法局",
  pointType: "point",
  belong: "市电子政务中心",
  label: {
    show: true,
    offset: [12, -8],
  },
},

{
  symbol: "",
  name: "河西区政府",
  pointType: "point",
  belong: "河西区",
},
{
  symbol: "",
  name: "市戒毒局",
  pointType: "point",
  belong: "河西区",
},
{
  symbol: "",
  name: "市安全局",
  pointType: "point",
  belong: "河西区",
},
{
  symbol: "",
  name: "市农委",
  pointType: "point",
  belong: "河西区",
},
{
  symbol: "",
  name: "市文旅局",
  pointType: "point",
  belong: "河西区",
},
{
  symbol: "",
  name: "市纪检委",
  pointType: "point",
  belong: "河西区",
},
{
  symbol: "",
  name: "静海区政府",
  pointType: "point",
  belong: "静海区",
},
{
  symbol: "",
  name: "北辰区政府",
  pointType: "point",
  belong: "北辰区",
},
{
  symbol: "",
  name: "红桥区政府",
  pointType: "point",
  belong: "红桥区",
},
{
  symbol: "",
  name: "滨海新区政府",
  pointType: "point",
  belong: "滨海新区",
},
{
  symbol: "",
  name: "宁河区政府",
  pointType: "point",
  belong: "宁河区",
},
{
  symbol: "",
  name: "市医保局",
  pointType: "point",
  belong: "烟台道联通机房",
},
{
  symbol: "",
  name: "市信访办",
  pointType: "point",
  belong: "烟台道联通机房",
},
{
  symbol: "",
  name: "市住建局",
  pointType: "point",
  belong: "烟台道联通机房",
},
{
  symbol: "",
  name: "市商务局",
  pointType: "point",
  belong: "烟台道联通机房",
},
{
  symbol: "",
  name: "市编办",
  pointType: "point",
  belong: "市政府",
},
{
  symbol: "",
  name: "市机要局",
  pointType: "point",
  belong: "市政府",
},
{
  symbol: "",
  name: "市政府办公厅",
  pointType: "point",
  belong: "市政府",
},
{
  symbol: "",
  name: "市委网信办",
  pointType: "point",
  belong: "市政府",
},
{
  symbol: "",
  name: "市委办公厅",
  pointType: "point",
  belong: "市政府",
},
{
  symbol: "",
  name: "市财政局数据中心",
  pointType: "point",
  belong: "市人大",
},
{
  symbol: "",
  name: "市政协办公厅",
  pointType: "point",
  belong: "市政协",
},
{
  symbol: "",
  name: "津南区政府",
  pointType: "point",
  belong: "津南区",
},
{
  symbol: "",
  name: "市人大办公厅",
  pointType: "point",
  belong: "津南区",
},
{
  symbol: "",
  name: "华苑数据中心",
  pointType: "point",
  belong: "华苑IDC",
},
{
  symbol: "",
  name: "市民政局",
  pointType: "point",
  belong: "华苑IDC",
},
{
  symbol: "",
  name: "市审计局",
  pointType: "point",
  belong: "科技信息所",
  effect: {
    period: 4,
  },
},
{
  symbol: "",
  name: "市国资委",
  pointType: "point",
  belong: "科技信息所",
},
{
  symbol: "",
  name: "南开区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "河北区",
  pointType: "cloud",
  lineStyle: {
    color: 'red', // 线颜色
  },
},
{
  symbol: "",
  name: "西青区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "空港IDC",
  pointType: "cloud",
},
{
  symbol: "",
  name: "武清区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "市电子政务中心",
  pointType: "cloud",
},
{
  symbol: "",
  name: "东丽区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "宝坻区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "和平区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "蓟州区",
  pointType: "cloud",
},
{
  level: 4,
  symbol: "",
  name: "河东区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "河西区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "静海区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "北辰区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "红桥区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "滨海新区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "宁河区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "烟台道联通机房",
  pointType: "cloud",
},
{
  symbol: "",
  name: "市政府",
  pointType: "cloud",
},
{
  symbol: "",
  name: "市人大",
  pointType: "cloud",
},
{
  symbol: "",
  name: "市政协",
  pointType: "cloud",
},
{
  symbol: "",
  name: "津南区",
  pointType: "cloud",
},
{
  symbol: "",
  name: "华苑IDC",
  pointType: "cloud",
},
{
  symbol: "",
  name: "科技信息所",
  pointType: "cloud",
  effect: {
    period: 2,
    // symbolSize: [8, 24],
  },
},
]
// 点
items.forEach((el, ind) => {
  if (el.pointType === "cloud") {
    // 云
    el.symbol = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAhCAYAAACSllj+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg5MEVERTdBNUZGMTFFOEIzNERDMzk3QjJGOEQ3REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg5MEVERThBNUZGMTFFOEIzNERDMzk3QjJGOEQ3REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODkwRURFNUE1RkYxMUU4QjM0REMzOTdCMkY4RDdEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODkwRURFNkE1RkYxMUU4QjM0REMzOTdCMkY4RDdEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkQLbgwAAAtrSURBVHja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";
    el.symbolSize = [56, 35];
    el.label = {
      normal: {
        show: true,
        position: "bottom",
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8, 4, 8],
        distance: 10,
        color: "rgb(255,255,255)",
        borderColor: "rgb(89,197,238)",
      },
    };
    erArr.push(el);
  } else if (el.pointType === "point") {
    // 球
    el.itemStyle = {
      borderColor: el.pointColor ? el.pointColor : 'rgba(4, 242, 28, 1)',
      borderWidth: 3,
      color: "#0ceffd",
    };
    // 清除没有父节点的值
    // sanArr.push(el);
    if (el.belong && !items.some((iteP) => el.belong === iteP.name)) {
      items.splice(ind, 1);
    } else {
      sanArr.push(el);
    }
  }
  if (!el.belong) {
    el.children = [];
    items.forEach((es) => {
      if (es.belong === el.name) {
        el.children.push(es);
      }
    });
    allArr.push(el);
  }
});

// 圆形分区
function group(arr, r) {
  const newArray = [];
  const { length: arLen } = arr;
  arr.forEach((e, ind) => {
    // 按角度均匀分布
    const ang = 90 - (360 / arLen).toFixed(2) * (ind + 1);
    const x = (Math.cos(ang * Math.PI / 180)).toFixed(2) * r;
    const y = (Math.sin(ang * Math.PI / 180)).toFixed(2) * r;
    e.value = [x.toFixed(2), y.toFixed(2)];
    if (e.belong) {
      let rotate = '';
      const angle = (160 / arr.length).toFixed(2);
      if (x > 0 && y >= 0) {
        rotate = (r - angle * (ind)).toFixed(2);
        // rotate = (90 - 360 / arr.length * (ind + 1)).toFixed(2);
      } else if (x <= 0 && y > 0) {
        rotate = (-r + angle * (arr.length - ind)).toFixed(2);
      } else if (x < 0 && y <= 0) {
        rotate = (r - angle * (ind - arr.length * 0.5)).toFixed(2);
      } else if (x >= 0 && y < 0) {
        rotate = (-8 + angle * (arr.length * 0.25 - ind)).toFixed(2);
      }
      e.label = {
        show: true,
        width: 200,
        color: {
          lineColor: {
            color: "rgb(24,163,239)",
          },
        },
        rotate,
        align: x > 0 ? 'left' : 'right',
        padding: x > 0 ? [0, 0, 0, 16] : [0, 16, 0, 0],
      };
    }
    newArray.push(e);
  });
  return newArray;
}
// 线配置
function linesConfig(arr) {
  const [dataArr, targetCoord] = [[], [0, 0]];
  arr.forEach((el) => {
    if (!el.belong) {
      dataArr.push([
        { coord: targetCoord },
        {
          coord: el.value,
          lineStyle: el.lineStyle,
          effect: {
            symbolSize: [4, 16], // 动画的大小
            period: 6, // 时间快慢
            delay: 2, // 延时计算
            ...el.effect,
          },
        },
      ]);
      arr.forEach((element) => {
        if (element.belong === el.name) {
          dataArr.push([
            { coord: el.value },
            {
              coord: element.value,
              lineStyle: element.lineStyle,
              effect: {
                symbolSize: [4, 8], // 动画的大小
                period: 6, // 时间快慢
                delay: 2, // 延时计算
                ...element.effect,
              },
            },
          ]);
        }
      });
    }
  });
  return dataArr;
}
// 点分布
erArr = group(erArr, 36);
sanArr = group(sanArr, 50);
allArr = [...erArr, ...sanArr];
// 线坐标和配置
dataArr = linesConfig(allArr);
option = {
  backgroundColor: '#000',
  xAxis: {
    show: false,
    type: "value",
    max: 50,
    min: -51,
  },
  grid: {
    top: 100,
    bottom: 100,
    left: 130,
    right: 130,
  },
  yAxis: {
    show: false,
    type: "value",
    max: 50,
    min: -50,
  },
  series: [{
    type: "graph",
    coordinateSystem: "cartesian2d",
    z: 3,
    itemStyle: {
      normal: {
        shadowColor: "none",
      },
    },
    data: allArr,
  },
  {
    name: "",
    type: "lines",
    coordinateSystem: "cartesian2d",
    polyline: true,
    z: 1,
    lineStyle: {
      width: 2,
      color: '#fff',
      curveness: 0,
    },
    effect: {
      show: true,
      smooth: false,
      trailLength: 0, // 拖尾的长度
      symbol: 'pin', // 动画的类型
    },
    data: dataArr,
  },
  ],
}