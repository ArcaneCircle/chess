import { Webxdc, SendingStatusUpdate } from "@webxdc/types";

declare global {
  interface Window {
    webxdc: Webxdc<any>;
  }
}
