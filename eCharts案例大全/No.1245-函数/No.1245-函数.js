
var n = 100; //x轴区间
    var vData = [0.1, 1, 10, 100];
    var xData = [];
    //定义二维数组
    var yOilData = new Array();         //先声明一维
    var yWaterData = new Array();
    for(var i=0;i<=4;i++){          //一维长度
      yOilData[i]=new Array(i);    //在声明二维
      yWaterData[i]=new Array(i);
      for(var j=0;j<n;j++){      //二维长度
        yOilData[i][j]=i;
        yWaterData[i][j]=i;
      }
    }
    for (var i = 0; i <= 4; i++) {
      var v = vData[i];
      for (var x = 0; x <= n; x++) {
//公式逻辑计算过程
        //油的计算过程
        var R1 = 0.92 * v * x / 0.000031;
        var y1 = 5.0 * x / Math.sqrt(R1);
 
        //水的计算过程
        var R2 = 1 * v * x / 0.000001;
        var y2 = 5.0 * x / Math.sqrt(R2);
 
        xData[x] = x;
        yOilData[i][x] = y1;
        yWaterData[i][x] = y2;
      }
    }


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
 
      legend: {
        data:['油 v=0.1','油 v=1','油 v=10','油 v=100','水 v=0.1','水 v=1','水 v=10','水 v=100',],
        x:"right",
        y:"top",
        padding: 50
      },
      grid: [{
        left: 100,
        right: 100,
        // height: '20%',
        // top: '25%'
      }],
      //x轴
      xAxis: {
        name : 'x',  //x轴名字
        type: 'category',
        data: xData,
      },
      //y轴
      yAxis: {
        name : 'y',  //y轴名字
        type: 'value'
      },
      //四条线
      series: [{//油
        name:'油 v=0.1',
        data: yOilData[0],
        type: 'line'
      },
        {name:'油 v=1',
          data: yOilData[1],
          type: 'line'
        },
        {name:'油 v=10',
          data: yOilData[2],
          type: 'line'
        },
        {name:'油 v=100',
          data: yOilData[3],
          type: 'line'
        },//水
        {name:'水 v=0.1',
          data: yWaterData[0],
          type: 'line'
        },
        {name:'水 v=1',
          data: yWaterData[1],
          type: 'line'
        },
        {name:'水 v=10',
          data: yWaterData[2],
          type: 'line'
        },
        {name:'水 v=100',
          data: yWaterData[3],
          type: 'line'
        },
      ]
};
