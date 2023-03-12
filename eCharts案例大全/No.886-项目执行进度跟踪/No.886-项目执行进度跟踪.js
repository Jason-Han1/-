const HEIGHT_RATIO = 0.6;
const DIM_CATEGORY_INDEX = 0;
const DIM_TIME_ARRIVAL = 1;
const DIM_TIME_DEPARTURE = 2;
const ACTUAL_TIME_ARRIVAL = 3;
const _cartesianXBounds = [];
const _cartesianYBounds = [];
const rowData = {
        flight: {
          data: [
            [7, '2020-1-1', '2020-1-2', '2020-1-9', 'Project Kick Off'],
            [6, '2020-1-1', '2020-1-31', '2020-1-24', 'Requirement confirm'],
            [5, '2020-2-1', '2020-4-30', '2020-4-30', 'Development'],
            [4, '2020-5-1', '2020-5-31', '2020-6-30', 'SIT'],
            [3, '2020-6-1', '2020-6-30', '2020-7-15', 'UAT'],
            [2, '2020-7-1', '2020-7-15', '2020-7-23', 'Go live'],
            [1, '2020-7-16', '2020-7-31', '', 'Training'],
            [0, '2020-8-1', '2020-8-31', '', 'Payment'],
          ],
          dimensions: ['Parking Apron Index', '开始时间', '结束时间', '实际结束时间'],
        },
        parkingApron: {
          dimensions: ['Name', 'Type'],
          data: [
            ['Task01', 'Project Kick Off'],
            ['Task02', 'Requirement confirm'],
            ['Task03', 'Development'],
            ['Task04', 'SIT'],
            ['Task05', 'UAT'],
            ['Task06', 'Go live'],
            ['Task07', 'Training'],
            ['Task08', 'Payment'],
          ],
        },
      }

 function clipRectByRect ( params,rect){
    return echarts.graphic.clipRectByRect(rect, {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
    })
  }

  function renderGanttItem (params,api) {
    const categoryIndex = api.value(DIM_CATEGORY_INDEX);
    const timeStart = api.coord([api.value(DIM_TIME_ARRIVAL), categoryIndex]);
    const timeEnd = api.coord([api.value(DIM_TIME_DEPARTURE), categoryIndex]);
    const actualTimeArrival = api.coord([api.value(ACTUAL_TIME_ARRIVAL), categoryIndex]);
    const { coordSys } = params;
    _cartesianXBounds[0] = coordSys.x;
    _cartesianXBounds[1] = coordSys.x + coordSys.width;
    _cartesianYBounds[0] = coordSys.y;
    _cartesianYBounds[1] = coordSys.y + coordSys.height;
    const barLength1 = timeEnd[0] - timeStart[0];
    const barLength2 = timeEnd[0] - actualTimeArrival[0];
    const barLength3 = actualTimeArrival[0] - timeEnd[0];
    // Get the heigth corresponds to length 1 on y axis.
    const barHeight = api.size([0, 1])[1] * HEIGHT_RATIO;
    const rectNormal = clipRectByRect(params, {
      x: timeStart[0],
      y: timeStart[1] - barHeight,
      width: barLength1,
      height: barHeight,
    });
    const rectBefore = clipRectByRect(params, {
      x: actualTimeArrival[0],
      y: actualTimeArrival[1] - barHeight,
      width: barLength2,
      height: barHeight,
    });
    const rectAfter = clipRectByRect(params, {
      x: timeEnd[0],
      y: timeEnd[1] - barHeight,
      width: barLength3,
      height: barHeight,
    });
    return {
      type: 'group',
      children: [
        {
          type: 'rect',
          ignore: !rectNormal,
          shape: rectNormal,
          style: api.style({ fill: '#fac758' }), // 黄色区域-开始时间到结束时间
        },
        {
          type: 'rect',
          ignore: !rectBefore,
          shape: rectBefore,
          style: api.style({ fill: '#3ba272' }), // 绿色区域 - 提前结束
        },
        {
          type: 'rect',
          ignore: !rectAfter,
          shape: rectAfter,
          style: api.style({ fill: '#ee6666' }), // 红色区域-延迟
        },
      ],
    };
  }
  
  function renderAxisLabelItem (params, api){
    const y = api.coord([0, api.value(0)])[1];
    if (y < params.coordSys.y + 5) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return {
      type: 'group',
      position: [10, y],
      children: [
        {
          type: 'path', // task区域
          shape: {
            d: 'M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z',
            x: 0,
            y: -20,
            width: 90,
            height: 20,
            layout: 'cover',
          },
          style: {
            fill: '#368c6c',
          },
        },
        {
          type: 'text', // task字体
          style: {
            x: 24,
            y: -3,
            text: api.value(1),
            textVerticalAlign: 'bottom',
            textAlign: 'center',
            textFill: '#fff',
          },
        },
        {
          type: 'text', // 项目名称
          style: {
            x: 60,
            y: -2,
            textVerticalAlign: 'bottom',
            textAlign: 'left',
            text: api.value(2),
            textFill: '#000',
          },
        },
      ],
    };
  }
  
   function makeOption() {
      return {
        tooltip: {
          trigger: 'item',
          show: true,
          axisPointer: {
            type: 'line',
          },
          formatter(params) {
            if (params && params.length > 0) {
              return '';
            }
            const { data, value } = params;
            const end = value[2] ? new Date(value[2]).getTime() : 0;
            const actual = value[3] ? new Date(value[3]).getTime() : 0;
            let color = '#ddb30b';
            if (actual - end > 0) {
              color = '#ee6666';
            } else if (actual - end < 0) {
              color = '#3ba272';
            }
            const marker = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span>`;
            return `${data[4]} <br/>${marker}开始时间：${value[1]}<br/>${marker}结束时间：${value[2]}<br/>${marker}实际结束时间：${value[3]}`;
          },
        },
        animation: false,
        grid: {
          show: true,
          top: 70,
          bottom: 20,
          left: 200,
          right: 20,
          backgroundColor: '#fff',
          borderWidth: 0,
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'weakFilter',
            height: 20,
            bottom: 0,
            start: 0,
            end: 100,
            handleIcon:
              'path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            showDetail: false,
          },
          {
            type: 'inside',
            id: 'insideX',
            xAxisIndex: 0,
            filterMode: 'weakFilter',
            start: 0,
            end: 100,
            zoomOnMouseWheel: false,
            moveOnMouseMove: true,
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            zoomLock: true,
            width: 10,
            right: 10,
            top: 70,
            bottom: 20,
            start: 100,
            end: 0,
            handleSize: 0,
            showDetail: false,
          },
          {
            type: 'inside',
            id: 'insideY',
            yAxisIndex: 0,
            start: 95,
            end: 100,
            zoomOnMouseWheel: false,
            moveOnMouseMove: true,
            moveOnMouseWheel: true,
          },
        ],
        xAxis: {
          type: 'time',
          position: 'top',
          splitLine: {
            alignWithLabel: true,
            show: true,
            lineStyle: {
              color: ['#E9EDFF'],
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#929ABA',
            },
          },
          axisLabel: {
            color: '#929ABA',
            inside: false,
            align: 'center',
            formatter: (param) => {
              const formatDate = new Date(param);
              return `${formatDate.getFullYear()}-${
                formatDate.getMonth() + 1
              }-${formatDate.getDate()}`;
            },
          },
          axisPointer: {
            show: true,
            label: {
              backgroundColor: '#004f53',
              margin: -20,
            },
            lineStyle: {
              color: '#9fbfcd',
              type: 'solid',
              width: 1.5,
            },
          },
        },
        yAxis: {
          axisTick: { show: false },
          splitLine: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
          min: 0,
          axisPointer: {
            show: false,
          },
          max: rowData.parkingApron.data.length,
        },
        legend: {
          show: true,
          data: [
            {
              name: '提前完成',
              itemStyle: { color: '#3ba272' },
            },
            {
              name: '延期完成',
              itemStyle: { color: '#ee6666' },
            },
          ],
        },
        series: [
          {
            id: 'flightData1',
            type: 'custom',
            name: '提前完成',
            renderItem: renderGanttItem,
            dimensions: rowData.flight.dimensions,
            encode: {
              x: [DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE, ACTUAL_TIME_ARRIVAL],
              y: DIM_CATEGORY_INDEX,
              tooltip: [DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE, ACTUAL_TIME_ARRIVAL],
            },
            data: rowData.flight.data,
          },
          {
            id: 'flightData2',
            type: 'custom',
            name: '延期完成',
            renderItem: renderGanttItem,
            dimensions: rowData.flight.dimensions,
            encode: {
              x: [DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE, ACTUAL_TIME_ARRIVAL],
              y: DIM_CATEGORY_INDEX,
              tooltip: [DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE, ACTUAL_TIME_ARRIVAL],
            },
            data: rowData.flight.data,
          },
          {
            type: 'custom',
            renderItem: renderAxisLabelItem,
            dimensions: rowData.parkingApron.dimensions,
            encode: {
              x: -1,
              y: 0,
            },
            data: rowData.parkingApron.data.map((item, index) => {
              return [rowData.parkingApron.data.length - 1 - index].concat(item);
            }),
          },
        ],
      };
    }
  
option = makeOption()
