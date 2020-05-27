/* eslint-disable no-console */
import * as dc from "@stackchat/dynamic-content-toolkit";
import * as rp from "request-promise";
import { carouselWithCards, messageCard, soloMessage } from "./util";


export async function getJokes(userData: Record<string, any>): Promise<dc.DynamicContentItem[]> {

  // A text slot named 'jokeTopic' needs to be defined in the dashboard
  // and populated via user input group before reaching this cloud function element
  // in order to have the slot data available.
  const term = userData.slotData?.jokeTopic || "cats";

  const options = {
    uri: `https://icanhazdadjoke.com/search?term=${ term }`,
    json: true
  };

  try {
    const response = await rp(options);

    if (response.results && response.results.length > 0) {
      const cards = response.results.slice(0, 4).map((result: any) => {
        return messageCard({
          title: "Joke",
          imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Tears_of_Joy_Emoji_8afc0e22-e3d4-4b07-be7f-77296331c687_grande.png?v=1480481057",
          description: result.joke.substring(0, 120)
        });
      });

      return carouselWithCards(cards);
    }

    return soloMessage(`I couldn't find any jokes about '${ term }'`);
  } catch (err) {
    console.log("ERROR: ", err);
    return soloMessage("An error occurred :(");
  }
}
