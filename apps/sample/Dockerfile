ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS base


# Builder

FROM base AS builder
ARG PROJECT_NAME

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune ${PROJECT_NAME} --docker

# Installer

FROM base AS installer
ARG PROJECT_NAME

RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN yarn turbo build --filter=${PROJECT_NAME}

# Runner

FROM base AS runner
ARG PROJECT_NAME
ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

ENV EXECUTABLE_PATH=apps/${PROJECT_NAME}/server.js

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/${PROJECT_NAME}/next.config.js .
COPY --from=installer /app/apps/${PROJECT_NAME}/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/${PROJECT_NAME}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/${PROJECT_NAME}/.next/static ./apps/${PROJECT_NAME}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/${PROJECT_NAME}/public ./apps/${PROJECT_NAME}/public

CMD ["node", "apps/sample/server.js"]