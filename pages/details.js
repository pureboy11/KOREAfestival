import Link from "next/link";
import TitleManager from "../components/TitleManager";
import Image from "next/image";
// import KakaoMap from "./KakaoMap";
import Map from "../hooks/Map";
import Sidebar from "../components/Sidebar";
import festivalData from "../data/전국문화축제표준데이터.json";
import { useState, useEffect } from "react";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [markerPositions, setMarkerPositions] = useState([]);
  const markerPositions1 = [[36.82443597, 128.4586463]];
  const markerPositions2 = [
    [37.499590490909185, 127.0263723554437],
    [37.499427948430814, 127.02794423197847],
    [37.498553760499505, 127.02882598822454],
    [37.497625593121384, 127.02935713582038],
    [37.49629291770947, 127.02587362608637],
    [37.49754540521486, 127.02546694890695],
    [37.49646391248451, 127.02675574250912],
  ];
  const markerPositions3 = [[]];
  let today = new Date();

  const guys = [
    { name: "YD", money: "2022-10-30" },
    { name: "Bill", money: "2022-10-12" },
    { name: "Andy", money: "2022-08-30" },
    { name: "Roky", money: "2023-01-30" },
  ];

  console.log(today);

  const data = festivalData.records;
  const NewData = data.filter((a) => new Date(a.축제시작일자) > today);
  console.log({ NewData: NewData });

  console.log({ newdata: NewData });
  // console.log(festivalData);
  // console.log(data);
  // console.log(markerPositions);
  const [filterFestival, setFilterFestival] = useState(NewData);

  filterFestival.sort(function (a, b) {
    if (a.축제시작일자 > b.축제시작일자) {
      return 1;
    } else if (a.축제시작일자 < b.축제시작일자) {
      return -1;
    } else return 0;
  });
  const listOfDate = [
    ...new Set(filterFestival.map((it, id) => new Date(it.축제시작일자, id))),
  ];

  // console.log(listOfDate);

  const filterFestivals = data.filter(
    (startDate) => startDate.축제시작일자 > today
  );
  // console.log(filterFestivals);

  // console.log(filterFestival[0].축제시작일자);

  const [mapSize, setMapSize] = useState([1535, 250]);
  const [hotelInfo, setHotelInfo] = useState(false);
  const [transportationInfo, setTransportationInfo] = useState(false);
  const [foodInfo, setFoodInfo] = useState(false);

  const handleMarker = () => {
    setMarkerPositions();
  };
  const handleHotel = () => {
    setHotelInfo(!hotelInfo);
    setTransportationInfo(false);
    setFoodInfo(false);
  };
  const handleTransportation = () => {
    setTransportationInfo(!transportationInfo);
    setHotelInfo(false);
    setFoodInfo(false);
  };
  const handleFood = () => {
    setFoodInfo(!foodInfo);
    setHotelInfo(false);
    setTransportationInfo(false);
  };

  const reactiveMap = () => {};

  const handleMapicon = () => {};

  console.log(hotelInfo);

  return (
    <>
      <TitleManager pageTitle="home" />
      <section className="main container mx-auto relative overflow-hidden ">
        <div className="border border-slate-300">
          <div className="absolute right-5 gap-3 grid grid-rows-3 mt-3">
            <button
              className="z-10 w-14 h-14 bg-sky-300 rounded-lg border-2 border-gray-100 shadow-xl"
              onClick={handleHotel}
            >
              숙소
            </button>
            <button
              className="z-10 w-14 h-14 bg-sky-300 rounded-lg border-2 border-gray-100 shadow-xl"
              onClick={handleTransportation}
            >
              교통편
            </button>
            <button
              className="z-10 w-14 h-14 bg-sky-300 rounded-lg border-2 border-gray-100 shadow-xl"
              onClick={handleFood}
            >
              먹거리
            </button>
          </div>
          {visible && (
            <Map
              className="align-middle justify-center mx-auto "
              markerPositions={markerPositions}
              size={mapSize}
              level={8}
            ></Map>
          )}

          <div className="h-[390px] overflow-auto">
            {hotelInfo ? (
              <div className="absolute top-56 bg-slate-100 w-full h-80">
                <div> 숙소 정보</div>
              </div>
            ) : transportationInfo ? (
              <div className="absolute top-56 bg-slate-100 w-full h-80">
                <div> 교통 정보</div>
              </div>
            ) : foodInfo ? (
              <div className="absolute top-56 bg-slate-100 w-full h-80">
                <div> 식당 정보</div>
              </div>
            ) : null}

            <div className="grid grid-cols-1 p-4 md:grid-cols-2 m-auto">
              {filterFestival.map((festivalList, id) => (
                <div key={festivalList.id} className="w-full tracking-tighter ">
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto ">
                      <div className="">
                        <div className="p-4 md:w-full">
                          <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                              >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                              </svg>
                            </div>
                            <div className="flex-grow">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                {festivalList.축제명}
                              </h2>
                              <p className="leading-relaxed text-base">
                                {festivalList.축제시작일자}
                              </p>
                              <div className="bg-white-100 dark:bg-gray-700 my-auto">
                                <button
                                  className="bg-green-100 dark:bg-emerald-900 border border-slate-200 dark:border-slate-700 align-middle items-end w-20 text-xs"
                                  onClick={() => {
                                    let location = [
                                      [festivalList.위도, festivalList.경도],
                                    ];
                                    setMarkerPositions(location);

                                    // console.log(markerPositions);
                                    // console.log(location);
                                  }}
                                >
                                  지도 보기
                                </button>
                                {/* <button
                    className="bg-green-100 dark:bg-emerald-900 border border-slate-200 dark:border-slate-700 ml-3 align-middle items-end w-20 text-xs"
                    onClick={() => {
                      <Link href={`/${festivalList.id}`} key={festivalList.id}>
                        <a>
                          <div>asdfasdf</div>
                        </a>
                      </Link>;
                    }}
                  >
                    자세히 보기
                  </button> */}
                                {festivalList.홈페이지주소 === "" ? (
                                  <div></div>
                                ) : (
                                  <Link href={festivalList.홈페이지주소}>
                                    <a target="_blank">
                                      <button className="bg-green-100 dark:bg-emerald-900 border border-slate-200 dark:border-slate-700 align-middle items-end w-20 text-xs">
                                        홈페이지 가기
                                      </button>
                                    </a>
                                  </Link>
                                )}
                              </div>
                              <a className="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-2">
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
