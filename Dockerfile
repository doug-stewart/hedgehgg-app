FROM node:26-alpine AS builder
WORKDIR /app
RUN npm install -g corepack && corepack enable && corepack prepare pnpm@11.17.0 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG VITE_BACKEND_API
ARG VITE_LATITUDE
ARG VITE_LONGITUDE
ENV VITE_BACKEND_API=$VITE_BACKEND_API \
    VITE_LATITUDE=$VITE_LATITUDE \
    VITE_LONGITUDE=$VITE_LONGITUDE

RUN pnpm build

FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
