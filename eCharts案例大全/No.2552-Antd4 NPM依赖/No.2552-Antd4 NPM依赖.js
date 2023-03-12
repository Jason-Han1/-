// 支持点击打开对应npm链接
const uploadedDataURL = '/asset/get/s/data-1627229866545-v6DvzzMbR.json';

myChart.showLoading();
$.getJSON(uploadedDataURL, function (json) {
 myChart.hideLoading();
 const colors = ['#CCCCCC', '#55AF29', '#FFD017', '#B72E00'];

 const c = d3.scaleQuantile().domain(d3.range(1, 50)).range(colors);
 const nodes = [...new Set(json.map((item) => [item.source, item.target]).flat())];
 const targets = json.map((item) => item.target);
 const nodeSizeMap = _.countBy(targets);
 const nodesData = nodes.map((node) => ({
  id: node,
  name: node,
  symbolSize: nodeSizeMap[node] || 1,
 }));
 myChart.setOption(
  (option = {
   title: {
    text: 'Antd4 NPM依赖',
   },
   animationDurationUpdate: 1500,
   animationEasingUpdate: 'quinticInOut',
   tooltip: {},
   series: [
    {
     type: 'graph',
     layout: 'force',
     force: {
      edgeLength: 5,
      repulsion: 20,
      gravity: 0.2,
     },
     data: nodesData.map(function (node) {
      return {
       value: node.symbolSize,
       name: node.name,
       symbolSize: node.symbolSize,
       itemStyle: {
        color: c(node.symbolSize),
       },
      };
     }),
     edges: json.map(function (edge) {
      return {
       source: edge.source,
       target: edge.target,
       symbol: ['none', 'arrow'],
       symbolSize: 3,
      };
     }),
     label: {
      position: 'right',
      show: true,
      overflow: 'breakAll',
      width: 200,
     },
     emphasis: {
      focus: 'adjacency',
     },
     labelLayout: {
      hideOverlap: true,
     },
     roam: true,
     lineStyle: {
      width: 0.5,
      curveness: 0.3,
      opacity: 0.7,
     },
    },
   ],
  }),
  true
 );
});

myChart.on('click', (e) => {
 if (e.seriesType === 'graph' && e.dataType === 'node' && e.name) {
  window.open(`https://www.npmjs.com/package/${e.name}`);
 }
});

// 分享ts环境下的依赖关系生成代码, 可自动生成项目下所有依赖的关系字典
// author 姚元璋
// import fs from "fs-extra";
// import path from "path";
// import chalk from "chalk";

// const argPath = process.argv[2];
// const depMap: Array<{ source: string; target: string }> = [];

// async function findPackageJson(basePath: string) {
//   try {
//     const files = await fs.readdirSync(basePath);
//     files.forEach(async (file) => {
//       const depDirPath = path.join(basePath, file);
//       try {
//         const info = await fs.statSync(depDirPath);
//         const isFile = info.isFile();
//         const isDir = info.isDirectory();
//         if (isDir) {
//           await findPackageJson(depDirPath);
//         } else if (isFile && file === "package.json") {
//           const json = await fs.readJSONSync(depDirPath);
//           const { name, dependencies } = json;
//           if (dependencies) {
//             const depNames = Object.keys(dependencies);
//             depNames.forEach((target) => {
//               depMap.push({
//                 source: name,
//                 target,
//               });
//             });
//             const data = JSON.stringify(depMap);
//             console.log(chalk.gray("写入数据..."));
//             await fs.outputFileSync(`${process.cwd()}/npm_deps.json`, data);
//           }
//         }
//       } catch (e) {
//         console.log(chalk.redBright(e));
//       }
//     });
//   } catch (e) {
//     console.log(chalk.redBright(e));
//   }
//   return depMap;
// }

// async function readNodeModules(path: string) {
//   const nodeModulesPath = `${path}/node_modules`;
//   await findPackageJson(nodeModulesPath);
// }

// (async function () {
//   await readNodeModules(argPath);
// })();
