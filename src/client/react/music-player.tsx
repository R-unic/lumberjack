import React from "@rbxts/react"

export function MusicPlayer(): React.Element {
  return (
    <frame
      key="Music"
      BackgroundTransparency={1}
      Position={new UDim2(0.798, 0, 0.952, 0)}
      Size={new UDim2(0.202, 0, 0.048, 0)}
    >
      <frame
        key="Contain"
        AnchorPoint={new Vector2(0.5, 0.5)}
        BackgroundTransparency={1}
        Position={new UDim2(0.5, 0, 0.5, 0)}
        Size={new UDim2(0.95, 0, 0.84, 0)}
      >
        <frame
          key="SongFrame"
          AnchorPoint={new Vector2(1, 0)}
          BackgroundColor3={Color3.fromRGB(0, 0, 0)}
          BackgroundTransparency={0.5}
          BorderSizePixel={0}
          Position={new UDim2(1, 0, 0, 0)}
          Size={new UDim2(1, 0, 1, 0)}
        >
          <uicorner CornerRadius={new UDim(0.3, 0)} />
          <textlabel
            key="Song"
            BackgroundTransparency={1}
            FontFace={new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
            Position={new UDim2(0.028, 0, 0, 0)}
            Size={new UDim2(0.954, 0, 1, 0)}
            Text="Loading..."
            TextColor3={Color3.fromRGB(255, 255, 255)}
            TextScaled={true}
            TextSize={14}
            TextWrapped={true}
            TextXAlignment={Enum.TextXAlignment.Right}
          />
        </frame>
        <frame
          key="InfoContain"
          BackgroundTransparency={1}
          ClipsDescendants={true}
          Position={new UDim2(0.44, 0, -2.322, 0)}
          Size={new UDim2(0.548, 0, 1.026, 0)}
        >
          <frame
            key="Main"
            BackgroundColor3={Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={0.5}
            BorderSizePixel={0}
            Position={new UDim2(0, 0, 1, 0)}
            Size={new UDim2(1, 0, 1, 0)}
          >
            <uicorner CornerRadius={new UDim(0.2, 0)} />
            <textlabel
              key="SongName"
              BackgroundTransparency={1}
              FontFace={new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
              Position={new UDim2(0.057, 0, 0.158, 0)}
              Size={new UDim2(0.892, 0, 0.304, 0)}
              Text="..."
              TextColor3={Color3.fromRGB(255, 255, 255)}
              TextScaled={true}
              TextSize={14}
              TextWrapped={true}
              TextXAlignment={Enum.TextXAlignment.Right}
            />
            <textbox
              key="ID"
              BackgroundTransparency={1}
              ClearTextOnFocus={false}
              FontFace={new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
              PlaceholderText="Loading..."
              Position={new UDim2(0.024, 0, 0.462, 0)}
              Size={new UDim2(0.949, 0, 0.423, 0)}
              Text="65452355"
              TextColor3={Color3.fromRGB(220, 220, 220)}
              TextEditable={false}
              TextScaled={true}
              TextSize={14}
              TextWrapped={true}
              TextXAlignment={Enum.TextXAlignment.Right}
              Visible={false}
            />
          </frame>
        </frame>
        <frame
          key="Contain"
          BackgroundTransparency={1}
          Position={new UDim2(0.294, 0, -1.154, 0)}
          Size={new UDim2(0.706, 0, 1.019, 0)}
        >
          <frame
            key="Info"
            AnchorPoint={new Vector2(0, 1)}
            BackgroundColor3={Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={0.5}
            BorderSizePixel={0}
            Position={new UDim2(0.85, 0, 1, 0)}
            Size={new UDim2(0.15, 0, 1.113, 0)}
            ZIndex={4}
          >
            <uicorner CornerRadius={new UDim(0.3, 0)} />
            <imagelabel
              key="Icon"
              AnchorPoint={new Vector2(0.5, 0.5)}
              BackgroundTransparency={1}
              Image="rbxassetid://1291128077"
              Position={new UDim2(0.5, 0, 0.5, 0)}
              Size={new UDim2(0.8, 0, 0.8, 0)}
            >
              <uiaspectratioconstraint />
            </imagelabel>
            <textbutton
              key="Hitbox"
              AutoButtonColor={false}
              BackgroundTransparency={1}
              FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
              Selected={true}
              Size={new UDim2(1, 0, 1, 0)}
              Text=" "
              TextColor3={Color3.fromRGB(0, 0, 0)}
              TextScaled={true}
              TextSize={14}
              TextWrapped={true}
              ZIndex={2}
            />
            <uiaspectratioconstraint />
          </frame>
          <frame
            key="Mute"
            AnchorPoint={new Vector2(0, 1)}
            BackgroundColor3={Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={0.5}
            BorderSizePixel={0}
            Position={new UDim2(0.468, 0, 1, 0)}
            Size={new UDim2(0.15, 0, 1.113, 0)}
            ZIndex={4}
          >
            <uicorner CornerRadius={new UDim(0.3, 0)} />
            <imagelabel
              key="Icon"
              AnchorPoint={new Vector2(0.5, 0.5)}
              BackgroundTransparency={1}
              Image="rbxassetid://166377448"
              Position={new UDim2(0.5, 0, 0.5, 0)}
              Size={new UDim2(0.8, 0, 0.8, 0)}
            >
              <uiaspectratioconstraint />
            </imagelabel>
            <textbutton
              key="Hitbox"
              AutoButtonColor={false}
              BackgroundTransparency={1}
              FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
              Selected={true}
              Size={new UDim2(1, 0, 1, 0)}
              Text=" "
              TextColor3={Color3.fromRGB(0, 0, 0)}
              TextScaled={true}
              TextSize={14}
              TextWrapped={true}
              ZIndex={2}
            />
            <uiaspectratioconstraint />
          </frame>
          <frame
            key="Skip"
            AnchorPoint={new Vector2(0, 1)}
            BackgroundColor3={Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={0.5}
            BorderSizePixel={0}
            Position={new UDim2(0.659, 0, 1, 0)}
            Size={new UDim2(0.15, 0, 1.113, 0)}
            ZIndex={4}
          >
            <uicorner CornerRadius={new UDim(0.3, 0)} />
            <imagelabel
              key="Icon"
              AnchorPoint={new Vector2(0.5, 0.5)}
              BackgroundTransparency={1}
              Image="rbxassetid://8231196906"
              Position={new UDim2(0.5, 0, 0.5, 0)}
              Size={new UDim2(0.8, 0, 0.8, 0)}
            >
              <uiaspectratioconstraint />
            </imagelabel>
            <textbutton
              key="Hitbox"
              AutoButtonColor={false}
              BackgroundTransparency={1}
              FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
              Selected={true}
              Size={new UDim2(1, 0, 1, 0)}
              Text=" "
              TextColor3={Color3.fromRGB(0, 0, 0)}
              TextScaled={true}
              TextSize={14}
              TextWrapped={true}
              ZIndex={2}
            />
            <uiaspectratioconstraint />
          </frame>
        </frame>
      </frame>
    </frame>
  );
}