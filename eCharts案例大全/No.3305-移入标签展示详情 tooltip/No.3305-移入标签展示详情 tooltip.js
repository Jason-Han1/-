let dataValue = [80, 70, 30, 70, 30, 70]; //值
let indicatorname = ['资产', '资力', '资源', '资产', '产业', '房产'];
let maxdata = [100, 100, 100, 100, 100, 100]; //每个区域最大值
let indicator = [];
for (let i = 0; i < indicatorname.length; i++) {
indicator.push({
  name: indicatorname[i],
  max: maxdata[i]
})
}
option = {
    tooltip: {
      show:false
    },
    radar: {
      radius: '100%',
      center: ['50%', '50%'],
      startAngle: 60, //旋转角度
      splitNumber: 8, //雷达里面圈的数量
      nameGap: '10', //文字-图间距
      name: {
        textStyle: {
          fontSize: 14,
          fontStyle: 'italic',
          fontWeight: 'bold',
          color: '#333' //字体颜色
        }
      },
      triggerEvent: true, //标签鼠标事件
      hoverAnimation: true,
      axisLine: {
        lineStyle: {
          color: '#EADDD4' //中间十字线
        }
      },
      splitLine: {
        lineStyle: {
          width: 1,
          color: '#B5B5B5' //圈圈线颜色
        }
      },
      splitArea: {
        areaStyle: {
          color: ['#F5EDE7', '#EBDDD2'].reverse() //间隔面背景色
        }
      },
      indicator: indicator
    },
    series: [{
      name: 'Title',
      type: 'radar',
      symbolSize: 8, //折线点圆大小
      animationDuration: 2800,
      animationEasing: "cubicInOut",
      itemStyle: { //折点圆
        borderColor: '#F5A372',
        borderWidth: 1,
        // opacity: 1, //隐藏折点圆
        emphasis: { //高亮
          lineStyle: {
            // width: 1,
            // color: '#F5A372'
          }
        }
      },
      areaStyle: {
        normal: {
          width: 1,
          opacity: 0.3
        }
      },
      data: [{
        itemStyle: {
          normal: {
            color: '#F5A372'
          }
        },
        value: dataValue
      }]
    }]
  };

let chartPanel = document.getElementById('chart-panel');
let newTooltip = document.createElement("div");
myChart.on('mouseover', function (params) {
  for (let i = 0; i < indicatorname.length; i++) {
    if(params.name == indicatorname[i]){ //判断点击文字
      let clientX = params.event.event.clientX
      let clientY = params.event.event.clientY
      newTooltip.setAttribute("class", "aaa");
      newTooltip.style.left = clientX + 'px'
      newTooltip.style.top = clientY + 'px'
      
      //以下样式写到css里 不用js生成
      newTooltip.style.position = 'fixed'
      newTooltip.style.backgroundColor = '#000'
      newTooltip.style.color = '#fff'
      newTooltip.style.borderRadius = '5px'
      newTooltip.style.padding = '5px'
      newTooltip.innerHTML = `
        <div class="bbb">
          ${params.name}
        </div>
        <div class="ccc">
          <span>${'总额'}</span>
          1111111
        </div>
        <div class="ccc">
          <span>${'总额'}</span>
          2222222
        </div>
      `;
      chartPanel.appendChild(newTooltip)
    }
  }
})
myChart.on('mouseout', function () {
  chartPanel.removeChild(newTooltip)
})