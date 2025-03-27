interface Window {
    dataLayer: Record<string, any>[];
    gtag: (command: string, ...params: any[]) => void;
  }