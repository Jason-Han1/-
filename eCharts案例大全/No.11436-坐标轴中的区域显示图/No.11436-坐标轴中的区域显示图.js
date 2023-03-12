
var data =[
      {
        name: "b1",
        id: 31,
        hashMode: "设备",
        value: [0, 1, 0, 1000],
        itemStyle: { normal: { color: "#715881" } }
      },
      {
        name: "b1",
        id: 31,
        hashMode: "设备",
        value: [2, 3, 0, 1000],
        itemStyle: { normal: { color: "#715881" } }
      },
      {
        name: "b1",
        id: 31,
        hashMode: "设备",
        value: [3, 4, 0, 1000],
        itemStyle: { normal: { color: "#715881" } }
      },
      {
        name: "b1",
        id: 31,
        hashMode: "设备",
        value: [5, 6, 0, 1000],
        itemStyle: { normal: { color: "#715881" } }
      },
      {
        name: "b2",
        id: 32,
        hashMode: "设备",
        value: [0, 1, 1000, 2000],
        itemStyle: { normal: { color: "#3e30c5" } }
      },
      {
        name: "b2",
        id: 32,
        hashMode: "设备",
        value: [1, 2, 1000, 2000],
        itemStyle: { normal: { color: "#3e30c5" } }
      },
      {
        name: "b2",
        id: 32,
        hashMode: "设备",
        value: [2, 3, 1000, 2000],
        itemStyle: { normal: { color: "#3e30c5" } }
      },
      {
        name: "b2",
        id: 32,
        hashMode: "设备",
        value: [4, 5, 1000, 2000],
        itemStyle: { normal: { color: "#3e30c5" } }
      },
      {
        name: "b2",
        id: 32,
        hashMode: "设备",
        value: [5, 6, 1000, 2000],
        itemStyle: { normal: { color: "#3e30c5" } }
      },
      {
        name: "b3",
        id: 33,
        hashMode: "设备",
        value: [0, 3, 2000, 3500],
        itemStyle: { normal: { color: "#06211b" } }
      },
      {
        name: "b4",
        id: 34,
        hashMode: "用户",
        value: [3, 6, 2000, 3500],
        itemStyle: { normal: { color: "#ea8c57" } }
      },
      {
        name: "b5",
        id: 35,
        hashMode: "设备",
        value: [1, 4, 3500, 4700],
        itemStyle: { normal: { color: "#e5e36f" } }
      },
      {
        name: "b6",
        id: 36,
        hashMode: "设备",
        value: [4, 6, 3500, 5300],
        itemStyle: { normal: { color: "#072676" } }
      },
      {
        name: "b7",
        id: 37,
        hashMode: "设备",
        value: [0, 2, 5300, 6300],
        itemStyle: { normal: { color: "#557c59" } }
      }
    ];
var layerList = ["recall", "rough_rank", "rank", "rerank", "intervene", "cd_category"];
var slotCnt = 10000;
function renderItem(params, api) {
    var start = api.coord([api.value(2), api.value(1)]);
    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1],
        width: api.size([100, 1])[0] * ((api.value(3) - api.value(2)) / 100),
        height: api.size([100, 1])[1] * (api.value(1) - api.value(0))
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return (
        rectShape && {
            type: "rect",
            shape: rectShape,
            style: api.style({
                text: `${data[params.dataIndex].name}`
            })
        }
    );
}

option = {
    tooltip: {
        formatter: function(params) {
            return (
                params.marker +
                params.name +
                ": " +
                params.value[2] +
                "~" +
                params.value[3] + '<br/>' + params.marker + `hashMode:${params.data.hashMode}`
            );
        }
    },
    title: {
        //   text: "Profile",
        left: "center"
    },
    grid: {
        height: 300
    },
    xAxis: {
        min: 0,
        splitNumber: 10,
        max:slotCnt
    },
    yAxis: [{
            position: "right",
            max: layerList.length,
            min: 0,
            splitNumber: layerList.length
        },
        {
            position: "left",
            data:layerList
        }
    ],
    series: [{
        type: "custom",
        renderItem: renderItem,
        itemStyle: {
            normal: {
                opacity: 1
            }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    }]
};