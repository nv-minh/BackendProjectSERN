import './App.css';
import { Route, Routes } from 'react-router-dom';
import path from './ultils/constant';
import Home from './containers/Public/Home';
import React from 'react';

import {
  Register,
  Login,
  RentalApartment,
  ForRent,
  RoomForRent,
  HouseForRent,
  HomePage,
} from './containers/Public';

function App() {
  return (
    <div className="w-screen h-full bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.HOMEPAGE} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<ForRent />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RoomForRent />} />
          <Route path={path.NHA_CHO_THUE} element={<HouseForRent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
