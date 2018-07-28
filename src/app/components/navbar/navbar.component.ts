import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class Navbar implements OnInit {
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
  }

  checkForColorchange = (): void => {
    for (const navItem of this.navItems) {
      const elementOffset = document.getElementById(navItem.id).offsetTop;
      if (window.pageYOffset + 56 >= elementOffset) {
        this.bgColor = navItem.bgColor
      }
    }
  }
}