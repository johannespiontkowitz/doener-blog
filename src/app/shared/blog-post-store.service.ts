import { BlogPost } from './blog-post';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogPostStoreService {

  constructor() { }

  getAllStatic(): BlogPost[] {
    return [
      new BlogPost(
        1,
        'Döner Danger Crottendorf',
        '',
        'https://gesundheit.naanoo.de/wp-content/uploads/2014/08/doener-gesund.jpg'),
      new BlogPost(
        2,
        'Döner Leipzig Zentrum',
        '',
        'https://gesundheit.naanoo.de/wp-content/uploads/2014/08/doener-gesund.jpg'),
      new BlogPost(
        3,
        'Merkel Döner Leipzig',
        '',
        'https://gesundheit.naanoo.de/wp-content/uploads/2014/08/doener-gesund.jpg'),
    ];
  }

  getSingle(id): BlogPost {
    switch (id) {
        case 1:
          return new BlogPost(
            1,
            'Döner Danger Crottendorf',
            '',
            'https://gesundheit.naanoo.de/wp-content/uploads/2014/08/doener-gesund.jpg');
        case 2:
          return new BlogPost(
            2,
            'Döner Leipzig Zentrum',
            '',
            'https://gesundheit.naanoo.de/wp-content/uploads/2014/08/doener-gesund.jpg');
        case 3:
          return new BlogPost(
            3,
            '',
            '',
            'https://gesundheit.naanoo.de/wp-content/uploads/2014/08/doener-gesund.jpg');
    }
  }
}
