import { Webxdc, SendingStatusUpdate } from "@webxdc/types";

interface SendingUpdate extends SendingStatusUpdate<any> {
  notify?: { [key: string]: string };
}

declare global {
  interface Window {
    webxdc: Webxdc<any>;
  }
}
