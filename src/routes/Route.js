import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home/Home'
import Nfts from '../pages/NFTs/Nfts'



const CreateRoutes = () => (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="nft" element={<Nfts/>} />
    </Routes>
);

export default CreateRoutes;