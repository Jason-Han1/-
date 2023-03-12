const colors = ['#ff619e', '#6021f9', '#1971ee', '#2bce6d', '#ffde53', '#7655ff', '#41a0ff', '#ff4d5e', '#f7853a', '#48d8ef'];
var data = [{
        value: 100,
        name: '测试数据一'
    },
    {
        value: 200,
        name: '测试数据二'
    },
    {
        value: 300,
        name: '测试数据三'
    },
    {
        value: 400,
        name: '测试数据四'
    },
    {
        value: 500,
        name: '测试数据五'
    }
].sort(function(a, b) {
    return a.value > b.value
});
let seriesBar = [];
    data.forEach((d, i) => {
      seriesBar.push({
        value: d.value,
        itemStyle: {
          color: colors[i]
        }
      })
    })


option = {
      polar: {
        radius: 190, // 10条数据的时候 190
       },
      angleAxis: {
        show: false,
        min: function (value) {
          return value.min >= 1 ? value.min - value.max / 3 : 0
        },
        max: function (value) {
          return value.max * 4 / 3;
        }
      },
      radiusAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          color: "#333",
          fontSize: 14
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        data: [...data.map(d => d.name)],
      },
      series: [{
          type: 'bar',
          coordinateSystem: 'polar',
          barWidth: data.length > 5 ? 10 : 30, // 10条数据的时候 10
          itemStyle: {
            color: '#41a0ff'
          },
          data: seriesBar
        },
        {
          type: "custom",
          coordinateSystem: 'polar',
          renderItem: function (params, api) {
            var values = [api.value(0), api.value(1)];
            var coord = api.coord(values);
            return {
              type: 'text',
              position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
              rotation: coord[3] + Math.PI / 2,
              origin: [coord[0], coord[1]],
              style: {
                text: api.value(1),
                fill: "#333",
                fontSize: 16,
                textAlign: "right",
                textVerticalAlign: "middle",
                x: coord[0],
                y: coord[1]
              }
            };
          },
          data: data
        }
      ]
    };