let obj ={
          successObj : {
               data:[
                       {
                           value: 31
                       }, {
                           value: 36
                       }, {
                           value: 54
                       }, {
                           value: 89
                       }, {
                           value: 73
                       }, {
                           value: 22
                       }
               ],
               title:'调用成功',
               unit:'%',
               series:{
                   color:'#DC735A'
               }
          },
          failObj : {
               data:[
                       {
                           value: 1,
                       }, {
                           value: 111
                       }, {
                           value: 4
                       }, {
                           value: 9
                       }, {
                           value: 3
                       }, {
                           value: 2
                       }
               ],
               title:'调用失败',
               unit:'Byte',
               series:{
                   color:'#07E6AC'
               }
          }
      };
    let dataXaxis = Array.from({ length: 7 }, (_, index) => index)
      .map(number => {
        return new Date(new Date().getTime() - number * 24 * 60 * 60 * 1000)
          .toLocaleDateString()
          .substring(5);
      })
      .reverse();
    let { successObj, failObj, xAxisData = dataXaxis } = obj;
    const objArrays = [successObj, failObj];

    const titles = objArrays.map(item => {
      let { title, unit } = item;
      return {
        title,
        unit,
      };
    });
    let defaultObj = {
      title: '调用情况',
      xAxisData,
      legend: {
        data: objArrays.map(item => {
          let { title: name, series } = item;
          return {
            name,
            icon: 'roundRect', // legend的icon
          };
        }),
      },
    };

    const yAxis = objArrays.map(item => {
      let { unit } = item;
      return {
        name: unit,
        nameLocation: 'end',
        nameTextStyle: {
          padding: -8,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: '{value} ',
        },
      };
    });

    const series = objArrays.map((item, index) => {
      let { data, series, title } = item;
      let { color } = series;
      let resultObj = {
        name: title,
        type: 'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          normal: {
            color,
            lineStyle: {
              color,
              width: 3,
            },
          },
        },
        data,
      };
      if (index === 1) {
        resultObj.yAxisIndex = 1;
      }
      return resultObj;
    });

     option = {
        backgroundColor:'black',
      textStyle: {
        color: '#4E6873',
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        height: '72%',
        containLabel: true,
      },
      title: {
        text: defaultObj.title,
        textStyle: {
          color: 'white',
          fontSize: 14,
          fontWeight: 'normal',
        },
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.6)',
        formatter: function(params) {
          let str = params[0].name + '</br>';
          params.forEach(item => {
            let current = titles.filter(
              titleItem => titleItem.title === item.seriesName,
            )[0];
            if (current) {
              str +=
                item.marker +
                item.seriesName +
                ' : ' +
                item.data.value +
                current.unit +
                '</br>';
            }
          });
          return str;
        },
      },
      legend: {
        // 修改legend的高度宽度
        left: 100,
        itemHeight: 3,
        itemWidth: 16,
        data: defaultObj.legend.data,
        textStyle: {
          color: '#B4B4B4',
          fontSize: 10,
        },
      },
      xAxis: [
        {
          // type:'category',
          data: defaultObj.xAxisData,
          boundaryGap: true,
          interval: 0,
          rotate: 45,
          axisLine: {
            lineStyle: {
              color: '#B4B4B4',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: 'white',
            },
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#0D1A20', '#132228'],
            },
          },
        },
      ],
      yAxis,
      series,
    };