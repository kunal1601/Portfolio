export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  linkedinUrl: string;
  githubUrl: string;
  imageUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'memory-monitor',
    title: 'Automating Memory Usage Monitoring & Alerts',
    description: 'Automated Linux memory monitoring system with Docker containerization and real-time alerts for proactive system management.',
    category: 'Docker',
    linkedinUrl: 'https://www.linkedin.com/pulse/automating-memory-usage-monitoring-alerts-linux-simple-kunal-sharma-aeegc',
    githubUrl: 'https://github.com/kunal1601/memory-usage-monitor-docker',
    imageUrl: '/src/assets/docker-1.png',
    tags: ['Docker', 'Linux', 'Monitoring', 'Alerts']
  },
  {
    id: 'flask-ansible-k8s',
    title: 'Dockerized Flask App Deployed via Ansible on K8s',
    description: 'Complete CI/CD pipeline for Flask application using Docker containers, Ansible automation, and Kubernetes orchestration.',
    category: 'Docker',
    linkedinUrl: 'https://www.linkedin.com/pulse/deployed-dockerized-web-app-using-ansible-playbook-cluster-sharma-66xcc',
    githubUrl: 'https://github.com/kunal1601/web_app-deployment-Ansible-',
    imageUrl: '/src/assets/docker-2.png',
    tags: ['Docker', 'Ansible', 'Kubernetes', 'Flask']
  },
  {
    id: 'ansible-cluster',
    title: 'Ansible Cluster in Docker & K8s',
    description: 'Scalable Ansible cluster deployment using Docker containers and Kubernetes for efficient configuration management.',
    category: 'Ansible',
    linkedinUrl: 'https://www.linkedin.com/pulse/setting-up-ansible-cluster-docker-kubernetes-kunal-sharma-jghgc',
    githubUrl: 'https://github.com/kunal1601/Ansible_cluster-Docker-K8s.git',
    imageUrl: '/src/assets/ansible-1.jpeg',
    tags: ['Ansible', 'Docker', 'Kubernetes', 'Automation']
  },
  {
    id: 'jenkins-k8s',
    title: 'Jenkins Master-Agent Architecture on K8s',
    description: 'Highly available Jenkins setup with master-agent architecture deployed on Kubernetes for scalable CI/CD workflows.',
    category: 'Kubernetes',
    linkedinUrl: 'https://www.linkedin.com/pulse/building-jenkins-master-agent-architecture-kubernetes-kunal-sharma-2ousc',
    githubUrl: 'https://github.com/kunal1601/Jenkins_Master-agent-setup-.git',
    imageUrl: '/src/assets/kubernetes-1.png',
    tags: ['Jenkins', 'Kubernetes', 'CI/CD', 'Architecture']
  },
  {
    id: 'jenkins-docker',
    title: 'Jenkins Master-Agent via Docker',
    description: 'Containerized Jenkins master-agent setup using Docker for efficient and isolated CI/CD pipeline management.',
    category: 'Jenkins',
    linkedinUrl: 'https://www.linkedin.com/pulse/setting-up-jenkins-master-agent-architecture-using-docker-sharma-4e7rc',
    githubUrl: 'https://github.com/kunal1601/Jenkins_Master-agent-setup-.git',
    imageUrl: '/src/assets/docker-3.jpeg',
    tags: ['Jenkins', 'Docker', 'CI/CD', 'Automation']
  },
  {
    id: 'jenkins-cicd',
    title: 'CI/CD Pipeline: Docker Image Build & Push',
    description: 'Automated CI/CD pipeline for building, testing, and pushing Docker images to container registries.',
    category: 'Jenkins',
    linkedinUrl: 'https://www.linkedin.com/posts/kunal1601_jenkins-cicd-activity-7345041317858635776-YEct',
    githubUrl: 'https://lnkd.in/gWADvpt4',
    imageUrl: '/src/assets/jenkins-1.png',
    tags: ['Jenkins', 'Docker', 'CI/CD', 'DevOps']
  },
  {
    id: 'aws-nat-gateway',
    title: 'NAT Gateway for Internet Access in Private Subnets',
    description: 'AWS NAT Gateway implementation to provide secure internet access for instances in private subnets.',
    category: 'AWS',
    linkedinUrl: 'https://www.linkedin.com/pulse/introducing-nat-gateway-provide-internet-access-instances-sharma',
    githubUrl: 'https://github.com/kunal1601/NAT-GW.git',
    imageUrl: '/src/assets/nat-1.jpeg',
    tags: ['AWS', 'Networking', 'NAT Gateway', 'Security']
  },
  {
    id: 'aws-rds-wordpress',
    title: 'WordPress on K8s using AWS RDS (Private DB)',
    description: 'Scalable WordPress deployment on Kubernetes with AWS RDS as a private database backend for enhanced security.',
    category: 'AWS',
    linkedinUrl: 'https://www.linkedin.com/pulse/introducing-aws-rds-launching-wordpress-kubernetes-having-sharma',
    githubUrl: 'https://github.com/kunal1601/AWS_RDS.git',
    imageUrl: '/src/assets/rds-1.png',
    tags: ['AWS', 'RDS', 'Kubernetes', 'WordPress']
  }
];

export const categories = ['All', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Ansible', 'Prometheus'];