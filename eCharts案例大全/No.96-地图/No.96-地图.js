var uploadedDataURL = "/asset/get/s/data-1640675453477-qxHXlDzdd.json";

// var uploadedDataURL = "/asset/get/s/data-1640675453477-qxHXlDzdd.json";

// var uploadedDataURL = '/asset/get/s/data-1640660720718-f_Cfu0tY1.json';
var x = document.createElement("CANVAS");
var context = x.getContext("2d");

var x1 =   0;
var y1 =   100;
var x2 =  100;
var y2 =   0;
var linearGradient1 = context.createLinearGradient(x1,y1,x2,y2); 

linearGradient1.addColorStop(0,"#fff");
linearGradient1.addColorStop(1,"#0A56BC");

context.fillStyle=linearGradient1;
context.fillRect(0,00,500,500);





let valArr = [
  {
    name: '一心社区',
    value: 111,
  },
];
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('chinamap', geoJson);
  loadMap('chinamap');
});
function loadMap(name) {
  option = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    tooltip: {
      show: true,
    },
    geo3D: {
      
    },
    series: [
      {
        name: 'MAP',
        type: 'map3D',
        map: name,
        label: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 15,
          },
          borderRadius: 0,
        },
        itemStyle: {
          color: '#11A0EE',
          borderColor: '#65ebff',
          borderWidth: 1,
          opacity: 1,
        },
        // postEffect: {
        //   enable: true,
        //   bloom: {
        //     enable: true,
        //     bloomIntensity: 0.3,
        //   },
        //   colorCorrection: {
        //     enable: true,
        //   },
        // },
        aspectScale: 1, //长宽比
        selectedMode: false, //是否允许选中多个区域
        data: valArr,
        shading: 'lambert',       // 三维地理坐标系组件中三维图形的着色效果，echarts-gl 中支持下面三种着色方式:
        // 'lambert' 通过经典的 lambert 着色表现光照带来的明暗。
        // 'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了基于物理的渲染（PBR） 来表现真实感材质。
        // realisticMaterial: {}    // 真实感材质相关的配置项，在 shading 为'realistic'时有效。
        lambertMaterial: {
            detailTexture: x
        },      // lambert 材质相关的配置项，在 shading 为'lambert'时有效。
        // colorMaterial: {
        //   detailTexture: x
        // },        // color 材质相关的配置项，在 shading 为'color'时有效。

        light: {
          // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
          main: {
            // 场景主光源的设置，在 globe 组件中就是太阳光。
            color: '#0A55BC', //主光源的颜色。[ default: #fff ]
            intensity: 12, //主光源的强度。[ default: 1 ]
            shadow: false, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
            shadowQuality: 'high',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
            alpha: 0, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
            beta: 0, // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
          },
          ambient: {
            // 全局的环境光设置。
            color: '#fff', // 环境光的颜色。[ default: #fff ]
            intensity: 1, // 环境光的强度。[ default: 0.2 ]
          },
        },

        viewControl: {
          // 用于鼠标的旋转，缩放等视角控制。
          projection: 'perspective', // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
          autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ]
          autoRotateDirection: 'cw', // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
          autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
          autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
          damping: 0, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
          rotateSensitivity: 1, // 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
          zoomSensitivity: 1, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
          panSensitivity: 1, // 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度
          panMouseButton: 'left', // 平移操作使用的鼠标按键，支持：'left' 鼠标左键（默认）;'middle' 鼠标中键 ;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
          rotateMouseButton: 'left', // 旋转操作使用的鼠标按键，支持：'left' 鼠标左键;'middle' 鼠标中键（默认）;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)

        //   distance: 100, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
        //   minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
        //   maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。

        //   alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
        //   beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
        //   minAlpha: 25, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
        //   maxAlpha: 360, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
        //   minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
        //   maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]

        //   center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。

          animation: true, // 是否开启动画。[ default: true ]
          animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
          animationEasingUpdate: 'cubicInOut', // 过渡动画的缓动效果。[ default: cubicInOut ]
        },
      },
    ],
  };
  myChart.setOption(option);
}
