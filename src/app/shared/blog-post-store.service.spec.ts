import { TestBed, inject } from '@angular/core/testing';

import { BlogPostStoreService } from './blog-post-store.service';

describe('BlogPostStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogPostStoreService]
    });
  });

  it('should be created', inject([BlogPostStoreService], (service: BlogPostStoreService) => {
    expect(service).toBeTruthy();
  }));
});
