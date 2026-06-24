# syntax=docker/dockerfile:1

FROM node:24-slim

# set up pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN corepack enable

# copy files
WORKDIR /app
COPY . .

# install all deps and build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm run build

ENV NODE_ENV=production
EXPOSE 8000
CMD ["node", "build/main.mjs"]
