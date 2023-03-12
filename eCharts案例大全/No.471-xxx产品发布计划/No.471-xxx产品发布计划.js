//圆圈和三角图标
var BLUEC = '/asset/get/s/data-1621845955864-3axUFqMm9.png';
var BLUET = '/asset/get/s/data-1621845950102-7gUZRwc_3.png';
var ORANGEC = '/asset/get/s/data-1621845936770-R15Ud_DLZ.png';
var ORANGET = '/asset/get/s/data-1621845872303-YqLesHwVD.png';

let start_ = '2021-01-1 00:00:00',
 end_ = '2021-12-31 00:00:00'; //时间这里是写死固定值，可根据实际需求更改，比如获取当前时间的前三个月及后三个月
let allinfo = []; //所有list集合
let yAxisData_plant = []; //版本名
let chartsdata = [
 //图表数据
 [
  {
   product: 'A',
   list: [
    {
     db_version: ' A',
     pre_package_time: '2021-02-1 00:00:00',
     pre_release_time: '2021-03-1 00:00:00',
     release_version: '0',
     re_package_time: '2021-03-5 00:00:00',
     re_release_time: '2021-04-2 00:00:00',
     id: 3,
     remark: '40',
    },
    {
     db_version: ' A',
     pre_package_time: '2021-02-8 00:00:00',
     pre_release_time: '2021-03-2 00:00:00',
     release_version: '1',
     re_package_time: '2021-04-1 00:00:00',
     re_release_time: '2021-04-10 00:00:00',
     id: 4,
     remark: '180',
    },
    {
     db_version: ' A',
     pre_package_time: '2021-06-2 00:00:00',
     pre_release_time: '2021-06-15 00:00:00',
     release_version: '1a',
     re_package_time: '2021-06-18 00:00:00',
     re_release_time: '2021-07-10 00:00:00',
     id: 4,
     remark: 'P1',
    },
   ],
  },
 ],
 [
  {
   product: ' B',
   list: [
    {
     db_version: '  B',
     pre_package_time: '2021-03-5 00:00:00',
     pre_release_time: '2021-03-20 00:00:00',
     release_version: '0',
     re_package_time: '2021-03-10 00:00:00',
     re_release_time: '2021-03-22 00:00:00',
     id: 3,
     remark: '20',
    },
   ],
  },
 ],
 [
  {
   product: 'C',
   list: [
    {
     db_version: 'C ',
     pre_package_time: '2021-06-23 00:00:00',
     pre_release_time: '2021-07-07 00:00:00',
     release_version: '1',
     re_package_time: '2021-06-23 00:00:00',
     re_release_time: '2021-07-13 00:00:00',
     id: 9,
     remark: '0',
    },
   ],
  },
 ],
 [
  {
   product: 'D ',
   list: [
    {
     db_version: 'D ',
     pre_package_time: '2020-12-2 00:00:00',
     pre_release_time: '2020-12-22 00:00:00',
     release_version: '0',
     re_release_time: '2020-12-2 00:00:00',
     re_package_time: '2020-12-22 00:00:00',
     id: 14,
     remark: '90',
    },
   ],
  },
 ],
];

let seriesData = [],
 RealData = [],
 newBase = [],
 newBlock = []; //计划时间，实际时间，标线，时间区域
//newBase.push({
//				'name': 'Schedule',
//				'xAxis': new Date(('2021-06-18 00:00:00').replace(/-/g,'/')).getTime(),
//				'lineStyle':{'color':'#f72b35'},
//				'label': {
//					'normal': {
//						'position':'start',
//						'fontWeight': 'bold',
//						'padding': 25,
//						'fontSize': 16,
//						'fontFamily': 'Microsoft YaHei',
//						'formatter': function(params) {
//							return params.name;
//						},
//					},
//				},
//			});
newBlock.push([
 {
  name: '元旦',
  xAxis: new Date('2021-01-01 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-01-3 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
newBlock.push([
 {
  name: '春節',
  xAxis: new Date('2021-02-06 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-02-21 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
newBlock.push([
 {
  name: '清明節',
  xAxis: new Date('2021-04-03 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-04-5 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
newBlock.push([
 {
  name: '勞動節',
  xAxis: new Date('2021-05-01 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-05-3 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
newBlock.push([
 {
  name: '端午節',
  xAxis: new Date('2021-06-12 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-06-14 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
newBlock.push([
 {
  name: '中秋節',
  xAxis: new Date('2021-09-19 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-09-21 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
newBlock.push([
 {
  name: '國慶節',
  xAxis: new Date('2021-10-1 00:00:00'.replace(/-/g, '/')).getTime(),
  label: {
   fontWeight: 'bold',
   position: 'top',
   distance: -2,
   fontSize: 14,
   color: '#a8071a',
   fontFamily: 'Microsoft YaHei',
  },
 },
 {
  xAxis: new Date('2021-10-5 23:59:00'.replace(/-/g, '/')).getTime(),
 },
]);
chartsdata.length > 0
 ? chartsdata.map((item, index) => {
    yAxisData_plant.push(item[0].product);
    item[0].list.length > 0
     ? item[0].list.map((listItem) => {
        allinfo.push(listItem);
        let startTime = new Date(
         listItem.pre_package_time.replace('00:00:00', '12:00:00').replace(/-/g, '/')
        ).getTime();
        let endTime = new Date(listItem.pre_release_time.replace('00:00:00', '12:00:00').replace(/-/g, '/')).getTime();
        let realstartTime = listItem.re_package_time
         ? new Date(listItem.re_package_time.replace('00:00:00', '12:00:00').replace(/-/g, '/')).getTime()
         : '';
        let realendTime = listItem.re_release_time
         ? new Date(listItem.re_release_time.replace('00:00:00', '12:00:00').replace(/-/g, '/')).getTime()
         : '';
        seriesData.push({
         //计划时间
         name: listItem.release_version,
         value: [index, startTime, endTime],
         itemStyle: {
          normal: {
           color: '#ff833b',
          },
         },
        });
        RealData.push({
         //实际时间
         name: listItem.release_version,
         value: [index, realstartTime, realendTime],
         itemStyle: {
          normal: {
           color: '#2194ff',
          },
         },
        });
       })
     : null;
   })
 : null;

option = {
 title: {
  left: 'center',
  text: 'Overall Schedule',
 },
 color: ['#ff833b', '#2194ff'],
 legend: {
  data: ['计划时间', '实际时间'],
  tooltip: {
   show: true,
  },
  top: 30,
  itemWidth: 15,
  itemHeight: 15,
  textStyle: {
   fontSize: 16,
   fontFamily: 'Microsoft YaHei',
  },
  itemGap: 120,
  padding: 5,
 },
 tooltip: {
  formatter: function (params) {
   if (params.componentType != 'markLine' && params.componentType != 'markArea') {
    var res = params.name + '<br/>';
    res +=
     '计划冻结时间：' +
     allinfo[params.dataIndex].pre_package_time.split(' ')[0].replace(/-/g, '/') +
     '&nbsp;' +
     '<br/>' +
     '计划发布时间：' +
     allinfo[params.dataIndex].pre_release_time.split(' ')[0].replace(/-/g, '/') +
     '&nbsp;' +
     '<br/>' +
     '实际冻结时间：' +
     allinfo[params.dataIndex].re_package_time.split(' ')[0].replace(/-/g, '/') +
     '&nbsp;' +
     '<br/>' +
     '实际发布时间：' +
     allinfo[params.dataIndex].re_release_time.split(' ')[0].replace(/-/g, '/') +
     '&nbsp;';
    return res;
   } else if (params.componentType != 'markArea') {
    let time = new Date(params.value);
    let texts = [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('/');
    var str = '时间：' + `${texts}`;
    return str;
    r;
   } else {
    let index = params.dataIndex; //标记区域 下标
    var str = '封网时间：' + '2021-05-05 ~ 2021-05-25';
    return str;
   }
  },
  textStyle: {
   align: 'left',
  },
 },
 grid: {
  top: 100,
  left: 80,
  right: 38,
  bottom: 10,
  height: 545,
 },
 xAxis: {
  type: 'time',
  min: new Date(start_).getTime(), //x轴刻度最小值
  max: new Date(end_).getTime(), //x轴刻度最大值
  interval: (new Date(end_).getTime() - new Date(start_).getTime()) / 12, //x轴 强制设置坐标轴分割间隔
  position: 'top', //x 轴的位置
  splitNumber: 12, //坐标轴的分割段数
  axisLabel: {
   //坐标轴名称显示 样式及文案
   show: true,
   textStyle: { color: '#000' },
   interval: 0,
   margin: 15,
   fontSize: 14,
   formatter: function (value, index) {
    let date = new Date(value);
    let texts = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
    return texts;
   },
  },
  axisLine: { show: true }, //是否显示坐标轴轴线。
  splitLine: {
   //坐标轴在 grid 区域中的分隔线
   show: true, //是否显示分隔线
   lineStyle: { color: 'rgba(0,0,0,0.2)', type: 'dashed' }, //样式：网格线
  },
 },
 yAxis: {
  axisLine: {
   onZero: false,
   show: true, //是否显示坐标轴轴线。
  },
  axisLabel: {
   show: true,
   textStyle: { color: '#000' },
   fontSize: 14,
  },
  splitLine: {
   show: true,
   lineStyle: { color: 'rgba(0,0,0,0.2)', type: 'dashed' },
  },
  inverse: true, //是否是反向坐标轴
  data: yAxisData_plant,
 },
 series: [
  {
   name: '计划时间',
   type: 'custom',
   label: {
    normal: {
     show: true,
     position: 'bottom',
     padding: [18, 0, 0, 0],
     formatter: function (value) {
      let val = allinfo[value.dataIndex].remark ? allinfo[value.dataIndex].remark.split(',').join('\n') : '';
      let texts = [`{fragment1|${val}}`].join('\n');
      return texts;
     },
     color: '#000',
     fontSize: 11,
     rich: {
      fragment1: {
       lineHeight: 14,
       align: 'center',
       color: '#000',
      },
     },
    },
   },
   renderItem: function (params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.03;
    let rectShape = echarts.graphic.clipRectByRect(
     {
      x: start[0],
      y: start[1] - 15,
      width: end[0] - start[0],
      height: 4,
     },
     {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
     }
    );

    const result = rectShape && {
     type: 'rect',
     shape: rectShape,
     style: api.style(),
     styleEmphasis: {
      textStroke: null,
     },
    };
    return result;
   },
   encode: {
    x: [1, 2],
    y: 0,
   },
   data: seriesData,
  },
  {
   name: '计划时间',
   type: 'custom',
   label: {
    normal: {
     show: true,
     position: 'top',
     padding: [0, 0, 10, 0],
     formatter: function (value, index) {
      let texts = `{term|${value.name}}`;
      return texts;
     },
     color: '#000',
     rich: {
      term: {
       align: 'center',
       fontSize: 16,
       color: 'rgb(199,86,83)',
      },
     },
    },
   },
   renderItem: function (params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.03;
    let rectShape = echarts.graphic.clipRectByRect(
     {
      x: start[0],
      y: start[1] - 15,
      width: end[0] - start[0],
      height: 4,
     },
     {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
     }
    );

    const result = rectShape && {
     type: 'rect',
     shape: rectShape,
     style: api.style(),
     styleEmphasis: {
      textStroke: null,
     },
    };
    return result;
   },
   encode: {
    x: [1, 2],
    y: 0,
   },
   data: seriesData,
   markLine: {
    data: newBase,
   },
   markArea: {
    itemStyle: {
     color: 'rgba(200, 200, 200, 0.4)',
    },
    data: newBlock, //封网时间
   },
  },
  {
   name: '计划时间', //这里可能有人会比较困惑 怎么有多个计划时间  这个是我为了在图中显示对应的时间及一些备注信息而添加的
   type: 'custom', //因为没有找到对应的好一点的方法解决  而用了这种形式
   label: {
    normal: {
     show: true,
     position: 'left',
     padding: [0, -5, 0, 0],
     formatter: function (value) {
      let date = new Date(value.data.value[1]);
      let texta = [date.getMonth() + 1, date.getDate()].join('/');
      let newstr = `{fragment1|${texta}}{one|}`;
      return newstr;
     },
     rich: {
      fragment1: {
       color: '#000',
       fontSize: 10,
       padding: [20, -25, 0, 0],
      },
      one: {
       fontSize: 8,
       backgroundColor: {
        image: ORANGET,
       },
      },
     },
    },
   },
   renderItem: function (params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.03;
    let rectShape = echarts.graphic.clipRectByRect(
     {
      x: start[0],
      y: start[1] - 15,
      width: end[0] - start[0],
      height: 4,
     },
     {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
     }
    );

    const result = rectShape && {
     type: 'rect',
     shape: rectShape,
     style: api.style(),
     styleEmphasis: {
      textStroke: null,
     },
    };
    return result;
   },
   encode: {
    x: [1, 2],
    y: 0,
   },
   data: seriesData,
  },
  {
   name: '计划时间',
   type: 'custom',
   label: {
    normal: {
     show: true,
     position: 'right',
     padding: [0, 0, 0, -5],
     formatter: function (value) {
      let date_a = new Date(value.data.value[2]);
      let textb = [date_a.getMonth() + 1, date_a.getDate()].join('/');
      let newstr = `{one|}{fragment1|${textb}}`;
      return newstr;
     },
     rich: {
      fragment1: {
       color: '#000',
       fontSize: 10,
       padding: [20, 0, 0, -25],
      },
      one: {
       fontSize: 8,
       backgroundColor: {
        image: ORANGEC,
       },
      },
     },
    },
   },
   renderItem: function (params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.03;
    let rectShape = echarts.graphic.clipRectByRect(
     {
      x: start[0],
      y: start[1] - 15,
      width: end[0] - start[0],
      height: 4,
     },
     {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
     }
    );

    const result = rectShape && {
     type: 'rect',
     shape: rectShape,
     style: api.style(),
     styleEmphasis: {
      textStroke: null,
     },
    };
    return result;
   },
   encode: {
    x: [1, 2],
    y: 0,
   },
   data: seriesData,
  },
  {
   name: '实际时间',
   type: 'custom',
   label: {
    normal: {
     show: true,
     position: 'left',
     padding: [0, -5, 0, 0],
     formatter: function (value) {
      let date = new Date(value.data.value[1]);
      let texta = [date.getMonth() + 1, date.getDate()].join('/');
      let newstr = `{fragment1|${texta}}{one|}`;
      return newstr;
     },
     rich: {
      fragment1: {
       color: '#000',
       fontSize: 10,
       padding: [0, -25, 20, 0],
      },
      one: {
       fontSize: 8,
       backgroundColor: {
        image: BLUET,
       },
      },
     },
    },
   },
   renderItem: function (params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.03;
    let rectShape = echarts.graphic.clipRectByRect(
     {
      x: start[0],
      y: start[1] - 5,
      width: end[0] - start[0],
      height: 4,
     },
     {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
     }
    );

    const result = rectShape && {
     type: 'rect',
     shape: rectShape,
     style: api.style(),
     styleEmphasis: {
      textStroke: null,
     },
    };
    return result;
   },
   encode: {
    x: [1, 2],
    y: 0,
   },
   data: RealData,
  },
  {
   name: '实际时间',
   type: 'custom',
   label: {
    normal: {
     show: true,
     position: 'right',
     padding: [0, 0, 0, -5],
     formatter: function (value) {
      let date_a = new Date(value.data.value[2]);
      let textb = [date_a.getMonth() + 1, date_a.getDate()].join('/');
      let newstr = `{one|}{fragment1|${textb}}`;
      return newstr;
     },
     rich: {
      fragment1: {
       color: '#000',
       fontSize: 10,
       padding: [0, 0, 20, -25],
      },
      one: {
       fontSize: 8,
       backgroundColor: {
        image: BLUEC,
       },
      },
     },
    },
   },
   renderItem: function (params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.03;
    let rectShape = echarts.graphic.clipRectByRect(
     {
      x: start[0],
      y: start[1] - 5,
      width: end[0] - start[0],
      height: 4,
     },
     {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
     }
    );

    const result = rectShape && {
     type: 'rect',
     shape: rectShape,
     style: api.style(),
     styleEmphasis: {
      textStroke: null,
     },
    };
    return result;
   },
   encode: {
    x: [1, 2],
    y: 0,
   },
   data: RealData,
  },
 ],
};
