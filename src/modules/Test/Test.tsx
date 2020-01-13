import React from "react";
// @ts-ignore
import WithStylesContext from 'react-with-styles/lib/WithStylesContext';
// @ts-ignore
import AphroditeInterface from 'react-with-styles-interface-aphrodite';
import { defaultTheme } from "../../tokens/themes";
import BaseComponent from "./BaseComponent";
import CustomComponent from "./CustomComponent";
import DeepCustomComponent from "./DeepCustomComponent";

const TestWrapper: React.FC = () => {
  return (
    <WithStylesContext.Provider
      value={{
        stylesInterface: AphroditeInterface,
        stylesTheme: defaultTheme,
        direction: "ltr"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <BaseComponent>Base component</BaseComponent>
        {/* 
  // @ts-ignore */}
        <CustomComponent onClick={() => {console.log("I'm just custom.")}}>Custom component</CustomComponent>
        {/* 
  // @ts-ignore */}
        <DeepCustomComponent onClick={() => {console.log("I'm very deep...")}}>Deep custom component</DeepCustomComponent>
      </div>
    </WithStylesContext.Provider>
  );
}

export default TestWrapper;