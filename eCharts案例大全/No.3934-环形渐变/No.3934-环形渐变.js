 const startAlpha = 1;
      const endAlpha = 0;
      var color2 = ['#1DC3EF', '#E17E4E', '#0AB273', '#F08903', '#03B9F7'];
      const color = [
          {
        r: 31,
        g: 209,
        b: 255
      },
        {
          r: 3,
          g: 191,
          b: 254
        },
        {
          r: 255,
          g: 145,
          b: 2
        },
        {
          r: 11,
          g: 191,
          b: 122
        },
        {
          r: 240,
          g: 133,
          b: 82
        }
      ]
      const data = [
          {
        name: "新疆天正通达",
        value: 2025.76,
        _startArc: 0,
        _endArc: 3.0471975511965976,
        _color: "#1DC3EF",
        _percent: 0.16666666666666666
      }, {
        name: "西安省体广场",
        value: 2221.06,
        _startArc: 0,
        _endArc: 3.0471975511965976,
        _color: "#E17E4E",
        _percent: 0.16666666666666666
      }, {
        name: "江苏绿地集团",
        value: 2000.01,
        _startArc: 1.0471975511965976,
        _endArc: 0,
        _color: "#0AB273",
        _percent: 0.16666666666666666
      }, {
        name: "家利物业",
        value: 1236.23,
        _startArc: 3.0471975511965976,
        _endArc: 0,
        _color: "#F08903",
        _percent: 0.16666666666666666
      }, {
        name: "西安省体广场",
        value: 1236.23,
        _startArc: 3.0471975511965976,
        _endArc: 0,
        _color: "#03B9F7",
        _percent: 0.16666666666666666
      }]

      /**
       * 线性渐变起止方向的计算方法
       *
       *
       * @param {*} startArc 开始角度
       * @param {*} endArc 结束角度
       * @returns 四个坐标 x,y,x2,y2
       */
      function getCoordinates(startArc, endArc) {
        const posi = [
          Math.sin(startArc),
          -Math.cos(startArc),
          Math.sin(endArc),
          -Math.cos(endArc)
        ]
        const dx = posi[2] - posi[0]
        const dy = posi[3] - posi[1]

        return getLocation(dx, dy)
      }

      function getLocation(dx, dy) {
        const tanV = dx / dy
        const directSign = Math.abs(tanV) < 1
        const t = directSign ? tanV : 1 / tanV

        const sign1 = t > 0 ? 1 : -1
        const sign2 = dx > 0 ? 1 : -1
        const sign = directSign ? sign1 * sign2 : sign2

        const group1 = [0.5 - sign * t / 2, 0.5 + sign * t / 2]
        const group2 = sign > 0 ? [0, 1] : [1, 0]
        const group = [...group1, ...group2]
        const keys = directSign ? ['x', 'x2', 'y', 'y2'] : ['y', 'y2', 'x', 'x2']

        let res = {}
        keys.forEach((k, idx) => {
          res[k] = group[idx]
        })
        return res
      }

      /**
       * 给数据写入 样式(线性渐变)
       *
       * @param {*} datas 数据
       * @param {*} colorlist 颜色列表
       * @param {*} startAlpha 开始颜色的透明度
       * @param {*} endAlpha 结束颜色透的明度
       * @returns 带样式的数据
       */
      function setGradientColorInItemSyle(datas, colorlist, startAlpha, endAlpha) {
        for (let i = 0; i < datas.length; i++) {
          const color = colorlist[i];
          const startArc = datas[i]._startArc;
          const endArc = datas[i]._endArc;
          // 这里计算了 线性渐变的起止方向
          const coordinates = getCoordinates(startArc, endArc);
          datas[i].itemStyle = {
            color: {
              ...coordinates,
              type: "linear",
              global: false,
              // 这里给了 线性渐变的起止颜色
              colorStops: [{
                offset: 0,
                color: `rgba(${color.r}, ${color.g}, ${color.b}, ${startAlpha})`
              }, {
                offset: 1,
                color: `rgba(${color.r}, ${color.g}, ${color.b}, ${endAlpha})`
              }]
            }
          }
        }
        return datas
      }

      var height = 50;
      var option = {
        color: ['#1DC3EF', '#E17E4E', '#0AB273', '#F08903', '#03B9F7'],
        tooltip: {
          trigger: "item",
        },
        series: [{
          type: "pie",
          data: setGradientColorInItemSyle(data, color, endAlpha, startAlpha),
          // "animation": false,
          radius: [height, height + 10],
          center: ["50%", "50%"],
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: 'rgba(172, 195, 237, 1.00)',
              },
              labelLine: {
                length: 20,
                length2: 20,
                show: true,
              }
            }
          },
        }]
      };