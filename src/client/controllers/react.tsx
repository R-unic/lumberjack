import { Controller, type OnStart } from "@flamework/core";
import { createRoot } from "@rbxts/react-roblox";
import React, { StrictMode } from "@rbxts/react";

import { PlayerGui } from "shared/utility/client";
import { MainScreen } from "client/react/screens/main";

@Controller()
export class ReactController implements OnStart {
  public onStart(): void {
    const root = createRoot(PlayerGui);
    root.render(
      <StrictMode>
        <MainScreen />
      </StrictMode>
    );
  }
}