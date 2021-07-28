export class PopularItem {
  imgSrc: string;
  title: string;
  description: string;

  constructor(imgSrc: string, title: string, description: string) {
    this.imgSrc = imgSrc;
    this.title = title;
    this.description = description;
  }
}