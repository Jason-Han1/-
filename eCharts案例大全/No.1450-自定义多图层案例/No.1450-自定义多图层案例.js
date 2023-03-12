
let Dates = ['2021-10-14 11:00:00','2021-10-14 12:00:00','2021-10-14 13:00:00','2021-10-14 14:00:00','2021-10-14 15:00:00','2021-10-14 16:00:00','2021-10-14 17:00:00','2021-10-14 18:00:00','2021-10-14 19:00:00','2021-10-14 20:00:00','2021-10-14 21:00:00','2021-10-14 22:00:00','2021-10-14 23:00:00','2021-10-15 00:00:00','2021-10-15 01:00:00','2021-10-15 02:00:00','2021-10-15 03:00:00','2021-10-15 04:00:00','2021-10-15 05:00:00','2021-10-15 06:00:00','2021-10-15 07:00:00','2021-10-15 08:00:00','2021-10-15 09:00:00','2021-10-15 10:00:00']

let R1h = ['0','0','0','0','0','0','0','0','0','0','0','0','0.8','0.9','0.6','0.1','0','0.4','0.3','0.1','0','0.1','1.3','0.3']
let T2m = ['17.2','17.7','17.6','17.3','17','17.4','17.1','16.9','16.5','16.1','15.9','15.4','15.4','15.3','15.2','15.2','15.2','15.2','14.7','13.8','14.1','14.5','14.5','']
let RH2m = ['74','71','70','71','73','73','69','71','72','76','78','80','79','79','79','77','77','78','82','90','90','84','84','']

let Win10m_S = ['2.9','2.9','2.2','2.7','3.3','1.1','2.6','3.5','3.2','3.1','1','2.8','2.9','2.4','2','2.1','1.4','1.1','1.6','1.3','0.4','1.3','2.5','']
let Win10m_D =['84','80','97','120','112','74','348','110','92','89','130','115','111','58','104','97','82','7','108','86','115','86','104','']

let MaxWin10m_S = ['9.5','7.1','6.8','7.7','7.5','6.2','7.4','7.2','7.8','7.4','7.8','7.8','7.1','6.6','6.6','6.6','7.3','5.1','5.1','5.2','3.9','5.7','7','']
let MaxWin10m_D = ['97','74','107','84','102','53','58','90','97','120','113','127','77','90','97','102','55','90','30','100','12','89','103','']

let xAxisData = [], Win10mArray = [], MaxWin10mArray = [];
Dates.forEach((item,index) => {
  let pattern = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g;
  xAxisData.push(item.replace(pattern, '$3日\n$4时'));
  
  if(Win10m_S[index]){
    let _w10 = { 
      value: [index, 1],
      symbol: getWindShaftPic(Win10m_S[index]),
      symbolSize: [8, 20],
      symbolRotate: `-${Win10m_D[index]}`,
    }
    Win10mArray.push(_w10)
  }
  
  if(MaxWin10m_S[index]){
    let _w10 = { 
      value: [index, 1],
      symbol: getWindShaftPic(MaxWin10m_S[index]),
      symbolSize: [8, 20],
      symbolRotate: `-${MaxWin10m_D[index]}`,
    }
    MaxWin10mArray.push(_w10)
  }
})

let splitNumber = 6; // 分割段数

option = {
  title: {
    text: 'Demo Chart',
    subtext: '2021年10月14日11时 - 2021年10月15日10时',
    textStyle: { color: '#000000' },
    subtextStyle: { color: '#000000' },
    left: 'center',
    top: '2%'
  },
  grid: [
    {
      top: '14%',
      left: '8%',
      right: '8%',
      bottom: '30%'
    },
    {
      top: '70%',
      left: '8%',
      right: '8%',
      bottom: '20%'
    },
    {
      top: '80%',
      left: '8%',
      right: '8%',
      bottom: '10%'
    }
  ],
  legend: { 
    top: '9%',
    textStyle: { fontWeight:'bold' }
  },
  tooltip: [
    {
      trigger: 'axis',
      formatter: (params, ticket, callback) => {
        console.log(params)
        let index = params[0].dataIndex;
        let pattern = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g;
        let Htm = `${Dates[index].replace(pattern, '$1年$2月$3日$4时')}<br>`;
        params.forEach((item) => {
          let {marker, seriesName, data, seriesId} = item;
          if(seriesId == 'Win10m'){
            Htm += `${marker} 风速：${Win10m_S[index]}m/s 角度：${Win10m_D[index]}°`;
          } else if(seriesId == 'MaxWin10m' ){
            Htm += `${marker} 风速：${MaxWin10m_S[index]}m/s 角度：${MaxWin10m_D[index]}°`;
          } else {
            Htm += `${marker} ${seriesName}: ${data}${unit[seriesId]}<br>`;
          }
        })
        return Htm
      }
    }
  ],
  xAxis: [
    {
      boundaryGap: true,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: {
        alignWithLabel: true, // 刻度线和标签对齐
        interval: 0,
        inside: true // 坐标轴刻度朝内
      },
      axisLabel: { show: false },
      data: Dates
    },
    {
      position: 'top',
      axisLine:{ lineStyle: { color:'#000000', width:2 } },
    },
    {
      gridIndex: 1,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: { show: false },
      axisLabel: { show: false },
      data: Dates
    },
    {
      gridIndex: 2,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: {
        alignWithLabel: true, // 刻度线和标签对齐
        interval: 0, // 坐标轴刻度朝内
        inside: true
      },
      axisLabel: { color: '#000000', fontSize: 14, fontWeight:'bold' },
      data: xAxisData
    }
  ],
  yAxis: [
    {
      name: '温度(℃)',
      nameLocation:'center',
      nameGap: 48,
      nameTextStyle: { color:'#000000', fontSize:14, fontWeight:'bold' },
      // min: calMin(T2m),
      // max: calMax(T2m),
      // minInterval: 1,
      // splitNumber: splitNumber,
      // interval: (calMax(T2m) - calMin(T2m)) / splitNumber,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: { show:false },
      axisLabel: { textStyle: { color:'#000000', fontSize:13, fontWeight:'bold' }},
      splitLine: { show:true, lineStyle: { color:'#000000' } }
    },
    {
      show: false,
      name: '1小时降水',
      max: (value) => {
        return value.max + 0.1;
      }
    },
    {
      name: '相对湿度(%)',
      nameLocation:'center',
      nameGap: 48,
      nameTextStyle: { color:'#000000', fontSize:14, fontWeight:'bold' },
      // min: calMin(RH2m),
      // max: calMax(RH2m),
      // minInterval: 1,
      // splitNumber: splitNumber,
      // interval: (calMax(RH2m) - calMin(RH2m)) / splitNumber,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: { show:false },
      axisLabel: { textStyle: { color:'#000000', fontSize:13, fontWeight:'bold' }},
      splitLine: { show:false }
    },
    {
      gridIndex: 1,
      name: '10米风',
      nameLocation:'center',
      nameGap: 20,
      nameTextStyle: { color:'#000000', fontSize:14, fontWeight:'bold' },
      max: 2,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: { show:false },
      axisLabel: {show:false },
      splitLine: { show:false }
    },
    {
      gridIndex: 1,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } }
    },
    {
      gridIndex: 2,
      name: '10米极大风',
      nameLocation:'center',
      nameGap: 20,
      nameTextStyle: { color:'#000000', fontSize:14, fontWeight:'bold' },
      max: 2,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } },
      axisTick: { show:false },
      axisLabel: {show:false },
      splitLine: { show:false }
    },
    {
      gridIndex: 2,
      axisLine:{ show: true, lineStyle: { color:'#000000', width:2 } }
    },
  ],
  series: [
    {
      type: 'bar',
      id: 'R1h',
      name: '1小时降水',
      color: '#4bc946',
      yAxisIndex: 1,
      barWidth: '50%',
      label: { 
        show: true, 
        formatter: (params) => {
          if(Number(params.data) === 0) return '';
        },
        fontWeight: 'bold',
        position: 'top'
      },
      data: R1h
    },
    {
      type: 'line',
      id: 'T2m',
      name: '2米温度',
      symbol: 'rect',
      symbolSize: 6,
      color: '#fda975',
      // smooth: true,
      data: T2m
    },
    {
      type: 'line',
      id: 'RH2m',
      name: '2米相对湿度',
      symbolSize: 6,
      yAxisIndex: 2,
      color: '#27d3e2',
      // smooth: true,
      data: RH2m
    },
    {
      type: 'line',
      id: 'Win10m',
      name: '10米风',
      symbol: 'circle',
      symbolSize: 6,
      xAxisIndex: 2,
      yAxisIndex: 3,
      lineStyle: { width:1, opacity:0.5 },
      data: Win10mArray
    },
    {
      type: 'line',
      id: 'MaxWin10m',
      name: '10米极大风',
      symbol: 'circle',
      xAxisIndex: 3,
      yAxisIndex: 5,
      lineStyle: { width:1, opacity:0.5 },
      data: MaxWin10mArray
    }
  ]
};

let unit = {
  R1h: 'mm',
  T2m: '℃',
  RH2m: '%'
}

//计算最大值
function calMax(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    max = Math.ceil(max + interval); // 向上取整
    // console.log(min, max, interval);
    return max;
}

//计算最小值
function calMin(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let interval = (max - min) / splitNumber; // 平均值
    min = min === 0 ? min : Math.floor(min - interval); // 向下取整
    // console.log(min, max, interval);
    return min;
}

function getWindShaftPic(windspeed) {
  let Pic = 'none';
  if(windspeed === '') return Pic
  if (windspeed >= 0.0 && windspeed <= 0.2) {
    Pic = `image:///asset/get/s/data-1631783476618-wOIHrfnEO.png`;
  } else if (windspeed >= 0.3 && windspeed <= 1.5) {
    Pic = `image:///asset/get/s/data-1631783483071-cfwLbKcYl.png`;
  } else if (windspeed >= 1.6 && windspeed <= 3.3) {
    Pic = `image:///asset/get/s/data-1631783495125-601rObfu3.png`;
  } else if (windspeed >= 3.4 && windspeed <= 5.4) {
    Pic = `image:///asset/get/s/data-1631783502405-jwbOFdS4D.png`;
  } else if (windspeed >= 5.5 && windspeed <= 7.9) {
    Pic = `image:///asset/get/s/data-1631783519568-qdPwqtQUg.png`;
  } else if (windspeed >= 8.0 && windspeed <= 10.7) {
    Pic = `image:///asset/get/s/data-1631783526956-IJh4S6NaA.png`;
  } else if (windspeed >= 10.8 && windspeed <= 13.8) {
    Pic = `image:///asset/get/s/data-1631783532927-sNH7zekiO.png`;
  } else if (windspeed >= 13.9 && windspeed <= 17.1) {
    Pic = `image:///asset/get/s/data-1631783538130-P00G2yMyc.png`;
  } else if (windspeed >= 17.2 && windspeed <= 20.7) {
    Pic = `image:///asset/get/s/data-1631783543740-JER6mEii7.png`;
  } else if (windspeed >= 20.8 && windspeed <= 24.4) {
    Pic = `image:///asset/get/s/data-1631783552096-Dwu8REasT.png`;
  } else if (windspeed >= 24.5 && windspeed <= 28.4) {
    Pic = `image:///asset/get/s/data-1631783557036-3FbF8qpJs.png`;
  } else if (windspeed >= 28.5 && windspeed <= 32.6) {
    Pic = `image:///asset/get/s/data-1631783561430-bRSvCqsew.png`;
  } else if (windspeed >= 32.7) {
    Pic = `image:///asset/get/s/data-1631783565641-ENAZ32bTX.png`;
  }
  return Pic
}

