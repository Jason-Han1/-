var uploadedDataURL2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAACFCAYAAAByvbIAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTI0OWE0Ni0wMGZkLTQ5MDAtYWZmOS1jYmM3NjcwNzE0N2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTNDNDYyQjZBREQ2MTFFOUE2ODJBQjZCRjQ4MDgyNzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTAyMjFDQUNBREQ2MTFFOUE2ODJBQjZCRjQ4MDgyNzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZjczZmE5Yy0wZDYyLTRhNmMtOTQ1Ny03N2M4YTA5M2IyYTQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5OTAxN2QwNS1lNTgzLTExN2MtYmUzNy1mZWZjMjY1Mzc4NTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4QJw7RAAAD6klEQVR42uzd34tUZRzH8bPLhoW0JAZSSiyEkIRe2EWi6I3eKJE3dZFUoBgaan9CF/4J/SARKSS8iAShUAgKAgMlKAiEkFjCpRTBSDYKV5e1z8OMEKHuuDtz5hFeL/jysLMz58Bz8WaZPXNmZGpysmnbu2d/n8hyMPN4A8B9jQ0h0uuy7M0ssf0AlYU6kd6S5bXMqK0HqCjUCfRIlp2Z7bYcoLJQJ9LlHG9mXrTdAJWFOpF+LMv+zHO2GqCyUCfSy7K8k3naNgNUFupEelWWQ5knbDFAZaFOpNc0nbc7HrW9AJWFOpHekOWNZgjXZwMI9fyR3pHl5cyIbQWoKNQJdPnwyq7MZtsJUFmoE+nyMfC3MmttJUBloU6kx7McyEzYRoDKQp1Ir2g610g/aQsBKgt1Iv1s9y/ppbYPoLJQJ9Lrs+zJPGLrACoLdSK9NcurjcvvAOoKdfcWpa9kttkugMpCnUiXtzh2Z16wVQCVhTqRLv8sfDuz2jYBVBbqRHp507n73VO2CKCyUCfSz3QjPW57ACoLdSL9fJZ9jW8IB6gv1In0piyvN74hHKCuUHcvv3upOwBU+Bd1+YbwjbYCoE6jIg1Qf6gBEGoAhBpAqAEQagCEGkCoARBqAKEGQKgBEGoAoQZAqAGE2hYACDUAQg0g1AAINQBCDSDUAAg1gFADINQACDWAUAMg1AAINYBQAyDUAEINgFADINQAQg2AUAMINQBCDYBQAwg1AEINgFADCDUAQg0g1AAINQBCDSDUAAg1gFADINQACDWAUAMg1AAINYBQAyDUAEINgFADINQAQg2AUAMINQBCDYBQAwg1AEINgFADCDUAQg0g1AAINQBCDSDUAAg1gFADINQACDWAUAMg1AAINcDD5NyYPQCo1unMl0INUJ+5zInDm1d+V34QaoC6zGSOJtIX7jwg1AD1mM68n0hP/fdBoQaow5VupP/4/y+EGmD4fsl8lEj/fbdfCjXAcP2Q+SSRvnWvJwg1wPB8nTmZSN++35OEGqB9JcyfJ9Df9PJkoQZoV3mL4+NE+sdeXyDUAO0p/yz8MJGefJAXCTVAO65l3kukrz7oC4UaYPAuZT5IpKcX8mKhBhis8lHw8pHwmYUeQKgBBqfcVKncXGluMQcRaoD+K5fffZFAn+nHwYQaoL9mM58m0uf7dUChBuifG5kjifTP/TyoUAP0x/Wmc/e73/p9YKEGWLzLTeca6T8HcXChBlici03n7Y5/BnUCoQZYuO8zxxPp2UGeRKgBFuarzKn5blEq1ADtKx9e+SyB/ratEwo1QO9uZo4l0j+1eVKhBujNX03nFqW/tn3ifwUYACTfn86fpYgKAAAAAElFTkSuQmCC';
var indicator = [
    { name: '审计监察部', max: 100, num: 1 },
    { name: '行政事务部', max: 100, num: 2 },
    { name: '信息导航管理', max: 100, num: 3 },
    { name: '安全质量部', max: 100, num: 4 },
    { name: '安检护卫部', max: 100, num: 5 },
];
var dataValue = [43, 90, 80, 53, 78, 89, 77, 50]
var dataArr = [
    {
        value: dataValue,
        name: '',
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#17E7FF',
                },
                shadowColor: '#17E7FF',
                shadowBlur: 5,
            },
        },
    },
];
function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i].name === obj) {
      return i;
    }
  }
  return false;
}
var num = 80;
option = {
    backgroundColor: '#000928',
    color: ['#17E7FF'],
    title: {
        text: [`{span|${num}}\n{b|综合评分}`].join(''),
        bottom: 'center',
        left: 'center',
        // triggerEvent: true, //开启雷达图的边角名称可点击
        textStyle: {
            rich: {
                span: {
                    fontSize: 50,
                    fontWeight: 500,
                    color: '#fff',
                    textShadowColor: 'rgba(120, 246, 255, 0.73)',
                    textShadowBlur: -1,
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 2,
                },
                b: {
                    fontSize: 25,
                    color: '#D7F6F3',
                    lineHeight: 40,
                },
            },
        },
    },
    radar: {
        radius: '60%',
        // startAngle: 60, //坐标系起始角度，也就是第一个指示器轴的角度
        // z:5,
        // shape: 'circle',
        triggerEvent: true, //开启雷达图的边角名称可点击
        name: {
            // (圆外的标签)雷达图每个指示器名称的配置项。分
            formatter: (value) => {
                 let i = contains(indicator, value); // 处理对应要显示的样式
                return '{a|' + dataValue[i] + '}\n' + '{b|' + value + '}';
            },
            textStyle: {
                padding: [10, 20, 5, 20],
            },
            backgroundColor: {
                image: uploadedDataURL2,
            },
            // width: 200,
            // height: 70,
            rich: {
                a: {
                    align: 'center',
                    color: '#6EFFFD',
                    fontWeight: 500,
                    height: 30,
                    fontSize: 28,
                },
                b: {
                    align: 'center',
                    color: '#FFFFFF',
                    fontSize: 14,
                },
                // triggerEvent: true,//开启雷达图的边角名称可点击
            },
        },

        nameGap: 8,
        indicator: indicator,
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false,
        },
        axisLine: {
            //轴线
            show: true,
            lineStyle: {
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                        color: '#15506D0D',
                        offset: 0,
                    },
                    {
                        color: '#95E4F0',
                        offset: 0.9,
                    },
                ]),
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: 'rgba(153, 209, 246, 0.5)', // 网格分割线颜色
            },
        },
    },
    series: [
        {
            type: 'radar',
            symbolSize: 10,
            symbol: 'circle',
            data: dataArr,
            areaStyle: {
                color: '#9EDDFF',
                opacity: 0.3,
            },
            lineStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: '#00D1FF',
                        },
                        {
                            offset: 1,
                            color: '#00A5FE',
                        },
                    ],
                    false
                ),
                width: 5,
            },
            itemStyle: {
                color: '#fff ',
                borderColor: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: '#00D1FF',
                        },
                        {
                            offset: 1,
                            color: '#00A5FE',
                        },
                    ],
                    false
                ),
                borderWidth: 2,
                opacity: 1,
            },
        },
    ],
};
