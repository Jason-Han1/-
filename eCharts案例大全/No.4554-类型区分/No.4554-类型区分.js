 let data = [
      {
        label: 'A类',
        value: 210,
      },
      {
        label: 'B类',
        value: 97,
      },
      {
        label: 'C类',
        value: 33,
      },
      {
        label: 'D类',
        value: 197,
      },
      {
        label: 'E类',
        value: 301,
      },
    ];
    //职称结构取数
    var getsjjg = [];
    var getsjjgrs = [];

    data.map(item => {
      let { label, value } = item;
      getsjjg.push(label);
      getsjjgrs.push(value);
    });

    //职称结构图表
    var colorList = ['#06FEBC', '#F07B5F', 'white', '#06FEBC', '#F07B5F'];

    var syjgdata = [];
    for (var i = 0; i < getsjjg.length; i++) {
      // let color = colorList[parseInt(Math.random()*3+1,10)]
      let color = colorList[i];
      syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i],
        labelLine: {
          normal: {
            lineStyle: {
              color,
            },
          },
        },
        itemStyle: {
          normal: {
            color,
          },
        },
      });
    }
    var syjgdata2 = [];
    for (var i = 0; i < getsjjg.length; i++) {
      syjgdata2.push({
        name: getsjjg[i],
        value: 100,
      });
    }

    var rich = {
      name: {
        color: '#99B7C4',
        fontSize: 16,
        padding: [0, 5],
        fontWeight: '400',
        align: 'right',
      },
      value: {
        color: '#99B3FF',
        fontSize: 16,
        padding: [5, 5],
        fontWeight: '500',
        align: 'right',
      },
      percent: {
        color: 'white',
        align: 'right',
        fontSize: 16,
        fontWeight: '500',
        padding: [0, 5],
      },
      hr: {
        backgroundColor: 't',
        borderRadius: 3,
        width: 3,
        height: 3,
        padding: [3, 3, 0, -12],
      },
    };
     option = {
      backgroundColor:'black',
      legend: {
        top: 10,
        data: getsjjg,
        textStyle: {
          color: 'gray',
        },
      },
      tooltip: {},
      series: [
        {
          itemStyle: {
            normal: {
              color: '#192C35',
            },
          },
          type: 'pie',
          hoverAnimation: false,
          radius: ['80%', '65%'],
          center: ['50%', '60%'],
          label: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 1,
            },
          ],
          z: -1,
        },
        {
          itemStyle: {
            normal: {
              borderColor: '#172659',
              borderWidth: 3,
            },
          },
          type: 'pie',
          //clockWise: false ,
          //roseType: 'radius',
          radius: ['15%', '60%'],
          center: ['50%', '60%'],
          labelLine: {
            normal: {
              length: 20,
              length2: 50,
            },
          },
          label: {
            normal: {
              formatter: params => {
                return (
                  '{name|' +
                  params.name +
                  '}\n{hr|}\n{percent|' +
                  params.percent.toFixed(0) +
                  '%}'
                );
              },
              rich: rich,
              padding: [0, -5, 0, -5],
            },
          },
          z: 1,
          data: syjgdata,
        },
        {
          name: '最内层线',
          type: 'gauge',
          radius: '30%',
          center: ['50%', '60%'],
          startAngle: 0,
          endAngle: 360,
          axisLine: {
            show: false,
            lineStyle: {
              opacity: 0,
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              opacity: 0,
            },
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            length: 2,
            splitNumber: 3,
            lineStyle: {
              color: '#192C35',
              width: 2,
              type: 'dotted',
            },
          },
          detail: {
            show: false,
          },
          pointer: {
            show: false,
          },
          z: 2,
        },
      ],
    };