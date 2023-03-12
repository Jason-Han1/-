   var info =[
            '1天<X<=3天：\n亚信2个\n济南分院1个\n哈尔滨分院3个\n',
            '3天<X<=10天：\n哈尔滨分院3个\n济南分院2个\n',
            'X>10天：\n哈尔滨分院3个\n济南分院2个',
        ]
option = { 
          title: {
              text: "按解决时长展示个数",
              left: 'center',
          },  
         graphic: [ {
      type: 'group',
      id: 'textGroup2',
      right: 1,
      top: 88,
      position :[10, 0],
      children: [
          {
              type: 'text',
              z: 100,
              left: 100,
              style: {
                  text: [
            '1天<X<=3天：\n亚信2个\n济南分院1个\n哈尔滨分院3个\n',
            '3天<X<=10天：\n哈尔滨分院3个\n济南分院2个\n',
            'X>10天：\n哈尔滨分院3个\n济南分院2个',
        ].join('\n'),
                  font: '16px cursive',
                  // textVerticalAlign :'middle',
                  fill:'#333',
                  
              }
          }
      ]
  }],
          grid: {
            top: "15%",
            right: '15%',
         },
          toolbox: {
                feature: {
                    myTool1: {
                        show: true,
                        title: '数据下载',
                        icon:'path://M330.29984 95.392c0-11.744 14.912-22.048 32-22.048H687.61184c17.024 0 32 10.304 32 22.048v504.544h0.64c0 17.312 14.08 31.36 31.36 31.36v0.64h120.384l-345.696 236-345.76-236h117.76v-0.672a31.328 31.328 0 0 0 31.328-31.328h0.64V95.392z m-270.72 529.952l-0.704 1.024 449.376 306.72 0.672-1.024a30.464 30.464 0 0 0 17.376 5.952 30.464 30.464 0 0 0 17.312-5.952l0.736 1.024 449.28-306.72-0.64-1.024a30.848 30.848 0 0 0 13.984-25.408 31.36 31.36 0 0 0-31.36-31.328v-0.672h-192V95.392c0-47.456-43.072-86.048-96-86.048H362.29984c-52.928 0-96 38.592-96 86.048v472.544H76.95584v0.672a31.36 31.36 0 0 0-31.36 31.328c0 10.752 5.76 19.744 14.016 25.408zM76.95584 1014.016v0.64H975.61184v-0.64a31.36 31.36 0 1 0 0-62.656v-0.672H76.92384v0.64a31.328 31.328 0 1 0 0 62.688',
                        //icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                        onclick: function () {
                            downloadBugOfResolutionTime();
                        }
                    }
                }
          },       
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },  
          legend: {
              textStyle: {
                  fontSize: 10
              },
              top: 30,
              //orient: "vertical",
              left:"15%",
              data: ['哈尔滨分院', '济南分院', '计费结算中心','亚信','天源迪科','浩鲸科技','研发中心本部']
          },
          xAxis: [
              {
                  type: 'category',
                  data: [1,2,3],
                  axisPointer: {
                      type: 'shadow'
                  }
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '个数',
                  min: 0,
                  axisLabel: {
                      formatter: '{value} 个'
                  }
              }
          ],
          series: [
              {
                  name: '哈尔滨分院',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
                data: [1,2,3],
                  label: {
                      show: true,
                      position: 'inside',
                      normal: {
                          show: true,
                          formatter: function (params) {
                              if (params.value > 0) {
                                  return params.value;
                              } else {
                                  return '';
                              }
                          }
                      }
                    }      
              },
              {
                  name: '济南分院',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
                 data: [1,2,3],
                  label: {
                      show: true,
                      position: 'inside',
                      normal: {
                          show: true,
                          formatter: function (params) {
                              if (params.value > 0) {
                                  return params.value;
                              } else {
                                return '';
                              }
                          }
                      }
                  }
              },               
              {
                  name: '计费结算中心',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
                  data: [1,2,3],
                  label: {
                    show: true,
                    position: 'inside',
                    normal: {
                        show: true,
                        formatter: function (params) {
                            if (params.value > 0) {
                                return params.value;
                            } else {
                                return '';
                            }
                        }
                    }
                  }   
              },               
              {
                  name: '亚信',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
                 data: [1,2,3],
                  label: {
                    show: true,
                    position: 'inside',
                    normal: {
                        show: true,
                        formatter: function (params) {
                            if (params.value > 0) {
                                return params.value;
                            } else {
                                return '';
                            }
                        }
                    }
                  }   
              },               
              {
                  name: '天源迪科',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
       data: [1,2,3],
                  label: {
                    show: true,
                    position: 'inside',
                    normal: {
                        show: true,
                        formatter: function (params) {
                            if (params.value > 0) {
                                return params.value;
                            } else {
                                return '';
                            }
                        }
                    }
                  }   
              },               
              
              {
                  name: '浩鲸科技',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
                 data: [1,2,3],
                  label: {
                    show: true,
                    position: 'inside',
                    normal: {
                        show: true,
                        formatter: function (params) {
                            if (params.value > 0) {
                                return params.value;
                            } else {
                                return '';
                            }
                        }
                    }
                  }   
              },               
                   
              {
                  name: '研发中心本部',
                  type: 'bar',
                  stack: '总量',
                  animation: false,
                  data: [1,2,3],
                  label: {
                    show: true,
                    position: 'inside',
                    normal: {
                        show: true,
                        formatter: function (params) {
                            if (params.value > 0) {
                                return params.value;
                            } else {
                                return '';
                            }
                        }
                    }
                  }   
              }              
  
              
          ]
      };
