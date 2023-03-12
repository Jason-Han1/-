var uploadedDataURL = "/asset/get/s/data-1551866913540-ONANuDLiY.json";
  var lat = "35.24",lon = "113.6";
$.getJSON(uploadedDataURL, function(rawData) {

    var directionMap = {};
    echarts.util.each(
        ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'],
        function (name, index) {
            directionMap[name] = Math.PI / 8 * index;
        }
    );

    var data = echarts.util.map(rawData.data, function (entry) {
        return [entry.time, entry.windSpeed, entry.R];
    });

    var dims = {
        time: 0,
        windSpeed: 1,
        R: 2,
    };
    var arrowSize = 18;

    function renderArrow(param, api) {
       var point = api.coord([
            api.value(dims.time),
            api.value(dims.windSpeed)
        ]);
    
        var strokeColor = '';
        if(api.value(dims.windSpeed)<9){
            strokeColor = '#d88273'
        }else if(api.value(dims.windSpeed)<10){
            strokeColor = 'blue'
        }else{
            strokeColor = 'red'
        }
        return {
            type: 'path',
            shape: {
                pathData: 'M22 6 L10 6 L10 16 L22 16 L10 16 L10 46',
                x: -arrowSize / 2,
                y: -arrowSize / 2,
                width: arrowSize,
                height: arrowSize
            },
            rotation: directionMap[api.value(dims.R)],
            position: [point[0],100],
            style: api.style({
                stroke: strokeColor,
                fill:'none',
                lineWidth: 1
            })
      };
    }

    option = {
        title: [{
              text: 'EC模式3小时间隔10米风预报',
              left: 'center',
          }, {
              text: `lat:+${lat} lon:${lon}`,
              textStyle: {
                  fontWeight: 'normal',
                  color: 'red',
              },
              top: 30,
              left: 70
          }, {
              text: `2017082912`,
              textStyle: {
                  fontWeight: 'normal',
                  color: 'blue',
              },
              top: 30,
              left: 'center',
          }, {
              text: `000-072`,
              textStyle: {
                  fontWeight: 'normal',
                  color: 'blue',
              },
              top: 30,
              right: '70',
          },{
              text: `Aug`,
              textStyle: {
                  fontWeight: 'normal',
                  color: 'red',
              },
              bottom: 15,
              left: '70',
          }, {
              text: `北京时`,
              textStyle: {
                  fontWeight: 'normal',
              },
              bottom: 15,
              right: '70',
        }],
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                return [
                    echarts.format.formatTime('yyyy-MM-dd', params[0].value[dims.time])
                    + ' ' + echarts.format.formatTime('hh:mm', params[0].value[dims.time]),
                    '风速：' + params[0].value[dims.windSpeed],
                    '风向：' + params[0].value[dims.R]
                ].join('<br>');
            }
        },
        grid: {
            top: 130,
            bottom: 125
        },
        xAxis: {
            type: 'time',
            maxInterval: 3600 * 1000 * 24,
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: '风速 (米/秒)',
            nameLocation: 'center',
            nameGap: '40',
            max: function(v) {
                return Math.floor(v.max+10);
            },
        }, {
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLine: {show: false},
            
        }],
        dataZoom: [{
            type: 'inside',
            xAxisIndex: 0,
            minSpan: 5
        }, {
            type: 'slider',
            xAxisIndex: 0,
            minSpan: 5,
            height: 20,
            bottom: 50,
            show:false,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '120%'
        }],
        series: [{
            type: 'custom',
            renderItem: renderArrow,
            encode: {
                x: dims.time,
                y: dims.windSpeed
            },
            data: data,
            z: 10
        }, {
            name: '风速',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              label: {
                  show: true,
                  position: 'top',
              },
              encode: {
                  x: dims.time,
                  y: dims.windSpeed
              },
              data: data,
              markPoint: {
                  data: [{
                      type: 'max',
                      name: '最大值'
                  }, ],
                  symbol: 'rect',
                  symbolSize: '1',
                  symbolOffset: [0, '15'],
                  label: {
                      color: 'red'
                  }
              },
        }]
    };

    myChart.setOption(option);
})