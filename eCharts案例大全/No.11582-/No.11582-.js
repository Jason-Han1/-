var uploadedDataURL = "/asset/get/s/data-1548735204507-0gzSEiKV4.json";
var geoJson = {}
$.ajax({
    url : uploadedDataURL,
    async : false,
    dataType : 'json',
    success : function(data){
       echarts.registerMap('ls', data);
       var geoCoordMap = {
           '治金工业区':[120.643338882,31.9787250105],
           '现代农业示范园区':[120.79881073,31.8820563076],
           '经济技术开发区':[120.553760732,31.83],
           '张家港保税区':[120.43,31.970892279],
           '塘桥镇':[120.665220625,31.8253475975],
           '乐余镇':[120.751388101,31.9358733739],
           '凤凰镇':[120.631224777,31.7692103578],
           '南丰镇':[120.762973474,31.8558316614],
           '大新镇':[120.544713024,31.9722253813],
       }
       var data = [
           {name:'治金工业区', value: 29},
           {name:'现代农业示范园区', value: 23},
           {name:'经济技术开发区', value: 137},
           {name:'张家港保税区', value: 165},
           {name:'塘桥镇', value: 70},
           {name:'乐余镇', value: 48},
           {name:'凤凰镇', value: 63},
           {name:'南丰镇', value: 45},
           {name:'大新镇', value: 20},
       
       ];
       var convertData = function (data) {
       var res = [];
       for (var i = 0; i < data.length; i++) {
           var geoCoord = geoCoordMap[data[i].name];
           if (geoCoord) {
               res.push({
                   name: data[i].name,
                   value: geoCoord.concat(data[i].value)
               });
           }
       }
       return res;
    };
       myChart.setOption(option = {
          
           backgroundColor: '#151b53',
           tooltip: {
               formatter : function(e){
                   if (typeof(e.value)[2] == "undefined") {
                       return e.name;
                   }else{
                       return '企业数<br>'+e.name + ':' + e.value[2] + '家';
                   }
               
               }
           },
           geo: {
               map: 'ls',
               show: true,
               label: {
                   show:true,
                   color:'#fff',
                   emphasis: {
                       show: false
                   }
               },
               itemStyle: {
                   normal: {
                       areaColor: '#172260',
                       borderColor: '#216ca7',
                       borderWidth: 1,
                       shadowColor: '#216ca7',
                       shadowBlur: 1
                   }
               },
           zoom:1.2,
           },
          series: [{
              type: 'map',
              map: 'ls',
              geoIndex: 1,
              aspectScale: 0.75, //长宽比
              zoom:1.2,
              label: {
                  emphasis: {
                      show: false,
                      textStyle: {
                          color: '#05C3F9'
                      }
                  }
              },
              roam: false,
              itemStyle: {
                  normal: {
                      areaColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 1
                  },
                  emphasis: {
                      areaColor: '#C9E6FF',
                      shadowColor: '#5AB2FE',
                      shadowBlur: 20
                  }
              },
              data: data,
          },
          {
              name: '企业数',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: function (val) {
            	   var num = val[2] / 2;
                  if(num < 20){
                      return 20
                  }else{
                      return num;
                  }
              },
              label: {
                  normal: {
                      show: true,
                      formatter: function(value){
                          return value.value[2]
                      },
                      textStyle: {
                          color: '#fff',
                          fontSize: 12,
                      }
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#216ca7', //标志颜色
                  }
              },
              zlevel: 6,
              data: convertData(data),
          }
           ]
       });
    }
})
   // 指定图表的配置项和数据

