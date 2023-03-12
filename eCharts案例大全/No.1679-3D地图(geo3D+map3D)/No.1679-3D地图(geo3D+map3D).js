// 全国地图
var uploadedDataURL = '/asset/get/s/data-1619407164365-g5AlFKD6o.json';
// 四川地图
// var uploadedDataURL = '/asset/get/s/data-1619418162876-vDvrq4dZv.json';
let valArr = [
  {
    name: '四川省',
    value: 111,
  },
];
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('chinamap', geoJson);
  loadMap('chinamap');
});
function loadMap(name) {
  option = {
    backgroundColor: 'rgba(0,0,0,1)',
    tooltip:{
      show:true
    },
    // geo3D: {
    //   map: name,
    //   aspectScale: 0.9, //长宽比
    //   zoom: 0.5,
    //   selectedMode: false, //是否允许选中多个区域
    //   label: {
    //     show: false,
    //     color: '#fff',
    //     textStyle: {
    //       color: '#fff',
    //     },
    //     formatter: (params) => {
    //       if (valArr.find((ele) => ele.name == params.name)) {
    //         return params.name + '\n' + valArr.find((ele) => ele.name == params.name).value;
    //       } else {
    //         return params.name;
    //       }
    //     },
    //     backgroundColor: 'rgba(0,0,0,0.5)',
    //     padding: [5, 5],
    //     borderRadius: 4,
    //   },
    //   itemStyle: {
    //     color: 'transparent',
    //     // shadowColor: 'rgba(0,243,255,0.2)',
    //     // shadowOffsetY: 5,
    //     // shadowBlur: 10,
    //     borderColor: 'transparent',
    //     // borderWidth: 1,
    //     opacity: 0,
    //   },
    // },
    series: [
      {
        name: 'MAP',
        type: 'map3D',
        map: name,
        label: {
          show: true,
          textStyle: {
            color: '#fff',
          },
          formatter: (params) => {
            if (valArr.find((ele) => ele.name == params.name)) {
              return params.name + '\n' + valArr.find((ele) => ele.name == params.name).value;
            } else {
              return params.name;
            }
          },
          borderRadius: 4,
        },
        itemStyle: {
          color: '#144a69',
          // shadowColor: 'rgba(0,243,255,0.2)',
          // shadowOffsetY: 5,
          // shadowBlur: 10,
          borderColor: '#06767c',
          borderWidth: 1,
          // opacity: 1,
        },

        aspectScale: 0.9, //长宽比
        selectedMode: false, //是否允许选中多个区域
        data: valArr,
      },
    ],
  };
  myChart.setOption(option);
}
