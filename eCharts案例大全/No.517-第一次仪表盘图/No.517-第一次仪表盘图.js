option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  color:['#00ffd3'],
  radius:100,
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}%',
        lineStyle:{
        },

      },
      title: {
        show: false
      },
      axisLine:{
        lineStyle:{
          width:3,
          color:[[1, 'rgba(0,0,0,0.3)']]

        }
      },
       markPoint: {
      data: [{
        type: "max"
      }],
      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAIAAAAW+SPgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDExNi4xNjQ2NTUsIDIwMjEvMDEvMjYtMTU6NDE6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODRlMjMwOWQtNjM4OS00NDM3LWE5ZDEtODk0YTY3ZmJiYWI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0QTA1RUI0NEM3NzExRUM5Rjk4QjNDQ0I1Q0E1ODk1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QTA1RUIzNEM3NzExRUM5Rjk4QjNDQ0I1Q0E1ODk1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmI5MzU2ZTItN2FlNy00OGQ0LWFlNGYtMzJjYzMyNDRlNzczIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0ZTIzMDlkLTYzODktNDQzNy1hOWQxLTg5NGE2N2ZiYmFiOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsY1WkkAAAGkSURBVHjahFNLVsMwDJT8SUtXwHtwFlYcnhXHYQeNbYkZOUmBDY6bp9qjyWgs6+XxQXIWVdGkOUlMjb8i7mYyTMw83kVSAlSRgKBmBkAjTiomYgNoH0MVgRayYq9kLcDhXaQWxqKglg5Ql45Pqesgt04oQVWWogiWShZzWZt3fsq1qUjhR6EViFoJOi0IPt7eJcb964u0xkwUATT0QSvnhC5VzyfZh96dqIiyZK8S3JALPaBHwnm5oRFDPZ4xgIkqw4coMetUf6AR14FaPTBlW6WJ0+wsNGQfYRQ9zTQav3j4+jFv5L/WU6w5p8u/IxHGOjCNBs/4GO4/Z9oXnZ2AwgdruqF7rPDwDZDCpNk6Y9CmtbGsg7o3b933nBI4m5S+9j9V+tfq19VxnEjovbAbEeXOhkHrTK0H+vNKKBLQMOjEy/MTT6QWwZnXGr21dxXyVioRiEFOO7g1Ns11Nj5W2N8eiqG7U2cfBZWqczt8FJqIGuZt8ok2tzAKVYKMnS5DmOa0ZeCox4bGbo+bZnHTyA0EjCfWRU1BlrdzCJxvLrt/CzAAO3E0wQexfzMAAAAASUVORK5CYII=",
        name: '某个屏幕坐标',
        x: 290,
        y: 100
    },
      startAngle: 360,
      endAngle: 90,
      clockwise: false,
      splitLine: {
          show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
      show: false
    },
      progress: {
        show: true,
        overlap: true,
        width:3,
        roundCap: true,
        itemStyle: {
          color: '#00ffd3',
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10,
        }
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]
};