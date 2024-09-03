import { SoundService as Sound } from "@rbxts/services";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react"

import { Assets, getChildrenOfType } from "shared/utility/instances";
import { springs } from "shared/utility/ui";

interface MusicPlayerButtonProps {
  readonly name: string;
  readonly iconID: string;
  onClick(btn: TextButton): void
}

let buttonOrder = 1;
function MusicPlayerButton(props: MusicPlayerButtonProps): React.Element {
  const { name, iconID } = props;
  return (
    <textbutton
      key={name}
      AutoButtonColor={false}
      AnchorPoint={new Vector2(0, 1)}
      BackgroundColor3={Color3.fromRGB(0, 0, 0)}
      BackgroundTransparency={0.5}
      BorderSizePixel={0}
      LayoutOrder={buttonOrder++}
      Position={new UDim2(0.85, 0, 1, 0)}
      Size={new UDim2(0.15, 0, 1.113, 0)}
      Text=""

      Event={{
        MouseButton1Click: btn => props.onClick(btn)
      }}
    >
      <imagelabel
        key="Icon"
        AnchorPoint={new Vector2(0.5, 0.5)}
        BackgroundTransparency={1}
        Image={iconID}
        Position={new UDim2(0.5, 0, 0.5, 0)}
        Size={new UDim2(0.8, 0, 0.8, 0)}
      ></imagelabel>
      <uicorner CornerRadius={new UDim(0.3, 0)} />
      <uiaspectratioconstraint />
    </textbutton>
  )
}

let playingSong: Sound;
const musicSounds = getChildrenOfType(Assets.Music, "Sound");
export function MusicPlayer(): React.Element {
  const [muted, setMuted] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [songIndex, setSongIndex] = useState(math.random(1, musicSounds.size()) - 1);
  const [infoPosition, infoPositionMotion] = useMotion(0);

  const getCurrentSong = () => musicSounds[songIndex];
  const nextSong = () => {
    playingSong?.Destroy();
    setSongIndex((songIndex + 1) % musicSounds.size());
  };

  useEffect(() => {
    if (playingSong === undefined) return;
    playingSong.Volume = muted ? 0 : 0.5;
  }, [muted]);
  useEffect(() => infoPositionMotion.spring(infoOpen ? 0 : 1, springs.responsive), [infoOpen]);
  useEffect(() => {
    playingSong = getCurrentSong().Clone();
    playingSong.Ended.Once(nextSong);
    playingSong.Parent = Sound;
    playingSong.Play();
  }, [songIndex])

  return (
    <frame
      key="MusicPlayer"
      AnchorPoint={new Vector2(1, 1)}
      BackgroundTransparency={1}
      Position={UDim2.fromScale(1, 1)}
      Size={UDim2.fromScale(0.202, 0.048)}
    >
      <frame
        key="SongFrame"
        AnchorPoint={new Vector2(1, 0)}
        BackgroundColor3={new Color3}
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
          Text={getCurrentSong().Name}
          TextColor3={Color3.fromRGB(255, 255, 255)}
          TextScaled={true}
          TextWrapped={true}
          TextXAlignment={Enum.TextXAlignment.Right}
        />
      </frame>
      <frame
        key="InfoContainer"
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
          Position={infoPosition.map(y => UDim2.fromScale(0, y))}
          Size={UDim2.fromScale(1, 1)}
        >
          <uicorner CornerRadius={new UDim(0.2, 0)} />
          <textlabel
            key="SongName"
            BackgroundTransparency={1}
            FontFace={new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
            Position={new UDim2(0.057, 0, 0.158, 0)}
            Size={new UDim2(0.892, 0, 0.304, 0)}
            Text={getCurrentSong().Name}
            TextColor3={Color3.fromRGB(255, 255, 255)}
            TextScaled={true}
            TextWrapped={true}
            TextXAlignment={Enum.TextXAlignment.Right}
          />
          <textbutton
            key="ID"
            BackgroundTransparency={1}
            FontFace={new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
            Position={new UDim2(0.024, 0, 0.462, 0)}
            Size={new UDim2(0.949, 0, 0.423, 0)}
            Text={getCurrentSong().SoundId}
            TextColor3={Color3.fromRGB(220, 220, 220)}
            TextScaled={true}
            TextWrapped={true}
            TextXAlignment={Enum.TextXAlignment.Right}
            Visible={true}
          />
        </frame>
      </frame>
      <frame
        key="Buttons"
        BackgroundTransparency={1}
        Position={new UDim2(0.294, 0, -1.154, 0)}
        Size={new UDim2(0.706, 0, 1.019, 0)}
      >
        <MusicPlayerButton
          name="Mute"
          iconID={`rbxassetid://${muted ? 166377869 : 166377448}`}
          onClick={() => setMuted(!muted)}
        />
        <MusicPlayerButton
          name="Skip"
          iconID="rbxassetid://8231196906"
          onClick={nextSong}
        />
        <MusicPlayerButton
          name="Info"
          iconID="rbxassetid://1291128077"
          onClick={() => setInfoOpen(!infoOpen)}
        />
        <uilistlayout
          FillDirection={Enum.FillDirection.Horizontal}
          HorizontalAlignment={Enum.HorizontalAlignment.Right}
          VerticalAlignment={Enum.VerticalAlignment.Center}
          SortOrder={Enum.SortOrder.LayoutOrder}
          Padding={new UDim(0.02)}
        />
      </frame>
    </frame>
  );
}