let _rawData = [
                [
                    "Income",
                    "Country",
                    "Year"
                ],
                [
                    1399,
                    "重点机构x",
                    2012
                ],
                [
                    1651,
                    "物证x",
                    2012
                ],
                
                [
                    2269,
                    "重点机构x",
                    2013
                ],
                [
                    1922,
                    "物证x",
                    2013
                ],
                
                [
                    3267,
                    "重点机构x",
                    2014
                ],
                [
                    2202,
                    "物证x",
                    2014
                ],
                
                [
                    44056,
                    "重点机构x",
                    2015
                ],
                [
                    43294,
                    "物证x",
                    2015
                ]
            ]

let countries = [
    '重点机构x',
    '物证x'
];
let datasetWithFilters = [];
let seriesList = [];
run(_rawData)
function run(_rawData) {
  
  echarts.util.each(countries, function (country) {
    var datasetId = 'dataset_' + country;
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 },
            { dimension: 'Country', '=': country }
          ]
        }
      }
    });
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: country,
      endLabel: {
        show: true,
        formatter: function (params) {
          return params.value[1] + ': ' + params.value[0];
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'Year',
        y: 'Income',
        label: ['Country', 'Income'],
        itemName: 'Year',
        tooltip: ['Income']
      }
    });
  });
  
}
option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    color: ['red', '#ff0'],
    tooltip: {
          order: 'valueDesc',
          trigger: 'axis',
          backgroundColor: "#1a252d", //设置背景图片 rgba格式
        //   color: "#a8d5ff",
          borderWidth: "1", //边框宽度设置1
          borderColor: "#6bc7ef", //设置边框颜色
          textStyle: {
            color: "#a8d5ff" //设置文字颜色
          },
          formatter: function(params, ticket, callback) {
            console.log(params)
            var res = '' + params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              if(i == 2) {
                res += '<br><span style="color:red;">' + params[i].seriesName + ' : ' + params[i].value + '</span>';//给
              } else {
                res += '<br>' + params[i].seriesName + ' : ' + params[i].value;
              }
              
            }
            // setTimeout(function() {
                // 仅为了模拟异步回调
                callback(ticket, res);
            // }, 1000)
            // return 'loading';
        }
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle'
    },
    yAxis: {
    //   name: 'Income'
    },
    grid: {
      right: 140
    },
    series: seriesList
  };