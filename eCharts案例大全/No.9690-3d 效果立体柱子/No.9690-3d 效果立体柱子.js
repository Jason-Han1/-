var localData= [220, 182, 191, 234, 290, 330, 310];
var that = this;
that.dpr=1;

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
          type: 'bar',
          barWidth: 10*that.dpr,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                [
                  { offset: 0, color: 'rgba(122,205,253)' },
                  { offset: 1, color: 'rgba(3,75,157 ,.8)' }
                ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
              ),
              barBorderRadius: [0, 0, 0, 0]
            }
          },
          data: localData
        },
        {
          name: 'a',
          tooltip: {
            show: false
          },
          type: 'bar',
          barWidth: 4*that.dpr,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                [
                  { offset: 0, color: 'rgba(3,75,157 )' },
                  { offset: 1, color: 'rgba(122,205,253,.8)' }
                ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
              ),
              barBorderRadius: [0, 0, 0, 0]
            }
          },
          data: localData,
          barGap: 0,
          legendHoverLink: false
        },
        {
          name: 'b',
          tooltip: {
            show: false
          },
          type: 'pictorialBar',

          itemStyle: {
            normal: {
              color: '#73bbff'
            }
          },

          symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCNEM4Qzc5RUIxMzExRTk5MkZCREEwN0FENzk5MTI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCNEM4QzdBRUIxMzExRTk5MkZCREEwN0FENzk5MTI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUI0QzhDNzdFQjEzMTFFOTkyRkJEQTA3QUQ3OTkxMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUI0QzhDNzhFQjEzMTFFOTkyRkJEQTA3QUQ3OTkxMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sPykLAAAALUlEQVR42mL4//8/AwgDgTwTiGRkZBQCUkpMQAYbkKELxEwgGS0gZgepAAgwADBtBsAg1UW4AAAAAElFTkSuQmCC',
          symbolRotate: 0,
          symbolSize: ['3', '3'],
          symbolOffset: ['29', '0'],
          symbolPosition: 'start',
          data: localData,
          z: 3
        },
        {
          name: 'b',
          tooltip: {
            show: false
          },
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: '#73bbff'
            }
          },
          symbol: 'image://data:image/gif;base64,R0lGODlhDQAEAIABAGq+/wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTZBRkJCREFFQjExMTFFOUI2RkFGRUM3MUU3MDYwRTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTZBRkJCREJFQjExMTFFOUI2RkFGRUM3MUU3MDYwRTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNkFGQkJEOEVCMTExMUU5QjZGQUZFQzcxRTcwNjBFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNkFGQkJEOUVCMTExMUU5QjZGQUZFQzcxRTcwNjBFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAEALAAAAAANAAQAAAIKjIGpp82dHgQmFAA7',
          symbolRotate: 0,
          symbolSize: ['14', '3'],
          symbolOffset: ['-0.3', '-1'],
          symbolPosition: 'end',
          data: localData,
          z: 3
        }
        ]
};