const headers = ['2011-09-30', '2011-10-31', '2011-11-30', '2011-12-31', '2012-01-31', '2012-02-29', '2012-03-31', '2012-04-30', '2012-05-31', '2012-06-30', '2012-07-31', '2012-08-31', '2012-09-30', '2012-10-31', '2012-11-30', '2012-12-31', '2013-01-31', '2013-02-28', '2013-03-31', '2013-04-30', '2013-05-31', '2013-06-30', '2013-07-31', '2013-08-31', '2013-09-30', '2013-10-31', '2013-11-30', '2013-12-31', '2014-01-31', '2014-02-28', '2014-03-31', '2014-04-30', '2014-05-31', '2014-06-30', '2014-07-31', '2014-08-31', '2014-09-30', '2014-10-31', '2014-11-30', '2014-12-31', '2015-01-31', '2015-02-28', '2015-03-31', '2015-04-30', '2015-05-31', '2015-06-30', '2015-07-31', '2015-08-31', '2015-09-30', '2015-10-31'];

const srcData = [24.9654,null,null,16.7573,null,null,10.9466,null,null,7.6162,null,null,7.0672,null,null,12.0246,null,null,8.4632,null,null,9.5515,null,null,10.5731,null,null,6.8437,null,null,6.1885,null,null,6.857,null,null,6.6064,null,null,4.6705,null,null,-0.4302,null,null,0.0367,null,null,-5.9624,null]
const subData = [13.8,13.2,12.4,12.8,null,21.3,11.9,9.3,9.6,9.5,9.2,8.9,9.2,9.6,10.1,10.3,null,null,8.9,9.3,9.2,8.9,9.7,10.4,10.2,10.3,10,9.7,null,null,8.8,8.7,8.8,9.2,9,6.9,8,7.7,7.2,7.9,7.4477,6.06,5.6,5.9,6.1,6.8,6,6.1,5.7,5.6]
const thirdData = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.5,1.8,1.9,1.8,1.8,1.7,1.6,1.6,1.7,1.8,1.8,1.8,2,1.7,1.7,1.6,1.7,1.7,1.7,1.6,1.5,1.4,1.3,1.3,1.2,1.574,1.4596,1.4699,1.5758,1.6943,1.6845,1.703,1.6362,1.4731]

const renderCircleSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'circle',
        transition: ['shape'],
        shape: {
            cx: point[0],
            cy: point[1],
            r: symbolSize / 2,
        },
        invisible: symbolSize > bandWidth,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

const renderDiamondSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'rect',
        transition: ['shape'],
        originX: point[0],
        originY: point[1],
        rotation: 45,
        shape: {
            x: point[0] - symbolSize / 2,
            y: point[1] - symbolSize / 2,
            width: symbolSize,
            height: symbolSize
        },
        invisible: symbolSize > bandWidth,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

const renderRectSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'rect',
        transition: ['shape'],
        originX: point[0],
        originY: point[1],
        rotation: 0,
        shape: {
            x: point[0] - symbolSize / 2,
            y: point[1] - symbolSize / 2,
            width: symbolSize,
            height: symbolSize
        },
        invisible: symbolSize > bandWidth,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

option = {
    color: [
      '#7cb5ec',
      '#434348',
      '#f7a35c',
      '#8085e9',
      '#f15c80',
      '#c4ccd3',
      '#e4d354',
      '#2b908f',
      '#f45b5b',
      '#91e8e1'
    ],
    xAxis: {
        type: 'category',
        data: headers
    },
    yAxis: {
        type: 'value'
    },
    legend: {
        
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [
        {
            type: 'line',
            name: 'xxx',
            data: srcData,
            symbol: 'circle',
            showSymbol: false,
            symbolSize: 10,
            connectNulls: true
        },
        {
            type: 'custom',
            name: 'xxx',
            data: srcData,
            renderItem: renderCircleSymbolItem,
            tooltip: {
                show: false
            }
        },
        {
            type: 'line',
            name: 'yyy',
            data: subData,
            symbol: 'diamond',
            showSymbol: false,
            symbolSize: 12,
            connectNulls: true
        },
        {
            type: 'custom',
            name: 'yyy',
            data: subData,
            renderItem: renderDiamondSymbolItem,
            tooltip: {
                show: false
            }
        },
        {
            type: 'line',
            name: 'zzz',
            data: thirdData,
            symbol: 'rect',
            showSymbol: false,
            symbolSize: 10,
            connectNulls: true
        },
        {
            type: 'custom',
            name: 'zzz',
            data: thirdData,
            renderItem: renderRectSymbolItem,
            tooltip: {
                show: false
            }
        }
    ]
};