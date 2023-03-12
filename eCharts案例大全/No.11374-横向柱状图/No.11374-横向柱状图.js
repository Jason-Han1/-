// const value = [];
//     const name = [];
//     toJS(data).reverse().map((item) => {
//       value.push(item.value);
//       name.push(item.name);
//     });
//     if (toJS(this.data).length < 5) {
//       for (let i = toJS(this.data).length; i < 5; i += 1) {
//         value.unshift('');
//         name.unshift('');
//       }
//     }
//     let yMax = '';
//     for (let i = 0; i < value.length; i += 1) {
//       yMax = value[i];
//     }
//     yMax += (yMax / 10) + 1;

 var name=['宿州', '合肥', '马鞍山', '芜湖', '淮南'];
 var value = [290, 211, 200, 100, 50];
 var yMax = 300;
   option = {
      backgroundColor: '#fff',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
        formatter: '{b}',
      },
      grid: {
        left: '30px',
        right: '50px',
        top: '5px',
        bottom: '10px',
      },
      color: ['#61A8FF'], // 进度条颜色
      xAxis: [
        {
          show: false,
        },
        // 由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
          show: false,
        },
      ],
      yAxis: [{
        axisLabel: {
          show: true,
          margin: -30,
          align: 'left',
          verticalAlign: 'bottom',
          padding: [0, 0, 12, -30],
          color: '#666',
        },
        axisTick: {
          show: false, // 隐藏Y轴刻度
        },
        axisLine: {
          show: false, // 隐藏Y轴线段
        },
        data: name,
      }, { // 第二个y轴 为了让数据在右侧末尾显示
        show: true,
        inverse: false,
        data: value,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#333',
          },
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      }, { // 第三个
        show: true,
        data: value,
        position: 'left',
        axisLabel: {
          margin: 3,
          formatter: (data) => {
            if (data) {
              return '{bw|}';
            } else if (!data) {
              return '{nbw|}';
            }
          },

          rich: {
            bw: {
              backgroundColor: '#07B87E',
              borderRadius: 0,
              align: 'center',
              width: 2,
              height: 16,
            },
            nbw: {
              backgroundColor: '#07B87E',
              borderRadius: 0,
              align: 'center',
              width: 0,
              height: 0,
            },
          },
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      }],
      series: [
        // 蓝条--------------------我是分割线君------------------------------//
        {
          show: true,
          tooltip: {
            show: false,
          },
          type: 'bar',
          barGap: '-100%',
          barWidth: '8', // 统计条宽度
          itemStyle: {
            normal: {
              color: {
                type: 'bar',
                colorStops: [
                  {
                    offset: 0,
                    color: '#07B87E', // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: '#BFFCE8', // 0% 处的颜色
                  }],
                // globalCoord: false, // 缺省为 false
              },
            },
          },
          // max: 1,
          label: {
            normal: {
              // show: true,
              textStyle: {
                color: '#000000', // 颜色
              },
              position: 'right',
            },
          },
          labelLine: {
            show: false,
          },
          z: 2,
          data: value,
        },
        // 背景色--------------------我是分割线君------------------------------//
        {
          show: true,
          tooltip: {
            show: false,
          },
          type: 'bar',
          barGap: '-100%',
          barWidth: '16', // 统计条宽度
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: 'none', // '设置none' 既可以不用设置上面条的z
              borderColor: '#07B87E',
              borderWidth: 2,
            },
          },
          data: value.map((d) => {
            if (d === '') {
              return null;
            }
            return yMax;
          }),
        },
      ],
    }