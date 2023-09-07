import React from "react";
import Filterarticle from "../filterarticle/filtrearticle";
import { useParams } from "react-router-dom";


const Carttop = () => {
  const { article } = useParams();

  return (
    <div>
      <Filterarticle article={article}/>
    </div>
  );
};

export default Carttop;
