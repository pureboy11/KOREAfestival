import React, { useEffect, useState, useRef } from "react";

/* global kakao */

export default function Map(props) {
  const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);
  const [level, setLevel] = useState(8); //지도레벨
  const basicLevel = () => {
    setLevel(8);
  };

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4736976342884472291e70b07a0248dd&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 8,
        };
        const map = new kakao.maps.Map(container.current, options);
        // setMapCenter(center);
        setKakaoMap(map);

        // 지도를 표시하는 div 크기를 변경하는 함수입니다
        function resizeMap() {
          var mapContainer = document.getElementById("map");
          mapContainer.style.width = "650px";
          mapContainer.style.height = "650px";
        }

        function relayout() {
          // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
          // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다
          // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
          map.relayout();
        }
      });
    };
  }, [container]);

  // console.log(level);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // change viewport size
    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;

    // relayout and...

    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(
      (pos) => new kakao.maps.LatLng(...pos)
    );

    setMarkers((markers) => {
      // clear prev markers
      markers.forEach((marker) => marker.setMap(null));

      // assign new markers
      return positions.map(
        (position) => new kakao.maps.Marker({ map: kakaoMap, position })
      );
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );
      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);

  return <div id="container" ref={container} />;
}
