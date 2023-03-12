 var data = [
          { 'value':  0.1, 'name': '新冠易感' },
          { 'value': 20, 'name': '肺功能' },
          { 'value': 20, 'name': '体脂' },
          { 'value': 20, 'name': '血糖' },
          { 'value': 20, 'name': '体温' },
          { 'value': 20, 'name': '心电' },
          { 'value': 10, 'name': '血氧' },
          { 'value': 10, 'name': '血压' },
          { 'value': 10, 'name': '舌象' }];

        var datal = data.length, num = 0;
        for (var i = 0; i < datal; i++) {
          if (data[i].value == 0.1) {
            num = num + 1;
          }
        }

        if (num === 8) {
          var center = ['50%', '63%'], radiusa = ['60%', '70%'], radiusb = ['30%', '66%'];
        }else if (num === 7) {
          var center = ['50%', '62%'], radiusa = ['62%', '72%'], radiusb = ['30%', '66%'];
        }else if (num === 6) {
          var center = ['50%', '60%'], radiusa = ['65%', '75%'], radiusb = ['30%', '66%'];
        } else if (num === 5 || num === 4 || num === 3) {
          var center = ['50%', '55%'], radiusa = ['70%', '80%'], radiusb = ['30%', '71%'];
        } else if (num === 2 || num === 1) {
          var center = ['50%', '55%'], radiusa = ['75%', '85%'], radiusb = ['35%', '76%'];
        } else {
          var center = ['50%', '52.5%'], radiusa = ['80%', '90%'], radiusb = ['40%', '81%'];
        }
option = {
            legend: {
              show: false,
              orient: 'vertical',
              top: '0',
              right: '0',
              textStyle: {
                color: '#666666',
                fontWeight: 'normal'
              }
            },
            series: [
              {
                type: 'pie',
                selectedMode: false,
                //radius: ['40%', '81%'],
                radius: radiusb,
                center: center,
                //roseType: 'radius',
                label: {
                  normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                      fontSize: '14'
                    },
                    formatter: function(params) {
                      return (params.value == 0.1 ? 0 : params.value) + '{fonts|%}';
                    },
                    rich: {
                      fonts: {
                        color: '#FFFFFF',
                        fontSize: '12'
                      }
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false,
                    length: 5
                  }
                },
                data: data,//.sort(function (a, b) { return a.value - b.value; }),
                color: ['#3000FF','#3AA8B0', '#2CC9A9', '#00C973', '#41ADE2', '#FACC3D', '#EF7D16', '#F14C34', '#904AAB'],
                silent: true
              },
              {
                type: 'pie',
                //radius: ['80%', '90%'],
                radius: radiusa,
                center: center,
                label: {
                  normal: {
                    position: 'outside',
                    formatter: function(params) {
                      return params.name;
                    },
                    textStyle: {
                      fontSize: '12'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: true,
                    length: 5
                  }
                },
                data: data,
                silent: true
              }
            ]
          };