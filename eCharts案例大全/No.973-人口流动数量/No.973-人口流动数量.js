//  使用须知
// 参考链接 https://www.makeapie.com/editor.html?c=xwXyloB70C
// 如有侵权 联系本人删除

var colors = ['#2468d9', '#3a9eff', '#bfecff'];
var line =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABQCAYAAADBTPF9AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAcKADAAQAAAABAAAAUAAAAAAfQ361AAADlElEQVR4Ae2d6UqUYRiGxyX3XdPSco3OpYOIqBCxEJFCRAqjEJFCRAojCiPaKFqxjWyxjTasaMEKy8zOIrDrgfcIpn508zzBxftr5L7v6xvQ5puZzMrKyia4Ay2Z+Ke5API2wy/YqNkgUmeQtyVJ3BBziC6AwK2wDB2iFSI28rbDT2iPNUQXQF4nLEGbaIWIjbwu+AGtsYboAsjrhkWIPzFEHdpvpzvhOzSrdnCfG3k9SeI692OoDoDAXvgGTaod3OdGXh8sQKP7MVQHQN5u+BISVQ2SG3n9SeIa4Rq+oyNwAD5Dg+8lhNsjbxDmoV64hu/oyNsLH0Oi8HWAvKEksU64hu/oCDwA7yAkql4KyBuGt1Cr2sF9buSNwBuocT+G6gDIG4U5qFbt4D438g7Ba6hyP4bqAMgbg1dQqdrBfW7kjcOLkCh8KSBvAp5DhXAN39GRdwSeQbnvJYTbI28SnkKZcA2/0RGXA0fhcUgUvQ6SxGOcj6BUtIbv2EniCc6HUOJ7DdH2SeIU5/2QqCsxF3kn4R4Ui9bwHRtxJvEUzECR7zVE2yeJZzjtncIhUdFjkniO8zYUKnZwnxlxeXAeboZE0cshSbzAeQMKRGv4jp0kXuK8HhJFrwXE5cNluAarRGv4jp0kXuW8EhJFrwUTB/YstGdjvmgN37GTxGnOiyFR9FpAXAHYb6b2G2qeaA3fsZPEW5z2t2JIVLwcEFcI9r81Z0OiokEyJ4l3OU9DrmgN37ERVwT2Coa9khESFS8HxBWDvZZorymGRGGJDxA4BTmKHdxnRlwJzMLxkCh6OSSJdrui3fEWz0RFj4grhSdg956GRFGJZcizu78nFfNHZhZAnkm0N9McjkFEF0BeOdjb2iZEK0Rs5FXASxiPNUQXQF4l2LuEx0QrROwkcY7zYKwhugDyqsA+/mRUtELERl412AcRjcQaogsgrwbsI8GGRStEbOTVwnvYH2uILoC8OvgA+0QrRGzkrU4Sh2IN0QUQWA+fYI9ohYidJM5zDsYaogsgrwHsQ9wHRCtEbOStTRL7Yw3RBRDYCF9hl2iFiJ0kLnD2xRqiCyCvCezLvnpFK0Rs5K1PEntiDdEFENgMi7BDtELERl5Lktgda4gugMBWsC+F7hKtELGR1wZL0BlriC6AvHZYhm3/Q4W4ezkLC8jr4GGzMA0zWfyIf/aQEJjllEi0T5Gye07tW0x/Z/lj/vphfwB0b32KnijWSQAAAABJRU5ErkJggg==';
const dataList = [
    {
        name: '北京',
        value: 10,
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '河南',
        // value: Math.round(Math.random() * 1000),
        value: 10000001,
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '北京',
        value: 2000,
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },

    {
        name: '上海',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '重庆',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '河北',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '河南',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '云南',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '辽宁',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '黑龙江',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '湖南',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '安徽',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '山东',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '新疆',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '江苏',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '浙江',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '江西',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '湖北',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '广西',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '甘肃',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '山西',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '内蒙古',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '陕西',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '吉林',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '福建',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '贵州',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '广东',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '青海',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '西藏',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '四川',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '宁夏',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '海南',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '台湾',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '香港',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
    {
        name: '澳门',
        value: Math.round(Math.random() * 1000),
        tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
    },
];
option = {
    visualMap: {
        min: 0,
        max: 2000,
        left: 26,
        bottom: 50,
        showLabel: true,
        orient: 'horizontal',
        // borderColor :'#fff',
        textStyle: {
            color: 'red',
        },
        // lt（小于，less than），
        // gt（大于，greater than），
        // lte（小于等于 less than or equals）
        // ，gte（大于等于
        pieces: [
            {
                gte: 80,
                label: '≥80%',
                color: colors[0],
            },
            {
                gt: 60,
                lt: 80,
                label: '60 - 80%',
                color: colors[1],
            },
            {
                lte: 60,
                label: '≤60%',
                color: colors[2],
            },
        ],
        show: !0,
    },
    title: {
        text: '散点图,地图轮播',
        bottom: '18%',
        left: '3.6%',
        textStyle: {
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: 'normal',
        },
    },
    legend: {
        orient: 'vertical',
        text: '地图',
        left: 'left',
        bottom: 'bottom',
    },
    geo: {
        map: 'china',
        show: true,
        roam: false,
    },
    tooltip: {
        padding: 0,
        enterable: true,
        trigger: 'item',
        position: 'inside',
        formatter: function (params) {
            var tipHtml = getTipcneter(params);
            return tipHtml;
        },
    },
    series: [
        {
            // name: 'iphone4',
            type: 'map',
            mapType: 'china',
            labelLine: {},
            // 地图原点控制
            showLegendSymbol: false,
            data: dataList,
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            legendHoverLink: false,
            label: {
                normal: {
                    show: false,
                    color: '#fff',
                    fontWeight: 'bold',
                    rich: {
                        cnNum: {
                            fontSize: 20,
                            color: '#D4EEFF',
                            left: 'center',
                        },
                    },
                },
            },
            symbolSize: [8, 8],
            itemStyle: {
                normal: {
                    color: '#F6DA39',
                },
            },
            z: 99,
            data: [
                {
                    name: '北京',
                    value: [116.405285, 39.904989, 497, 656],
                    visualMap: false,
                },
            ],
        },
    ],
};
// tip 引导线为通过定位向右偏移实现,左侧可以自己画斜线,或者像本人直接图片,哈哈哈^^
function getTipcneter(item) {
    let data = item ? item.data : {};
    let { name = '' } = data ? data : {};
    let flag = false;
    if (item.seriesType === 'scatter') {
        name = '北京总部';
        flag = true;
    }
    let tipHtml = `<div style="position: relative; width:auto;height:auto;">
  <div style="width: 80px;height:200px;position: absolute;display:flex;height:50px; ">
      <img src='${line}' style="width:80px;"/>
      <span style="display:${
          flag ? 'none' : 'inline-block'
      } ;width: 8px;height:8px;background:#fff;border-radius:50%;position: absolute;left:-5px;top:-5px"></span>
      <span style="display:${
          flag ? 'inline-block' : 'none'
      } ;width: 12px;height:12px;background:#F6DA39;border-radius:50%;position: absolute;left:-7px;top:-6px"></span>
  </div>
  <div style=" width: 100px;
  position: absolute;
  left:80px;
  height: 150px;
  font-size: .15rem;
  padding: 0rem .25rem;
  background-color: yellowgreen;
  border: 1px solid rgba(68,239,250,0.48);
  box-shadow: 0 -6px 34px 0 rgba(0,35,98,0.19), inset 0 1px 34px 0 rgba(24,203,235,0.70);" className="map_tip">

    <h5 style="
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: .15rem;
    color:#fff;
    border-bottom: 1px solid rgba(68,239,250,0.48);
    ">
      ${name}
    </h5>
    </div>
  </div>`;
    return tipHtml;
}
var count = 0;
var timeTicket = null;
var dataLength = option.series[0].data.length;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function () {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    count !== 0 &&
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: count - 1,
        });
    count === 0 &&
        myChart.dispatchAction({
            type: 'toggleSelected',
            seriesIndex: 1,
            dataIndex: 0,
        });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: count === 0 ? 1 : 0,
        dataIndex: count === 0 ? count : count - 1,
    });
    count++;
    if (count >= 3) {
        count = 0;
    }
}, 1000);

myChart.on('mouseover', function (params) {
    console.log(params);
    clearInterval(timeTicket);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    params.seriesType !== 'scatter' &&
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex,
    });
});
myChart.on('mouseout', function (params) {
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        count !== 0 &&
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: count - 1,
            });
        myChart.dispatchAction({
            type: 'showTip',
            // 选中散点图
            seriesIndex: count === 0 ? 1 : 0,
            dataIndex: count === 0 ? count : count - 1,
        });
        count++;
        if (count >= 3) {
            count = 0;
        }
    }, 1000);
});
