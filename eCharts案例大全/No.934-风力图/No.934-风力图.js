//对话框图
// 数据
const resdata = {
  winds10: ["6","6","7","7","6","6","6","6","6","6","6","5","6","6","7","6","6","5","6","6","7","7","7","9"],
  windd10: ["119.5","114.3","113.1","118.6","107.4","100.3","110.4","113.2","116.3","128.8","119.7","113.4","107.6","107.1","101.0","106.9","104.9","108.4","112.3","116.5","120.3","127.9","126.7","134.9",]
}
option = {
    title: {
    text:"     级",  
    left: 8,
    top: 8,
    textStyle: { color: '#fff', fontSize: 14, fontWeight: 'normal' },
  },
    grid: {
        top: '9%',
        bottom: '19%',
        left: '6%',
        right: '4%'
    },
    tooltip: {
        trigger: 'axis',
        label: {
            show: true
        }
    },
    xAxis: {
        name:"（h）",
        boundaryGap: true, //默认，坐标轴留白策略
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        data: [
            '01', '02', '03', '04', '05', '06',
            '07', '08', '09', '10', '11', '12',13,14,15,16,17,18,19,20,21,22,"23","24 "
        ]
    },
    yAxis: {
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(33,148,246,0.2)'
            }
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ''
            }
        }
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize: 7,
        lineStyle: {
            color: '#30AC66 ',
            shadowBlur: 12,
            shadowColor: 'rgba(48, 172, 102, 0.9)',
            shadowOffsetX: 1,
            shadowOffsetY: 1
        },
        itemStyle: {
            color: '#30AC66 ',
            borderWidth: 1,
            borderColor: '#FFF'
        },
        
        data: getWindSeries(resdata.winds10, resdata.windd10),
    }]
};

function getWindSeries(winds, windd) {
  let windSeries = [];
  for (let i = 0; i < winds.length; i++) {
    windSeries.push({
      value: parseFloat(winds[i]),
      symbol: getWindPic(windd[i]),
      symbolSize: 15,
    });
  }
  return windSeries;
}

function getWindPic(winddirection) {
  let windPic = '';
  //0 45 90 ... 按此为风的中线划分区间
  if (winddirection <= 22.5 || winddirection > 337.5)
    // arrow_north     ↓
     windPic = 'path://M31.9304 1.13712L17.0147 33.7651L2.99726 1.05765L17.7764 8.44721L18.0074 8.56272L18.2353 8.44118L31.9304 1.13712Z';
  else if (22.5 < winddirection && winddirection <= 67.5)
    // arrow_northeast ↙
    windPic = 'path://M34.3599 21.9681L0.741488 34.4926L13.9573 1.45304L19.1825 17.1287L19.2642 17.3737L19.5113 17.4489L34.3599 21.9681Z';
  else if (67.5 < winddirection && winddirection <= 112.5)
    // arrow_east      ←
    windPic = 'path://M33.8629 31.9304L1.23488 17.0147L33.9424 2.99726L26.5528 17.7764L26.4373 18.0074L26.5588 18.2353L33.8629 31.9304Z';
  else if (112.5 < winddirection && winddirection <= 157.5)
    // arrow_southeast ↖
    windPic = 'path://M14.0319 34.3599L1.50743 0.741488L34.547 13.9573L18.8713 19.1825L18.6263 19.2642L18.5511 19.5113L14.0319 34.3599Z';
  else if (157.5 < winddirection && winddirection <= 202.5)
    // arrow_south     ↑
    windPic = 'path://M3.06959 33.8629L17.9853 1.23488L32.0027 33.9424L17.2236 26.5528L16.9926 26.4373L16.7647 26.5588L3.06959 33.8629Z';
  else if (202.5 < winddirection && winddirection <= 247.5)
    // arrow_southwest ↗
    windPic = 'path://M1.64007 14.0319L35.2585 1.50743L22.0427 34.547L16.8175 18.8713L16.7358 18.6263L16.4887 18.5511L1.64007 14.0319Z';
  else if (247.5 < winddirection && winddirection <= 292.5)
    // arrow_west      →
    windPic = 'path://M1.13712 3.06959L33.7651 17.9853L1.05765 32.0027L8.44721 17.2236L8.56272 16.9926L8.44118 16.7647L1.13712 3.06959Z';
  else if (292.5 < winddirection && winddirection <= 337.5)
    // arrow_northwest ↘
    windPic = 'path://M21.9681 1.64007L34.4926 35.2585L1.45304 22.0427L17.1287 16.8175L17.3737 16.7358L17.4489 16.4887L21.9681 1.64007Z';
  return windPic;
}