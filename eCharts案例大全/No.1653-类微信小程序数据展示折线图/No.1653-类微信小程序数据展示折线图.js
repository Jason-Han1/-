/**
 * @description 获取当前日期前7天日期集，以 mm/dd 显示
 */
let dateList = [];
for (let index = 1; index <= 7; index++) {
  let date = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * index);
  let nowMonth = date.getMonth() + 1;
  let strDate = date.getDate();
  // 对月份进行处理，1-9月在前面添加一个“0”
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = '0' + nowMonth;
  }
  // 对日期进行处理，1-9号在前面添加一个“0”
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  let nowDate = `${nowMonth}/${strDate}`;
  dateList.unshift(nowDate);
}

option = {
  // 参考点位置及样式
  legend: {
    icon: 'circle',
    bottom: '0%',
    data: ['日访问人数']
  },
  // 设置游标提示
  tooltip: {
    trigger: 'axis',
    // 设置指示器样式
    axisPointer: {
      type: 'cross'
    },
    textStyle: {
      color: '#5c6c7c' // 文字颜色
    },
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 背景颜色
    extraCssText: 'width: 170px' // 宽度
  },
  xAxis: {
    type: 'category',
    axisLine: {
      // 设置 X 轴竖线颜色
      lineStyle: {
        color: '#DCE2E8'
      }
    },
    // 设置刻度样式
    axisTick: {
      show: false
    },
    axisLabel: {
      // 设置 X 轴文字颜色
      textStyle: {
        color: '#556677'
      }
    },
    boundaryGap: false, // 两边是否留白
    data: dateList
  },
  yAxis: [
    // 左边 Y 轴样式
    {
      type: 'value',
      // 设置刻度样式
      axisTick: {
        show: false
      },
      axisLine: {
        show: true, // 是否展示
        // 设置 Y 轴竖线颜色
        lineStyle: {
          color: '#DCE2E8'
        }
      },
      axisLabel: {
        // 设置 Y 轴文字颜色
        textStyle: {
          color: '#556677'
        }
      },
      //网格线
      splitLine: {
        lineStyle: {
          type: 'dashed' //设置网格线类型 dotted：虚线; solid:实线
        },
        show: true //隐藏或显示
      },
      axisPointer: {
        // 取消 Y 轴辅助线
        show: false
      }
    },
    // 右边 Y 轴样式
    {
      type: 'value',
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#DCE2E8'
        }
      }
    }
  ],
  series: [
    {
      name: '日访问人数',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true, // 平滑，开启曲线
      symbol: 'circle', // 设置实心圆点
      symbolSize: 10, //设定圆点的大小
      hoverAnimation: false, // 取消鼠标经过圆点动画
      animation: false, // 圆点取消动画
      color: '#1cae1b'
    }
  ]
};
