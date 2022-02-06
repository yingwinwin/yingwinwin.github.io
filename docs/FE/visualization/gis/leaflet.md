---
id: leaflet
title: Leaflet
slug: /FE/visualization/leaflet
---

## 创建地图

1. 安装依赖
```shall
npm i leaflet
```

2. 创建地图
```jsx
import "./App.css";  // 设置html，body，#root，#map宽高都为100%
import { useEffect } from "react";
// highlight-next-line
import L from "leaflet";  // 引入依赖
// highlight-next-line
import 'leaflet/dist/leaflet.css';  // 引入leaflet的样式文件

function App() {

  useEffect(() => {
    const map = new L.Map("map");
    const layer = new L.tileLayer(   // https://leafletjs.com/reference.html#tilelayer
      "http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
      {
        subdomains: "1234",  // 高德地图的域名1234都可以，地图获取分流
      }
    );
    layer.addTo(map);
    // 维度在前，经度在后
    map.setView([39.909186, 116.397411], 10);
  }, []);

    // 创建承载地图的div
  return <div id="map"></div>;
}

export default App;
```
:::note
1. 创建一个容器承载地图的`dom`元素
2. 用`L.map`创建一个地图实例
3. 用`L.tileLayer`添加地图瓦片底图，代码中使用的是高德的瓦片底图
4. 用`addTo(map)`,添加底图到容器上
5. 用`map.setView`设置当前地图显示的位置，和显示等级，或者直接使用`L.map`的第二个参数来设置中心点和等级
```js
const map = new L.Map("map", {
    center: [39.909186, 116.397411],
    zoom: 10,
});
```
:::


## 更换底图
```jsx
import "./App.css";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

function App() {
  useEffect(() => {
    const map = new L.Map("map", {
      center: [39.909186, 116.397411],
      zoom: 10,
    });
    const amapLayer = new L.tileLayer( // https://leafletjs.com/reference.html#tilelayer
      "http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
      {
        subdomains: "1234", // 高德地图的域名1234都可以，地图获取分流
      }
    );
    amapLayer.addTo(map)  // 默认地图为高德地图

    // 天地图 http://lbs.tianditu.gov.cn/server/MapService.html
    const tdtVectorLayer = new L.tileLayer(
      "http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=521ce5fd2d4b4b573ef44447ea17e1ac",
      {}
    );

    const tdtLabelLayer = new L.tileLayer(
      "http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=521ce5fd2d4b4b573ef44447ea17e1ac",
      {}
    );
    // highlight-next-line
    const tdtLayer = new L.LayerGroup([tdtVectorLayer, tdtLabelLayer]);
    // 添加切换地图控件。自己写radio也可以 
    // highlight-start
    const layerControl = new L.Control.Layers(  // https://leafletjs.com/reference.html#control-layers
      {
        高德: amapLayer,
        天地图: tdtLayer,
      },
      {},
      { collapsed: false }   // 是否将控件折叠
    );
    // highlight-end
    layerControl.addTo(map);
  }, []);

  return <div id="map"></div>;
}

export default App;
```

:::note
1. `L.LayerGroup` 将多个地图组结合在一起，天地图的图层和图层上面的投影是分开的，所以需要组合。
2. `L.Control.Layers`底图切换控件，可以切换图层
3. 天地图官网：[https://www.tianditu.gov.cn/](https://www.tianditu.gov.cn/)
:::

## 标记

```jsx
import "./App.css";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const svg = '<svg t="1621166776642" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1407" width="200" height="200"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00" p-id="1408"></path></svg>';

function App() {
  useEffect(() => {
    const map = new L.Map("map", {
      center: [39.909186, 116.397411],
      zoom: 10,
    });
    const amapLayer = new L.tileLayer( // https://leafletjs.com/reference.html#tilelayer
      "http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
      {
        subdomains: "1234", // 高德地图的域名1234都可以，地图获取分流
      }
    );
    amapLayer.addTo(map)

    const tdtVectorLayer = new L.tileLayer(
      "http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=521ce5fd2d4b4b573ef44447ea17e1ac",
      {}
    );

    const tdtLabelLayer = new L.tileLayer(
      "http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=521ce5fd2d4b4b573ef44447ea17e1ac",
      {}
    );
    
    const tdtLayer = new L.LayerGroup([tdtVectorLayer, tdtLabelLayer]);
    // 添加切换地图控件。自己写radio也可以
    const layerControl = new L.Control.Layers(
      {
        高德: amapLayer,
        天地图: tdtLayer,
      },
      {},
      { collapsed: false }
    );
    layerControl.addTo(map);
    // highlight-start
    const marker = new L.Marker([39.909186, 116.397411], {
      icon: new L.Icon({
        iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
        iconSize: [32,32],
        iconAnchor: [16,32]
      })
    });
    marker.addTo(map)
    // highlight-end
  }, []);

  return <div id="map"></div>;
}

export default App;
```

:::note
1. 用`L.Marker`在地图上叠加点位，要注意`天地图和高德地图的坐标体系不一样`，同一个坐标点可能位置不同
2. 用`L.Icon`自定义`icon`图标，如果用`svg`需要转`base64`格式。如果是url直接使用即可。
3. 在设置`icon`的`size`的时候，要注意在地图上的位置偏移，一般偏移图片大小的一半就可以
:::

## 添加多数据点

[geojson](https://geojson.io/#map=2/20.0/0.0) 在网站中生成json数据。真实数据是后端给的数据，通过fetch进行请求

```jsx
import "./App.css";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const svg =
  '<svg t="1621166776642" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1407" width="200" height="200"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00" p-id="1408"></path></svg>';

const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "大同",
      },
      geometry: {
        type: "Point",
        coordinates: [116.1474609375, 39.85915479295669],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "朝阳",
      },
      geometry: {
        type: "Point",
        coordinates: [116.54296874999999, 39.93922484079194],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "永定",
      },
      geometry: {
        type: "Point",
        coordinates: [116.15158081054688, 40.04864272291728],
      },
    },
  ],
};

function App() {
  useEffect(() => {
    const map = new L.Map("map", {
      center: [39.909186, 116.397411],
      zoom: 10,
    });
    const amapLayer = new L.tileLayer( // https://leafletjs.com/reference.html#tilelayer
      "http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7",
      {
        subdomains: "1234", // 高德地图的域名1234都可以，地图获取分流
      }
    );
    amapLayer.addTo(map);

    const tdtVectorLayer = new L.tileLayer(
      "http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=521ce5fd2d4b4b573ef44447ea17e1ac",
      {}
    );

    const tdtLabelLayer = new L.tileLayer(
      "http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=521ce5fd2d4b4b573ef44447ea17e1ac",
      {}
    );

    const tdtLayer = new L.LayerGroup([tdtVectorLayer, tdtLabelLayer]);
    // 添加切换地图控件。自己写radio也可以
    const layerControl = new L.Control.Layers(
      {
        高德: amapLayer,
        天地图: tdtLayer,
      },
      {},
      { collapsed: false }
    );
    layerControl.addTo(map);

    const marker = new L.Marker([39.909186, 116.397411], {
      icon: new L.Icon({
        iconUrl: "data:image/svg+xml," + encodeURIComponent(svg),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      }),
    });
    marker.addTo(map);
    // highlight-start
    const glayer = new L.geoJSON(data, {
      pointToLayer: (geoJsonPoint, latlng) => {
        //   marker的点为动态从geoJson中获取的点
        return new L.Marker(latlng, {
          icon: new L.Icon({
            iconUrl: "data:image/svg+xml," + encodeURIComponent(svg),
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          }),
        })
      }
    })
    glayer.addTo(map)
    // highlight-end
  }, []);

  return <div id="map"></div>;
}

export default App;
```

:::note
1. `https://geojson.io/`进行数据生成。或者通过后端给的`fetch`数据
2. `L.geoJSON`进行图层组的渲染
3. `pointToLayer`属性是设置点，属性的值是一个函数
:::