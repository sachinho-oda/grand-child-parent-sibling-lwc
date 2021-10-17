import { LightningElement } from "lwc";

export default class App extends LightningElement {

  get features() {

    return {
        show: true, key:'41',
        child: [{
                  show: true, key:'411',
                  child: [{
                          show: true, key:'4111',
                          child: [{
                                    show: false, key:'41111',
                                    child: [],
                                  }]
                        }]
                },
                {
                    show: false,key: '42',
                    child: [],
                },
                {
                  show: true, key:'43',
                  child: [{
                          show: true, key:'431',
                          child: [{
                                  show: false, key:'432',
                                  child: [],
                                }]
                        }]
               }]
    };
  }
}
