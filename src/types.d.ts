import { Webxdc, SendingStatusUpdate } from "@webxdc/types";

interface SendingUpdate extends SendingStatusUpdate<any> {
  notify?: string[];
}

declare global {
  interface Window {
    webxdc: Webxdc<any>;
  }
}
