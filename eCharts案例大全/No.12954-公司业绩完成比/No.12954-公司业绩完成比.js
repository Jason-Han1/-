// 本月已经完成/目标
    var baifenbi = [0.084, 0.113];
    var wancheng = [167976, 56596];
    var zongjine = [2000000, 500000];
    var gs = ['公司1', '公司2'];
    var myColor = ['rgba(62,255,30,1)', 'rgba(255,242,30,1)', 'rgba(37,188,244,1)', 'rgba(255,72,30,1)'];
    var myColorBg = ['rgba(62,255,30,0.15)', 'rgba(255,242,30,0.15)', 'rgba(37,188,244,0.15)', 'rgba(255,72,30,0.15)'];
    option = {
        backgroundColor: '#fff',
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '5%',
        containLabel: true
      },
      xAxis: [{
          show: false,
        },
        {
          show: false,
        }
      ],
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        //背景色 完成、总金额
        {
          show: true,
          type: 'bar',
          barGap: '-100%',
          barWidth: '10%',
          z: 1,
          itemStyle: {
            normal: {
              color: function(params) {
                var num = myColorBg.length;
                return myColorBg[params.dataIndex % num]
              }
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#333',
              },
              position: [200, '-20'],
              formatter: function(data) {
                return wancheng[data.dataIndex] + '/' + zongjine[data.dataIndex];
              }
            }
          },
          data: [1, 1],
        },
        //亮色条 百分比
        {
          show: true,
          type: 'bar',
          barGap: '-100%',
          barWidth: '10%',
          z: 2,
          itemStyle: {
            normal: {
              color: function(params) {
                var num = myColor.length;
                return myColor[params.dataIndex % num]
              }
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
              },
              position: 'inside',
              formatter: function(data) {
                return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
              }
            }
          },
          data: baifenbi,
        },
        //公司名称
        {
          show: true,
          type: 'bar',
          xAxisIndex: 1, //代表使用第二个X轴刻度
          barGap: '-100%',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 200,
              color: 'transparent'
            }
          },
          label: {
            normal: {
              show: true,
              position: [0, '-20'],
              textStyle: {
                color: '#333',
              },
              formatter: function(data) {
                return gs[data.dataIndex];
              }
            }
          },
          data: [1, 1]
        }
      ]
    };