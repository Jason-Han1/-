 let history = {
          color: ['#33FF99','#33FF99','#ff3333','ffa033'],
          targetDate:[{
			"color": "#33FF99",
			"levelCode": "10001",
			"levelName": "优",
			"targetDate": "2021-08-15"
		}, {
			"color": "#33FF99",
			"levelCode": "10001",
			"levelName": "优",
			"targetDate": "2021-08-16"
		}, {
			"color": "#ff3333",
			"levelCode": "10004",
			"levelName": "差",
			"targetDate": "2021-08-30"
		}, {
			"color": "#ffa033",
			"levelCode": "10003",
			"levelName": "中",
			"targetDate": "2021-08-31"
		}],
          levelName: ['优','良','中','差']
        };
 
    let maxArr = [];

    let month = new Date('2021-08').getMonth() + 1; //获取当前月
    var year = new Date('2021-08').getFullYear(); //获取当前年
    var datas = []; //新建日期数组
    var dataLength = new Date(year, month).toJSON().substring(0, 10).split('-')[2]; //获取当前年月日期最大值
    for (var i = 0; i < Number(dataLength); i++) {
      let months = month >= 10 ? month : '0' + month;
      let day = i + 1 >= 10 ? i + 1 : '0' + (i + 1);
      datas.push({ date: year + '-' + months + '-' + day, total: 0, statu: history.levelName[i] ? history.levelName[i] : '优' }); //存入数组
    }
    let chartData = [];
    let chartData1 = [];
    let color = history.color;
    datas.forEach((item, index) => {
      if(history.targetDate.length>0){
        history.targetDate.map((itm,index1)=>{
          if(item.date == itm.targetDate){
            maxArr.push(item.total);
            chartData1.push({
              name: item.statu,
              value: [item.date, item.total],
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return '\n▂';
                },
                color: itm.color?itm.color : 'transparent',
                fontSize: 18,
              },
            });
            chartData.push({
              name: item.statu,
              value: [item.date, item.total],
            });
  
          }else {
            maxArr.push(item.total);
            chartData1.push({
              name: item.statu,
              value: [item.date, item.total],
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return '\n▂';
                },
                color: 'transparent',
                fontSize: 18,
              },
            });
            chartData.push({
              name: item.statu,
              value: [item.date, item.total],
            });
          }
        })
      }
      else {
        maxArr.push(item.total);
        chartData1.push({
          name: item.statu,
          value: [item.date, item.total],
          symbolSize: 1,
          label: {
            show: true,
            formatter: function (params) {
              return '\n▂';
            },
            color: 'transparent',
            fontSize: 18,
          },
        });
        chartData.push({
          name: item.statu,
          value: [item.date, item.total],
        });
      }

    });
    let thisMonth = '2021-08'; //当前月份

option = {

      visualMap: {
        min: 0,
        max: 300,
        inRange: {
          color: ['rgb(9,5,27)'],
        },
        show: false,
      },
      calendar: {
        cellSize: [48, 48],
        left: 'center',
        top: 'middle',
        orient: 'vertical',
        range: [thisMonth],
        itemStyle: {
          borderWidth: 0,
        },
        splitLine: {
          show: false,
        },
        yearLabel: { show: false },
        monthLabel: {
          show: false,
        },
        dayLabel: {
          show: false,
          firstDay: 1,
          margin: 10,
          nameMap: 'cn',
        },
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                var d = echarts.number.parseDate(params.value[0]);
                return d.getDate();
              },
              textStyle: {
                color: '#7FA1C5',
                fontSize: 18,
                fontWeight: 'bold'
              },
            },
          },
          data: chartData,
        },
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: chartData,
        },
        {
          type: 'scatter',
          coordinateSystem: 'calendar',
          data: chartData1,
        },
      ],
    };