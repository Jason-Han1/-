option = {
    title: {
        text: '同一数据两条折线实现切断处虚线连接'
    },
    tooltip: {
      trigger:"axis",//tooltip类型
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type:"shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      //自定义tooltip图例样式
      formatter: function (param) {
        var resultTooltip = param[0].name + "<br/>";
        //Tooltip去重
          for (var t = 0; t < param.length; t++) {
              for (var j = param.length - 1; j > t; j--) {
                if (param[j].data === param[t].data) {
                  param.splice(j, 1);
                  break;
                }
              }
        }
        for (var i = 0; i < param.length; i++) {
            // console.log(param[i])颜色可自行定义
            var color = param[i].color;
            resultTooltip += "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"
                + color + ";'></span>"
                + "<span style=''> " + param[i].seriesName + ": </span>"
                + "<span style=''>" + param[i].value + "</span></br>"
        }
        return resultTooltip
      }
    },
    //x轴数据
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        connectNulls: true,//切断处连接下一个点
        itemStyle: {
            normal: {
                lineStyle: {
                    color:'#f0c95c',
                    type:'dotted'
                },
                // color: "#FFFFFF", //拐点的颜色
                borderColor: "#00E4FF", //拐点边框的颜色
            }
        },
        data:[220, '-', 191, 234, 290, 330, 310]
    },{
        type: 'line',
        color:'#f0c95c',
        data:[220, '-', 191, 234, 290, 330, 310]
    }]
};
