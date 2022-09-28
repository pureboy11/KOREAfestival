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

  console.log(today);

  const data = festivalData.records;
  const NewData = data.filter((a) => new Date(a.축제시작일자) > today);

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

  const [mapSize, setMapSize] = useState([1535, 250]);
  const [hotelInfo, setHotelInfo] = useState(false);
  const [transportationInfo, setTransportationInfo] = useState(false);
  const [foodInfo, setFoodInfo] = useState(false);
  const [viewmode, setViewMode] = useState(false);

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

  const handleviewmode = () => {
    setViewMode(!viewmode);
  };

  const reactiveMap = () => {};

  const handleMapicon = () => {};

  // console.log(hotelInfo);

  return (
    <>
      <TitleManager pageTitle="home" />
      <section className="main container mx-auto relative overflow-hidden ">
        <button
          className="bg-slate-200 p-1 rounded-lg border border-slate-300 "
          onClick={handleviewmode}
        >
          toggle
        </button>
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

          <div className="h-screen overflow-auto  ">
            {viewmode ? (
              <session>
                <div className=" grid grid-cols-4 md:grid-cols-6  h-8 text-center text-md font-bold tracking-tighter bg-violet-200">
                  <span className="col-span-2 border-r-2 border-slate-200 px-5 my-auto">
                    축제 이름
                  </span>
                  <span className="border-r-2 border-slate-200 px-5 my-auto ">
                    일정
                  </span>
                  <span className="hidden md:block border-r-2 border-slate-200 px-5 my-auto">
                    메모
                  </span>

                  <span className="hidden md:block border-r-2 border-slate-200 px-5 my-auto">
                    T.M.I
                  </span>
                  <span className="hidden md:block border-slate-200 px-5 my-auto">
                    평생 저장!
                  </span>
                </div>
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

                {filterFestival.map((festivalList, id) => (
                  <div
                    key={festivalList.id}
                    className="grid grid-cols-4 md:grid-cols-6 w-25 border-b-2 border-slate-100 text-center tracking-tighter my-auto"
                  >
                    <div className="col-span-2 text-xs font-bold text-left my-auto">
                      {festivalList.축제명}
                    </div>
                    <div className="bg-white-100 dark:bg-gray-700 text-sm my-auto">
                      {festivalList.축제시작일자}
                    </div>
                    <div className="hidden md:block bg-white-100 dark:bg-gray-700 text-sm my-auto">
                      <button className="bg-indigo-200 rounded-lg items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </div>

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
                    <div className="hidden md:block bg-white-100 dark:bg-gray-700 text-sm my-auto">
                      <button className="bg-indigo-200 rounded-md items-center justify-center p-1">
                        💾
                      </button>
                    </div>
                  </div>
                ))}
              </session>
            ) : (
              <div>
                <div className="text-center text-md tracking-tighter bg-violet-200 my-auto shadow-md mt-3 mx-3">
                  {" "}
                  축제 목록{" "}
                </div>
                <div className="grid grid-cols-1 p-4 md:grid-cols-2 m-auto">
                  {filterFestival.map((festivalList, id) => (
                    <div key={id} className="w-full tracking-tighter ">
                      <section className="text-gray-600 body-font">
                        <div className="container px-5 mx-auto ">
                          <div className="">
                            <div className="p-4 md:w-full">
                              <div
                                className="relative overflow-hidden flex h-[160px] border rounded-lg shadow-md border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:scale-105 ease-in hover:border-pink-100 duration-300 cursor-pointer"
                                onClick={() => {
                                  let location = [
                                    [festivalList.위도, festivalList.경도],
                                  ];
                                  setMarkerPositions(location);

                                  // console.log(markerPositions);
                                  // console.log(location);
                                }}
                              >
                                <div className="flex-grow relative">
                                  <div className="bg-pink-200 h-[3px] absolute top-0"></div>
                                  <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                                    {festivalList.축제명}
                                  </h2>
                                  <span className="text-gray-900 text-sm title-font mb-3 bg-pink-200 rounded-md p-1 mr-3">
                                    {festivalList.제공기관명}
                                  </span>
                                  <span className="text-gray-900 text-sm title-font mb-3 bg-green-200 rounded-md p-1">
                                    {festivalList.축제시작일자}
                                  </span>

                                  <p className="leading-relaxed text-base"></p>
                                  <div className="bg-white-100 dark:bg-gray-700 my-auto mt-5">
                                    {festivalList.홈페이지주소 === "" ? (
                                      <div></div>
                                    ) : (
                                      <Link href={festivalList.홈페이지주소}>
                                        <a
                                          target="_blank"
                                          className="mt-3 text-indigo-500 inline-flex items-center text-sm"
                                        >
                                          홈페이지 가기
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
                                      </Link>
                                    )}
                                  </div>
                                </div>

                                <div className="absolute -top-5 -right-10 w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full shadow-md ">
                                  <Image
                                    className=""
                                    src="/정읍꽃.jpg"
                                    width="300%"
                                    height="300%"
                                    objectFit="cover"
                                    alt="festivalImg"
                                  />
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
            )}
            <div className="flex flex-col items-center justify-center py-2">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
