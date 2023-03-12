let   everyDepartment = {
    stages: [
      { name: '审计监察部', max: 100, num: 1 },
      { name: '行政事务部', max: 100, num: 2 },
      { name: '信息导航管理', max: 100, num: 3 },
      { name: '安全质量部', max: 100, num: 4 },
      { name: '安检护卫部', max: 100, num: 5 },
    ],
    scores: [43, 90, 80, 53, 78, 89, 77, 50],
  };


  function contains(arr, obj) {
      var i = arr.length;
      while (i--) {
        if (arr[i].name === obj) {
          return i;
        }
      }
      return false;
    }
    // 格式化数据
    function formatNumber(n) {
      var b = parseInt(n).toString();
      var len = b.length;
      if (len <= 3) { return b; }
      var r = len % 3;
      return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
    }
option = {
      backgroundColor: '#0A2E5D',
      color: ['#35F3FF'],
      radar: {
        center: ['50%', '58%'],
        radius: '70%',
        triggerEvent: true,
        splitNumber: 4,
        name: {
          rich: {
            num: {
              fontSize: 18,
              color: '#0079FE',
              fontWeight: 700,
              padding: [0, 0, 0, 15],
            },
            a: {
              fontSize: 16,
              color: '#ccc',
              lineHeight: '40',
            },
            b: {
              color: '#00E4FF',
              fontSize: 18,
              fontWeight: 700,
              padding: [0, 0, 0, 10],
              align: 'right'
            },
            c: {
              color: '#fff',
              fontSize: 16,
            },
            d: {
              color: '#00E4FF',
              fontSize: 12,
              padding: [0, 15, 0, 0],
              align: 'right'
            },
            triggerEvent: true,
          },
          formatter: (a, index) => {

            let values = a.length > 6 ? a.slice(0, 6) + '...' : a;
            let i = contains(everyDepartment.stages, a); // 处理对应要显示的样式
            return `{num|${everyDepartment.stages[i].num}.}{a| ${values}：}\n{b| ${formatNumber(everyDepartment.scores[i])}}{d| 次}`;
          },
        },
        nameGap: '2',
        indicator: everyDepartment.stages,
        splitArea: {
          show: false,
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: {
          //指向外圈文本的分隔线样式
          lineStyle: {
            color: '#0A5BDE',
            width: 2,
          },
        },
        splitLine: {
          lineStyle: {
            width: 2,
            color: '#0A5BDE',
          },
        },
      },

      series: [
        {
          type: 'radar',
          symbolSize: 10,
          data: [
            {
              value: everyDepartment.scores,
              name: '',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#35F3FF',
                  },
                  shadowColor: '#35F3FF',
                  shadowBlur: 20,
                },
              },
              areaStyle: {
                normal: {
                  color: 'rgba(53, 243, 255, 0.38)',
                },
              },
            },
          ],
        },
      ],
    };