import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseProvider {
  serviceUrl = 'http://localhost:57267/api/'; 

  requestOptions = new RequestOptions();
  
  constructor(private http: Http) {
    this.requestOptions.headers = new Headers({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    })
  }

  public post(url: string, data: any) {
    return new Promise((resolve, reject) => {
            // const header: Headers = new Headers();
      this.http.post(this.serviceUrl + url, data, this.requestOptions).subscribe((result: any) => {
        resolve(result.json());
      },
      err => {
        console.log(err);
        reject(err);
      });
    });
  }

  public noAuthPost(url: string, data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.serviceUrl + url, data, this.requestOptions).subscribe((result: any) => resolve(result.status),
      err => reject(err));
    });
  }

  public put(url: string, data: any) {
    return new Promise((resolve, reject) => {
      this.http.put(this.serviceUrl + url, data, this.requestOptions).subscribe((result: any) => {
        resolve(result.json());
      },
      err => {
        console.log(err);
        reject(err);
      });
    });
  }

  public delete(url: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.serviceUrl + url).subscribe((result: any) => {
        resolve(result.json());
      },
      err => {
        console.log(err);
        reject(err);
      });
    });
  }

  public get(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.serviceUrl + url).subscribe((result: any) => {
        resolve(result.json());
      },
      err => {
        console.log(err);
        reject(err);
      });
    });
  }


  public login(email: string, senha: string, url: string) {

    console.log('baseProviders');

    console.log('email: ' + email);
    console.log('senha: ' + senha);

    return new Promise((resolve, reject) => {
      this.http.post(this.serviceUrl + url , {email: email, senha: senha}).subscribe((result: any) => {
        resolve(result.json());
      },
      err => {
        console.log(err);
        reject(err);
      });
    });
  }
}
