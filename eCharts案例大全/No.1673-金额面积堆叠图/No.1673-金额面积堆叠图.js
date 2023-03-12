 let titles = ['2021-01-01','2021-01-02','2021-01-03','2021-01-04','2021-01-05','2021-01-06','2021-01-07','2021-01-08','2021-01-09','2021-01-10','2021-01-11','2021-01-12','2021-01-13','2021-01-14','2021-01-15',], 
 v1s = [11234,12234,17234,19234,13234,19234,12345,15678,19023,12367,14578,13101,10234,11234,12342], 
 v2s = [7895,2356,5234,4567,4234,8654,4567,4354,7853,4578,4589,10234,3451,3456,7890,],
 v3s = [5667,2345,7543,2345,4587,2378,13478,5467,6790,3410,2367,4532,6709,5023,3456,];
option = {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 12,
          },
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#333',
            }
          }
        },
        legend: {
          data: ['早餐实收金额(元)', '午餐实收金额(元)', '晚餐实收金额(元)'],
          bottom: 15,
          itemHeight: 12,
          itemWidth: 12,
          icon: 'rect',
          itemStyle: {
            color: 'inherit'
          },
          textStyle: {
            color: '#333333',
            fontSize: 10
          }
        },
        grid: {
          left: 10,
          right: 20,
          bottom: '8%',
          top: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: titles,
            axisLabel: {
              fontSize: 10,
              rotate: 30,
              color: '#333'
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              fontSize: 10,
              color: '#333'
            },
          }
        ],
        series: [
          {
            name: '早餐实收金额(元)',
            type: 'line',
            stack: '总量',
            //  smooth:true,
            symbol: "none",
            z: 3,
            itemStyle: {
              color: '#3a7899'
            },
            areaStyle: {
              color: '#3a7899'
            },
            lineStyle: {
              width: 0
            },
            data: v1s
          },
          {
            name: '午餐实收金额(元)',
            type: 'line',
            stack: '总量',
            //  smooth:true,
            z: 2,
            symbol: "none",
            itemStyle: {
              color: '#7eb6bc'
            },
            areaStyle: {
              color: '#7eb6bc'
            },
            lineStyle: {
              width: 0
            },
            data: v2s
          },
          {
            name: '晚餐实收金额(元)',
            type: 'line',
            // smooth:true,
            z: 1,
            stack: '总量',
            symbol: "none",
            itemStyle: {
              color: '#b6e4eb'
            },
            areaStyle: {
              color: '#b6e4eb'
            },
            lineStyle: {
              width: 0
            },
            data: v3s
          }]
      };