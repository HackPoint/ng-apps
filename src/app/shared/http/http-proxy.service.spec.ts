import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// import { async, fakeAsync, tick } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { HttpProxyService } from './http-proxy.service';

const BASE_URL = '';

describe('HttpProxyService', async () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HttpProxyService]
    });
  });

  it('should be created', inject([HttpProxyService], (service: HttpProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET data', inject(
    [HttpTestingController, HttpProxyService],
    (httpMock: HttpTestingController, proxy: HttpProxyService) => {
      const userUrl = `${BASE_URL}/data`;
      proxy.get(`${BASE_URL}/data`).subscribe((next) => {
        expect(next).toEqual({name: 'Gena'});
      });
      httpMock.match({
        url: userUrl,
        method: 'GET'
      })[0].flush({name: 'Gena'});
      httpMock.verify();
    })
  );

  it('should POST send data to server', () => {

  });
});
