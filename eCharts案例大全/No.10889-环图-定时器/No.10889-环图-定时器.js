    var labelT = {
      normal:{
          show: false,
          formatter:(param) =>{
            //   this.name = param.name;
            //   this.number = param.percent;
          }
      }
    };
    var data = [
        {name:'项目申报',value:3},
        {name:'项目初审',value:3},
        {name:'项目上会',value:3},
        {name:'协议签订',value:3},
        {name:'项目代办',value:3},
        {name:'项目服务',value:3},
    ]
  var count = 0;
  var option = {
    backgroundColor:'#000', 
    title: {
        text: '环图-定时器',
        x: '5%',
        top: "20",
        textStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight:400
        }
      },
      color: ['#3c13a8', '#4d59e6', '#5c63c5', '#0472d9', '#42947f', '#4eb2d4','#badcff','#a3d0ff','#8dc5ff','#73b8ff','#4aa3ff','#1e8dff','#007eff'
          ,'#1678dc','#246eba','#4172a5','#5582b0','#d2f7ff','#daecff'],
      legend: {
          bottom:'5%',
          textStyle:{
              color:'#fff',
              fontSize:16
          },
          left: 30,
          itemWidth: 30,
          itemHeight: 20,
          itemGap: 16,
          data: ['项目申报', '项目初审', '项目上会','协议签订','项目代办','项目服务']
      },
      series: [
          {
              type:'pie',
              selectedMode: 'single',
              selectedOffset: 30,
              center:['50%','40%'],
              radius: ['40%', '55%'],
              label: {
                  normal: {
                      show: false,
                      position:'inside',
                      textStyle: {
                          color: '#fff',
                          fontSize:16
                      },
                      formatter:(param)=> {
                        //   this.name = param.name;
                        //   this.number = param.percent;
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:data
          },
          {
              type:'pie',
              selectedMode: 'single',
              selectedOffset: 30,
              center:['50%','40%'],
              radius: ['57%', '60%'],
              label: {
                  normal: {
                      show: false,
                      textStyle: {
                          color: 'rgb(0,0,0,0)'
                      },
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              itemStyle: {
                  normal:{
                      opacity:0.6
                  }
              },
              data:data
          }
      ]
  };

  setInterval(function() {
      var r = count % data.length;
      option.series[0].data[r].selected = false;
      option.series[1].data[r].selected = false;
      option.series[0].data[r].label ={show:false};
      count++;
      var s = count % data.length;
      option.series[0].data[s].selected = true;
      option.series[1].data[s].selected = true;
      option.series[0].data[s].label=labelT;
      myChart.setOption(option, true);
  }, 3000);
  myChart.setOption(option);