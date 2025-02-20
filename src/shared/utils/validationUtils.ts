export const validationUtils = {
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword: (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
    return passwordRegex.test(password);
  },

  isValidPhoneNumber: (phone: string): boolean => {
    // Basic phone number validation (can be customized based on your needs)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
  },

  isValidURL: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  isNumeric: (value: string): boolean => {
    return !isNaN(Number(value));
  },

  isAlpha: (value: string): boolean => {
    return /^[a-zA-Z]+$/.test(value);
  },

  isAlphanumeric: (value: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(value);
  },

  hasMinLength: (value: string, minLength: number): boolean => {
    return value.length >= minLength;
  },

  hasMaxLength: (value: string, maxLength: number): boolean => {
    return value.length <= maxLength;
  },

  isWithinRange: (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max;
  },

  isEmpty: (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  },

  isValidDate: (date: string): boolean => {
    const timestamp = Date.parse(date);
    return !isNaN(timestamp);
  },

  isValidCreditCard: (cardNumber: string): boolean => {
    // Luhn algorithm for credit card validation
    const sanitized = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let isEven = false;

    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  },

  isStrongPassword: (password: string): { 
    isValid: boolean; 
    errors: string[];
  } => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (!/[\W_]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
}; 