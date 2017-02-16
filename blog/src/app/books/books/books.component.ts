import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book'

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[]  = [
    {
      title: 'The Power Broker',
      isbn: '0394720245'
    },
    {
      title: 'A History of Future Cities',
      isbn: '0393348865'
    },
    {
      title: 'Death and Life of Great American Cities',
      isbn: '067974195X'
    },
    {
      title: 'Happy City',
      isbn: '0374534888'
    },
    {
      title: 'Smart Cities',
      isbn: '0393349780'
    },
    {
      title: 'The Unbearable Lightness of Being',
      isbn: '0061148520'
    },
    {
      title: 'Essays in Love',
      isbn: '1447275322'
    },
    {
      title: 'Code',
      isbn: '0735611319'
    },
    {
      title: 'Why I Left Goldman Sachs',
      isbn: '1455527475'
    },
    {
      title: '1984',
      isbn: '0451524934'
    },
    {
      title: 'A Short History of Nearly Everything',
      isbn: '076790818X'
    },
    {
      title: 'A Short Guide to a Happy Life',
      isbn: '0375504613'
    },
    {
      title: 'The Making of the Atomic Bomb',
      isbn: '1451677618'
    },
    {
      title: 'The Better Angels of Our Nature',
      isbn: '0143122010'
    },
    {
      title: 'The Black Swan',
      isbn: '081297381X'
    },
    {
      title: 'A Brief History of Time',
      isbn: '0553380168'
    },
    {
      title: 'The Business of Venture Capital',
      isbn: '1118752198'
    },
    {
      title: 'Capital in the Twenty-first Century',
      isbn: '067443000X'
    },
    {
      title: 'The Challenge for Africa',
      isbn: '0307390284'
    },
    {
      title: 'Consolations of Philosophy',
      isbn: '0679779175'
    },
    {
      title: 'Creativity',
      isbn: '0812993012'
    },
    {
      title: 'A Dangerous Fortune',
      isbn: '0440217490'
    },
    {
      title: 'Dataclysm',
      isbn: '0385347391'
    },
    {
      title: 'David and Goliath',
      isbn: '0316204374'
    },
    {
      title: 'The Dream Machine',
      isbn: '014200135X'
    },
    {
      title: 'Dreams from my Father',
      isbn: '1400082773'
    },
    {
      title: 'Einstein',
      isbn: '0743264746'
    },
    {
      title: 'Elon Musk',
      isbn: '006230125X'
    },
    {
      title: 'The Facebook Effect',
      isbn: '1439102120'
    },
    {
      title: 'Freakonomics',
      isbn: '0060731338'
    },
    {
      title: 'Gang Leader for a Day',
      isbn: '014311493X'
    },
    {
      title: 'Grit',
      isbn: '1501111108'
    },
    {
      title: 'The Halo Effect',
      isbn: '1476784035'
    },
    {
      title: 'The Hard Thing About Hard Things',
      isbn: '0062273205'
    },
    {
      title: 'How Asia Works',
      isbn: '0802121322'
    },
    {
      title: 'How Proust Can Change Your Life',
      isbn: '0679779159'
    },
    {
      title: 'Humans Need Not Apply',
      isbn: '0300223579'
    },
    {
      title: 'The Inner Game of Tennis',
      isbn: '0679778314'
    },
    {
      title: 'The Intelligent Investor',
      isbn: '0060555661'
    },
    {
      title: 'To Kill a Mockingbird',
      isbn: '0446310786'
    },
    {
      title: 'Makers',
      isbn: '0307720969'
    },
    {
      title: 'Man\'s Search for Meaning',
      isbn: '080701429X'
    },
    {
      title: 'Maritime Economics',
      isbn: '041527558X'
    },
    {
      title: 'Mindset',
      isbn: '0345472322'
    },
    {
      title: 'The Moment of Clarity',
      isbn: '1422191907'
    },
    {
      title: 'Moonwalking with Einstein',
      isbn: '0143120530'
    },
    {
      title: 'And the Mountains Echoed',
      isbn: '1594632383'
    },
    {
      title: 'A Moveable Feast',
      isbn: '143918271X'
    },
    {
      title: 'The New Digital Age',
      isbn: '030794705X'
    },
    {
      title: 'No Hero',
      isbn: '0451472241'
    },
    {
      title: 'Open',
      isbn: '0307388409'
    },
    {
      title: 'Other People\'s Money',
      isbn: '1610396030'
    },
    {
      title: 'Out of Africa',
      isbn: '0679600213'
    },
    {
      title: 'Outliers',
      isbn: '0316017930'
    },
    {
      title: 'A People\'s History of the United States',
      isbn: '0062397346'
    },
    {
      title: 'Poor Economics',
      isbn: '9781610390934'
    },
    {
      title: 'The Power of Habit',
      isbn: '081298160X'
    },
    {
      title: 'Quiet',
      isbn: '0307352153'
    },
    {
      title: 'The Road Less Travelled',
      isbn: '0743243153'
    },
    {
      title: 'The Road to Character',
      isbn: '0812983416'
    },
    {
      title: 'Sapiens',
      isbn: '0062316095'
    },
    {
      title: 'Search Inside Yourself',
      isbn: '0062116932'
    },
    {
      title: 'The Selfish Gene',
      isbn: '0198788606'
    },
    {
      title: 'Seven Brief Lessons on Physics',
      isbn: '0399184414'
    },
    {
      title: 'Signal and Noise',
      isbn: '0143125087'
    },
    {
      title: 'Startup Land',
      isbn: '1118980816'
    },
    {
      title: 'Super Freakonomics',
      isbn: '0060889586'
    },
    {
      title: 'The End of Power',
      isbn: '0465065694'
    },
    {
      title: 'The Everything Store',
      isbn: '0316219282'
    },
    {
      title: 'The Information',
      isbn: '1400096235'
    },
    {
      title: 'The Innovators',
      isbn: '1476708703'
    },
    {
      title: 'The Little Prince',
      isbn: '0156012197'
    },
    {
      title: 'The Master Switch',
      isbn: '0307390993'
    },
    {
      title: 'The News',
      isbn: '0307476839'
    },
    {
      title: 'The Second Machine Age',
      isbn: '0393350649'
    },
    {
      title: 'The Truth',
      isbn: '178211095X'
    },
    {
      title: 'Thinking Fast and Slow',
      isbn: '0374533555'
    },
    {
      title: 'Triumph of the City',
      isbn: '0143120549'
    },
    {
      title: 'Hatching Twitter',
      isbn: '1591847087'
    },
    {
      title: 'When I Stop Talking You\'ll Know I\'m Dead',
      isbn: '0446548162'
    },
    {
      title: 'Why Nations Fail',
      isbn: '0307719227'
    },
    {
      title: 'Wind, Sand and Stars',
      isbn: '0156027496'
    },
    {
      title: 'Zen and the Art of Motorcycle Maintenence',
      isbn: '0060589469'
    },
    {
      title: 'Zero to One',
      isbn: '0804139296'
    },
    {
      title: 'King Leopold\'s Ghost',
      isbn: '0618001905'
    },
    {
      title: 'Boyd',
      isbn: '0316796883'
    },
    {
      title: 'The Age of Ambition',
      isbn: '0374535272'
    },
    {
      title: 'Dark Money',
      isbn: '0307947904'
    },
    {
      title: 'Console Wars',
      isbn: '0062276700'
    },
    {
      title: 'Boomerang',
      isbn: '0393343448'
    },
    {
      title: 'The Wright Brothers',
      isbn: '1476728755'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
