import { Component } from "@angular/core";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSlider {
  images = [
    "/assets/icons/icon_ideas.png",
    "/assets/icons/icon_display.png",
    "/assets/icons/icon_editing.png",
    "/assets/icons/icon_clear.png",
    "/assets/icons/icon_ideas.png",
    "/assets/icons/icon_display.png",
    "/assets/icons/icon_editing.png"
  ]

  activeImage: number = 0;

  getSliderStyle = (): object => {
    console.log('working')
    return {
      width: `${25 * this.images.length}%`,
      right: `${25 * this.activeImage}%`
    }
  }

  nextImage() {
    if (this.activeImage > this.images.length) {
      return this.activeImage = 0;
    }

    this.activeImage++;
  }

  nextSlide(index) {
    console.log(index)
    this.activeImage = index;
  }
}