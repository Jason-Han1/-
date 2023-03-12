var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};

var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        padding:[15,0,0,0],
        show: true,
        textStyle: {
            fontSize: '14',
            fontWeight: 'normal',
            color: '#2487F5'
        }
    }
};

var data = [
          {
              name: '极高风险国家',
              value: 6
          },{
              name: '高风险国家',
              value: 16
          },{
              name: '较高风险国家',
              value: 27
          },{
              name: '中等风险国家',
              value: 54
          },{
              name: '低风险国家',
              value: 92
          }]
          var titleArr= [], seriesArr=[];
          var sCenter,TitleXy = {};
          var colors=[['#D61D0F', '#E7E7E7'],['#FF4A1A', '#E7E7E7'],['#FF800D', '#E7E7E7'], ['#FDC210', '#E7E7E7'],['#2087ED', '#E7E7E7']]
          data.forEach(function(item, index){
            if(index < 3) {
                sCenter = [index * 35 + 15 +'%', '30%']
                TitleXy = {
                  left: index * 35 + 15 +'%',
                  top: '26%'
                }
              }else {
                sCenter = [(index-2) * 35  +'%', '60%']
                TitleXy = {
                  left: (index-2) * 35 +'%',
                  top: '56%'
                }
              }
              titleArr.push(
                  {
                      text:item.name,
                      left: TitleXy.left,
                      top: TitleXy.top,
                      textAlign: 'center',
                      textStyle: {
                          fontWeight: 'bold',
                          fontSize: '12',
                          color: colors[index][0],
                          textAlign: 'center',
                      },
                  }        
              );
              seriesArr.push(
                  {
                      name: item.name,
                      type: 'pie',
                    hoverAnimation: false, //鼠标经过的特效
                      radius: [70, 90],
                       startAngle: 225,
                      itemStyle:  {
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
                      center: sCenter,
                      data: [{
                            value: 100,
                            itemStyle: {
                                normal: {
                                    color: '#ccc'
                                }
                            },
                      }, {
                          value:35,
                          itemStyle: placeHolderStyle,
                      }]
                  }    
              )
              seriesArr.push(
                  {
                      name: item.name,
                      type: 'pie',
                    hoverAnimation: false, //鼠标经过的特效
                      radius: [70, 90],
                      startAngle: 225,
                      itemStyle:  {
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
                      center: sCenter,
                      data: [{
                          value: item.value,
                          label: dataStyle,
                      }, {
                          value:35,
                          name: 'invisible',
                          itemStyle: placeHolderStyle,
                      }]
                  }    
              )
          });
        option = {
              backgroundColor: "#fff",
              title:titleArr,
              series: seriesArr
          }