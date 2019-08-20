import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId: number) {
    if (confirm('Are you sure?')) {
      this.service.deletePaymentDetail(PMId)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfuly', '')
        },
          err => {
            console.log(err);
          }
        )
    }
  }
}
