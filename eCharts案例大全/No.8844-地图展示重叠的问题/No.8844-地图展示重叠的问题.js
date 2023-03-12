let self = this;


        let chart = self.$echarts.init(document.getElementById(id));

        self.$echarts.registerMap('TJ', this.geoJson);

          chart.setOption(  {
          title: {
            text: name,

          },
          geo: {
            map: 'TJ'
          },

          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} '
          },
          toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            /*   min: 1,
               max: 5,*/
            /*splitNumber: 5,*/
            categories: ['轻微','轻度', '中度', '重度','严重'],
            color: ['#fa0001','#ffb90f','#efef01','#01cd66','#00fe00'],
            textStyle: {
              color: '#000'
            }
          },
          series: [
            {
              name: 'TJ',
              type: 'map',
              mapType: 'TJ', // 自定义扩展图表类型
              zoom:1.3,
              /*roam: false,*/
              itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
              },
              label: {
                normal: {
                  textStyle: {
                    fontSize: 11,
                  }
                }
              },
              data:data,
            }
          ]
        });