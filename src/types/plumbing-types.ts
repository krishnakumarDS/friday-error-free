export interface PlumbingPart {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  inStock: number;
  imageUrl?: string;
  manufacturer?: string;
  modelNumber?: string;
  compatibleWith?: string[];
  installationDifficulty?: 'Easy' | 'Moderate' | 'Advanced';
  estimatedInstallTime?: string;
  warrantyInfo?: string;
}

export interface OrderDetails {
  partId: string;
  quantity: number;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  phoneNumber?: string;
  preferredDeliveryTime?: string;
  installationRequired?: boolean;
}

export interface OrderResponse {
  orderId: string;
  status: 'confirmed' | 'pending' | 'failed';
  estimatedDelivery?: string;
  totalAmount: number;
  trackingNumber?: string;
  installationSchedule?: string;
  specialInstructions?: string;
}

export interface Message {
  type: 'ai' | 'user';
  content: string;
}

export interface LiveAPIConfig {
  model: string;
  generationConfig: {
    responseModalities: string[];
    speechConfig: {
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName: string;
        };
      };
    };
  };
  systemInstruction: {
    parts: Array<{
      text: string;
    }>;
  };
  tools: Array<{
    googleSearch: Record<string, never>;
  }>;
}
