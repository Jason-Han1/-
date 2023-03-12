var uploadedDataURL = "/asset/get/s/data-1640684553020-h06CwCuob.tsx";


 var dataName = ['外购', '自发电', '总发电量']
  var dataValue = [20, 30, 50]
option =  {
      tooltip: {},
      grid: [{ x: '10%', y: '7%', width: '25%', height: '80%', left: 70 }],
      /**    总发电量 */
      color: ['#73ACFF', '#DECD85', '#64B7FF'],
      
      xAxis: {
        show: false,
        type: 'value',
        gridIndex: 0,
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          fontSize: '12px',
          fontFamily: 'PingFangSC-Semibold, PingFang SC',
          fontWeight: 600,
          color: '#000',
          verticalAlign: 'middle',
          align: 'left',
          padding: [2, 2, 2, -50],
        },
        gridIndex: 0,
        data: dataName,
      },
      series: [
        {
          name: '',
          type: 'bar',
          stack: 'Total',
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent',
            },
          },
          data: [dataValue[1], 0, 0],
        },
        {
          name: '',
          type: 'bar',
          stack: 'Total',
          barWidth: 20,
          label: {
            normal: {
              show: true,
              color: '#fff',
              fontSize: '12px',
              fontFamily: 'DINAlternate-Bold, DINAlternate',
              fontWeight: 'bold',
            },
          },
          itemStyle: {
            barBorderRadius: 120,
            color: (params) => {
              // 首先定义一个数组
              const colorList = ['#73ACFF', '#DECD85', '#64B7FF'];
              return colorList[params.dataIndex];
            },
            // 以下为是否显示
            label: {
              show: false,
            },
          },
          data: dataValue,
        },
        {
          type: 'pie',
          data: [
            { value: dataValue[0], name: dataName[0] },
            { value: dataValue[1], name: dataName[1] },
            { value: dataValue[2], name: dataName[2] },
          ],
          radius: '50%',
          center: ['75%', '50%'],
        },
      ],
    };
