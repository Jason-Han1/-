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
            if(index < 2) {
                sCenter = [index * 35 + 30 +'%', '30%']
                TitleXy = {
                  left: index * 35 + 30 +'%',
                  top: '42%'
                }
              }else {
                sCenter = [(index-2) * 35 + 14 +'%', '60%']
                TitleXy = {
                  left: (index-2) * 35 + 14 +'%',
                  top: '72%'
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
                          fontSize: '20',
                          color: colors[index][0],
                          textAlign: 'center',
                      },
                  }        
              );
              seriesArr.push(
                  {
                      name: item.name,
                      type: 'pie',
                      clockWise: false,
                      radius: [70, 90],
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
                          label: {
                              normal: {
                                  formatter: function(params){
                                      return params.value+'%';
                                  },
                                  position: 'center',
                                  show: true,
                                  textStyle: {
                                      fontSize: '20',
                                      fontWeight: 'bold',
                                      color: colors[index][0]
                                  }
                              }
                          },
                      }, {
                          value: 100-item.value,
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
              )
          });
        option = {
              backgroundColor: "#fff",
              title:titleArr,
              series: seriesArr
          }