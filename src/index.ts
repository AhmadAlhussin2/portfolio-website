import { formatDistanceStrict } from "date-fns";

const buttons = document
  .getElementsByTagName("header")[0]
  .getElementsByTagName("a") as HTMLCollection;

for (let i: number = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    removeClasses();
    buttons[i].classList.add("active-nav");
  });
}

const removeClasses = (): void => {
  for (let i: number = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-nav");
  }
};

const retrieveID = async (): Promise<number | null> => {
  const params: URLSearchParams = new URLSearchParams();
  params.append("email", "a.alhussin@innopolis.university");
  try {
    const res: Response = await fetch(
      "https://fwd.innopolis.university/api/hw2?" + params.toString()
    );
    const ID: number = await res.json();
    return ID;
  } catch {
    return null;
  }
};

interface Joke {
  month: string;
  num?: number;
  alt: string;
  day: string;
  safe_title: string;
  title?: string;
  transcript: string;
  year: string;
  img: string;
}

const retriveImg = async (): Promise<void> => {
  const jokeContainer = document.getElementById(
    "joke-container"
  ) as HTMLElement | null;
  if (jokeContainer == null) {
    return;
  }
  try {
    const ID: null | number = await retrieveID();
    if (!ID) {
      throw new Error("unable to retrieve ID");
    }
    const params: URLSearchParams = new URLSearchParams();
    params.append("id", ID.toString());
    const response: Response = await fetch(
      "https://fwd.innopolis.university/api/comic?" + params.toString()
    );
    const data: Joke = await response.json();
    const img = document.createElement("img") as HTMLImageElement;
    img.src = data.img;
    img.alt = data.alt;
    jokeContainer.appendChild(img);

    const joke_details = document.createElement("article") as HTMLElement;
    const title = document.createElement("h3") as HTMLHeadingElement;
    title.textContent = data.safe_title;
    joke_details.appendChild(title);

    const date: string = formatDistanceStrict(
      new Date(),
      new Date(
        Date.UTC(parseInt(data.year), parseInt(data.month), parseInt(data.day))
      )
    );
    const dateParagraph = document.createElement("p") as HTMLParagraphElement;

    dateParagraph.textContent = date + " ago";
    joke_details.appendChild(dateParagraph);
    jokeContainer.appendChild(joke_details);
  } catch (e) {
    const errorInfo = document.createElement("p") as HTMLParagraphElement;
    errorInfo.textContent = "There are no jokes yet :)";
    jokeContainer.appendChild(errorInfo);
  }
};

retriveImg();
