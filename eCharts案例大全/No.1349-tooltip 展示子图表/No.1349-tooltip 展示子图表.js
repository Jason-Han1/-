option = {
  
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  tooltip: {
    formatter: function (params) {
                    console.log(params);
                    var tipHtml = '';
                    tipHtml =
                        '<div style="height:250px;width:300px;border-radius:5px;box-shadow:0 0 10px 5px #aaa;z-index:1000;">' +
                        
                        `<span>${params.name}</span>` +

                        '<div id="tooltipBarId" style="height:230px;width:100%;border-radius:0 0 5px 0;background:#fff"></div>' +
                        '</div>';
                    setTimeout(function () {
                        tooltipCharts(params.name);
                    }, 10);
                    return tipHtml;
                }
            },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
   function tooltipCharts() {
            var myChart1 = echarts.init(document.getElementById('tooltipBarId'));
            var option = {
                tooltip: {},
                title: {
                    text: '执法人/执法人',
                    left: 'center',
                    textStyle: {
                        fontSize: 12,
                    }
                },
                xAxis: {
                    type: 'category',
                    interval: true,
                    data: ['Mon', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value'
                },
                color: ['#4FA8F9', '#F5A623'],
                grid: {
                    show: true,
                    backgroundColor: '#FAFAFA',
                    left: 30,
                    right: 20,
                    top: 50
                },
                series: [{
                    type: 'line',
                    data: [120, 200, 110, 130],
                }]
            };
            myChart1.setOption(option);
        }