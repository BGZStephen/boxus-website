import { Component } from "@angular/core";

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss', '../../styles/components/_section.scss']
})

export class SectionAbout {
  aboutPrimaryImages: Array<any> = [
    '/assets/images/about_img_04.jpg',
    '/assets/images/about_img_05.jpg',
    '/assets/images/about_img_06.jpg'
  ]
  aboutPrimaryImageUrl: string = '/assets/images/about_img_04.jpg';
  aboutPrimaryImageIndex: number = 0;
  nextAboutPrimaryImage = (): void => {
    document.getElementById('about-primary-image-container').classList.add('transitioning');
    setTimeout(() => {
      this.aboutPrimaryImageIndex = this.aboutPrimaryImageIndex === this.aboutPrimaryImages.length - 1 ? 0 : this.aboutPrimaryImageIndex + 1;
      this.aboutPrimaryImageUrl = this.aboutPrimaryImages[this.aboutPrimaryImageIndex]
      document.getElementById('about-primary-image-container').classList.remove('transitioning');
    }, 100)
  }
}