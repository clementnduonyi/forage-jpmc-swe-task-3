import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: 'number',
      price_def: 'number',
      ratio: 'number',
      timestamp: 'date',
      upper_bound: 'number',
      lower_bound: 'number',
      trigger_alert: 'number || undefine'
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    return serverResponds.map((el: any) => {
      return {
        stock: el.stock,
        top_ask_price: el.top_ask && el.top_ask.price || 0,
        timestamp: el.timestamp,
      };
    })
  }
}
