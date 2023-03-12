let fontcol="#00000087" ;
let this_={};
this_.colmap = {
    '飞行':'#00daff',
    '定检':'#f9ff00',
    '排故':'#ff6000',
    '停飞':'#a3abad',
}
this_.startTime=1620576000000;
this_.categories  = ['飞机A','飞机B'];
this_.dataE=[
{"name":"飞行","value":[0,1620576000000,1620601200000,'7小时']},//毫秒数要为数字类型
{"name":"排故","value":[0,1620619200000,1620630000000,'3小时']},
{"name":"飞行","value":[1,1620644400000,1620655200000,'3小时']},
{"name":"停飞","value":[1,1620655200000,1620658300000,'显示内容']} //1:表飞机B
];
for (var i = 0; i < this_.dataE.length; i++){
  this_.dataE[i].itemStyle={"normal":{"color":this_.colmap[this_.dataE[i].name]}};
} 

let renderItem=function (params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.6;

    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });
    return rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
    };
  }
this_.renderItem=renderItem;
option = {
      tooltip: {
          formatter: function (params) {
              //console.log(params);
              if(params.value&&params.value.length>=4){
                  return params.marker+this_.categories[params.value[0]]+':' + params.name + '-' + params.value[3] ;
              }else{
                  return "";
              }
          }
      },
      dataZoom: [{  
          type: 'slider',
          filterMode: 'weakFilter',
          xAxisIndex: 0,
          showDetail:false,
          showDataShadow:false	//值也可为"-5px",解决拖动条宽度问题			
        }
      ],
      grid: {
        //containLabel: true
      },
      xAxis: {
          min: this_.startTime,
          type:'time',
          scale: true,
          axisLabel: {
            formatter: function (val) {
                  var da= new Date(Number(val));
                  var s=(da.getMonth()+1)+"-"+da.getDate()+" "+da.getHours();
                  return s;
            }
          },
          axisLine: {
            lineStyle: {
              color: fontcol
            }
          },
          axisPointer:{
              show:true,                  
              label:{
                  formatter:function(params){
                    let a=parseInt(params.value);
                    return new Date(a).toLocaleString();
                  },
                  color:'black',
              },
              
          }
      },
      yAxis: {
          data:  this_.categories,
          axisLine: {
            lineStyle: {
              color: fontcol
            }
          },
      },
      series: [{
          type: 'custom',
          renderItem: this_.renderItem,
          itemStyle: {
              opacity: 0.8
          },
          encode: {
              x: [1, 2],
              y: 0
          },
          data: this_.dataE
      }]
    }; 