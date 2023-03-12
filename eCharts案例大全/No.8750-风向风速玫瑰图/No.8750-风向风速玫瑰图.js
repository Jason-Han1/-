var legendName=["0.1-2.3 m/s","2.3-4.5 m/s","4.5-6.7 m/s","6.7-8.9 m/s",
    "8.9-11.0 m/s","11.0-13.2 m/s","13.2-15.4 m/s","15.4-17.6 m/s"]
option = {
     tooltip: {
         trigger: 'item',
         textStyle: {
             fontSize: 16,
             color: '#fff',
             fontFamily: 'Microsoft YaHei'
         }
     },
    color:["#0001F7","#00B8FE","#00FFFF","#00FF68","#BEFE00","#FFFF00","#FFA800","#E10100"],
    angleAxis: {
      zlevel:2,
      type: 'category',
      data: [
        {value: '北'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '东北'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '东'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '东南'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '南'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '西南'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '西'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
        {value: '西北'},
        {value: ''},  {value: ''},  {value: ''},  {value: ''},  {value: ''},
      ],

      boundaryGap:false,//标签和数据点都会在两个刻度之间的带(band)中间
      axisTick: {
        show: false//是否显示坐标轴刻度
      },
      show:true,
      splitLine: {
        show:true,
        lineStyle:{
          // color:"black"
        },
      },
      axisLabel:{
        show:true,
        interval:5,//坐标轴刻度标签的显示间隔，在类目轴中有效
      },

    },
    radiusAxis: {

      min:0,
      max:100,
      axisLabel: {
        formatter: '{value}   %',
        margin:-25,

        textStyle: {
          fontSize: 10,
          color: 'black',

          padding:5,
          width:30,

          backgroundColor:'lightgray',
          borderColor:'black',
          borderWidth:1,
          fontFamily: 'Microsoft YaHei'
        },
        rich: { }
      },

      zlevel:3,
      axisTick: {
        show: false//是否显示坐标轴刻度
      },
      axisLine:{
        show:true,//是否显示坐标轴轴线
      },
    },
    polar: {
    },
    series: [{
      barCategoryGap:0,
      type: 'bar',
      zlevel:1,
      data: [17, 2, 18, 4,
        2,3,4,6,
        1, 6, 3, 4,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,6,
        1, 3, 3, 4,
        2,3,4,6,
        2,7,4,5,
        1, 2, 3, 1,
        2,3,2,6,
        1, 2, 3, 1,],
      coordinateSystem: 'polar',
      name: legendName[0],
      stack: 'a',
      itemStyle: {

        borderColor:'black',
        borderWidth:1,
      }


    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [7, 12, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        2,3,4,6,
        1, 2, 3, 5,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,
        2,3,4,1,
        1, 2, 2, 4,
        2,3,5,1,
        1, 2, 3, 1,],
      coordinateSystem: 'polar',
      name: legendName[1],
      stack: 'a',
      itemStyle: {

        borderColor:'black',
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 12, 13, 4,
        2,13,14,26,
        11, 12, 23, 34,
        12,33,34,32,
        11, 22, 23, 24,
        2,23,24,6,
        21, 2, 3, 4,
        2,3,4,6,
        12,13,4,6,
        11, 32, 32, 14,
        12,33,24,41,
        1, 2, 3, 1,],
      coordinateSystem: 'polar',
      name: legendName[2],
      stack: 'a',
      itemStyle: {

        borderColor:'black',
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 2, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        2,3,4,6,
        1, 2, 3, 5,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,
        2,3,4,1,
        1, 2, 2, 4,
        1, 2, 3, 1,
        2,3,5,1,],
      coordinateSystem: 'polar',
      name: legendName[3],
      stack: 'a',
      itemStyle: {

        borderColor:'black',
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 2, 13, 4,
        2,3,4,6,
        1, 2, 3, 4,
        1, 2, 3, 1,
        2,3,4,2,
        1, 2, 3, 4,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,6,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,],
      coordinateSystem: 'polar',
      name: legendName[4],
      stack: 'a',
      itemStyle: {

        borderColor:'black',

      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 2, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        1, 2, 3, 1,
        2,3,4,6,
        1, 2, 3, 5,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,
        2,3,4,1,
        1, 2, 2, 4,
        2,3,5,1,],
      coordinateSystem: 'polar',
      name: legendName[5],
      stack: 'a',
      itemStyle: {

        borderColor:'black',

      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 2, 13, 4,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,2,
        1, 2, 3, 4,
        2,3,4,6,
        1, 2, 3, 4,
        1, 2, 3, 1,
        2,3,4,6,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,],
      coordinateSystem: 'polar',
      name: legendName[6],
      stack: 'a',
      itemStyle: {

        borderColor:'black',

      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        1, 2, 3, 1,
        0, 0, 0, 0,
        1, 2, 3, 4,
        2,3,4,1,
        0, 0, 0, 0,
        1, 2, 2, 4,
        2,3,2,1,],
      coordinateSystem: 'polar',
      name: legendName[7],
      stack: 'a',
      itemStyle: {
        borderColor:'black',

      }
    }],
    legend: {
      show: true,
      data: legendName,
      width:500,//根据宽度调整换行
 
    }
  };