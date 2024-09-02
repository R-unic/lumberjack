import { Service } from "@flamework/core";
import { HttpService as HTTP, DataStoreService } from "@rbxts/services";

import { HttpException, MissingEnvValueException } from "shared/exceptions";

interface DiscordEmbedField {
  readonly name: string;
  readonly value: string;
  readonly inline?: boolean;
}

export const enum DiscordMessageType {
  Purchase = "Product Purchased"
}

@Service()
export class DiscordService {
  public log(player: Player, logType: DiscordMessageType, message?: string, fields?: DiscordEmbedField[]): void {
    // Comment/uncomment this based on whether or not you want Discord logs to be sent while testing
    // if (Runtime.IsStudio()) return;

    const [url] = DataStoreService.GetDataStore("OtherInfo").GetAsync<string>("DISCORD_WEBHOOK");
    if (url === undefined)
      throw new MissingEnvValueException("DISCORD_WEBHOOK");

    const data = HTTP.JSONEncode({
      WebhookURL: url,
      WebhookData: {
        username: "Game Logger",
        embeds: [
          {
            title: logType,
            description: message,
            fields,
            timestamp: DateTime.now().ToIsoDate(),
            color: 0xe09f36,
            author: {
              name: player.Name,
              url: "https://www.roblox.com/users/" + player.UserId + "/profile"
            },
          }
        ]
      }
    });

    try {
      HTTP.PostAsync(url, data)
    } catch (e) {
      throw new HttpException(<string>e);
    }
  }
}