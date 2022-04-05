import React, { useState } from "react";
import Ckeditor from "./editor";
import "./write-page.scss";

export default function WritePage() {
  return (
    <>
      <div className="write-container">
        <div className="write-wrapper">
          <Ckeditor />
        </div>
      </div>
    </>
  );
}
