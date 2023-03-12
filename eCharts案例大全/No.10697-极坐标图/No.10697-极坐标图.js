option = {
    color: ['#70e7ef'],
    title: {
        text: '极坐标图',
        x: 'center',
        textStyle: {
            color: '#30465D',
            fontSize: '14',
            fontWeight: 'bold'
        }
    },
    angleAxis: {
        type: 'category',
        data: ['五险一金', '补充医疗保险','年底双薪','员工旅游', '定期体检','加班补助', '绩效奖金', '带薪年假'],
        boundaryGap: true,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#30465D'
            }
        },
        splitLine: {
            show: true,
        }
    },
    radiusAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
            showMaxLabel: true,
            color: '#30465D',
        },
        z: 1
    },
    tooltip: {},
    polar: {
        shape:'circle',
        radius:220,
    },
   
    series: [{
        type: 'line',
        smooth:true,
        data: [[100,'五险一金'], [18.70,'补充医疗保险'],[45.53,'年底双薪'],[27.64,'员工旅游'],[36.59, '定期体检'],[26.83,'加班补助'],[72.36,'绩效奖金'],[81.3,'带薪年假'],[100,'五险一金']],
        coordinateSystem: 'polar',
          itemStyle:{
              normal: {
                          borderColor: '#5CA6EB',
                          borderWidth: 4,
                      }
                  },
          areaStyle: {
              normal: {
                  color: {
                      type: 'radial',
                      x: 0.5, y: 0.2, x2: 0.8, y2: 0,
                      colorStops: [{
                          offset: 0, color: '#D8E8FC' // 0% 处的颜色
                      }, {
                          offset: 1, color: '#81BBF1' // 100% 处的颜色
                      }],
    
                  },
                  //color: '#37A2DA',
              }
          },
          lineStyle: {
              normal: {
                color: '#81BBF1',
                opacity:0.5,
              },
          },
          label: {
              normal: {
                  show: true,
                  position: 'inside',
                  size: 12,
                  fontSize: 18,
                  color: '#686B6D',
                  fontWeight: 'bolder',
                  formatter: function (params) {
                   
                      return (params.value[0]).toFixed(2) + "%";
                  }
              }
          },
          tooltip:{
          trigger: 'item',
            formatter: function (params) {
                var content = params.name;
                content = content +':'+ params.value+'%';
                return content;
            }
          }
    }]
};