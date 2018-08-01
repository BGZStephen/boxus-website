import { Component } from "@angular/core";
import _ from 'lodash';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss']
})
export class SectionServices {
  services = [
    {
      label: 'Branding',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-square'
    },
    {
      label: 'Apps',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-triangle'
    },
    {
      label: 'Web',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-circle'
    },
    {
      label: 'Graphic',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-cross'
    },
    {
      label: 'Services',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-circle'
    },
    {
      label: 'PSD',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-cross'
    },
    {
      label: 'HTML',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-triangle'
    },
    {
      label: 'PHP',
      description: 'Bacon ipsum dolor amet meatloaf porchetta boudin, capicola swine kevin tail chuck bacon.',
      icon: 'icon icon-square'
    },
  ]

  sliceStart: number = 0;
  servicesSubset: Array<any> = this.services.slice(this.sliceStart, this.sliceStart + 4);

  nextServices = (): void => {
    document.getElementById('services-container').classList.add('transitioning');
    setTimeout(() => {
      this.sliceStart = this.sliceStart === 0 ? 4 : 0;
      this.servicesSubset = this.services.slice(this.sliceStart, this.sliceStart + 4);
      document.getElementById('services-container').classList.remove('transitioning');
    }, 200)
  }
}