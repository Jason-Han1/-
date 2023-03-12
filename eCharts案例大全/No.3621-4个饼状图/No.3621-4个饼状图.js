 let unit='公顷';
      var fourPieData = [
        {
          name: '社区总数',
          max: 3500,
          value: 1185
        }, {
          name: '村总数',
          max: 3200,
          value: 2011
        }, {
          name: '社区工作者数',
          max: 30000,
          value: 24737
        }, {
          name: '社会工作师数',
          max: 30000,
          value: 8757
        }];
 let dataArr = [];
      for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 25,
            itemStyle: {
              normal: {
                color: "#2ac9e1",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        }
      };
      var titleArr = []; var seriesArr = [];
      var colors = [['#57bbf7', '#2657a4'], ['#ffc969', '#2657a4'], ['#f38b97', '#2657a4'], ['#b1d882', '#2657a4'], ['#c0acf9', '#2657a4']]
      fourPieData.forEach(function (item, index) {
        titleArr.push(
          {
            text: '{a|' + item.name + '}\n{b|' + item.value + '}{c|' + unit + '}',
            textAlign: 'center',
            left: index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%',//如果一行四个就是按25*
            top: index < 2 ? "30%" : "65%",
            textStyle: {
                textAlign: 'center',
              rich: {
                a: {
                  fontSize: 12,
                  color: '#bed7f8',
                  textAlign:'center',
                //   padding: [0, 0, 0, 0]
                },
                b: {
                  fontSize: 14,
                  color: colors[index][0],
                  padding: [6, 0, 6, 0]
                },
                c: {
                  fontSize: 12,
                  color: '#bed7f8',
                  padding: [5, 5]
                }
              }
            }
          }
        );
        seriesArr.push(
          {
            type: 'pie',
            zlevel: 3,
            silent: true,
            center: [index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%', index < 2 ? "20%" : "55%"],
            radius: [65, 66],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: dataArr
          },
          {
            name: item.name,
            type: 'pie',
            clockWise: false,
            radius: [45, 60],
            itemStyle: {
              normal: {
                color: colors[index][0],
                shadowColor: colors[index][0],
                shadowBlur: 0,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
              }
            },
            hoverAnimation: false,
            center: [index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%', index < 2 ? "20%" : "55%"],
            data: [{
              value: item.value,
              label: {
                normal: {
                  formatter: '{d}%',
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: colors[index][0]  //跟随其他颜色
                  }
                }
              },
            }, {
              value: item.max - item.value,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: colors[index][1]
                },
                emphasis: {
                  color: colors[index][1]
                }
              }
            }]
          }
        );
      });
      var option = {
        backgroundColor: "#003366",
        title: titleArr,
        series: seriesArr
      };