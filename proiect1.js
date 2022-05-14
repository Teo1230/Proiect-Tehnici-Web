
const news = [
  {
    title: "Remembering Zizi Jeanmaire, the Dancer Extraordinaire Who Inspired Yves Saint Laurent",
    short_description: "Zizi (Renée) Jeanmaire, a supple dancer and chanteuse who bridged the gap between classical ballet and popular revues, died in Switzerland at 96 last Friday. She was also a style star celebrated for her pixie haircut and marvelous gams—even better than Dietrich’s, according to some. Off the stage, she preferred simple, short monochrome looks, adding texture and pattern to her outfits with fur collars, printed scarves, and Goyard luggage. Also deserving mention is the fact that Jeanmaire and her husband, the dancer and choreographer Roland Petit, had enviable, often complementary couple style. Together, noted The Guardian, they “represented the height of Parisian chic, elegantly dressed, often by their friend and collaborator Yves Saint Laurent.”",
    image: "2.jpg",
    datePublished: "2021-06-21",
  },
  {
    title: "Catherine Deneuve Is Selling Her Vintage Yves Saint Laurent Couture at Christie’s in Paris—See the Highlights Here",
    short_description:"Pierre Bergé once quipped that his partner Yves Saint Laurent was “born with a nervous breakdown.” While it’s true that the designer’s health was marked by peaks and valleys, he had an undeniable star power that he wasn’t unaware of. (In 1971 Saint Laurent posed au naturel in a Jeanloup Sieff–shot advertisement for his first men’s fragrance.) Just as the designer had star power, so did his work, which remains among the most referenced today, both at his namesake house, now headed by Anthony Vaccarello, and elsewhere. Marc Jacobs’s Fall 2018 and Spring 2019 collections were in some ways outspoken odes to Yves.",
    image: "3.jpg",
    datePublished: "2019-01-17",
  },
  {
    title: 'In Paris, a New Exhibition Pays Tribute to Yves Saint Laurent’s Earliest Imaginings',
    short_description: "A delightful new exhibition titled “Yves Saint Laurent, Early Drawings” at the Fondation Pierre Bergé-Yves Saint Laurent in Paris showcases some of the revered designer’s earliest works on paper. The designs are displayed in the restored haute couture boutique that Jacques Grange had designed in the former Saint Laurent fashion house, which was unveiled last year as a state-of-the-art repository and showcase for the designer’s works in fabric and on paper.",
    image: "5.jpg",
    datePublished: "2018-06-12",
  }
];

const ROOT_URL = 'file:///C:/Users/teomi/Desktop/Proiect%20TW/Proiect.html';

let newsIdx = 0;


  document.getElementById('addarticle').onclick = addNews;
  document.getElementById('removearticle').onclick = removeNews;
  document.getElementById('biggerFont').onclick = () => incrementFontSize(1);
  document.getElementById('smallerFont').onclick = () => incrementFontSize(-1);


function addNews() {
  const newsArticle = news[newsIdx];
  const articleElement = document.createElement('div');

  articleElement.classList.add('news-article');
  articleElement.title = 'Data publicării: ' +
    new Date(newsArticle.datePublished).toLocaleDateString();

  const articleContent = document.createElement('div');
  articleContent.classList.add('content');

  const h1 = document.createElement('h1');
  h1.textContent = newsArticle.title;

  const p = document.createElement('p');
  p.textContent = newsArticle.short_description;

  articleContent.append(h1, p);

  const img = document.createElement('img');
  img.src = ROOT_URL + newsArticle.image;

  articleElement.append(articleContent);

  document.querySelector('#articlec').append(articleElement);

  newsIdx = (newsIdx + 1) % news.length;
}

function removeNews() {
  document.querySelector('#articlec').lastChild?.remove();
}

function incrementFontSize(by) {
  const htmlEl = document.querySelector("html");
  const current = parseInt(htmlEl.style.fontSize) || 12;
  htmlEl.style.fontSize = (current + by) + "px";
}
