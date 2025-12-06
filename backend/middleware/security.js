import helmet from 'helmet';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';

/**
 * Security middleware configuration
 */
export const securityMiddleware = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
      imgSrc: ["'self'", "data:", "https:", "http:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "data:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'self'", "https://www.youtube.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
});

/**
 * Rate limiting for API routes - DISABLED (no limits)
 */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000000, // Very high limit (effectively unlimited)
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use ipKeyGenerator helper for proper IPv6 handling
    // This normalizes IPv6 addresses with subnet mask to prevent bypass
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    return ipKeyGenerator(ip);
  },
  validate: {
    trustProxy: false, // Disable validation since we handle it securely with trust proxy: 1
    keyGeneratorIpFallback: false, // Disable validation since we use ipKeyGenerator
  },
});

/**
 * Rate limiting for auth routes - DISABLED (no limits)
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000000, // Very high limit (effectively unlimited)
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    // Use ipKeyGenerator helper for proper IPv6 handling
    // This normalizes IPv6 addresses with subnet mask to prevent bypass
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    return ipKeyGenerator(ip);
  },
  validate: {
    trustProxy: false, // Disable validation since we handle it securely with trust proxy: 1
    keyGeneratorIpFallback: false, // Disable validation since we use ipKeyGenerator
  },
});

/**
 * Rate limiting for file uploads - DISABLED (no limits)
 */
export const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1000000, // Very high limit (effectively unlimited)
  message: 'Too many file uploads, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use ipKeyGenerator helper for proper IPv6 handling
    // This normalizes IPv6 addresses with subnet mask to prevent bypass
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    return ipKeyGenerator(ip);
  },
  validate: {
    trustProxy: false, // Disable validation since we handle it securely with trust proxy: 1
    keyGeneratorIpFallback: false, // Disable validation since we use ipKeyGenerator
  },
});


