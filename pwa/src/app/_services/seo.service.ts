import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})

export class SeoService {

  constructor(private meta: Meta,
              private titleService: Title) {}

  public setMetaDescription(description: string) {
    this.meta.updateTag({
        name: 'description',
        description: description
    });
  }

  public setMetaDescription2(description2: string) {
    this.meta.updateTag({
        name: 'description2',
        description2: description2
    });
  }

  public setMetaKeywords(keywords: string) {
    this.meta.updateTag({
        name: 'keywords',
        keywords: keywords
    });
  }

  public setMetaName(name: string) {
    this.meta.updateTag({
        name: 'name',
        content: name
    });
  }

  public setMetaTitle(title:string) {
    this.titleService.setTitle(title);
  }

}