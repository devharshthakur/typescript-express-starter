/**
 * Greeter service — example business logic module.
 * @module services/greeter
 */

interface Greeting {
  message: string;
  timestamp: string;
}

export function greet(name: string): Greeting {
  return {
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
  };
}
