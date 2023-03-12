
    var originaldata = [{
      "value": 1862,
      "name": "传统型业务",
      "children": [{
          "value": 1310,
          "name": "个客业务"
      }, {
          "value": 552,
          "name": "其它"
      }]
  }, {
      "value": 1053,
      "name": "分散型业务"
  }, {
      "value": 2216,
      "name": "政保业务",
      "children": [{
          "value": 1917,
          "name": "利川医责险"
      }, {
          "value": 299,
          "name": "其它"
      }]
  }];
  var color0 = ['#87d370', '#278bf6', '#fbc10f'];
  var data0 = [];
  for (var i = 0; i < originaldata.length; i++) {
      var obj = originaldata[i];
      data0.push({
          value: obj.value,
          name: obj.name,
          itemStyle: {
              color: color0[i]
          },
      });
  }
  var color1 = ['#FD4440', 'rgba(255,255,255,.1)'];
  var data1 = [];
  for (var i = 0; i < originaldata.length; i++) {
      var obj = originaldata[i];
      var kids = obj.children;
      if (typeof(kids) === 'undefined') {
          data1.push({
              value: obj.value,
              name: obj.name,
              itemStyle: {
                  color: 'transparent'
              }
          });
      } else {
          for (var k = 0; k < kids.length; k++) {
              var kid = kids[k];
              data1.push({
                  value: kid.value,
                  name: kid.name,
                  itemStyle: {
                      color: color1[k]
                  },
                  label: {
                      normal: {
                          position: 'outside',
                          formatter: '{b} \n{c}万元',
                          color: 'rgba(255,255,255,.6)',
                          fontSize:14,
                      }
                  },
                  
          labelLine: {
                normal: {
                       length: 12,
                       length2: 10,
                      lineStyle: {
                       
                      color: 'rgba(255,255,255,.5)'
                  }}
          }
              });
          }
      }
      // alert(k);
  }
  
  option = {
backgroundColor:'#222',
      series: [{
              name: '非车险种构成',
              type: 'pie',
              animation: false,
              radius: ['20%', '55%'],
              center: ['50%', '50%'],
              label: {
                  normal: {
                      position: 'inside',
                      formatter: '{b} \n{c}万元 ',
                      color: '#fff',
                    
                      fontWeight:'bold'
                  }
              },
              labelLine: {},
              data: data0
          },
          {
              name: '访问来源',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['55%', '60%'],
              animation: false,
              data: data1
          }
      ],
  };
 

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });