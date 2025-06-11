import { PlumbingPart, OrderDetails, OrderResponse } from '../types/plumbing-types';

// TODO: Replace with actual API URLs
const INVENTORY_API = 'https://api.plumbingshop.com/inventory';
const ORDER_API = 'https://api.plumbingshop.com/orders';

export class PlumbingService {
  static async checkInventory(partId: string): Promise<PlumbingPart | null> {
    try {
      const response = await fetch(`${INVENTORY_API}/${partId}`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Error checking inventory:', error);
      return null;
    }
  }

  static async placeOrder(orderDetails: OrderDetails): Promise<OrderResponse | null> {
    try {
      const response = await fetch(ORDER_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Error placing order:', error);
      return null;
    }
  }

  // Mock function that always returns a relevant part with limited stock
  static async mockCheckInventory(partDescription: string): Promise<PlumbingPart | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Extract key terms from description
    const description = partDescription.toLowerCase();
    let part: PlumbingPart;

    if (description.includes('leak') || description.includes('pipe')) {
      part = {
        id: 'PL001',
        name: 'Premium Pipe Repair Kit',
        description: 'Professional-grade pipe repair kit with reinforced coupling and sealant',
        category: 'Repair',
        price: 29.99,
        inStock: 1,
        imageUrl: 'pipe-repair.jpg'
      };
    } else if (description.includes('faucet') || description.includes('tap')) {
      part = {
        id: 'FT002',
        name: 'Modern Faucet Assembly',
        description: 'Ceramic disc cartridge faucet with water-saving feature',
        category: 'Fixtures',
        price: 89.99,
        inStock: 1,
        imageUrl: 'faucet.jpg'
      };
    } else if (description.includes('drain') || description.includes('clog')) {
      part = {
        id: 'DR003',
        name: 'Professional Drain Cleaner Kit',
        description: 'Industrial-strength drain cleaner with specialized tools',
        category: 'Maintenance',
        price: 45.99,
        inStock: 1,
        imageUrl: 'drain-kit.jpg'
      };
    } else {
      // Default part for any other description
      part = {
        id: 'GEN001',
        name: 'Universal Plumbing Repair Kit',
        description: 'All-in-one kit for common plumbing repairs and maintenance',
        category: 'General',
        price: 59.99,
        inStock: 1,
        imageUrl: 'repair-kit.jpg'
      };
    }

    return part;
  }

  static async mockPlaceOrder(_: OrderDetails): Promise<OrderResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate random order ID
    const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Calculate delivery date (2 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);

    return {
      orderId,
      status: 'confirmed',
      estimatedDelivery: deliveryDate.toISOString(),
      totalAmount: 59.99, // We'll keep it fixed for mock
    };
  }
}
