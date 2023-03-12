var dataUitName1 = [
    "楼栋户数",
    "平房户数",
]
var departmentdata1_1 = [10, 20]
var departmentdata2_1 = [5, 10]
option ={
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: '5%',
          top: '2%',
          textStyle: {
            color: '#fff',
            fontSize:16
          },
        },
        grid: {
          left: 10,
          right: 10,
          top: 40,
          bottom:20,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: dataUitName1,
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 16,
              fontWeight: 900,
            },
          },
          offset: 18,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#2E344B',
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
                show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 15],
            symbolOffset: [-19, -10],
            symbolPosition: 'end',
            label: {
              normal: {
                show: true,
                position: 'top',
                offset:[-18, 0]
              },
            },
            data: departmentdata1_1,
            color: '#1E93C6',
            tooltip: {
              show: false,
            },
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 15],
            symbolOffset: [-19, 10],
            data: departmentdata1_1,
            color: '#1E93C6',
            tooltip: {
              show: false,
            },
          },
          {
            type: 'bar',
            name: '户数',
            itemStyle: {
              normal: {
                opacity: 0.5,
              },
            },
            barWidth: '30',
            data: departmentdata1_1,
            color: '#1E93C6',
          },

          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 15],
            symbolOffset: [19, -10],
            symbolPosition: 'end',
            label: {
              show: true,
              position: 'top',
              offset:[18, 0]
            },
            data: departmentdata2_1,
            color: '#1AAE96',
            tooltip: {
              show: false,
            },
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 15],
            symbolOffset: [19, 10],
            data: departmentdata2_1,
            color: '#1AAE96',
            tooltip: {
              show: false,
            },
          },
          {
            type: 'bar',
            name: '户数空置',
            itemStyle: {
              normal: {
                opacity: 0.5,
              },
            },
            barWidth: '30',
            data: departmentdata2_1,
            color: '#1AAE96',
          },
        ],
      }