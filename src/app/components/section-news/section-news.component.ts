import { Component } from "@angular/core";

@Component({
  selector: 'app-section-news',
  templateUrl: './section-news.component.html',
  styleUrls: ['./section-news.component.scss', '../../styles/components/_section.scss']
})
export class SectionNews {
  quotes = [
    {
      text: 'To create anything–whether a short story or a magazine profile or a film or a sitcom–is to believe, if only momentarily, you are capable of magic.',
      author: 'TOM BISSEL'
    },
    {
      text: 'As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment.',
      author: 'STEVEN HELLER'
    },
    {
      text: 'The difference between a Designer and Developer, when it comes to design skills, is the difference between shooting a bullet and throwing it.',
      author: 'SCOTT HANSELMAN'
    }
  ]

  quoteIndex: number = 0;

  nextQuote = (): void => {
    document.getElementById('quote-container').classList.add('transitioning');
    setTimeout(() => {
      this.quoteIndex = this.quoteIndex === this.quotes.length - 1 ? 0 : this.quoteIndex + 1;
      document.getElementById('quote-container').classList.remove('transitioning');
    }, 200)
  }
}



