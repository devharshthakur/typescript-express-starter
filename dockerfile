# syntax=docker/dockerfile:1

FROM node:24-slim AS base

# set up pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN corepack enable

# copy files
WORKDIR /app
COPY . .

# install only prod deps (for build output to run)
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile --ignore-scripts

# create build output so all deps has to be installed
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm run build

# copy neccessary from above and run the build
FROM base AS runtime
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
ENV NODE_ENV=production
EXPOSE 8000
CMD ["node", "build/main.mjs"]
