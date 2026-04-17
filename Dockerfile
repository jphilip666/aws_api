# -------- Stage 1: Build --------
FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build (TypeScript → dist)
RUN npm run build

# -------- Stage 2: Production --------
FROM node:24-alpine

WORKDIR /app

# Install ONLY production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "dist/server.js"]