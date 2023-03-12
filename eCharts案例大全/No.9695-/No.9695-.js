  var scale = 1;
  var echartData = [{
      value: 215,
      name: '外购件'
  }, {
      value: 2854,
      name: '钢材'
  }, {
      value: 3115,
      name: '自制件'
  }, {
      value: 1515,
      name: '毛坯'
  }]
  var rich = {
      yellow: {
          color: "#ffc72b",
          fontSize: 35 * scale,
          padding: [5, 10],
          align: 'center'
      },
      total: {
          color: "#ffc72b",
          fontSize: 35 * scale,
          align: 'center'
      },
      white: {
          color: "#000",
          align: 'center',
          fontSize: 35 * scale,
          padding: [1, 0]
      },
      blue: {
          color: '#49dff0',
          fontSize: 35 * scale,
          align: 'center'
      },
      SSSS: {
          color: '#49dff0',
          fontSize: 19.5 * scale,
          align: 'center'
      },
      hr: {
          borderColor: '#0b5263',
          width: '100%',
          borderWidth: 1,
          height: 0,
      }
  }
  option = {
      backgroundColor: '#F8F8FF',
      title: {
          text: '单位:万元',
          left: 'center',
          top: '15%',
          left: '88%',
          padding: [0, 0],
          textStyle: {
              fontWeight: '70', //粗细4
              fontSize: 17 * scale,
              align: 'center'
          }
      },
      legend: {
          selectedMode: false,
          formatter: function(name) {
              var total = 0; //各科正确率总和
              var averagePercent; //综合正确率
              echartData.forEach(function(value, index, array) {
                  total += parseInt(value.value);
              });
              // return   [total1, total].join('\n') ;
          },
          data: [echartData[0].name],
          left: 'center',
          top: '42%',
          icon: 'none',
          align: 'center',
          textStyle: {
              color: "red",
              fontSize: 32 * scale,
              rich: rich
          },
      },
      series: [{
          name: '各个产品金额数',
          type: 'pie',
          radius: ['40%', '60%'],
          hoverAnimation: false,
          color: ['#c487ee', '#49dff0', '#FF7256', '#6f81da'],
          label: {
              normal: {
                  formatter: function(params, ticket, callback) {
                      var total = 0; //金额数量
                      var percent = 0; //金额占比
                      echartData.forEach(function(value, index, array) {
                          total += parseInt(value.value);
                      });
                      percent = ((params.value / total) * 100).toFixed(1);
                      return '{SSSS|}\n{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                  },
                  rich: rich
              },
          },
          labelLine: {
              normal: {
                  length: 45 * scale,
                  length2: 11,
                  lineStyle: {
                      color: '#0b5263'
                  }
              }
          },
          data: echartData
      }, {
          name: '',
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '60%'],
          startAngle: '135',
          data: [{

              "value": '',
              "name": "",
              "label": {
                  "normal": {
                      "show": true,
                      "formatter": '{a|总金额}\n {c|' + (parseInt(echartData[0].value) + parseInt(echartData[1].value) + parseInt(echartData[2].value) + parseInt(echartData[3].value)) + '} ',
                      rich: {
                          c: {
                              color: 'red',
                              fontSize: 55,
                              align: 'center',
                              fontWeight: 'bold',
                              lineHeight: 65
                          },
                          b: {
                              color: '#FBFE27',
                              fontSize: 25,
                              lineHeight: 5
                          },
                          a: {
                              align: 'center',
                              color: 'rgb(98,137,169)',
                              fontSize: 34,
                              height: 44
                          },
                      },
                      "textStyle": {
                          "fontSize": 44,
                          "fontWeight": "bold"
                      },
                      "position": "center"

                  }
              }

          }, ]
      }]
  };