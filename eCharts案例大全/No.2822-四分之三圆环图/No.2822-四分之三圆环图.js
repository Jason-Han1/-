class RingCharts {
 // 构造函数，初始化时调用
 constructor(arg) {
  this.options = this.deepCopy(this.defaultConfig(), arg);
  this.parentContainer =
   typeof this.options.container === 'string' ? document.querySelector(this.options.container) : this.options.container;
  this.container = document.createElement('div');
  this.tips = document.createElement('div');
  // 提示信息样式
  this.setStyle(this.tips, this.options.tooltip.style);
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');
  // 获取屏幕像素比
  this.pixelRatio = this.getPixelRatio(this.ctx);
  this.width = this.parentContainer.offsetWidth;
  this.height = this.parentContainer.offsetHeight;
  this.canvas.width = this.width * this.pixelRatio;
  this.canvas.height = this.height * this.pixelRatio;
  // 设置最外层环和最内层环的半径
  this.radius = (this.canvas.width > this.canvas.height ? this.canvas.height : this.canvas.width) / 2;
  this.maxRadius = this.handleNum(this.options.polar.maxRadius, this.radius);
  this.minRadius = this.handleNum(this.options.polar.minRadius, this.radius);
  // 中心点坐标
  this.center = {
   x: this.canvas.width / 2,
   y: this.canvas.height / 2,
  };
  // 设置容器及canvas标签样式
  this.container.style.cssText = this.canvas.style.cssText = `position:relative;width:100%;height:100%;overflow:hidden`;
  this.container.appendChild(this.canvas);
  this.parentContainer.appendChild(this.container);
  this.container.appendChild(this.tips);
  // 渲染图表的数据集
  this.resultData = [];
  if (this.options.tooltip.show) {
   this.canvas.onmousemove = this.debounce(this.mousemove, 20);
  }
  this.resizeTimer = null;
  this.animateStartTime = null;
  this.animateTimer = null;
 }
 // 处理百分比小数及数值
 handleNum(num, value) {
  let returnNum = 0;
  if (num.toString().indexOf('%') > -1) {
   returnNum = (num.replace('%', '') / 100) * value;
  } else if (num > 0 && num <= 1) {
   returnNum = num * value;
  } else {
   returnNum = parseInt(num);
  }
  return returnNum;
 }
 // 防抖函数
 debounce(fn, delay) {
  let timer = null;
  return (e) => {
   if (timer !== null) {
    clearTimeout(timer);
   }
   timer = setTimeout(() => {
    fn.call(this, e);
   }, delay);
  };
 }
 // 鼠标移动事件
 mousemove(e) {
  this.draw(this.resultData, {
   callBack: null,
   type: 'mousemove',
   x: e.offsetX,
   y: e.offsetY,
  });
 }
 // 点击事件
 click(callBack) {
  this.canvas.onclick = (e) => {
   this.draw(this.resultData, {
    callBack: callBack,
    type: 'click',
    x: e.offsetX,
    y: e.offsetY,
   });
  };
 }
 // 窗口resize
 resize() {
  // 防抖处理
  if (this.resizeTimer) {
   clearTimeout(this.resizeTimer);
   this.resizeTimer = null;
  }
  this.resizeTimer = setTimeout(() => {
   this.width = this.parentContainer.offsetWidth;
   this.height = this.parentContainer.offsetHeight;
   this.canvas.width = this.width * this.pixelRatio;
   this.canvas.height = this.height * this.pixelRatio;
   this.radius = (this.canvas.width > this.canvas.height ? this.canvas.height : this.canvas.width) / 2;
   this.maxRadius = this.handleNum(this.options.polar.maxRadius, this.radius);
   this.minRadius = this.handleNum(this.options.polar.minRadius, this.radius);
   this.center = {
    x: this.canvas.width / 2,
    y: this.canvas.height / 2,
   };
   this.draw(this.resultData);
  }, 20);
 }
 // 批量设置样式
 setStyle(obj, sty) {
  for (let key in sty) {
   obj.style[key] = sty[key];
  }
 }
 // 深拷贝
 deepCopy(result, obj) {
  for (var key in obj) {
   if (obj.hasOwnProperty(key)) {
    if (typeof obj[key] === 'object' && result[key]) {
     this.deepCopy(result[key], obj[key]);
    } else {
     result[key] = obj[key];
    }
   }
  }
  return result;
 }
 // 默认图表配置项
 defaultConfig() {
  return {
   color: ['#18b78e', '#6c77fd', '#ffbe75', '#ff647c', '#01b3ee', '#164bcd'],
   polar: {
    maxRadius: '90%',
    minRadius: '10%',
    center: ['center', 'center'],
    strokeBackgroundColor: '#031f3e',
    strokeBackgroundWidth: 14,
    strokeWidth: 14,
    strokeColor: '#6f78cc',
    lineCap: 'round',
   },
   xAxis: {
    marker: {
     show: true,
     symbolSize: 10,
     offsetX: 40,
    },
    axisLabel: {
     show: true,
     offsetX: 70,
     font: '24px Microsoft YaHei',
     color: '#00b2f6',
     align: 'left',
     verticalAlign: 'middle',
     formatter: function (param) {
      return param.name;
     },
    },
   },
   animation: {
    show: false,
    duration: 800,
   },
   desc: {
    show: true,
    offsetCenterY: 0,
    font: '24px Microsoft YaHei',
    color: '#000',
    align: 'center',
    verticalAlign: 'middle',
    formatter: function (param) {
     return param.value + param.unit;
    },
   },
   tooltip: {
    style: {
     position: 'absolute',
     display: 'none',
     whiteSpace: 'nowrap',
     zIndex: '9999999',
     transition: 'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s',
     backgroundColor: 'rgba(50, 50, 50, 0.7)',
     borderRadius: '4px',
     border: '0px solid rgb(51, 51, 51)',
     color: 'rgb(255, 255, 255)',
     font: '20px / 30px Microsoft YaHei',
     padding: '5px',
     left: '0px',
     top: '0px',
     pointerEvents: 'none',
    },
    markerTemplate:
     '<span style="display: inline-block;width:14px;height: 14px;border-radius: 50%;margin-right: 4px;background-color: #"></span>',
    show: true,
    formatter: function (param) {
     return `${param.marker}${param.data.name}：${param.data.value}`;
    },
   },
  };
 }
 // 获取屏幕的像素比
 getPixelRatio(context) {
  var backingStroe =
   context.backingStorePixelRatio ||
   context.webkitBackingStorePixelRatio ||
   context.mozBackingStorePixelRatio ||
   context.msBackingStorePixelRatio ||
   context.oBackingStorePixelRatio ||
   1;
  return (window.devicePixelRatio || 1) / backingStroe;
 }
 // 绘制图表
 draw(resultData, arg) {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  if (!resultData) return;
  this.resultData = resultData;
  let flagArr = [];
  let gap = (this.maxRadius - this.minRadius) / resultData.length;
  let data = resultData.map((item) => item.value);
  let maxValue = Math.max(...data) * 1.2;
  let percent = 1;
  if (!arg && this.options.animation.show) {
   if (!this.animateStartTime) {
    percent = 0;
    this.animateStartTime = new Date();
   } else {
    percent = (new Date() - this.animateStartTime) / this.options.animation.duration;
   }

   if (percent >= 1) {
    percent = 1;
    this.animateStartTime = null;
    window.cancelAnimationFrame(this.animateTimer);
    this.animateTimer = null;
   } else {
    this.animateTimer = window.requestAnimationFrame(() => {
     this.draw(this.resultData);
    });
   }
  }

  for (var i = 0; i < data.length; i++) {
   let radius = this.maxRadius - i * gap - this.options.polar.strokeWidth / 2;
   this.drawArc({
    deg: 0,
    stroke: this.options.polar.strokeBackgroundColor,
    strokeWidth: this.options.polar.strokeBackgroundWidth,
    radius: radius,
    lineCap: this.options.polar.lineCap,
   });
   flagArr.push(
    this.drawArc(
     {
      deg: ((1 - (data[i] / maxValue) * percent) * Math.PI * 3) / 2,
      stroke: this.options.color[i % this.options.color.length],
      strokeWidth: this.options.polar.strokeWidth,
      radius: radius,
      lineCap: this.options.polar.lineCap,
     },
     arg
    )
   );
   if (this.options.xAxis.marker.show) {
    this.drawCircle({
     x: this.handleNum(this.options.xAxis.marker.offsetX, this.radius),
     y: radius,
     fillColor: this.options.color[i % this.options.color.length],
     symbolSize: this.options.xAxis.marker.symbolSize,
     centerX: this.center.x,
     centerY: this.center.y,
    });
   }
   if (this.options.xAxis.axisLabel.show) {
    this.drawText({
     x: this.handleNum(this.options.xAxis.axisLabel.offsetX, this.radius),
     y: radius,
     fillColor:
      this.options.xAxis.axisLabel.color == 'auto'
       ? this.options.color[i % this.options.color.length]
       : this.options.xAxis.axisLabel.color,
     font: this.options.xAxis.axisLabel.font,
     text: this.options.xAxis.axisLabel.formatter(resultData[i]),
     align: this.options.xAxis.axisLabel.align,
     verticalAlign: this.options.xAxis.axisLabel.verticalAlign,
     centerX: this.center.x,
     centerY: this.center.y,
    });
   }
  }
  if (arg) {
   if (flagArr.some((item) => item === true)) {
    let index = flagArr.lastIndexOf(true);
    let color = this.options.color[index % this.options.color.length];
    this.tips.innerHTML = this.options.tooltip.formatter({
     marker: this.options.tooltip.markerTemplate.replace('#', color),
     color: color,
     data: resultData[index],
    });
    let tipsPosX = arg.x + 20;
    let tipsPosY = arg.y + 20;
    if (arg.x + this.tips.offsetWidth + 20 > this.width) {
     tipsPosX = arg.x - 20 - this.tips.offsetWidth;
    }
    if (arg.y + this.tips.offsetHeight + 20 > this.height) {
     tipsPosY = arg.y - 20 - this.tips.offsetHeight;
    }
    this.tips.style.left = `${tipsPosX}px`;
    this.tips.style.top = `${tipsPosY}px`;
    this.tips.style.display = 'block';
    this.container.style.cursor = 'pointer';
    if (arg.callBack) {
     arg.callBack(resultData[index]);
    }
   } else {
    this.container.style.cursor = 'default';
    this.tips.style.display = 'none';
   }
  }
 }
 // 绘制圆弧
 drawArc(arg, arg2) {
  let isInStroke = false;
  this.ctx.beginPath();
  this.ctx.arc(this.center.x, this.center.y, arg.radius, (Math.PI * 3) / 2, arg.deg, true);
  this.ctx.lineCap = arg.lineCap;
  this.ctx.strokeStyle = arg.stroke;
  this.ctx.lineWidth = arg.strokeWidth;
  this.ctx.stroke();
  if (arg2 && this.ctx.isPointInStroke(arg2.x * this.pixelRatio, arg2.y * this.pixelRatio)) {
   isInStroke = true;
  }
  return isInStroke;
 }
 // 绘制文字
 drawText(arg) {
  this.ctx.save();
  this.ctx.beginPath();
  this.ctx.translate(arg.centerX, arg.centerY);
  this.ctx.font = arg.font;
  this.ctx.fillStyle = arg.fillColor;
  this.ctx.textAlign = arg.align;
  this.ctx.textBaseline = arg.verticalAlign;
  this.ctx.fillText(arg.text, arg.x, -arg.y);
  this.ctx.restore();
 }
 // 绘制圆点
 drawCircle(arg) {
  this.ctx.save();
  this.ctx.beginPath();
  this.ctx.translate(arg.centerX, arg.centerY);
  this.ctx.arc(arg.x, -arg.y, arg.symbolSize, 0, Math.PI * 2, false);
  this.ctx.fillStyle = arg.fillColor;
  this.ctx.fill();
  this.ctx.restore();
 }
}

// 将图表选择一个合适的位置放置
let domObj = document.createElement('div');
domObj.style.cssText = 'position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: 99;background-color: #000;';
document.getElementById('chart-panel').appendChild(domObj);

// 创建圆环图实例
var ringCharts = new RingCharts({
 container: domObj,
 animation: {
  show: true,
 },
});
// 触发点击图表的回调函数
ringCharts.click(function (item) {
 console.log(item);
});

// 设置对应的数据
ringCharts.draw([
 {
  name: '类目名称一',
  value: 69,
  unit: '个',
 },
 {
  name: '类目名称二',
  value: 32,
  unit: '个',
 },
 {
  name: '类目名称三',
  value: 11,
  unit: '个',
 },
 {
  name: '类目名称四',
  value: 100,
  unit: '个',
 },
 {
  name: '类目名称五',
  value: 88,
  unit: '个',
 },
]);
// 监听窗口resize事件
window.addEventListener('resize', function () {
 ringCharts.resize();
});
