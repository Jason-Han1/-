
var _valOnRadianMax = 200;
var _outerRadius = 200;
var _innerRadius = 170;
var _pointerInnerRadius = 40;
var _insidePanelRadius = 140;
var _currentDataIndex = 0;

var center = 300;
var taijiR = 60;
function renderItem(params, api) {
  var rotation = api.value(0);

  return {
    type: 'group',
    children: [
       {
        type: 'arc',
        rotation,
        shape: {
          cx: center,
          cy: _outerRadius,
          r: taijiR,
          r0: 0,
          startAngle: -Math.PI/2,
          endAngle: Math.PI/2,
          clockwise: false
        },
        style: {
          stroke: '#000',
          fill: '#fff'
        }
      },
      {
        type: 'arc',
        rotation,
        shape: {
          cx: center,
          cy: _outerRadius,
          r: taijiR,
          r0: 0,
          startAngle: Math.PI/2,
          endAngle: -Math.PI/2,
          clockwise: false
        },
        style: {
          stroke: '#000',
          fill: '#000'
        }
      },
      {
        type: 'arc',
        rotation,
        shape: {
          cx: center,
          cy: _outerRadius - taijiR/2,
          r: taijiR/2,
          r0: 0,
          startAngle: Math.PI/2,
          endAngle: -Math.PI/2,
          clockwise: false
        },
        style: {
          stroke: '#000',
          fill: '#fff'
        }
      },
      {
        type: 'arc',
        rotation,
        shape: {
          cx: center,
          cy: _outerRadius + taijiR/2,
          r: taijiR/2,
          r0: 0,
          startAngle: -Math.PI/2,
          endAngle: Math.PI/2,
          clockwise: false
        },
        style: {
          stroke: '#000',
          fill: '#000'
        }
      },
      {
        type: 'circle',
        rotation,
        shape: {
          cx: center,
          cy: _outerRadius - taijiR/2,
          r: taijiR/6
        },
         style: {
          stroke: '#000',
          fill: '#000'
        }
      },
      {
        type: 'circle',
        rotation,
        shape: {
          cx: center,
          cy: _outerRadius + taijiR/2,
          r: taijiR/6
        },
         style: {
          stroke: '#fff',
          fill: '#fff'
        }
      }
    ]
  };
}

option = {
  dataset: {
    source: [[0]]
  },
  angleAxis: {
    type: 'value',
    startAngle: 0,
    show: false,
    min: 0,
    max: _valOnRadianMax
  },
  radiusAxis: {
    type: 'value',
    show: false
  },
  polar: {},
  series: [
    {
      type: 'custom',
      coordinateSystem: 'polar',
      renderItem: renderItem
    }
  ]
};

