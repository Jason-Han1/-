areaData=[{name: "aa",max: 50,num: 35},{name: "bb",max: 50,num: 30},{name: "cc",max: 50,num: 40},{name: "dd",max: 50,num: 40},{name: "ee",max: 50,num:50}]
areaValueData=[35,30,40,40,50]
option = {
    title: {
        text: '雷达图'
    },
    legend: {
          show: false
        },

        radar: {
          // shape: 'circle',
          center: ['50%', '50%'],
          radius: '70%',
          triggerEvent: true,
          name: {
            color: '#3366FF',
            fontSize: 12,
            formatter: function (value, indicator) {

              var num = indicator.num;
              return value + '('+num+'人)';
            }
          },
          nameGap: '10',
          indicator: areaData,
          splitArea: {
            show:false,
            areaStyle: {
              // color: [
              //   'rgba(112, 111, 255, 0.1)', 'rgba(112, 111, 255, 0.2)',
              //   'rgba(112, 111, 255, 0.4)', 'rgba(112, 111, 255, 0.6)',
              //   'rgba(112, 111, 255, 0.8)', 'rgba(112, 111, 255, 1)'
              // ].reverse()
            }
          },
          // axisLabel:{//展示刻度
          //     show: true
          // },
          axisLine: { //
            lineStyle: {
              color: '#D1D1D1'
            }
          },
          splitLine: {
            lineStyle: {
              width: 1,
              color: '#D1D1D1'
            }
          },

        },

        series: [{
          name: '区域分布',
          type: 'radar',
          areaStyle: {
            normal: {
                color: 'rgba(51, 102, 255, .45)'
            }
          },
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: 'rgba(51, 102, 255, 1)',
              width: 2
            }
          },
          data: [{
            value: areaValueData,
            name: '人数'
          }]
        }]
};