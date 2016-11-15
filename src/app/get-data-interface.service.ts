import { Injectable } from '@angular/core';

import { MYDATA }   from './mock-data';

@Injectable()
export class GetDataInterfaceService {
    public data: number = 0;
    getData() {
      let index = Math.floor(Math.random() * 100 + 1);
      this.data = MYDATA[index];
      return this.data;
    }

}
