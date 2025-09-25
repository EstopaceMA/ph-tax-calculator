# Use Alpine-based Node.js image for smaller size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy package files first for better Docker layer caching
COPY package*.json ./
COPY yarn.lock* ./

# Install dependencies
# --no-cache flag for Alpine to avoid caching package index
RUN apk add --no-cache libc6-compat && \
    npm ci --only=production=false

# Copy source code
COPY . .

# Change ownership of the app directory to the nodejs user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port that Vite dev server runs on
EXPOSE 5173

# Health check to ensure the container is running properly
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5173/ || exit 1

# Define the command to run the application in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]