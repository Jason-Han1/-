 
 let data1 = 50  //最大100
 let getvalue = data1 / 100 *270
option = {
    backgroundColor:'#022142',
      title: {
        text: getvalue + '分',
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '隐患占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },
      tooltip: {
        show:false,
        formatter: function(params) {
          return '<span style="color: #fff;">综合得分：' + getvalue + '分</span>'
        }
      },
      angleAxis: {
        startAngle:225,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z:2,
          data: [getvalue],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap:'-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z:1,
          data: [270],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap:'-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368',
              // shadowBlur: 5,
              // shadowColor: '#2A95F9'
            }
          }
        },
        // {
        //   //不知道为啥设置这个会导致背景图失效？？？有人知道吗
        //   type: 'pictorialBar',
        //   symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
        //   symbolSize: [16, 100],
        //   symbolOffset: [8, 0],
        //   symbolPosition:'end',
        //   z:3,
        //   data: [270],
        //   showBackground: false,
        //   backgroundStyle: {
        //     color: '#f'f'f'
        //   },
        //   coordinateSystem: 'polar',
        //   roundCap: true,
        //   barWidth: 5,
        //   barGap:'-100%',
        //   itemStyle: {
        //     normal: {
        //       opacity: 1,
        //       color: '#093368',
        //       shadowBlur: 5,
        //       shadowColor: '#2A95F9'
        //     }
        //   }
        // }
        ],

    }
