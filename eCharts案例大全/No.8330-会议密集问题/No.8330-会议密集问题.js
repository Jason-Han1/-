var renderMachineRoomData = []
var renderConfRoomData = []
var confToMachieRoomLink = []

var iconPath={
          pathMachineRoom: 'path://M77.1,81.7v824h254v-824H77.1z M276.8,396.3h-148v-38h148V396.3z M276.8,474.3h-148v-38h148V474.3z M276.8,318.3h-148v-38\n' +
            '\th148V318.3z M276.8,166.3h-148v-38h148V166.3z M276.8,244.3h-148v-38h148V244.3z M378.1,81.7v824h254v-824H378.1z M577.8,396.3h-148\n' +
            '\tv-38h148V396.3z M577.8,474.3h-148v-38h148V474.3z M577.8,318.3h-148v-38h148V318.3z M577.8,166.3h-148v-38h148V166.3z M577.8,244.3\n' +
            '\th-148v-38h148V244.3z M679.1,81.7v824h254v-824H679.1z M878.8,396.3h-148v-38h148V396.3z M878.8,474.3h-148v-38h148V474.3z\n' +
            '\t M878.8,318.3h-148v-38h148V318.3z M878.8,166.3h-148v-38h148V166.3z M878.8,244.3h-148v-38h148V244.3z',

          pathConfRoom: 'path://M934,583.4c0,35.8-18.2,70.1-51.3,96.4c-10.8,8.6-26.5,6.8-35.1-4c-8.6-10.8-6.8-26.5,4-35.1\n' +
            '\tc14.8-11.7,32.4-31.2,32.4-57.2c0-22.6-13.2-44.4-37.2-61.5c-26.6-18.9-62.4-29.3-100.8-29.3H270.6c-38.4,0-74.3,10.4-100.9,29.3\n' +
            '\tc-24,17-37.2,38.9-37.2,61.5c0,26,17.6,45.4,32.5,57.2c10.8,8.6,12.6,24.3,4,35.1c-4.9,6.2-12.2,9.5-19.6,9.5\n' +
            '\tc-5.4,0-10.9-1.8-15.5-5.4c-33.1-26.3-51.4-60.5-51.4-96.4c0-39.2,20.7-75.6,58.3-102.2c35-24.8,81.1-38.5,129.8-38.5h101.1\n' +
            '\tc-14.5-14.2-16.5-56.2-0.7-84.5c9.9-17.6,42.5-55.5,71.4-55.5c33.9,0,49.6,35.5,63.4,35.5c13.8,0,29.5-35.5,63.4-35.5\n' +
            '\tc28.9,0,61.6,37.9,71.4,55.5c15.8,28.3,13.8,70.3-0.7,84.5h106c48.7,0,94.8,13.7,129.8,38.5C913.3,507.8,934,544.1,934,583.4z\n' +
            '\t M534.8,665.7h-53.2c-13.8,0-25,11.2-25,25s11.2,25,25,25h53.2c13.8,0,25-11.2,25-25S548.6,665.7,534.8,665.7z M505.7,267.4\n' +
            '\tc39,0,70.6-31.6,70.6-70.6c0-39-31.6-70.7-70.6-70.7c-39,0-70.7,31.7-70.7,70.7C435.1,235.8,466.7,267.4,505.7,267.4z M229.5,595.3\n' +
            '\tc0-39,31.6-70.7,70.7-70.7c39,0,70.6,31.7,70.6,70.7S339.2,666,300.2,666C261.1,666,229.5,634.4,229.5,595.3z M423,846.1H177.5\n' +
            '\tc-24.1,0-31.3-54.9-12-89.4c9.9-17.6,42.5-55.5,71.4-55.5c33.9,0,49.6,35.5,63.4,35.5c13.8,0,29.5-35.5,63.4-35.5\n' +
            '\tc28.9,0,61.6,37.9,71.4,55.5C454.3,791.2,447.1,846.1,423,846.1z M648,595.3c0-39,31.6-70.7,70.7-70.7c39,0,70.6,31.7,70.6,70.7\n' +
            '\tS757.7,666,718.6,666C679.6,666,648,634.4,648,595.3z M841.5,846.1H595.9c-24.1,0-31.3-54.9-12-89.4c9.9-17.6,42.5-55.5,71.4-55.5\n' +
            '\tc33.9,0,49.6,35.5,63.4,35.5c13.8,0,29.5-35.5,63.4-35.5c28.9,0,61.6,37.9,71.4,55.5C872.8,791.2,865.6,846.1,841.5,846.1z',
        };
        
// 模拟获取机房或会议数据
var getData = function(lowerValue, upperValue, name) {
    let data = []
    let count = Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    for(let i=0;i<count;i++){
        data.push(name + i)
    }
    return data
  };


/*机房平均平均分布生成坐标函数
   * @method calculationMRCoordinate
   * @param {Number} index 第几个数据
   * @param {Number} total 总共多少数据
   * @param {Number} range 点与点之间的间距
   * @return {Array} 返回生成的数据
    */
var calculationMRCoordinate = function(index, total, range) {
    let x = null
    let y = null

    let baseNum = Math.ceil(Math.sqrt(total))

    let tempX = index % baseNum
    let tempY = parseInt(index / baseNum)

    x = tempX * range + 0
    y = tempY * range + 0

    // 如果是最后一排且数量小于baseNum，重新计算range X
    if ((total % baseNum) > 0 && tempY === parseInt(total / baseNum)) {
      range = range * (baseNum - 1) / ((total % baseNum) + 1)
      x = tempX * range + 0 + range
    }

    return [x, y]
  };
  
  
/*会议围绕中心点圆形分布生成坐标函数
   * @method calculationCRCoordinate
   * @param {Array} center 围绕的圆心
   * @param {Number} radius 圆的半径
   * @param {Number} index 第几个数据
   * @param {Number} total 总共多少数据
   * @param {Number} count 一个圆上显示多少个
   * @param {Number} range 圆与圆之间的间距
   * @return {Array} 返回生成的数据
  */
var calculationCRCoordinate = function(center, radius, index, total, count, range) {
    let x = null
    let y = null

    let baseNum = parseInt(index / count)
    let offset = baseNum % 2 === 0 ? 0 : (360 / count) / 2

    let hudu = (2 * Math.PI / 360) * ((360 / count) * parseInt(index % count) + offset)

    radius = radius + baseNum * range

    x = center[0] + Math.sin(hudu) * radius
    y = center[1] + Math.cos(hudu) * radius

    return [x, y]
  };
  
// 渲染机房数据
var renderDataMachineRoom=function(){
    let machineRoomData = getData(1,10,'机房')
    let machineRoomLen = machineRoomData.length
    let temInteractive = []
    renderMachineRoomData = machineRoomData.map((item, index) => {
      let coordinate = calculationMRCoordinate(index, machineRoomLen, 110)
      item.name = item
      let tempD = {
        name: item,
        x: coordinate[0],
        y: coordinate[1],
        // fixed:true,
        symbolKeepAspect: true,
        category: '机房',
        value: item,
        symbol: iconPath.pathMachineRoom,
        symbolSize: 30,
      }
      return tempD
    })
};
// 渲染会议数据
var renderDataConfRoom=function(){
    let tempDataConf = []
    let tempDataConfLink = []
    if (renderMachineRoomData.length > 0) {
      //遍历机房
      for (let machineRoom of renderMachineRoomData) {
        let confName = machineRoom.name + '下会议'
        let confRoomData = getData(0,20,confName)
        let confRoomLen = confRoomData.length
        if (confRoomLen > 0) {
          let center = [machineRoom.x, machineRoom.y]
          let radius = 50 / (Math.ceil(confRoomLen / 6) + 1)
          let count = confRoomLen > 6 ? 6 : confRoomLen
          //遍历会议
          confRoomData.forEach((confItem, confIndex) => {
            // center,radius,index,total,count,range
            let coordinate = calculationCRCoordinate(center, radius, confIndex, confRoomLen, count, radius)
            let tempD = {
              name: confItem,
              x: coordinate[0],
              y: coordinate[1],
              // fixed:true,
              category: '会议',
              value: confItem,
              symbolKeepAspect: true,
              symbol: iconPath.pathConfRoom,
              symbolSize: 35,
            }
            tempDataConf.push(tempD)

            let tempDLink = {
              source: confItem,
              target: machineRoom.name,
              value: {
                s: confItem,
                t: machineRoom,
                type: 'confToMachine'
              }
            }
            tempDataConfLink.push(tempDLink)
          });
          //遍历会议 end
        };
      };
      //遍历机房 end
    };

    renderConfRoomData = tempDataConf
    confToMachieRoomLink = tempDataConfLink
};

renderDataMachineRoom()
renderDataConfRoom()
var seriesData = [].concat(renderMachineRoomData,renderConfRoomData)
var link = confToMachieRoomLink
console.log(seriesData,link)
option = {
          backgroundColor: '#232629',
          scaleLimit: {
            min: 0.7,
          },
          tooltip: {
            padding: [18, 14],
            backgroundColor: '#141414',
            borderColor: '#383b3c',
            borderWidth: 1,
            textStyle: {
              color: '#9ca9b1',
            },
            formatter: (params,) => {
              return 'aaaa'
            },
          },
          series: [
            {
              name: 'ConferenceTopology',
              type: 'graph',
              layout: 'none',
              data: seriesData,
              links: link,
              roam: true,
              focusNodeAdjacency: true,
              animationDelay: 1000,
              itemStyle: {
                normal: {
                  color: (params) => {
                    // let index = params.data.value.status ? params.data.value.status : 0
                    // return this.iconColor[index]
                    return '#25a5c5'
                  },
                  opacity: 1,
                }
              },
              label: {
                show: true,
                position: 'top',
                formatter: (params) => {
                  return params.value.name
                }
              },
              lineStyle: {
                color: '#25a5c5',
                width: 2,
                curveness: 0.3
              },
              emphasis: {
                lineStyle: {
                  width: 3
                },
              },
            },
          ]
        };