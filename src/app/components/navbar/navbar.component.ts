import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class Navbar implements OnInit {
  navVisible: boolean = false;
  navHeight: number = 0;
  navElementHeight: number = 0;
  activeNavItem: object = {
    label: "Home",
    id: "home",
    bgColor: "purple",
  }

  bgColor: string = "purple";
  navItems: Array<any> = [
    {
      label: "Home",
      id: "home",
      bgColor: "purple",
    },
    {
      label: "Services",
      id: "services",
      bgColor: "green",
    },
    {
      label: "Portfolio",
      id: "portfolio",
      bgColor: "orange",
    },
    {
      label: "About",
      id: "about",
      bgColor: "pink",
    },
    {
      label: "News",
      id: "news",
      bgColor: "green",
    },
    {
      label: "Video",
      id: "video",
      bgColor: "orange",
    },
    {
      label: "Skills",
      id: "skills",
      bgColor: "green",
    },
    {
      label: "Contact",
      id: "contact",
      bgColor: "pink",
    },
  ]

  ngOnInit(): void {
    window.addEventListener('scroll', this.checkForColorchange, true);
    this.setNavHeight();
  }

  checkForColorchange = (): void => {
    for (const navItem of this.navItems) {
      const elementOffset = document.getElementById(navItem.id).offsetTop;
      if (window.pageYOffset + this.navElementHeight >= elementOffset) {
        this.activeNavItem = navItem;
      }
    }
  }

  toggleNavVisible = (): void => {
    this.navVisible = !this.navVisible;
    this.setNavHeight();
  }

  setNavHeight = (): void => {
    this.navElementHeight = 51;
    if(screen.width < 1024 && this.navVisible) {
      this.navHeight = 51 * this.navItems.length;
    }

    if(screen.width < 1024 && !this.navVisible) {
      this.navHeight = 0;
    }

    if(screen.width > 1024) {
      this.navElementHeight = 64;
      this.navHeight = 64;
    }
  }

  getNavHeight = (): object => {
    return {
      "height": `${this.navHeight}px`,
    };
  }

  scrollTo = (reference: string): void => {
    const elementPosition = document.getElementById(reference).offsetTop;
    window.scrollTo({left: 0, top: (elementPosition - this.navElementHeight), behavior: 'smooth'});
  }
}