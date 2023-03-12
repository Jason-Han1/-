  var getname = ['名称1名称1名称1', '名称2', '名称3', '名称4', '名称5'];
  var getvalue = [1, 2, 3, 4, 5];
  var getbl = [10, 20, 30, 40, 50];
  var data = [];
  var colorList = [
    {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#81BDFF' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#3294FF' // 100% 处的颜色
        }
      ]
    },
    {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#48D59D' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#6FF3C1' // 100% 处的颜色
        }
      ]
    },
    {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FEAE5B' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FECB84' // 100% 处的颜色
        }
      ]
    },
    {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#A1ADFF' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#9586F3' // 100% 处的颜色
        }
      ]
    },
    {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FF7E7C' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FF6061' // 100% 处的颜色
        }
      ]
    }
  ];
  var allValue = 0;
  var percent = [];
  for (var i = 0; i < getvalue.length; i++) {
    allValue += getvalue[i];
  }
  for (var i = 0; i < getvalue.length; i++) {
    percent.push(((getvalue[i] / allValue) * 100).toFixed(2));
  }

  for (var i = 0; i < getname.length; i++) {
    data.push({
      name: getname[i],
      value: getvalue[i],
      label: {
        color: '#595959'
      },
      itemStyle: {
        normal: {
          color: colorList[i]
        }
      }
    });
  }
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} <br/>{d}%'
    },

    legend: {
      type: 'scroll',
      orient: 'vertical',
      icon: 'circle',
      height: '88%',
      right: '15%',
      top: 'center',
      itemWidth: 18,
      itemHeight: 18,
      data: getname,
      formatter: function (name) {
        for (var i = 0; i < getname.length; i++) {
          if (name == data[i].name) {
            return '{name|}' + name + '{num|}' + getvalue[i] + '万元' + '{percent|}' + percent[i] + '%';
          }
        }
      },
      textStyle: {
        rich: {
          name: {
            fontSize: 15,
            fontWeight: 400,
            // width: 100,
            height: 35,
            padding: [0, 0, 0, 4],
            color: '#595959'
          },
          num: {
            fontSize: 15,
            fontWeight: 400,
            // width: 100,
            height: 35,
            padding: [0, 0, 0, 30],
            color: '#595959'
          },
          percent: {
            fontSize: 15,
            fontWeight: 400,
            // width: 100,
            height: 35,
            padding: [0, 0, 0, 15],
            color: '#595959'
          }
        }
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['32%', '50%'],
        center: ['25%', '50%'],
        itemStyle: {
          normal: {
            // color: function(params) {
            //     return colorList[params.dataIndex]
            // }
          }
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{d}%\n\n',
          fontFamily: 'MicrosoftYaHei',
          fontSize: 15,
          align: 'center',
          verticalAlign: 'left',
          padding: [0, -50]
        },
        labelLine: {
          show: 'true',
          length: 30,
          length2: 50,
          lineStyle: {
            color: '#C9C9C9'
          }
        },
        data: data,
        avoidLabelOverlap: true,
        stillShowZeroSum: false,
        left: 50
      }
    ]
  
};
