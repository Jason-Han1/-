img='path://M50,13 H150 L200,99.5 L150,186 H50 L0,99.5';
var getData= function GetData(){
    var arr=[];
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 10; j++) {
            var x=i*100,y=j*100;
            arr.push({
                name: i+"-"+j,
              symbol:img, 
              symbolSize: [65, 58],
              value: [x, y],
              x: x,
              y: y,
              fixed: true,
            });
            x=x-50;y=y-50;
            arr.push({
              name: i+"--"+j,
              symbol:img, 
              symbolSize: [65, 58],
              //symbolOffset:[0,'-100%'],
              value: [x, y],
              x: x,
              y: y,
              fixed: true,
            });
        }
    }
    return arr;
}

      option=({
       
        backgroundColor: "#000",
        xAxis: {
          show: false,
          type: "value"
        },
        yAxis: {
          show: false,
          type: "value"
        },
        tooltip: {},
        series: [
          {
            type: "graph",
            zlevel: 6,

            draggable: false,
            coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）
            
            symbolOffset: [0, 0],

            label: {
              normal: {
                show: true
              }
            },
            data: getData(),
           itemStyle:{
               backgroundColor:'#ffffff'
           }

          },

        ]
      });