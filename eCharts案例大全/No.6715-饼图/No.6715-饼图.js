var data=[{"value":0.1,"name":"正常"},{"value":50,"name":"偏高"},{"value":50,"name":"偏低"}];
option = {
            legend: {
              show: true,
              orient: 'horizontal',
              top: '1%',
              left: '8%',
              padding: 0,
              itemWidth: 8,
              itemHeight: 8,
              textStyle: {
                color: '#666666',
                fontWeight: 'normal',
                fontSize: '10'
              }
            },
            series: [
              {
                type: 'pie',
                selectedMode: false,
                radius: ['30%', '70%'],
                center: ['50%', '60%'],
                //roseType: 'radius',
                label: {
                  normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {
                      fontSize: '12'
                    },
                    formatter: function(params) {
                      return (params.value == 0.1 ? 0 : params.value) + '{fonts|%}';
                    },
                    rich: {
                      fonts: {
                        // color:"#FFFFFF",
                        fontSize: '9'
                      }
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: true,
                    length: 0
                  }
                },
                data: data,//.sort(function (a, b) { return a.value - b.value; })
                color: ['#0AAA89', '#F14C34', '#EF7D16'],
                silent: true,
                animation: false
              }/*,
                      {
                          type: 'pie',
                          radius: ['70%', '80%'],
                          center: ['50%', '55%'],
                          label: {
                              normal: {
                                  position: 'outside',
                                  formatter : function (params){
                                      return params.name;
                                  },
                                  textStyle: {
                                      fontSize: "12"
                                  }
                              }
                          },
                          labelLine: {
                              normal: {
                                  show: true,
                                  length:1
                              }
                          },
                          data: data,
                          silent:true,
                          animation:false
                      }*/
            ]
          };