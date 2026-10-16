# Cloud Deployment Lab

## Project Overview

A simple Node.js and Express web application containerized using Docker and deployed on an AWS EC2 instance.

The application displays:
- Welcome message
- Developer name: Ayush Goswami
- Application version: 1.0.0

## Technologies Used

- Node.js
- Express.js
- Docker
- Git and GitHub
- AWS EC2
- Ubuntu Server 24.04 LTS

## Project Structure

```text
cloud-deployment-lab/
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/AYUSHGOSWAMI10/cloud-deployment-lab.git
cd cloud-deployment-lab
```

Install dependencies and start the application:

```bash
npm ci
node server.js
```

Access the application at `http://localhost:3000`.

## Docker Setup

Build the Docker image:

```bash
docker build -t cloud-deployment-lab:v1 .
```

Run the Docker container:

```bash
docker run -d --name cloud-lab -p 80:3000 cloud-deployment-lab:v1
```

Verify the running container:

```bash
docker ps
```

## AWS EC2 Deployment

1. Launched an Ubuntu Server 24.04 LTS EC2 instance.
2. Configured the security group to allow inbound HTTP traffic on TCP port 80 and restricted SSH access.
3. Connected to the instance using EC2 Instance Connect.
4. Installed Docker:

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable --now docker
```

5. Cloned the GitHub repository:

```bash
git clone https://github.com/AYUSHGOSWAMI10/cloud-deployment-lab.git
cd cloud-deployment-lab
```

6. Built and ran the Docker image:

```bash
sudo docker build -t cloud-deployment-lab:v1 .
sudo docker run -d --name cloud-lab -p 80:3000 cloud-deployment-lab:v1
```

7. Verified the deployment:

```bash
sudo docker ps
curl http://localhost
```

8. Opened the application using the EC2 public IPv4 address:

`http://YOUR_PUBLIC_IP`

## Troubleshooting

| Potential issue | Resolution |
|---|---|
| Docker permission denied | Use `sudo` with Docker commands |
| Application inaccessible from browser | Verify inbound TCP port 80 is allowed in the EC2 security group |
| Container exits unexpectedly | Check logs using `sudo docker logs cloud-lab` |
| Docker image build fails | Verify the Dockerfile and package-lock.json |
| Port already allocated | Stop the conflicting container or process |

No additional deployment issues were reported during testing.

## Deployment Evidence

Add screenshots to an `screenshots/` directory:

- `docker-running.png` — Running Docker container
- `ec2-web-app.png` — Application accessed through EC2 public IP

## Author

**Ayush Goswami**

GitHub: https://github.com/AYUSHGOSWAMI10

## Conclusion

Successfully developed a Node.js web application, containerized it using Docker, stored the source code on GitHub, and deployed it on AWS EC2 for public HTTP access.
