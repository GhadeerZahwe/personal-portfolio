# Personal Portfolio Website

Welcome to my **Personal Portfolio**! This is a React-based website showcasing my **projects, skills, certifications, and events attended**. It is hosted on **AWS EC2** and can be accessed at:  
[http://51.20.143.131/](http://51.20.143.131/)

---

## About the Project

- Built using **React** with **React Bootstrap**, **React Icons**, and **Animate.css** for animations.
- Components are organized inside a `components` folder:
  - `NavBar.js` – Responsive navigation with smooth scroll.
  - `Banner.js` – Home section with typing animation.
  - `Skills.js` – Skills slider using `react-multi-carousel`.
  - `Projects.js` & `ProjectCard.js` – Projects section with tabs and hover info.
  - `Contact.js` – Contact form with **NodeMailer** backend.
  - `Footer.js` – Footer with **StayConnected** form (replacing newsletter).
- Animations triggered on screen visibility using **react-on-screen**.
- Custom fonts and styling applied for a modern, smooth appearance.

## AWS Hosting

This project is hosted on an **AWS EC2 instance**, which is a virtual server in the cloud:

- **EC2 (Elastic Compute Cloud)**: A virtual machine that runs your website or application on the internet.  
- **SSH (Secure Shell)**: A secure way to connect to your EC2 server using a terminal, like MobaXterm.  
- **Security Groups**: Acts like a firewall, controlling which network traffic can reach your server.

  **Rules for Security Groups:**  
  - **Inbound (incoming traffic):**  
    - **Port 22 (SSH)** → Allows you to log in to the server remotely.  
    - **Port 80 (HTTP)** → Lets users access your website via a web browser.  
  - **Outbound (outgoing traffic):**  
    - **0.0.0.0/0** → Lets your server send data to any internet address.

## Deployment Steps

1. **Create AWS Account** and log in to the console.
2. Navigate to **EC2** → **Instances (Running)** → **Launch Instances**.
<img width="975" height="575" alt="image" src="https://github.com/user-attachments/assets/aa424d7b-1bd3-4f7a-b781-438de18d5bb9" />
<img width="975" height="589" alt="image" src="https://github.com/user-attachments/assets/77c2cb14-4ace-4b17-b39c-5a6df2f628fa" />
<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/47b5a28c-1a37-401b-829f-38a3290afb82" />

3. Set instance name and tags (e.g., `myserver`). 
<img width="975" height="486" alt="image" src="https://github.com/user-attachments/assets/1c4e39e8-2b68-4b88-8779-cb7e23f33f0f" />

4. Create **Key Pair** (`test-key.pem`, type RSA) → Download the key.  
   - **Type RSA**: Chosen because it is a widely supported and secure encryption algorithm for SSH connections.  
   - **.pem file**: Used because it stores the private key in a format compatible with AWS and SSH clients, allowing secure login to the EC2 instance.
<img width="975" height="471" alt="image" src="https://github.com/user-attachments/assets/97ed8982-187c-4dc1-8f14-0427a369434c" />

5. Configure **Security Group**:
   - Allow inbound **22 (SSH)** and **80 (HTTP)** from `0.0.0.0/0`.
<img width="975" height="363" alt="image" src="https://github.com/user-attachments/assets/ccc522e3-f770-4fe0-a6d8-5f7556c8e067" />
<img width="634" height="163" alt="image" src="https://github.com/user-attachments/assets/c4ff31fc-0add-4df5-82ea-90e478130522" />
<img width="975" height="323" alt="image" src="https://github.com/user-attachments/assets/6d7663d4-2b81-445f-a687-c642d43011b5" />

6. Configure storage: **8 GiB GP3** (sufficient for this project).
<img width="975" height="334" alt="image" src="https://github.com/user-attachments/assets/d59fe27b-a0ed-41be-8bd6-6999e45ada1d" />

7. Launch the instance → note the **public IP** (e.g., `51.20.143.131`).
<img width="963" height="1005" alt="image" src="https://github.com/user-attachments/assets/220ed383-b06b-4b22-b12f-7f95cec84309" />
<img width="975" height="326" alt="image" src="https://github.com/user-attachments/assets/946ffe39-b2d1-494a-896b-ed13de0fdc0a" />
<img width="975" height="232" alt="image" src="https://github.com/user-attachments/assets/c293a96d-3c65-44de-a054-211d82998aa8" />
<img width="975" height="423" alt="image" src="https://github.com/user-attachments/assets/55951845-6e4a-4fca-89be-e550224a8898" />


My public IP is: http://51.20.143.131/  

This is a **Linux server** hosted on AWS EC2. Since it has **no graphical interface (UI)**, you cannot interact with it like a normal desktop. To manage it, you need to connect remotely using **SSH (Secure Shell)**, which provides a secure command-line access.  

To connect via SSH, you need an **SSH client**. We use **MobaXterm** because it is a beginner-friendly terminal for Windows that supports SSH connections and allows you to use `.pem` keys to log in securely.

## Steps to Connect to EC2 via MobaXterm

1. Download and open **MobaXterm (Free Edition)** from [https://mobaxterm.mobatek.net/](https://mobaxterm.mobatek.net/).  
<img width="975" height="556" alt="image" src="https://github.com/user-attachments/assets/244fe996-aefd-4ecb-bafd-6f02e72417f3" />

2. Create a **new SSH session**:
   - **Remote host**: `51.20.143.131`
   - **Username**: `ec2-user`
   - In **Advanced SSH settings**, select your `.pem` key (`test-key.pem`).
<img width="842" height="375" alt="image" src="https://github.com/user-attachments/assets/de8c473c-81a1-45fa-b17e-d55316658c7a" />
<img width="975" height="631" alt="image" src="https://github.com/user-attachments/assets/84b53627-f5b9-4c4d-8085-79a1a91f4ec9" />
<img width="975" height="620" alt="image" src="https://github.com/user-attachments/assets/71b23a99-cd9e-4828-9a65-b026efa973df" />
<img width="975" height="564" alt="image" src="https://github.com/user-attachments/assets/143f1d99-9bda-4a63-8b51-390c4b858bc8" />

3. Open the terminal and connect manually if needed:

```bash
ssh -i /path/to/test-key.pem ec2-user@51.20.143.131
```
4. Switch to root (if required):
```bash
sudo su
```
5. Verify current directory:
```bash
pwd
```
6. Update System & Install Apache Web Server:
- Update your server packages:
```bash
yum update -y       # For Amazon Linux 2
```
- Install Apache:
```bash
yum install httpd -y
```
- Start Apache service:
```bash
service httpd start
```
- Navigate to web server root:
```bash
cd /var/www/html
```
7. Install Node.js and npm (if needed)
- Check Node.js and npm installation:
```bash
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
sudo dnf install -y nodejs
```
- If not installed, install Node.js 18:
```bash
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
sudo dnf install -y nodejs
```
7. Clone the React Project:
- Create project directory:
```bash
cd /var/www
sudo mkdir my-react-app
sudo chown $USER:$USER my-react-app
cd my-react-app
```
- Clone GitHub repository:
```bash
git clone https://github.com/GhadeerZahwe/personal-portfolio.git .
```
8. Install Dependencies & Build Project
- Install Node dependencies:
```bash
npm install
```
- Build the React app:
```bash
npm run build
```
9. Deploy React App to Apache
- Clear default web files and copy build:
```bash
sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/
```
- Set proper permissions:
```bash
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```
- Restart Apache:
```bash
sudo systemctl restart httpd
```
- Verify deployment:
```bash
ls -l /var/www/html
```

=> Visit my website: http://51.20.143.131/

# Project Usage & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/GhadeerZahwe/personal-portfolio.git
cd personal-portfolio
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Run the App Locally
```bash
npm start
```

## Libraries & Packages Used

### Frontend

- **react, react-dom**  
  Core libraries for building and rendering the React application.

- **react-bootstrap, bootstrap**  
  Provides pre-built responsive components and styling for faster UI development.

- **react-bootstrap-icons**  
  Collection of icons compatible with React and Bootstrap for UI elements.

- **react-multi-carousel**  
  Used to create the **Skills slider**, allowing multiple skills to scroll horizontally in a responsive carousel.

- **react-on-screen**  
  Detects when components are visible on the screen to trigger **animations** only when visible.

- **react-mailchimp-subscribe**  
  Handles the **StayConnected / Newsletter** form submission to Mailchimp, allowing users to subscribe asynchronously.
  (Asynchronously means a task runs independently in the background without blocking other tasks, allowing your program to continue working while waiting for it to finish.)

- **animate.css**  
  CSS library providing pre-built animations for smooth **fade-ins, slides, and other effects**.

### Backend (for Contact Form)

- **express**  
  Node.js framework used to create a backend server for handling requests, including the contact form.

- **cors**  
  Enables **Cross-Origin Resource Sharing**, allowing the frontend to communicate securely with the backend.

- **nodemailer**  
  Handles sending emails from the contact form to your email account asynchronously.
