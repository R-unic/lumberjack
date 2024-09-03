import { TweenService } from "@rbxts/services";
import { TweenInfoBuilder } from "@rbxts/builders";
import { config, SpringOptions } from "@rbxts/ripple";

export const springs = {
  ...config.spring,
  bubbly: { tension: 300, friction: 20, mass: 1.2 },
  responsive: { tension: 600, friction: 34, mass: 0.7 },
} satisfies { [config: string]: SpringOptions };

export function tween<T extends Instance = Instance>(
  instance: T,
  tweenInfo: TweenInfo | TweenInfoBuilder,
  goal: Partial<ExtractMembers<T, Tweenable>>
): Tween {
  if (tweenInfo instanceof TweenInfoBuilder)
    tweenInfo = tweenInfo.Build();

  const tween = TweenService.Create(instance, tweenInfo, goal);
  tween.Play();

  return tween;
}