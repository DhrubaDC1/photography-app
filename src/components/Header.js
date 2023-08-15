import React from "react";
import "../App.css";
import { Gallery } from "react-grid-gallery";

function Header() {
  const sunrise = [
    {
      src: require("../images/sunrise/converted/IMG_1871.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1888.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_2206.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1883.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1876.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1873.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1871.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_2199.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_2211.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_2209.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_2218.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_2214.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1881.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1879.jpeg"),
      width: 320,
      height: 200,
    },

    {
      src: require("../images/sunrise/converted/IMG_2191.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/sunrise/converted/IMG_1894.jpeg"),
      width: 320,
      height: 200,
    },
  ];
  const greenery = [
    {
      src: require("../images/greenery/converted/IMG_1471 Large.jpeg"),
      width: 200,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1466 Large.jpeg"),
      width: 200,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1465 Large.jpeg"),
      width: 200,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1461 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1460 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1438 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1417 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1414 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1314 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1308 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1302 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1297 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1293 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1292 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1287 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1283 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1279 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1278 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1275 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1273 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1176 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_9683 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/greenery/converted/IMG_1255 Large.jpeg"),
      width: 320,
      height: 200,
    },
  ];
  const birds = [
    {
      src: require("../images/birds/converted/B0D58DA1-5C31-4039-9B84-5928430D051A Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2295 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2299 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2306 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2307 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2313 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2315 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2317 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2324 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2328 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2331 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2336 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2337 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2342 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2350 Large.jpeg"),
      width: 320,
      height: 200,
    },
    {
      src: require("../images/birds/converted/IMG_2363 Large.jpeg"),
      width: 320,
      height: 200,
    },
  ];
  return (
    <div>
      <div style={{ margin: 20 }} className="App">
        <text className="App-Title">Dhruba's Photography</text>
      </div>
      <div style={{ marginBottom: 50 }}>
        <div>
          <text className="App-SubTitle">Sunrise</text>
        </div>

        <Gallery
          images={sunrise}
          margin={5}
          thumbnailStyle={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>
        <div>
          <text className="App-SubTitle">Greenery</text>
        </div>
        <Gallery
          images={greenery}
          margin={5}
          thumbnailStyle={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>
        <div>
          <text className="App-SubTitle">Birds</text>
        </div>
        <Gallery
          images={birds}
          margin={5}
          thumbnailStyle={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Header;
