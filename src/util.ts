import * as dc from "@stackchat/dynamic-content-toolkit";

export function soloMessage(text: string): dc.MessageThread[] {
  const messageThread = new dc.MessageThread();
  const tm = new dc.TextMessage();
  tm.text = text;
  messageThread.messages.push(tm);
  return [messageThread];
}

export function carouselWithCards(cards: dc.MessageCard[]): dc.MessageThread[] {
  const messageThread = new dc.MessageThread();
  const carousel = new dc.CarouselMessage();
  carousel.items.push(...cards);
  messageThread.messages.push(carousel);
  return [messageThread];
}

export function messageCard(props: {
  title: string,
  imageUrl: string,
  description: string
}): dc.MessageCard {
  const card = new dc.MessageCard();
  card.type = "hero";
  card.title = props.title;
  card.imageUrl = props.imageUrl;
  card.description = props.description;

  const button: dc.LinkButton = new dc.LinkButton();
  button.buttonType = dc.ButtonType.Link;
  button.text = "😂";
  button.uri = "https://example.com";
  card.buttons.push(button);
  return card;
}
