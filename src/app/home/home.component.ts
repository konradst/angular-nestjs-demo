import { Component, ChangeDetectionStrategy, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {

  private readonly title = 'Angular NestJS Demo | Home Page';

  isServer: boolean = isPlatformServer(this.platformId);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _cdr: ChangeDetectorRef,
    private titleService: Title
  ) {
    this.isServer = isPlatformServer(this.platformId);
    this.titleService.setTitle(this.title);
  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

}
