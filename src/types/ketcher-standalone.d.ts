/// <reference types="vite/client" />

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "ketcher-standalone" {
  export class StandaloneStructServiceProvider {
    mode: "standalone";
    createStructService: () => any;
    constructor(...args: any[]);
  }
}
