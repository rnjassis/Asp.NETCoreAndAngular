import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:5000/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) {
    this.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[])
  }

}
