
   let datas = {
        data: ['', 960],
        data1: [10, ''],
        xdata: ['0分钟', '20分钟', '40分钟', '60分钟', '80分钟'],
        leftname: ['A', 'B'],
        legend: [],
        unit: '分钟',
      };
       let fontSize =18; //字体大小
      let textColor = '#000';
      let nameTextColor = '#767d87';
      let axisLineColor = '#0b374c';
      let splitLineColor = '#0b374c';
      let legendData = datas.legend;
option = {
        //   color:["rgba(53, 196, 224,1)", 'rgba(224, 50, 51,1)'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          borderWidth: 1,
          borderColor: '#04374f',
          backgroundColor: 'rgba(4,44,63,.6)',
          textStyle: {
            color: '#fff',
            fontSize,
          },
        },
        legend: {
          show: true,
          itemWidth: 20,
          itemHeight: 5,
          icon: 'rect',
          right: '5%',
          textStyle: {
            color: '#FFF',
            fontSize,
          },
          data: legendData,
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          top: '10%',
          containLabel: true,
        },
        xAxis: {
          name: '分钟',
          nameTextStyle: {
            color: '#fff',
            fontSize,
          },
          type: 'value',
          max:60*16,
          // splitNumber:13,
          interval:60,
          axisLabel: {
            color: textColor,
            fontSize,
            // interval: 3,
          },
          splitLine: {
            lineStyle: {
              color: splitLineColor,
            },
          },
          data: datas.xdata,
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            color: textColor,
            fontSize,
          },
          data: datas.leftname,
        },
        series: [
          {
            name: datas.legend[0],
            type: 'bar',
            barWidth: '40%',
            barGap: '80%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(14, 80, 87,.01)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(14, 80, 87,.5)',
                  },
                ]),
                borderWidth: 3,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(53, 196, 224,.01)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(53, 196, 224,1)',
                  },
                ]),
              },
            },
            label: {
              show: true,
              fontSize,
              position: 'right',
              textStyle: {
                color: '#fff',
              },
            },
            data: datas.data,
          },
          {
            name: datas.legend[1],
            type: 'bar',
            barWidth: '40%',
            barGap: '-80%',
            itemStyle: {
              normal: {
                // color: 'rgba(37, 221, 112,.6)',
                // color: 'rgba(14, 80, 87,.5)',
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(224, 50, 51,.01)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(101, 33, 44,.5)',
                  },
                ]),
                borderWidth: 3,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(224, 50, 51,.01)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(224, 50, 51,1)',
                  },
                ]),
              },
            },
            label: {
              show: true,
              fontSize,
              position: 'right',
              textStyle: {
                color: '#fff',
              },
            },
            data: datas.data1,
          },
        ],
      };