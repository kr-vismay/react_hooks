import { memo } from "react";
import React from 'react';

function Child({printlog}) {
    console.log("child is called");
  return (
    <div>
      
    </div>
  )
  }
export default memo (Child);
