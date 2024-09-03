import React from "@rbxts/react";

import { MusicPlayer } from "../music-player";

export function MainScreen(): React.Element {
  return (
    <screengui key="Main" ZIndexBehavior={Enum.ZIndexBehavior.Sibling}>
      <MusicPlayer />
      <uipadding
        PaddingTop={new UDim(0.01)}
        PaddingBottom={new UDim(0.01)}
        PaddingLeft={new UDim(0.005)}
        PaddingRight={new UDim(0.005)}
      />
    </screengui>
  );
}