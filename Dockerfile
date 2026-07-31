# ---------- Stage 1: Build the Vite/React app ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# EmailJS keys are read at BUILD time by Vite (VITE_* vars get inlined
# into the static bundle). Pass them with --build-arg, or bake a .env.
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID
ENV VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY

# Copy source and build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve static files with nginx ----------
FROM nginx:1.27-alpine AS runtime

# Custom nginx config: listen on 3333 + SPA routing fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from stage 1
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3333

# nginx runs in the foreground so the container stays alive
CMD ["nginx", "-g", "daemon off;"]
