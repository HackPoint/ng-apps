import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { HttpProxyService } from './http-proxy.service';

const BASE_URL = '';

describe('HttpProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HttpProxyService]
    });
  });

  it('should be created', inject([HttpProxyService], (service: HttpProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get users', inject(
    [HttpTestingController, HttpProxyService],
    (httpMock: HttpTestingController, proxy: HttpProxyService) => {
      const userUrl: string = `${BASE_URL}/questions`;
      proxy.get(`${BASE_URL}/questions`).subscribe((next) => {
        expect(next).toEqual({ name: 'Gena' });
      });

      httpMock.match({
        url: userUrl,
        method: 'GET'
      })[0].flush({ name: 'Gena' });
    })
  );
});
