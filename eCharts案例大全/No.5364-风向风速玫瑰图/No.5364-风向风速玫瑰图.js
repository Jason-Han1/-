  // app.title = '极坐标系下的堆叠柱状图';
  var legendName=[
    "0.0-0.2 m/s",
    "0.3-1.5 m/s",
    "1.6-3.3 m/s",
    "3.4-5.4 m/s",
    "5.5-7.9 m/s",
    "8.0-10.7 m/s",
    "10.8-13.8 m/s",
    "13.9-17.1 m/s",
    "17.2-20.7 m/s",
    "20.8-24.4 m/s",
    "24.5-28.4 m/s",
    "28.5-32.6 m/s",
    ">32.6 m/s"
    ]
var vocs = [
    "0.3 mg/m³",
    "0.4 mg/m³",
    "0.3 mg/m³",
    "0.3 mg/m³",
    "0.5 mg/m³",
    "0.23 mg/m³",
    "0.2 mg/m³",
    "0.7 mg/m³",
    "0.6 mg/m³",
    "0.2 mg/m³",
    "0.1 mg/m³",
    "0.1 mg/m³",
    "0.6 mg/m³",
    
    ]
option = {
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff'
        }
    },
    color:["#0001F7","#00B8FE","#00FFFF","#00FF68","#BEFE00","#FFFF00","#FFA800","#E10100"],
    angleAxis: {
        type: 'category',
        data: ["北", "北东北", "东北", "东东北", "东", "东东南", "东南", "南东南", "南", "南西南", "西南", "西西南", "西", "西西北", "西北", "北西北"],
        boundaryGap: false,//标签和数据点都会在两个刻度之间的带(band)中间
        axisTick: {
            show: false//是否显示坐标轴刻度
        },
        splitLine: {
            show: true,
            lineStyle:{
              // color:"black"
            },
        },
        axisLabel:{
            show: true,
            interval: 1,//坐标轴刻度标签的显示间隔，在类目轴中有效
        },
    },
    radiusAxis: {
        min:0,
        max:100,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false //是否显示坐标轴刻度
        },
        axisLine:{
            show: false //是否显示坐标轴轴线
        },
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [17, 2, 18, 4,
            2,3,4,6,
            1, 6, 3, 4,
            2,3,4,6],
        coordinateSystem: 'polar',
        name: legendName[0],
        stack: 'a'
    }, {
      type: 'bar',
      data: [7, 12, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        2,3,4,6],
      coordinateSystem: 'polar',
      name: legendName[1],
      stack: 'a'
    }, {
      type: 'bar',
      data: [10, 12, 13, 4,
        2,13,14,26,
        11, 12, 23, 34,
        12,33,34,32],
      coordinateSystem: 'polar',
      name: legendName[2],
      stack: 'a'
    }, {
      type: 'bar',
      data: [10, 2, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        2,3,4,6],
      coordinateSystem: 'polar',
      name: legendName[3],
      stack: 'a'
    }, {
      type: 'bar',
      data: [10, 2, 13, 4,
        2,3,4,6,
        1, 2, 3, 4,
        1, 2, 3, 1],
      coordinateSystem: 'polar',
      name: legendName[4],
      stack: 'a'
    }, {
      type: 'bar',
      data: [10, 2, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        1, 2, 3, 1],
      coordinateSystem: 'polar',
      name: legendName[5],
      stack: 'a'
    }, {
      type: 'bar',
      data: [10, 2, 13, 4,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,2],
      coordinateSystem: 'polar',
      name: legendName[6],
      stack: 'a'
    }, {
      type: 'bar',
      data: [1, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0],
      coordinateSystem: 'polar',
      name: legendName[7],
      stack: 'a'
    }],
    legend: {
      show: true,
      data: legendName,
      width:500,//根据宽度调整换行
    }
  }
