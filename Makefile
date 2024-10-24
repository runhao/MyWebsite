# Docker image name and tag
IMAGE_NAME ?= runhaofu/project
REGISTRY ?= registry.cn-chengdu.aliyuncs.com
# Define the full image name
FULL_IMAGE_NAME := $(REGISTRY)/$(IMAGE_NAME)

# Login to Docker registry
.PHONY: login
login:
	@echo "Logging into Docker registry..."
	@echo "Username: $(DOCKER_USERNAME)"
	@docker login -u $(DOCKER_USERNAME) -p $(DOCKER_PASSWORD) $(REGISTRY) || { echo "Login failed"; exit 1; }


# Build the Docker image
.PHONY: build
build:
    docker buildx build --platform linux/amd64,linux/arm64 -t $(FULL_IMAGE_NAME) . || { echo "Build failed"; exit 1; }

# Push the Docker image to the registry
.PHONY: push
push: login build
	docker push $(FULL_IMAGE_NAME) || { echo "Push failed"; exit 1; }

# Clean up the local Docker images
.PHONY: clean
clean:
	docker rmi $(FULL_IMAGE_NAME) || { echo "Cleanup failed"; exit 1; }

# Run all tasks: login, build, push and clean
.PHONY: all
all: login build push clean