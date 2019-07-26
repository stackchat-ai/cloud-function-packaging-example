import { CarouselMessage, MessageThread } from "@stackchat/dynamic-content-toolkit";
import * as rp from "request-promise";
import { getJokes } from "../cloud-functions";

jest.mock("request-promise");
const mockedRP = (rp as any) as jest.Mock<typeof rp>;

describe("example cloud function", () => {
  it("should generate a message thread on successful retrieval", async () => {
    // @ts-ignore -- even with the typecasting chicanery above this didn't want a value argument
    mockedRP.mockResolvedValue(sampleResponse);

    const dynamicContentItems = await getJokes({});

    expect(dynamicContentItems).toHaveLength(1);
    expect(dynamicContentItems[0].itemType).toEqual("MessageThread");

    const messageThread = (dynamicContentItems[0] as MessageThread);
    expect(messageThread.messages).toHaveLength(1);
    expect(messageThread.messages[0].itemType).toEqual("CarouselMessage");
    expect((messageThread.messages[0] as CarouselMessage).items).toHaveLength(4);
    // and so on
  });
});


// tslint:disable: object-literal-key-quotes
const sampleResponse = {
  "current_page": 1,
  "limit": 20,
  "next_page": 1,
  "previous_page": 1,
  "results": [
    {
      "id": "O7haxA5Tfxc",
      "joke": "Where do cats write notes?\r\nScratch Paper!"
    },
    {
      "id": "AQn3wPKeqrc",
      "joke": "It was raining cats and dogs the other day. I almost stepped in a poodle."
    },
    {
      "id": "TS0gFlqr4ob",
      "joke": "What do you call a group of disorganized cats? A cat-tastrophe."
    },
    {
      "id": "BQfaxsHBsrc",
      "joke": "What do you call a pile of cats?  A Meowtain."
    }
  ],
  "search_term": "cats",
  "status": 200,
  "total_jokes": 4,
  "total_pages": 1
};
