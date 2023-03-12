
        let icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAA4CAYAAAAPW43lAAAACXBIWXMAACbBAAAmwQFynQtOAAACvElEQVR4nO2cy1HDMBCGf9wAUAGpwKQDTAVABYgO4OpTTr4SKkBUEOjAdEBcAXRAKggjsw5O4kcext6N95vJ5JAZJ9KXlVfSykfz+Ry7EprkBMA1gCG9Lna+mHxmAD4AxO49sv7rPi3aSUxokgDAPYCrg+3m/XGinJxxZP2Pba+2lRgSYgGctdpE+by7P/I2gjYSE5pkQEL6PFQ1wROAUWT977pr1YoJTXJNUo4ZNVAyUwCmLnq8qg9Dk7j7yESlNMq5SxDoD19KacSEJnFRciux5YK4i6xvi35uoRiKlMe+91pLXEbWj1e/ak0MhdjksNrOGpdWDyPrf+Z/5NI9Jpd9Ke1xTPMdlIrR7KszzkOTjPJfvhjKdAjrnKUhLR8x4372BxvcSLWImjRiNFpYcepWBrKIMX3vDUakLjxautdVYj78iqH9FIUPLkMbeLTBpfAiUDE8SSNG91j4EVQu+yvdoWJ4MlAxPDlTMTz5UjE8+VQxTPGo5knhRexRWafCi3QoWysEUDonVjH8mLpdTI/KNd/63huMSIthsqxMt5X58CeGCs6++t4jDHjJCs7z8xjdXu6WWb4YYyGGokbnNN0xzldjrs78DZlT2sVlYksFf0tiyJgOae0yK6q7WFsro0OdD4fXfrYEqwXlKNsoi6zv0ueX3nZVe9yVnSyrPOoXmsQNa8/im8+PdPgqOheTUbnsT6edbjQhaJQpDV+VS2G1+zF0zxlqKt0ITySldkVfz/m3w/+c819Fn4yxEdmTMUZFWVcdTTxLJqCXPkvm71kycd09pI69xLTBPx1rd4uFrCfS7IsxqAObnFOxlwIplZgNyhEhBZJKZBuQI0YKpNUu7yFHlBRILCrfQY44KZBa7b+FHJFSIPkYxgZyxEqB9PMxFXJES8EhHFwqkCNeCiTM/DeFVggyUbIB8ANLqAiKvCvPcQAAAABJRU5ErkJggg==';
         option = {
          color: ['#e54035', '#0aacff', '#0ab120', '#e50ee6', '#e6cf1e'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: function(params) {
              return params[0].name + ': ' + params[0].value;
            }
          },
          xAxis: {
            data: ['亚洲', '非洲', '欧洲', '南美', '北美'],
            axisTick: {
              show: false
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              textStyle: {
                color: '#FFFFFF',
                fontSize:12,
                fontWeight:400
              },
              lineStyle: {
                color: '#FFFFFF',
                fontSize:12,
                fontWeight:400
              },
            }
          },
          yAxis: {
            splitLine: {
              show: false,
              shadowColor:'rgb(170,170,170)'

            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              /*lineStyle: {
                color: '#FFFFFF',
                fontSize:12
              },*/
            },
            axisLabel: {
              show: true,
              color:'#FFFFFF'
            },//分割线
            splitNumber: 9,
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0)','rgba(250,250,250,0.05)'],
              }
            }
          },
          series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-50%',
            symbol: 'path://M72.43,111.16C57.08,111.16,48.42,0,36.22,0S15.35,111.16,0,111.16',
            label: {
              normal: {
                show: true,
                position: 'top',
                //字体颜色
                color: '#FFFFFF',
                backgroundColor:{
                  image: icon,
                },
                /*borderRadius:12,*/
                padding:[5,12,5,12],
              }
            },
            data: [123, 90, 75, 18, 12],
            z: 10,
            itemStyle: {
              normal: {
                opacity: 0.8,
                color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#7168d5' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#2e7af2' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
              emphasis: {
                opacity: 1
              }
            },
          }]
        };
       