# Use a specific Node.js version for better reproducibility
FROM node:23.3.0-slim AS cfx-eliza

# Install pnpm globally and install necessary build tools
RUN npm install -g pnpm@9.4.0 && \
    apt-get update && \
    apt-get install -y git python3 make g++ && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set Python 3 as the default python
RUN ln -s /usr/bin/python3 /usr/bin/python
RUN mkdir -p /workspaces

# Define build arguments for user creation
ARG USERNAME=node

# Change ownership of the Conflux node directory to the created user
RUN chown -R ${USERNAME}:${USERNAME} /workspaces

# # Switch to the created user context
USER $USERNAME
WORKDIR /workspaces/

# Set additional environment variables for the user
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    EDITOR=cursor \
    VISUAL=cursor \
    GIT_EDITOR="cursor --wait"
