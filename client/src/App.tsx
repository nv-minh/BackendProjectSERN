import './App.css';
import { Route, Routes } from 'react-router-dom';
import path from './ultils/constant';
import Home from './containers/Public/Home';
import React from 'react';

import {
  DetailPost,
  ForRent,
  HomePage,
  HouseForRent,
  Login,
  Register,
  RentalApartment,
  RoomForRent,
} from './containers/Public';

function App() {
  return (
    <div className="w-full h-full bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<ForRent />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RoomForRent />} />
          <Route path={path.NHA_CHO_THUE} element={<HouseForRent />} />
          <Route path={path.DETAIL_POST_TITLE_POSTID} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
